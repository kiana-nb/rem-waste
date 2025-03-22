"use client";
import { Building2, Clock, House, ShoppingCart, TrafficCone, Trash2 } from "lucide-react";
import { useQueryState } from "nuqs";

export default function SkipCard({ size, id, allowed_on_road, allows_heavy_waste, hire_period_days, price_before_vat, vat }: ISkip) {
  const totalPrice = price_before_vat + (price_before_vat * vat) / 100;
  const [selectedSkip, setSelectedSkip] = useQueryState("skip", { defaultValue: "" });

  return (
    <div
      className={`border rounded-2xl shadow-md p-3 bg-white flex flex-col transition-all gap-4 justify-between w-full ${
        selectedSkip === String(id) && "border-2 border-blue-500"
      }`}
    >
      <h2 className="text-xl font-bold"> {size}-Yard Skip</h2>

      <div className="flex flex-col gap-2">
        <SkipInfo icon={allowed_on_road ? TrafficCone : House} text={allowed_on_road ? "On-Road Placement" : "Private Property"} />
        <SkipInfo icon={allows_heavy_waste ? Building2 : Trash2} text={allows_heavy_waste ? "Heavy Waste" : "Light Waste"} />
      </div>

      <SkipPrice hire_period_days={hire_period_days} totalPrice={totalPrice} />

      {selectedSkip !== String(id) && (
        <button
          onClick={() => setSelectedSkip(String(id))}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <ShoppingCart size={18} /> Select Skip
        </button>
      )}
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

function SkipPrice({ hire_period_days, totalPrice }: { hire_period_days: number; totalPrice: number }) {
  return (
    <div className="flex justify-between border-t pt-3">
      <p className="text-gray-600 flex items-center gap-1">
        <Clock strokeWidth={1.5} size={16} />
        <strong>{hire_period_days} days </strong> hire
      </p>
      <p className="text-sm">
        <span className="text-2xl font-semibold">£{totalPrice.toFixed(2)}</span> (incl. VAT)
      </p>
    </div>
  );
}
