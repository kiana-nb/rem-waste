"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Footer() {
  const searchParams = useSearchParams();
  const skip = searchParams.get("skip");
  return (
    <footer className="border-t flex flex-col gap-4 sm:flex-row justify-between items-center p-4 fixed bottom-0 left-0 right-0 bg-white shaow-lg">
      <div className="flex sm:items-center gap-6">
        <p>skip wastes available in Lowestoft</p>
        <div className={`${skip ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-600"} h-max rounded-full whitespace-nowrap text-sm sm:text-base py-1 px-2 `}>
          {skip ? "1 selected" : "0 selected"}
        </div>
      </div>

      <div className="flex gap-2 items-center max-sm:self-end">
        <button className="flex items-center gap-2 justify-center py-2 px-4 rounded-lg bg-blue-50 text-blue-500 disabled:grayscale">
          <ChevronLeft strokeWidth={1.5} size={16} />
          previous
        </button>
        <button disabled={skip === null} className="flex items-center gap-2 justify-center py-2 px-4 rounded-lg bg-blue-50 text-blue-500 disabled:grayscale">
          next
          <ChevronRight strokeWidth={1.5} size={16} />
        </button>
      </div>
    </footer>
  );
}
