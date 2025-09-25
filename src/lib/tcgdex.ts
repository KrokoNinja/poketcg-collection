import TCGdex, { SetResume } from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

export default async function useDefaultLanguageSetLogo(setId: string | undefined) {
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
}
