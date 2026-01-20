type NotificationItemProps = {
  title: string;
  description: string;
  defaultChecked?: boolean;
};

export function NotificationItem({
  title,
  description,
  defaultChecked = false,
}: NotificationItemProps) {
  return (
    <label
      className="
        flex
        items-center
        justify-between
        gap-4
        border
        rounded-xl
        p-5
        cursor-pointer
        hover:bg-gray-50
        transition
      "
    >
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>

      <input type="checkbox" defaultChecked={defaultChecked} className="h-5 w-5 accent-primary" />
    </label>
  );
}
