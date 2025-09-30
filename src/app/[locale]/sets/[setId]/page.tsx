"use client";
import ContentWrapper from "@/components/content-wrapper";
import PokemonSetDetailHeader from "@/components/pokemon-set-detail-header";
import { use } from "react";
import { assertLocale } from "@/i18n/routing";
import { getSetById } from "@/lib/tcgdex";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import PokemonSetDetailCards from "@/components/pokemon-set-detail-cards";
import { useTcgdex } from "@/lib/context";

interface PokemonSetDetailPageProps {
	params: Promise<{ setId: string }>;
}

export default function PokemonSetDetailPage({ params }: PokemonSetDetailPageProps) {
	const { setId } = use(params);
	const locale = useLocale();
	const tcgdex = useTcgdex();

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
		queryFn: () => getSetById(tcgdex, setId),
	});

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (error || !set) {
		return <div>Error loading set</div>;
	}
	return (
		<ContentWrapper>
			<PokemonSetDetailHeader set={set} />
			<PokemonSetDetailCards setCards={set.cards} />
		</ContentWrapper>
	);
}
