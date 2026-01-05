import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { MOCK_PRODUCTS } from "../constants";
import { Product } from "../types";

// Helper to sanitize JSON string from Markdown code blocks
const cleanJsonString = (str: string): string => {
  return str.replace(/```json\n?|\n?```/g, '').trim();
};

export const getStylistRecommendation = async (userPrompt: string): Promise<{ text: string; recommendedIds: string[] }> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found");
    return {
      text: "I'm currently offline and can't access my styling brain. However, feel free to browse our trending items!",
      recommendedIds: []
    };
  }

  const ai = new GoogleGenAI({ apiKey });

  // Create a context-aware system instruction
  const productContext = MOCK_PRODUCTS.map(p => 
    `ID: ${p.id}, Name: ${p.name}, Category: ${p.category}, Type: ${p.type}, Price: $${p.price}, Features: ${p.features.join(', ')}`
  ).join('\n');

  const systemInstruction = `
    You are an expert AI Stylist for NextGen Store. Your goal is to recommend products from our catalog based on the user's needs.
    
    Here is our current product catalog:
    ${productContext}

    When the user asks a question, analyze their request (weather, activity, style).
    Return a JSON response with two fields:
    1. "response": A helpful, enthusiastic, and short advice paragraph (max 3 sentences).
    2. "productIds": An array of product IDs from the catalog that best match the request.

    If no specific products match perfectly, recommend general bestsellers.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            response: {
              type: Type.STRING,
              description: "A helpful, enthusiastic, and short advice paragraph.",
            },
            productIds: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
              description: "List of matching product IDs.",
            },
          },
          required: ["response", "productIds"],
        },
      }
    });

    const responseText = response.text || "{}";
    const parsed = JSON.parse(cleanJsonString(responseText));

    return {
      text: parsed.response || "Here are some top picks for you!",
      recommendedIds: parsed.productIds || []
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I'm having trouble connecting to the styling server right now. Check out these favorites instead!",
      recommendedIds: ['p1', 'p2', 'p3']
    };
  }
};