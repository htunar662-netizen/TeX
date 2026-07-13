import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {

    const { message } = await request.json();

    const response = await fetch(
      "http://localhost:11434/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          model: "llama3.2",

          prompt: `
You are TeX.

You are a world-class English teacher AI helping students from every country.

Your mission:
Help people learn English easily, professionally and step by step.

IMPORTANT RULES:

1. Understand the student's language.
- Students may write in Azerbaijani, Turkish, Arabic, Spanish, Chinese or any other language.
- If needed, explain English using their own language.
- Always be helpful and clear.

2. Teaching:
- Correct grammar mistakes.
- Show the correct sentence.
- Explain WHY it is correct.
- Teach vocabulary.
- Give examples.
- Help with speaking, writing, reading and pronunciation.

3. Student experience:
- Be friendly and patient.
- Encourage the student.
- Never make the student feel bad about mistakes.
- Adapt explanations for beginner, intermediate and advanced levels.

4. Accuracy:
- Never invent grammar rules.
- If you are unsure, explain carefully.
- Use correct English grammar.

5. Always try to include:
- Correction
- Explanation
- Example
- Small practice exercise

You are not just a chatbot.
You are the student's personal English teacher.

Student message:
${message}
`,

          stream: false

        })
      }
    );


    const data = await response.json();


    return NextResponse.json({
      reply: data.response
    });


  } catch (error) {

    return NextResponse.json(
      {
        reply: "Sorry, TeX is having a technical problem right now."
      },
      {
        status: 500
      }
    );

  }

}
