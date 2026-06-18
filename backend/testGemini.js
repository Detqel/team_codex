require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testGemini() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const result = await model.generateContent(
    "Give ingredients for Chicken Biryani in JSON format only."
  );

  console.log(result.response.text());
}

testGemini();