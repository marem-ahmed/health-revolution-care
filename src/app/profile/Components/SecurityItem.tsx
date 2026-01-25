type SecurityItemProps = {
  title: string;
  description: string;
  action: string;
};

export function SecurityItem({ title, description, action }: SecurityItemProps) {
  return (
    <div
      className="
        border border-slate-200 dark:border-slate-700
        rounded-xl p-5
        flex items-center justify-between gap-4
        bg-white dark:bg-slate-800
        hover:bg-gray-50 dark:hover:bg-slate-700
        transition
      "
    >
      <div>
        <h3 className="font-medium text-gray-800 dark:text-slate-100">{title}</h3>

        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">{description}</p>
      </div>

      <button
        className="
          text-primary dark:text-blue-400
          font-medium text-sm
          hover:underline
          whitespace-nowrap
        "
      >
        {action}
      </button>
    </div>
  );
}
