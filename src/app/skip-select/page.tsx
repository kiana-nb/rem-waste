import { Suspense } from "react";
import SkipList from "./_components/skip-list";
import Loading from "./loading";

export default async function SkipsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const { size, onRoad, heavyWaste } = await searchParams;


  return (
    <Suspense key={Math.random()} fallback={<Loading />}>
      <SkipList size={size} onRoad={onRoad} heavyWaste={heavyWaste} />
    </Suspense>
  );
}
