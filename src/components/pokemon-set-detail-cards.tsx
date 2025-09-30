import { CardResume } from "@tcgdex/sdk";
import Image from "next/image";
import { Suspense } from "react";
import FadeLoader from "react-spinners/FadeLoader";

interface PokemonSetDetailCardsProps {
	setCards: CardResume[];
}

export default function PokemonSetDetailCards({ setCards }: PokemonSetDetailCardsProps) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
			{setCards.map(card => (
				<div key={card.id} className="border rounded p-2 flex flex-col">
					<Suspense fallback={<FadeLoader />}>
						{card.image ? (
							<Image
								src={`${card.image}/low.webp`}
								alt={card.name}
								width={200}
								height={280}
								className="mb-2 object-contain"
							/>
						) : (
							<Image
								src="/no-image-language.webp"
								alt="No image available"
								width={200}
								height={280}
								className="mb-2 object-contain"
							/>
						)}
					</Suspense>
					<span className="font-bold truncate">{card.name}</span>
					<span className="text-sm text-gray-500">#{card.localId}</span>
				</div>
			))}
		</div>
	);
}
