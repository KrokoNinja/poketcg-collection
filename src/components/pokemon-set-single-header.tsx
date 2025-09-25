"use client";

import { Set } from "@tcgdex/sdk";

interface PokemonSetSingleHeaderProps {
	set: Set;
}

export default function PokemonSetSingleHeader({ set }: PokemonSetSingleHeaderProps) {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">{set.name}</h1>
			<div className="flex flex-row gap-2">
				<span className="text-sm text-gray-500 border-r border-gray-500 pr-2">
					Released on: {new Date(set.releaseDate).toLocaleDateString()}
				</span>
				<span className="text-sm text-gray-500">
					Total cards: {set.cardCount.total}
				</span>
			</div>
		</div>
	);
}
