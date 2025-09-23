import { useQuery } from "@tanstack/react-query";
import TCGdex, { SetResume } from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

export default function useDefaultLanguageSetLogo(setId: string | undefined) {
  return useQuery({
    queryKey: ["set", setId],
    enabled: Boolean(setId),
    queryFn: async () => {
      // setId is truthy because of enabled, but narrow type anyway
      if (!setId) return "/no-image-language";

      try {
        const set = await tcgdex.set.get(setId);

        // If SDK returns null/undefined, use fallback
        if (!set) return "/no-image-language";

        // Some SDKs use logo or images.logo; guard both
        const logo = (set as SetResume).logo;

        return typeof logo === "string" && logo.length > 0
          ? logo
          : "/no-image-language";
      } catch {
        // Network/SDK error -> still return a defined value
        return "/no-image-language";
      }
    },
  });
}
