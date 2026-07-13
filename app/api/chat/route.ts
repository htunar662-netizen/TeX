import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply: "API key missing"
      });
    }

    const result = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are TeX, an expert English teacher AI.

Student message:
${message}

Help the student:
- Correct mistakes
- Explain grammar
- Give examples
- Be friendly
- Support any language
                  `
                }
              ]
            }
          ]
        })
      }
    );

    const data = await result.json();

    console.log(data);


    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;


    return NextResponse.json({
      reply:
        reply ||
        "Gemini returned no text. Check API key or model access."
    });


  } catch (error) {

    console.log(error);

    return NextResponse.json({
      reply:
        "Server error. Please try again."
    });
  }
}
