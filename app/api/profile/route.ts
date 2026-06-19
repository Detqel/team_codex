import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import User from "../../models/user";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const user = await User.create(body);

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Error saving profile" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const user = await User.findOne().sort({ _id: -1 });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Error fetching profile" },
      { status: 500 }
    );
  }
}