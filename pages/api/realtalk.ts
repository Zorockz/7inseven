import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API Route called with method:', req.method);
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);

  if (req.method === "GET") {
    return res.status(200).json({ message: "GET method is allowed. Endpoint is working." });
  }

  if (req.method !== "POST") {
    console.log('Method not allowed, returning 405');
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Initialize OpenAI client inside the handler
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const { input, tone } = req.body;

  if (!input || !tone) {
    return res.status(400).json({ message: "Missing input or tone." });
  }

  const prompt = `
You're an emotionally honest advice expert.

A user is venting, asking for advice, or explaining a personal dilemma. Your job is to give them one piece of clear, real advice — no fluff, no disclaimers, no overexplaining. Your tone should match what they asked for: ${tone}.

Speak like a real person. Avoid saying things like "As an AI..." or "I'm just a language model."

User's message:
"${input}"

Your response:
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an emotionally honest advice expert." },
        { role: "user", content: prompt },
      ],
      temperature: 0.9,
    });

    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) {
      return res.status(500).json({ message: "No response generated." });
    }
    
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI error:", err);
    return res.status(500).json({ message: "Failed to fetch response from GPT." });
  }
} 