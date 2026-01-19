import SectionContainer from "../Components/SectionContainer";

export default function ChangePassword() {
  return (
    <SectionContainer title="Change Password">
      <div className="flex flex-col gap-4 max-w-md">
        <input
          type="password"
          placeholder="Current password"
          className="
            w-full
            rounded-lg
            border border-gray-300
            px-4 py-3
            text-sm
            focus:outline-none
            focus:ring-2 focus:ring-primary
            focus:border-primary
            transition
          "
        />

        <input
          type="password"
          placeholder="New password"
          className="
            w-full
            rounded-lg
            border border-gray-300
            px-4 py-3
            text-sm
            focus:outline-none
            focus:ring-2 focus:ring-primary
            focus:border-primary
            transition
          "
        />

        <input
          type="password"
          placeholder="Confirm new password"
          className="
            w-full
            rounded-lg
            border border-gray-300
            px-4 py-3
            text-sm
            focus:outline-none
            focus:ring-2 focus:ring-primary
            focus:border-primary
            transition
          "
        />

        <button
          className="
            w-full
            bg-primary
            text-white
            py-3
            rounded-lg
            font-medium
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
