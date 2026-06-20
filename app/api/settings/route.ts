import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Settings from "@/lib/models/Settings";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await connectDB();

    await Settings.create(data);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to save settings" },
      { status: 500 }
    );
  }
}