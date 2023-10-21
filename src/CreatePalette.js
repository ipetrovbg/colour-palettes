import { useDispatch } from "react-redux";
import { createEmptyPalette } from "./reducers/palette";
import React, { useState } from "react";

function CreatePalette() {
  const dispatch = useDispatch();
  const [name, setName] = useState("Default");
  const [error, setError] = useState(null);

  return (
    <div className="bg-slate-100 p-4 min-w-[350px] w-[350px] flex flex-col snap-always snap-center border border-slate-100 rounded">
      <label for="palette" className="pb-2">
        New
      </label>
      <input
        type="text"
        id="palette"
        name="palette"
        required
        value={name}
        className={`border-2 rounded p-1 text-sm ${error && "border-red-700"}`}
        onChange={(e) => {
          setError(
            e.target.value.length === 0 ? "*Palette name is required!" : null,
          );
          setName(e.target.value);
        }}
      />
      {error && <label className="text-red-700">{error}</label>}
      <div className="py-4 flex justify-end">
        <button
          onClick={() => {
            const valid = name.length > 0;
            setError(!valid ? "*Palette name is required!" : null);
            if (!valid) {
              return;
            }
            setName("");
            dispatch(createEmptyPalette({ name }));
          }}
          disabled={error}
          className={`${
            error ? "bg-gray-300" : "bg-indigo-700 hover:bg-indigo-600"
          }  px-4 py-2 text-slate-50 rounded`}
        >
          ✚
        </button>
      </div>
    </div>
  );
}

export default CreatePalette;
