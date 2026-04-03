import { useQuery } from "@tanstack/react-query";
import { fetchWordPressPageAcf } from "@/lib/wordpress";

export function useWordPressAcf(slug: string) {
  return useQuery({
    queryKey: ["wordpress-page-acf", slug],
    queryFn: () => fetchWordPressPageAcf(slug),
    staleTime: 60_000,
    retry: 1,
  });
}
