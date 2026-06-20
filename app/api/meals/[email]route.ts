import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import MealLog from "@/lib/models/MealLog";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    await connectDB();

    const meals = await MealLog.find({
      email: params.email,
    });

    return NextResponse.json(meals);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch meals" },
      { status: 500 }
    );
  }
}