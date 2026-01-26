type SelectProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
};

export default function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="text-secondary dark:text-slate-200 font-semibold">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="
            w-full mt-2 px-4 py-2 rounded-md
            border border-gray-300 dark:border-slate-700
            bg-white dark:bg-slate-900
            text-secondary dark:text-slate-100
            outline-none focus:ring-2 focus:ring-primary
            transition
          "
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
