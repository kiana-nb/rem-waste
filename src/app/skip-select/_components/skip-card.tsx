"use client";
import { Building2, Clock, House, ShoppingCart, TrafficCone, Trash2 } from "lucide-react";
import Image from "next/image";
import { useQueryState } from "nuqs";

export default function SkipCard({ size, id, allowed_on_road, allows_heavy_waste, hire_period_days, price_before_vat, vat }: ISkip) {
  const totalPrice = price_before_vat + (price_before_vat * vat) / 100;
  const [selectedSkip, setSelectedSkip] = useQueryState("skip", { defaultValue: "" });

  return (
    <div className={`border rounded-2xl shadow-md bg-white flex  transition-all w-full ${selectedSkip === String(id) && "border-2 border-green-500"}`}>
      <div className="aspect-square sm:min-w-[210px] hidden sm:block relative overflow-hidden">
        <Image fill alt="waste-imagge" src="/waste.jpg" className="object-cover rounded-l-2xl" />
      </div>

      <div className="p-3 flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold"> {size}-Yard Skip</h2>
          <div className="flex flex-col gap-1 items-end">
            <p className="sm:text-3xl text-2xl font-semibold">£{totalPrice.toFixed(2)}</p>
            <div className="text-xs w-max rounded-full bg-green-100 text-green-600 p-0.5 px-2 text-center">incl. VAT</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <SkipInfo icon={allowed_on_road ? TrafficCone : House} text={allowed_on_road ? "On-Road Placement" : "Private Property"} />
          <SkipInfo icon={allows_heavy_waste ? Building2 : Trash2} text={allows_heavy_waste ? "Heavy Waste" : "Light Waste"} />
        </div>

        <div className="flex justify-between border-t pt-2 mt-4">
          <p className="text-gray-600 flex items-center gap-1">
            <Clock strokeWidth={1.5} size={16} />
            <strong>{hire_period_days} days </strong> hire
          </p>

          <button
            onClick={() => setSelectedSkip(String(id))}
            className={`${
              selectedSkip !== String(id) ? "visible" : "invisible"
            } bg-green-600 hover:bg-green-700 px-4 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition`}
          >
            <ShoppingCart size={18} /> Select Skip
          </button>
        </div>
      </div>
    </div>
  );
}

function SkipInfo({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="text-gray-500" size={20} />
      <span>{text}</span>
    </div>
  );
}
