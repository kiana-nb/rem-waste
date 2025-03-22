import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh w-full p-4 flex flex-col ">
      <Link
        href="/skip-select"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition"
      >
        go to skip selection page <ArrowRight/>
      </Link>
    </div>
  );
}
