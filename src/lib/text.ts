const HEBREW_REGEX = /[\u0590-\u05FF]/;

export function hasHebrew(text: string): boolean {
  return HEBREW_REGEX.test(text);
}
