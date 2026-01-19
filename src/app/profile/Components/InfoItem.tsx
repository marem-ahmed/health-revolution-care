type InfoItemProps = {
  label: string;
  value: string | number;
  className?: string;
};
export function InfoItem({ label, value, className = "" }: InfoItemProps) {
  return (
    <div className={`bg-gray-50 rounded-lg p-4 ${className}`}>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-base font-medium text-gray-800">{value}</p>
    </div>
  );
}
