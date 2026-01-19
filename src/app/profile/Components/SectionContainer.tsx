import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function SectionContainer({ title, children }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-bold text-secondary">{title}</h2>
      {children}
    </div>
  );
}
