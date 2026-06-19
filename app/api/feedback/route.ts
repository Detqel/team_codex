import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Feedback from "@/lib/models/Feedback";

export async function POST(req: Request) {
  try {
    const { rating, feedback } = await req.json();

    await connectDB();

    await Feedback.create({
      rating,
      feedback,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to save feedback" },
      { status: 500 }
    );
  }
}