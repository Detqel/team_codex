import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import User from "../../models/user";

export async function GET() {
  try {
    await connectDB();

    const user = await User.findOne().sort({ _id: -1 });

    console.log("Water Consumed =", user?.waterConsumed);
    console.log("Daily Steps =", user?.dailySteps);
    console.log("Water Goal =", user?.waterGoal);
    console.log("Steps Goal =", user?.stepsGoal);

    return NextResponse.json({
      steps: Number(user?.stepsGoal) || 0,
      water: Number(user?.waterGoal) || 0,
      weight: Number(user?.weight) || 0,

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