"use client";

import { Set } from "@tcgdex/sdk";
import PokemonSetImage from "./pokemon-set-image";

interface PokemonSetDetailHeaderProps {
	set: Set;
}

export default function PokemonSetDetailHeader({ set }: PokemonSetDetailHeaderProps) {
	return (
		<div className="flex flex-row items-center justify-between">
			{/* SET INFO */}
			<section className="flex items-center gap-4">
				<PokemonSetImage set={set} />
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
			</section>
			{/* STATS */}
			<section>
				<p>Stats here:</p>
				<p>Collected XY% of XY Cards</p>
			</section>
		</div>
	);
}
