import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function SectionContainer({ title, children }: Props) {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        rounded-xl shadow-sm
        p-6 space-y-4
        transition-colors
      "
    >
      <h2 className="text-xl font-bold text-secondary dark:text-slate-100">{title}</h2>

      {children}
    </div>
  );
}
