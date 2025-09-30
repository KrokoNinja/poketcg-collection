import TCGdex, { SetResume } from "@tcgdex/sdk";

export const getDefaultLanguageSetLogo = async (
	tcgdex: TCGdex,
	setId: string | undefined,
) => {
	tcgdex.setLang("en"); // Ensure we are using a default language

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

export const getSetById = async (tcgdex: TCGdex, setId: string | undefined) => {
	if (!setId) throw new Error("No setId provided");

	try {
		const set = await tcgdex.set.get(setId);
		return set;
	} catch {
		// Network/SDK error -> still return a defined value
		throw new Error("Network or SDK error");
	}
};

export const getCardById = async (tcgdex: TCGdex, cardId: string | undefined) => {
	if (!cardId) throw new Error("No cardId provided");

	try {
		const card = await tcgdex.card.get(cardId);
		return card;
	} catch {
		// Network/SDK error -> still return a defined value
		throw new Error("Network or SDK error");
	}
};
