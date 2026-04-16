type WordPressAcf = Record<string, unknown>;

interface WordPressPageResponse {
  id: number;
  slug: string;
  acf?: WordPressAcf;
}

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

export function getWordPressApiBase(): string {
  const base = import.meta.env.VITE_WORDPRESS_URL ?? import.meta.env.VITE_WP_API_BASE ?? "";
  return base ? stripTrailingSlash(base) : "";
}

export function cmsEnabled(): boolean {
  return getWordPressApiBase().length > 0;
}

export async function fetchWordPressPageAcf(slug: string): Promise<WordPressAcf | null> {
  const apiBase = getWordPressApiBase();
  if (!apiBase) {
    return null;
  }

  const url = `${apiBase}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_fields=id,slug,acf`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch WordPress page \"${slug}\" (HTTP ${response.status})`);
  }

  const pages = (await response.json()) as WordPressPageResponse[];
  return pages[0]?.acf ?? null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function getAcfString(
  acf: WordPressAcf | null | undefined,
  key: string,
  fallback: string,
): string {
  const value = acf?.[key];
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

export function getAcfStringArray(
  acf: WordPressAcf | null | undefined,
  key: string,
  fallback: string[],
): string[] {
  const value = acf?.[key];
  if (!Array.isArray(value)) {
    return fallback;
  }

  const parsed = value
    .map((entry) => {
      if (typeof entry === "string") {
        return entry.trim();
      }
      if (isRecord(entry) && typeof entry.value === "string") {
        return entry.value.trim();
      }
      return "";
    })
    .filter((entry) => entry.length > 0);

  return parsed.length > 0 ? parsed : fallback;
}

export function getAcfRecordArray<T>(
  acf: WordPressAcf | null | undefined,
  key: string,
  mapper: (item: Record<string, unknown>, index: number) => T,
  fallback: T[],
): T[] {
  const value = acf?.[key];
  if (!Array.isArray(value)) {
    return fallback;
  }

  const parsed = value
    .filter((item): item is Record<string, unknown> => isRecord(item))
    .map(mapper)
    .filter((item) => Boolean(item));

  return parsed.length > 0 ? parsed : fallback;
}

export function asCleanString(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : fallback;
}

export function parseCountValue(value: string): { end: number; suffix: string } {
  const trimmed = value.trim();
  const numeric = Number.parseInt(trimmed.replace(/[^\d]/g, ""), 10);

  if (Number.isNaN(numeric)) {
    return { end: 0, suffix: "" };
  }

  const suffix = trimmed.replace(/[\d\s]/g, "");
  return { end: numeric, suffix };
}

export function getAcfIndexedStringList(
  acf: WordPressAcf | null | undefined,
  keyPrefix: string,
  max: number,
): string[] {
  const source = acf ?? {};
  const items: string[] = [];

  for (let index = 1; index <= max; index += 1) {
    const value = asCleanString(source[`${keyPrefix}_${index}`]);
    if (value.length > 0) {
      items.push(value);
    }
  }

  return items;
}

export function getAcfIndexedRecords(
  acf: WordPressAcf | null | undefined,
  keyPrefix: string,
  fields: string[],
  max: number,
): Array<Record<string, string>> {
  const source = acf ?? {};
  const rows: Array<Record<string, string>> = [];

  for (let index = 1; index <= max; index += 1) {
    const row: Record<string, string> = {};
    for (const field of fields) {
      row[field] = asCleanString(source[`${keyPrefix}_${index}_${field}`]);
    }

    if (fields.some((field) => row[field].length > 0)) {
      rows.push(row);
    }
  }

  return rows;
}
