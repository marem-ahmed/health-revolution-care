type RecordItemProps = {
  title: string;
  category: string;
  date: string;
  file: string;
  image: string;
  shared?: string;
};
export function RecordItem({ title, category, date, file, shared, image }: RecordItemProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Image / Icon */}
        <div className="w-14 h-14 rounded-lg bg-white shadow flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div>
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">
            {category} • {file}
          </p>

          {shared && (
            <span className="inline-flex items-center mt-2 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Shared with {shared}
            </span>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="text-sm text-gray-400 whitespace-nowrap">{date}</div>
    </div>
  );
}
