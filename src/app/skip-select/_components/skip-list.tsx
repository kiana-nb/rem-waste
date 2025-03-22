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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {skips.map((skip) => (
        <SkipCard key={skip.id} {...skip} />
      ))}
    </div>
  );
}
