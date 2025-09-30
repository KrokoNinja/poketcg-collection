"use client";

import { Locale } from "@/i18n/routing";
import TCGdex from "@tcgdex/sdk";
import { createContext, ReactNode, useContext, useMemo } from "react";

const TcgdexContext = createContext<TCGdex | null>(null);

export function TcgdexProvider({
	locale,
	children,
}: {
	locale: Locale;
	children: ReactNode;
}) {
	// Memoize the instance so it only changes when `locale` changes
	const tcgdex = useMemo(() => new TCGdex(locale), [locale]);

	return <TcgdexContext.Provider value={tcgdex}>{children}</TcgdexContext.Provider>;
}

export function useTcgdex() {
	const ctx = useContext(TcgdexContext);
	if (!ctx) throw new Error("useTcgdex must be used within TcgdexProvider");
	return ctx;
}
