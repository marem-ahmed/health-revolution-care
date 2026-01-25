type InfoItemProps = {
  label: string;
  value: string | number;
  className?: string;
};

export function InfoItem({ label, value, className = "" }: InfoItemProps) {
  return (
    <div
      className={`
        bg-gray-50 dark:bg-slate-700
        rounded-lg p-4
        transition-colors
        ${className}
      `}
    >
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-1">{label}</p>

      <p className="text-base font-medium text-gray-800 dark:text-slate-100">{value}</p>
    </div>
  );
}
