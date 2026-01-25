type ProfileSummaryCardProps = {
  name: string;
  subtitle?: string;
  email?: string;
  avatarText: string;
  welcomeMessage?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function ProfileSummaryCard({
  name,
  subtitle,
  email,
  avatarText,
  welcomeMessage,
  actionLabel = "Edit Profile",
  onAction,
}: ProfileSummaryCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
          {avatarText}
        </div>

        <div>
          <h2 className="text-xl font-bold text-secondary dark:text-slate-100">{name}</h2>

          {subtitle && <p className="text-sm text-accent dark:text-slate-400">{subtitle}</p>}

          {email && <p className="text-sm text-accent dark:text-slate-400">{email}</p>}

          {welcomeMessage && (
            <p className="mt-2 text-secondary dark:text-slate-300">{welcomeMessage}</p>
          )}
        </div>
      </div>

      {actionLabel && (
        <button
          onClick={onAction}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          {actionLabel} →
        </button>
      )}
    </div>
  );
}
