type SecurityItemProps = {
  title: string;
  description: string;
  action: string;
};

export function SecurityItem({ title, description, action }: SecurityItemProps) {
  return (
    <div
      className="
        border
        rounded-xl
        p-5
        flex
        items-center
        justify-between
        gap-4
        hover:bg-gray-50
        transition
      "
    >
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>

      <button
        className="
          text-primary
          font-medium
          text-sm
          hover:underline
          whitespace-nowrap
        "
      >
        {action}
      </button>
    </div>
  );
}
