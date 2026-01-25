import SectionContainer from "../Components/SectionContainer";

export default function ChangePassword() {
  return (
    <SectionContainer title="Change Password">
      <div className="flex flex-col gap-4 max-w-md">
        <input
          type="password"
          placeholder="Current password"
          className="
            w-full rounded-lg
            border border-gray-300 dark:border-slate-700
            bg-white dark:bg-slate-900
            px-4 py-3 text-sm
            text-secondary dark:text-slate-100
            placeholder:text-gray-400 dark:placeholder:text-slate-400
            focus:outline-none
            focus:ring-2 focus:ring-primary/50
            focus:border-primary
            transition
          "
        />

        <input
          type="password"
          placeholder="New password"
          className="
            w-full rounded-lg
            border border-gray-300 dark:border-slate-700
            bg-white dark:bg-slate-900
            px-4 py-3 text-sm
            text-secondary dark:text-slate-100
            placeholder:text-gray-400 dark:placeholder:text-slate-400
            focus:outline-none
            focus:ring-2 focus:ring-primary/50
            focus:border-primary
            transition
          "
        />

        <input
          type="password"
          placeholder="Confirm new password"
          className="
            w-full rounded-lg
            border border-gray-300 dark:border-slate-700
            bg-white dark:bg-slate-900
            px-4 py-3 text-sm
            text-secondary dark:text-slate-100
            placeholder:text-gray-400 dark:placeholder:text-slate-400
            focus:outline-none
            focus:ring-2 focus:ring-primary/50
            focus:border-primary
            transition
          "
        />

        <button
          className="
            w-full bg-primary text-white
            py-3 rounded-lg font-medium
            hover:opacity-90
            active:scale-[0.98]
            transition
          "
        >
          Update Password
        </button>
      </div>
    </SectionContainer>
  );
}
