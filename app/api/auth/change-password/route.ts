import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/lib/models/User";

export async function POST(req: Request) {
  try {
    const {
      email,
      currentPassword,
      newPassword,
    } = await req.json();

    console.log("Email:", email);

    await connectDB();

    const user = await User.findOne({ email });

    console.log("User Found:", user);

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const validPassword = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!validPassword) {
      return NextResponse.json(
        {
          message: "Current password is incorrect",
        },
        { status: 401 }
      );
    }

    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    const result = await User.updateOne(
      { email },
      {
        $set: {
          password: hashedPassword,
        },
      }
    );

    console.log("Update Result:", result);

    return NextResponse.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}