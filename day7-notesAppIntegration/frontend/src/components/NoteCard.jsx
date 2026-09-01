const NoteCard = ({ title, description, onUpdate, onDelete, note }) => {
  return (
    <div className="w-full max-w-md rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h2 className="text-xl font-bold text-gray-800">📝 {title}</h2>

      <p className="mt-3 text-gray-600">{description}</p>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        <button
          onClick={() => {
            onUpdate(note);
          }}
          className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          Update
        </button>

        <button
          onClick={() => {
            onDelete(note._id);
          }}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
