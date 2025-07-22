// src/app/actions.ts
'use server';

import { summarizeCeramah, type SummarizeCeramahInput } from '@/ai/flows/summarize-ceramah';

export async function getCeramahSummary(ceramahContent: string): Promise<string> {
  try {
    const input: SummarizeCeramahInput = { ceramahContent };
    const result = await summarizeCeramah(input);
    return result.summary;
  } catch (error) {
    console.error('Error generating summary:', error);
    return 'Could not generate summary at this time.';
  }
}
