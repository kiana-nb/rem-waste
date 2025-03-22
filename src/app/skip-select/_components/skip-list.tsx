import { fetchData } from "@/utils/data-fetch";
import SkipCard from "./skip-card";

interface SkipListProps {
  size?: string;
  onRoad?: string;
  heavyWaste?: string;
}

export default async function SkipList({ size, onRoad, heavyWaste }: SkipListProps) {
  const skips = await fetchData(size, onRoad, heavyWaste);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {skips.map((skip) => (
        <SkipCard key={skip.id} {...skip} />
      ))}
    </div>
  );
}
