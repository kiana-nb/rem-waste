"use client";
import useMediaQuery from "@/hooks/use-media-query";
import { CloseButton, Dialog, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";
import { useState } from "react";
import FiltersContent from "./filters-constent";
import { revalidateSkips } from "../_actions/revalidate-skips";

export default function FiltersModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [filters, setFilters] = useQueryStates(
    {
      size: parseAsString.withDefault("any"),
      heavyWaste: parseAsBoolean.withDefault(false),
      onRoad: parseAsBoolean.withDefault(false),
    },
    {
      history: "push",
    }
  );

  const isLargeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="px-4 py-2 rounded-lg border bg-gray-100 flex items-center justify-center gap-2">
        <SlidersHorizontal size={16} strokeWidth={1.5} />
        filters
      </div>

      <AnimatePresence>
        {isOpen && (
          <Dialog static open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            />
            <div className="fixed bottom-0 sm:w-max w-full flex sm:top-0 sm:right-0 sm:items-start items-end sm:justify-end">
              <motion.div
                initial={{
                  opacity: 0,
                  x: isLargeScreen ? 100 : 0,
                  y: isLargeScreen ? 0 : 100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  x: isLargeScreen ? 100 : 0,
                  y: isLargeScreen ? 0 : 100,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-w-md sm:min-w-[400px] w-full space-y-8 bg-white p-4 sm:h-full h-max sm:rounded-none rounded-lg"
              >
                <Header onClose={() => setIsOpen(false)} />
                <FiltersContent filters={filters} setFilters={setFilters} />
                <ApplyButton onClick={() => setIsOpen(false)} />
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}

function Header({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <DialogTitle className="text-lg font-bold flex items-center gap-2">
        <Filter size={20} /> Filters
      </DialogTitle>
      <CloseButton onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <X size={24} />
      </CloseButton>
    </div>
  );
}

function ApplyButton({ onClick }: { onClick: () => void }) {
  const handleClick = async () => {
    onClick();
    await revalidateSkips();
  };
  return (
    <button onClick={handleClick} className="w-full mt-20 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg">
      Apply Filters
    </button>
  );
}
