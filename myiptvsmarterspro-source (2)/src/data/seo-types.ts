export interface Chunk {
  h3?: string;
  lead: string; // bold direct answer, 80-160 chars
  leadIsBold?: boolean;
  body?: string;
  list?: string[];
  table?: { head: string[]; rows: string[][] };
}
