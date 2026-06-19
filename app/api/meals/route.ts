import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import MealLog from "@/lib/models/MealLog";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const meal = await MealLog.create(body);

    return NextResponse.json(meal, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save meal" },
      { status: 500 }
    );
  }
}