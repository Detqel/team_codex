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