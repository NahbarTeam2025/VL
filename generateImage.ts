import { GoogleGenAI } from "@google/genai";

export async function generateHeroImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A highly professional, cinematic, and modern B2B website hero background image. Showcase a cutting-edge digital product concept. Crucial layout instruction: The entire left side MUST feature clean, dark, out-of-focus negative space. Soft, professional studio lighting, moody corporate atmosphere with subtle neon blue accents. Photorealistic, 16:9, 8k.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
