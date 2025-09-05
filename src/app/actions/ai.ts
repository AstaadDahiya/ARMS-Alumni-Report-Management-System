"use server";

import { careerGuidanceChatbot } from '@/ai/flows/ai-career-guidance-chatbot';

export async function getCareerGuidance(query: string) {
  if (!query || query.length < 2) {
    return { error: 'Query is too short.' };
  }
  
  try {
    const { careerGuidanceResponse } = await careerGuidanceChatbot({ studentQuery: query });
    return { response: careerGuidanceResponse };
  } catch (error) {
    console.error("AI career guidance error:", error);
    return { error: 'Failed to get career guidance. Please try again later.' };
  }
}
