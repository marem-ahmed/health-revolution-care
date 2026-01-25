import { InfoItem } from "../Components/InfoItem";

export default function PersonalInfo() {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        rounded-2xl shadow-sm
        p-6 space-y-6
        transition-colors
      "
    >
      <h2 className="text-xl font-semibold text-secondary dark:text-slate-100">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoItem label="Full Name" value="Mariam Ahmed" />
        <InfoItem label="Date of Birth" value="1 May 2003" />
        <InfoItem label="Gender" value="Female" />
        <InfoItem label="Phone" value="+20 109 456 7890" />
        <InfoItem label="Address" value="Nasr City, Alex, Egypt" className="md:col-span-2" />
      </div>

      <button
        className="
          w-full bg-primary text-white
          py-3 rounded-lg font-medium
          hover:opacity-90
          active:scale-[0.98]
          transition
        "
      >
        Edit Information
      </button>
    </div>
  );
}
