'use server';

/**
 * @fileOverview AI flow to summarize ceramah posts.
 *
 * - summarizeCeramah - A function that generates a short summary of a ceramah post.
 * - SummarizeCeramahInput - The input type for the summarizeCeramah function.
 * - SummarizeCeramahOutput - The return type for the summarizeCeramah function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCeramahInputSchema = z.object({
  ceramahContent: z.string().describe('The content of the ceramah post to summarize.'),
});
export type SummarizeCeramahInput = z.infer<typeof SummarizeCeramahInputSchema>;

const SummarizeCeramahOutputSchema = z.object({
  summary: z.string().describe('A short, one-sentence summary of the ceramah post.'),
});
export type SummarizeCeramahOutput = z.infer<typeof SummarizeCeramahOutputSchema>;

export async function summarizeCeramah(input: SummarizeCeramahInput): Promise<SummarizeCeramahOutput> {
  return summarizeCeramahFlow(input);
}

const summarizeCeramahPrompt = ai.definePrompt({
  name: 'summarizeCeramahPrompt',
  input: {schema: SummarizeCeramahInputSchema},
  output: {schema: SummarizeCeramahOutputSchema},
  prompt: `Summarize the following ceramah content in one sentence:\n\n{{ceramahContent}}`,
});

const summarizeCeramahFlow = ai.defineFlow(
  {
    name: 'summarizeCeramahFlow',
    inputSchema: SummarizeCeramahInputSchema,
    outputSchema: SummarizeCeramahOutputSchema,
  },
  async input => {
    const {output} = await summarizeCeramahPrompt(input);
    return {
      ...output,
    };
  }
);
