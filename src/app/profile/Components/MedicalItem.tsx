type MedicalItemProps = {
  label: string;
  value: string | number;
};

export function MedicalItem({ label, value }: MedicalItemProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-base font-medium text-gray-800">{value}</p>
    </div>
  );
}
