import { NextRequest, NextResponse } from "next/server";

const ENGAGE_EMAIL_ENDPOINT = "https://engage.credence.africa/api/send-email";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const response = await fetch(ENGAGE_EMAIL_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const text = await response.text();
        const contentType = response.headers.get("content-type") || "application/json";

        return new NextResponse(text, {
            status: response.status,
            headers: { "Content-Type": contentType },
        });
    } catch (error) {
        console.error("Failed to forward registration email:", error);
        return NextResponse.json(
            { error: "Failed to send registration email" },
            { status: 502 }
        );
    }
}
