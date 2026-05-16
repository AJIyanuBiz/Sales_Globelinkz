import { CTAButton } from "@/components/cta-button";
import Image from "next/image";

export function Navigation() {
  return (
    <nav
      className="sticky top-0 z-10 border-b border-border bg-navy/95 py-4 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <span className="font-display text-2xl tracking-wider text-foreground">
              TCSS
            </span> */}
            <Image
              src="/globelinkz-full.png"
              alt="GlobeLinkz Logo"
              width={60}
              height={60}
              style={{ width: "5%", height: "auto" }}
            />
          </div>
          <CTAButton href="#offer" variant="nav" location="navigation">
            Get Instant Access
          </CTAButton>
        </div>
      </div>
    </nav>
  );
}
