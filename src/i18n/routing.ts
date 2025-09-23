import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "en",

  pathnames: {
    "/search": {
      en: "/search",
      de: "/suche",
    },
    "/collection": {
      en: "/collection",
      de: "/sammlung",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

export function assertLocale(x: string): asserts x is Locale {
  if (!(routing.locales as readonly string[]).includes(x)) {
    throw new Error(`Unsupported locale: ${x}`);
  }
}
