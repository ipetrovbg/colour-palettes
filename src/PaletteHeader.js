function PaletteHeader({ name, onDelete }) {
  return (
    <div className="flex justify-between content-center bg-slate-100">
      <h3 className="grow p-2">{name}</h3>
      <button
        onClick={onDelete}
        className="rounded mr-2 min-h-[30px] self-center px-4 text-slate-50"
      >
        ❌
      </button>
    </div>
  );
}

export default PaletteHeader;
