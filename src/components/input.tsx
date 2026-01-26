type InputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ label, name, value, type = "text", onChange }: InputProps) {
  return (
    <div>
      <label className="text-secondary dark:text-slate-200 font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="
            w-full mt-2 px-4 py-2 rounded-md
            border border-gray-300 dark:border-slate-700
            bg-white dark:bg-slate-900
            text-secondary dark:text-slate-100
            placeholder:text-gray-400 dark:placeholder:text-slate-400
            outline-none focus:border-2   focus:border-primary

            transition
          "
      />
    </div>
  );
}
