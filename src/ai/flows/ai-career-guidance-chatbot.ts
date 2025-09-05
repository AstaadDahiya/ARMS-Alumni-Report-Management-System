'use server';
/**
 * @fileOverview An AI career guidance chatbot flow.
 *
 * - careerGuidanceChatbot - A function that provides career guidance to students based on alumni data.
 * - CareerGuidanceChatbotInput - The input type for the careerGuidanceChatbot function.
 * - CareerGuidanceChatbotOutput - The return type for the careerGuidanceChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerGuidanceChatbotInputSchema = z.object({
  studentQuery: z
    .string()
    .describe('The query from the student seeking career advice.'),
});
export type CareerGuidanceChatbotInput = z.infer<typeof CareerGuidanceChatbotInputSchema>;

const CareerGuidanceChatbotOutputSchema = z.object({
  careerGuidanceResponse: z
    .string()
    .describe('The career guidance response from the chatbot.'),
});
export type CareerGuidanceChatbotOutput = z.infer<typeof CareerGuidanceChatbotOutputSchema>;

export async function careerGuidanceChatbot(
  input: CareerGuidanceChatbotInput
): Promise<CareerGuidanceChatbotOutput> {
  return careerGuidanceChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerGuidanceChatbotPrompt',
  input: {schema: CareerGuidanceChatbotInputSchema},
  output: {schema: CareerGuidanceChatbotOutputSchema},
  prompt: `You are an AI chatbot that leverages alumni data to provide personalized career guidance to students.

  Based on the student's query, provide relevant career advice.

  Student Query: {{{studentQuery}}}`,
});

const careerGuidanceChatbotFlow = ai.defineFlow(
  {
    name: 'careerGuidanceChatbotFlow',
    inputSchema: CareerGuidanceChatbotInputSchema,
    outputSchema: CareerGuidanceChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
