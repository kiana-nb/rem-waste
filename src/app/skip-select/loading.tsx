import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
}

function LoadingCard() {
  return (
    <div className={`border rounded-2xl shadow-md bg-white flex  transition-all w-full`}>
      <div className="aspect-square hidden sm:block bg-gray-50 animate-pulse min-w-[210px] relative overflow-hidden rounded-l-2xl"></div>

      <div className="p-3 flex flex-col justify-between w-full">
        <div className="flex justify-between flex-col">
          <div className="flex justify-between">
            <Skeleton count={2.5} width={200} />
            <Skeleton width={70} />
          </div>
          <Skeleton width={130} />
        </div>

        <div className="flex justify-between border-t pt-2 mt-4">
          <Skeleton width={300} />

          <div>
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
