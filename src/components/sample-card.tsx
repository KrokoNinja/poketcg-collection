"use client";
import { assertLocale } from "@/i18n/routing";
import { useTcgdex } from "@/lib/context";
import { getCardById } from "@/lib/tcgdex";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function SampleCard() {
	const locale = useLocale();

	try {
		assertLocale(locale);
	} catch {
		notFound();
	}

	const tcgdex = useTcgdex();

	// Example card ID, replace with a valid one as needed
	const cardId = "swsh3-136";

	const {
		data: card,
		isPending,
		error,
	} = useQuery({
		queryKey: ["card", cardId],
		queryFn: () => getCardById(tcgdex, cardId),
	});

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (!card) {
		return <p>Card not found</p>;
	}

	if (error) {
		return <div>Error loading card</div>;
	}

	return (
		<div>
			<p>{card.name}</p>
			<Image
				src={card.getImageURL("low", "webp")}
				alt={card.name}
				width={150}
				height={200}
			/>
		</div>
	);
}
