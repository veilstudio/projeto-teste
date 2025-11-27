import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the Gemini client safely
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

/**
 * Uses Gemini to refine a user's rough input into a professional business inquiry.
 */
export const refineMessageWithAI = async (roughInput: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key missing. Returning original input.");
    return roughInput;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Transforme o seguinte rascunho em uma mensagem de contato comercial formal e polida, em português de Portugal. Mantenha o tom profissional e objetivo.
      
      Rascunho: "${roughInput}"
      
      Retorne apenas a mensagem reescrita, sem introduções ou explicações.`,
    });

    return response.text || roughInput;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    return roughInput;
  }
};