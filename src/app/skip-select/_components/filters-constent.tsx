import { PropsWithChildren } from "react";

interface IFilter {
  size: string | null;
  heavyWaste: boolean;
  onRoad: boolean;
}

interface FilterConstentProps {
  filters: IFilter;
  setFilters: (filters: IFilter) => void;
}

interface SelectButtonProps {
  isSelected: boolean;
  onClick: () => void;
}


export default function FiltersContent({ filters, setFilters }: FilterConstentProps) {
  return (
    <div className="flex flex-col gap-8">
      <FilterOption label="Minimum Skip Size">
        <SelectButton isSelected={filters.size === "any"} onClick={() => setFilters({ ...filters, size: null })}>
          Any
        </SelectButton>
        <SelectButton isSelected={filters.size === "4"} onClick={() => setFilters({ ...filters, size: "4" })}>
          4-Yard
        </SelectButton>
        <SelectButton isSelected={filters.size === "8"} onClick={() => setFilters({ ...filters, size: "8" })}>
          8-Yard
        </SelectButton>
        <SelectButton isSelected={filters.size === "12"} onClick={() => setFilters({ ...filters, size: "12" })}>
          12-Yard
        </SelectButton>
      </FilterOption>

      <FilterOption label="Allows Heavy Waste">
        <SelectButton isSelected={filters.heavyWaste === true} onClick={() => setFilters({ ...filters, heavyWaste: true })}>
          Yes
        </SelectButton>
        <SelectButton isSelected={filters.heavyWaste === false} onClick={() => setFilters({ ...filters, heavyWaste: false })}>
          No
        </SelectButton>
      </FilterOption>

      <FilterOption label="Allowed On Road">
        <SelectButton isSelected={filters.onRoad === true} onClick={() => setFilters({ ...filters, onRoad: true })}>
          Yes
        </SelectButton>
        <SelectButton isSelected={filters.onRoad === false} onClick={() => setFilters({ ...filters, onRoad: false })}>
          No
        </SelectButton>
      </FilterOption>
    </div>
  );
}

function FilterOption({ label, children }: PropsWithChildren<{ label: string }>) {
  return (
    <div className="flex flex-col gap-2">
      <label className="block font-medium mb-1">{label}</label>
      <div className="flex gap-4">{children}</div>
    </div>
  );
}

function SelectButton({ isSelected, onClick, children }: PropsWithChildren<SelectButtonProps>) {
  return (
    <button className={`p-2 rounded-lg w-full whitespace-nowrap ${isSelected ? "bg-blue-600 text-white" : "border"}`} onClick={onClick}>
      {children}
    </button>
  );
}
