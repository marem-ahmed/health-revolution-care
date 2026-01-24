interface Props {
  name: string;
  distance: string;
  price: string;
  reviews: string;
}

export default function HospitalCard({ name, distance, price, reviews }: Props) {
  return (
    <div className="p-5 flex items-center gap-4 hover:bg-gray-50 transition cursor-pointer">
      <div className="w-24 h-16 rounded-xl bg-gray-200" />

      <div className="flex-1">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{distance}</p>
        <p className="text-sm text-yellow-500">★★★★★ ({reviews})</p>
      </div>

      <div className="font-semibold text-blue-600">{price}</div>
    </div>
  );
}
