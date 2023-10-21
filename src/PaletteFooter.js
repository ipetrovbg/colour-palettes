import React, { useState } from "react";
import { DEFAULT_COLOUR } from "./constants";
import TransparentColour from "./TransparentColour";

function PaletteFooter({ onAddColour, id }) {
  const [hex, setHex] = useState(DEFAULT_COLOUR);
  const [name, setName] = useState("");
  const [error, setError] = useState();
  const [hasTransparent, setHasTransparent] = useState(false);
  return (
    <div className="flex flex-col justify-center p-2 bg-slate-100 rounded">
      <div className="flex flex-col gap-2">
        <div className="flex items-center h-[40px] flex-row justify-between gap-2">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id={`transparent-${id}`}
              name="transparent"
              value={hasTransparent}
              onChange={(e) => setHasTransparent(e.target.checked)}
            />
            <label
              for={`transparent-${id}`}
              className="h-[30px] text-sm text-slate-600"
            >
              Transparent
            </label>
          </div>
          {hasTransparent && <TransparentColour />}
          {!hasTransparent && (
            <input
              className="flex-none w-[75px] h-[40px] rounded border"
              type="color"
              onChange={(e) => setHex(e.target.value)}
              value={hex}
            />
          )}
        </div>
        <input
          className={`grow border-2 rounded p-1 text-sm ${
            error && "border-red-700"
          }`}
          type="text"
          value={name}
          required
          placeholder="*Name"
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setError(null);
            } else {
              setError("*Name is required");
            }
            setName(e.target.value);
          }}
        />
      </div>
      {<label className="text-sm min-h-[25px] text-red-700">{error}</label>}
      <button
        onClick={() => {
          if (name.length === 0) {
            setError("*Name is required");
            return;
          }

          onAddColour({ name, hex: hasTransparent ? "" : hex });
          setError(null);
          setName("");
          setHex(DEFAULT_COLOUR);
        }}
        className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-slate-50 rounded"
      >
        ✚
      </button>
    </div>
  );
}

export default PaletteFooter;
