// app/api/leads/route.ts (Next.js 13+ App Router)
import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
}

interface ResponseData {
  message: string;
  data?: LeadData;
  klaviyoId?: string;
}

// Klaviyo API configuration
const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY;
const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID;
const KLAVIYO_API_URL = "https://a.klaviyo.com/api/profile-import";

// Helper function to subscribe to Klaviyo list
async function subscribeToKlaviyo(leadData: LeadData): Promise<string | null> {
  if (!KLAVIYO_API_KEY || !KLAVIYO_LIST_ID) {
    console.warn(
      "Klaviyo credentials not configured. Lead will not be synced to Klaviyo.",
    );
    return null;
  }

  try {
    // Method 1: Subscribe via list endpoint
    const subscribeResponse = await fetch(`${KLAVIYO_API_URL}`, {
      method: "POST",
      headers: {
        revision: "2026-04-15",
        accept: "application/vnd.api+json",
        "content-type": "application/vnd.api+json",
        Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
      },
      body: JSON.stringify({
        data: {
          type: "profile",
          attributes: {
            email: leadData.email,
            phone_number: leadData.phoneNumber,
            first_name: leadData.firstName,
            last_name: leadData.lastName || "",
            location: {
              country: leadData.country || "",
            },
            properties: {
              source: "website_form",
              subscribedAt: new Date().toISOString(),
            },
          },
        },
      }),
    });

    if (!subscribeResponse.ok) {
      const errorData = await subscribeResponse.json();
      console.error("Klaviyo subscription error:", errorData);
      throw new Error(
        `Klaviyo subscription failed: ${subscribeResponse.status}`,
      );
    }

    const result = await subscribeResponse.json();
    // console.log("Successfully subscribed to Klaviyo:", result);

    // Return profile ID if available
    return result.data?.id || null;
  } catch (error) {
    console.error("Error subscribing to Klaviyo:", error);
    throw error;
  }
}

// Helper function to add profiles to list
async function trackEventInKlaviyo(ProfileID: string | null): Promise<void> {
  if (!KLAVIYO_API_KEY || !KLAVIYO_LIST_ID || !ProfileID) {
    return;
  }

  try {
    const eventResponse = await fetch(
      `https://a.klaviyo.com/api/lists/${KLAVIYO_LIST_ID}/relationships/profiles`,
      {
        method: "POST",
        headers: {
          revision: "2026-04-15",
          accept: "application/vnd.api+json",
          "content-type": "application/vnd.api+json",
          Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        },
        body: JSON.stringify({ data: [{ type: "profile", id: ProfileID }] }),
      },
    );

    if (!eventResponse.ok) {
      const errorData = await eventResponse.json();
      console.error("Klaviyo event tracking error:", errorData);
    }
  } catch (error) {
    console.error("Error tracking event in Klaviyo:", error);
  }
}

// POST handler
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { email, firstName, lastName, phoneNumber, country } = body;

    // Validate required fields
    if (!email || !firstName || !phoneNumber) {
      return NextResponse.json(
        {
          message: "Email, first name, and phone number are required",
        },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 },
      );
    }

    const leadData: LeadData = {
      email,
      firstName,
      lastName: lastName || "",
      phoneNumber,
      country: country || "",
    };

    // Subscribe to Klaviyo
    let klaviyoId: string | null = null;
    try {
      klaviyoId = await subscribeToKlaviyo(leadData);
    } catch (klaviyoError) {
      console.error("Klaviyo subscription failed:", klaviyoError);
      // Continue even if Klaviyo fails - don't block the response
    }

    // Track event in Klaviyo (fire and forget)
    trackEventInKlaviyo(klaviyoId).catch((err) => {
      console.error("Failed to track event:", err);
    });

    // TODO: Save to your local database
    // Example with Prisma:
    // await prisma.lead.create({
    //   data: {
    //     email,
    //     firstName,
    //     lastName,
    //     phoneNumber,
    //     country,
    //     klaviyoId,
    //   },
    // })

    // TODO: Send confirmation email from your server
    // Example with SendGrid:
    // await sgMail.send({
    //   to: email,
    //   from: "noreply@yoursite.com",
    //   subject: "Welcome!",
    //   html: `<h1>Welcome, ${firstName}!</h1>`,
    // })

    // console.log("New lead submitted and synced to Klaviyo:", leadData);

    return NextResponse.json(
      {
        message: "Lead submitted successfully",
        data: leadData,
        ...(klaviyoId && { klaviyoId }),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
