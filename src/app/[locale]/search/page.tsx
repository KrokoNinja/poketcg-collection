import PokemonSetList from "@/components/pokemon-set-list";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonSetList />
      </Suspense>
    </div>
  );
}
