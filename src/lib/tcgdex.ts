import { Locale } from "@/i18n/routing";
import TCGdex, { SetResume } from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

export const getDefaultLanguageSetLogo = async (setId: string | undefined) => {
	if (!setId) return "/no-image-language";

	try {
		const set = await tcgdex.set.get(setId);

		if (!set) return "/no-image-language";

		const logo = (set as SetResume).logo;

		return typeof logo === "string" && logo.length > 0 ? logo : "/no-image-language";
	} catch {
		// Network/SDK error -> still return a defined value
		return "/no-image-language";
	}
};

export const getSetById = async (locale: Locale, setId: string | undefined) => {
	if (!setId) throw new Error("No setId provided");

	const tcgdex = new TCGdex(locale);

	try {
		const set = await tcgdex.set.get(setId);
		return set;
	} catch {
		// Network/SDK error -> still return a defined value
		throw new Error("Network or SDK error");
	}
};
