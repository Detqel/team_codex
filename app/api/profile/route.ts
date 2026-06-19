import { NextResponse } from "next/server";
<<<<<<< HEAD
import { connectDB } from "@/lib/mongodb";
import User from "@/lib/models/User";
=======
import { connectDB } from "../../lib/mongodb";
import User from "../../models/user";
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

<<<<<<< HEAD
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
=======
    const user = await User.create(body);

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Error saving profile" },
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const user = await User.findOne().sort({ _id: -1 });

    return NextResponse.json(user);
<<<<<<< HEAD
  } catch (error: any) {
    console.error("GET Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
=======
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Error fetching profile" },
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984
      { status: 500 }
    );
  }
}