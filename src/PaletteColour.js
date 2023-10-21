import { useState } from "react";
import TransparentColour from "./TransparentColour";

function PaletteColour({ color, onSelectColour, isSelected, onDelete }) {
  let buttonStyle = {
    background: color.hex ? color.hex : "transparent",
  };
  const hasColor = color.hex.length > 0;

  return (
    <div
      className={`flex rounded text-base min-h-[50px] hover:bg-slate-50 flex-row justify-between content-center ${
        isSelected && "bg-slate-100"
      }`}
      onDoubleClickCapture={() => {
        onSelectColour();
      }}
    >
      <div className="flex flex-col self-center z-0">
        <span className="text-slate-400 text-sm"> {color.hex}</span>
        {!hasColor && <TransparentColour />}
        {hasColor && (
          <button
            className="w-[75px] h-[30px] rounded border-2"
            style={buttonStyle}
            disabled={!hasColor}
            onClick={async () => {
              await navigator.clipboard.writeText(color.hex);
            }}
          />
        )}
      </div>
      {isSelected && (
        <div className="w-full flex justify-center z-10">
          <button
            className="bg-red-800 self-center h-[30px] px-2 w-[100px] rounded text-slate-50"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      )}
      <button
        className="self-center text-slate-700"
        onClick={async () => {
          await navigator.clipboard.writeText(color.token);
        }}
      >
        {color.token}
      </button>
    </div>
  );
}

export default PaletteColour;
