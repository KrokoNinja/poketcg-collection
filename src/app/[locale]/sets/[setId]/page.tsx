"use client";
import ContentWrapper from "@/components/content-wrapper";
import PokemonSetSingleHeader from "@/components/pokemon-set-single-header";
import { use } from "react";
import { assertLocale, Locale } from "@/i18n/routing";
import { getSetById } from "@/lib/tcgdex";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

interface PokemonSetSinglePageProps {
	params: Promise<{ setId: string }>;
}

export default function PokemonSetSinglePage({ params }: PokemonSetSinglePageProps) {
	const { setId } = use(params);
	const locale = useLocale();

	try {
		assertLocale(locale);
	} catch {
		notFound();
	}

	const {
		data: set,
		isPending,
		error,
	} = useQuery({
		queryKey: ["getSet", locale, setId],
		queryFn: () => getSetById(locale as Locale, setId),
	});

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (error || !set) {
		return <div>Error loading set</div>;
	}
	return (
		<ContentWrapper>
			<PokemonSetSingleHeader set={set} />
		</ContentWrapper>
	);
}
