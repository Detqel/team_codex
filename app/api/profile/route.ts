import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/lib/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    console.log("Received Data:", body);

   const user = await User.findOneAndUpdate(
  {},
  body,
  {
    new: true,
    upsert: true,
  }
);

    return NextResponse.json(
      {
        success: true,
        user,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const user = await User.findOne().sort({ _id: -1 });

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("GET Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}