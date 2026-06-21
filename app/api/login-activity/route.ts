import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import LoginActivity from "@/lib/models/LoginActivity";

export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { message: "Email is required" },
      { status: 400 }
    );
  }

  const activities = await LoginActivity.find({ email })
    .sort({ loginTime: -1 })
    .limit(1);

  return NextResponse.json(activities);
}