import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
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
    <div className={`border rounded-2xl shadow-md p-3 bg-white flex flex-col transition-all gap-4 justify-between w-full `}>
      <div className="text-xl font-bold">
        <Skeleton count={2.5} />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Skeleton count={1} />
      </div>

      <div className="flex justify-between border-t pt-3 w-full">
        <Skeleton width={40} />
        <Skeleton width={40} />
      </div>

      <div>
        <Skeleton />
      </div>
    </div>
  );
}
