import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || message.trim() === "") {
      return NextResponse.json({
        reply: "Please write something so I can help you 😊"
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          reply: "AI configuration is missing. Please add Gemini API key."
        },
        {
          status: 500
        }
      );
    }

    const response = await fetch(
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
You are TeX, a professional AI English teacher.

Your mission:
Teach English to students from every country.

Student message:
${message}


Rules:

1. Understand the student's language.
- The student can write in Azerbaijani, Turkish, English or any language.
- Explain using the student's language when helpful.

2. Teaching style:
- Correct mistakes.
- Show the correct sentence.
- Explain why it is correct.
- Teach vocabulary.
- Give examples.
- Help with speaking, writing, reading and pronunciation.

3. Student experience:
- Be friendly and patient.
- Encourage learning.
- Never shame mistakes.
- Adapt for beginner, intermediate and advanced students.

4. Always include:
- Correction (if needed)
- Explanation
- Example
- Small practice task

You are not just a chatbot.
You are a personal English teacher.
                  `
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
  console.log("GEMINI ERROR RESPONSE:");
  console.log(JSON.stringify(data, null, 2));

  return NextResponse.json(
    {
      reply: JSON.stringify(data)
    },
    {
      status: 500
    }
  );
}

    return NextResponse.json({
      reply
    });
  } catch (error) {
    console.error("TeX AI Error:", error);

    return NextResponse.json(
      {
        reply:
          "Sorry, TeX is having a technical problem right now."
      },
      {
        status: 500
      }
    );
  }
}
