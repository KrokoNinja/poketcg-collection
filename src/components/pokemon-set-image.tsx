import { Skeleton } from "./ui/skeleton";
import { getDefaultLanguageSetLogo } from "@/lib/tcgdex";
import { useQuery } from "@tanstack/react-query";
import { SetResume } from "@tcgdex/sdk";
import Image from "next/image";

interface PokemonSetImageProps {
	set: SetResume;
}

export default function PokemonSetImage({ set }: PokemonSetImageProps) {
	const { data, isPending, isError } = useQuery({
		queryKey: [`setLogo`, set.id],
		queryFn: () => getDefaultLanguageSetLogo(set.id),
		enabled: set.logo === undefined,
	});

	const logoBase = set.logo ?? (isError ? "/no-image-language" : data);

	if (isPending && !set.logo) {
		return (
			<div>
				<Skeleton className="mb-2 h-32 object-contain self-center" />
			</div>
		);
	}

	const src = `${logoBase ?? "/no-image-language"}.webp`;

	return (
		<Image
			src={src}
			alt={set.name}
			className="mb-2 h-32 object-contain self-center"
			width={150}
			height={128}
			loading="lazy"
			priority={false}
		/>
	);
}
