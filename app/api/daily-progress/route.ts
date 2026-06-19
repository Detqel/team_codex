import { NextResponse } from "next/server";
<<<<<<< HEAD
import { connectDB } from "@/lib/mongodb";
import User from "@/lib/models/User";
=======
import { connectDB } from "../../lib/mongodb";
import User from "../../models/user";

>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984
export async function GET() {
  try {
    await connectDB();

    const user = await User.findOne().sort({ _id: -1 });

    console.log("Water Consumed =", user?.waterConsumed);
    console.log("Daily Steps =", user?.dailySteps);
    console.log("Water Goal =", user?.waterGoal);
    console.log("Steps Goal =", user?.stepsGoal);
<<<<<<< HEAD
return NextResponse.json({
  steps: Number(user?.dailySteps) || 0,
  water: Number(user?.waterConsumed) || 0,
  weight: Number(user?.weight) || 0,
=======

    return NextResponse.json({
      steps: Number(user?.stepsGoal) || 0,
      water: Number(user?.waterGoal) || 0,
      weight: Number(user?.weight) || 0,
>>>>>>> 1c8632679965e268a07ab93fca4b8da9e4ab9984

      weeklySteps: user?.weeklySteps || {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching daily progress" },
      { status: 500 }
    );
  }
}