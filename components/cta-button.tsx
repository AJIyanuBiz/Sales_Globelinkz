"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { X } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "primary-lg" | "nav";
  className?: string;
  location?: string;
}

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
}

const trackEvent = (
  eventName: string,
  parameters: Record<string, unknown> = {},
) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, parameters);
  } else {
    console.warn(`Meta Pixel: ${eventName} event fired before pixel loaded`);
  }
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  location = "unknown", // default fallback
}: CTAButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const baseStyles =
    "inline-block font-mono font-semibold uppercase tracking-wider text-primary-foreground no-underline transition-all duration-150 bg-gradient-cta";

  const variants = {
    primary:
      "px-10 py-[18px] text-[0.78rem] tracking-[0.12em] shadow-cta hover:-translate-y-0.5 hover:shadow-cta-hover",
    "primary-lg":
      "px-14 py-[22px] text-[0.85rem] tracking-[0.12em] shadow-cta-lg hover:-translate-y-0.5 hover:shadow-cta-lg-hover",
    nav: "px-6 py-2.5 text-[0.68rem] tracking-[0.12em] hover:brightness-110",
  };

  const handleButtonClick = () => {
    // Track CTA Click with location
    trackEvent("LeadCTA", {
      cta_location: location,
      content_name: "CTA Button Clicked",
      button_text: children?.toString().slice(0, 50),
    });

    if (href) {
      window.location.href = href;
    } else {
      // Track modal open
      trackEvent("ViewContent", {
        content_name: "Offer Modal",
        cta_location: location,
      });

      setIsOpen(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Track InitiateCheckout when proceeding to Selar
        trackEvent("InitiateCheckout", {
          cta_location: location,
          value: 15000,
          currency: "NGN",
          content_name: "Offer Purchase",
        });

        setSubmitStatus("success");
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          country: "",
        });

        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus("idle");
          // Redirect to Selar
          window.location.href = `https://selar.com/3371q730k8?add_to_cart=1&email=${encodeURIComponent(formData.email)}&fullname=${encodeURIComponent(formData.firstName)}%20${encodeURIComponent(formData.lastName)}&mobile=${encodeURIComponent(formData.phoneNumber)}`;
        }, 1500);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className={cn(
          baseStyles,
          variants[variant],
          className,
          "cursor-pointer",
        )}
      >
        {children}
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={handleOverlayClick}
          />

          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <div
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {submitStatus !== "success" ? (
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-mono font-bold uppercase tracking-wider text-gray-900 mb-2">
                      Get Started
                    </h2>
                    <p className="text-sm text-gray-600">
                      Tell us about yourself so we can help you better.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Form fields remain the same */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2"
                      >
                        Last Name{" "}
                        <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="+234 000 000 0000"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2"
                      >
                        Country{" "}
                        <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Nigeria"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-mono font-semibold uppercase tracking-wider rounded-lg hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isSubmitting ? "Processing..." : "Proceed to Checkout"}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="mb-4 inline-block">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-mono font-bold uppercase tracking-wider text-gray-900 mb-2">
                    Success!
                  </h3>
                  <p className="text-sm text-gray-600">
                    Redirecting to checkout...
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export function SecondaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-[0.9rem] text-muted-foreground no-underline hover:text-foreground transition-colors",
        className,
      )}
    >
      {children}
    </Link>
  );
}
