import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteColour } from "./reducers/palette";
import PaletteColour from "./PaletteColour";

function PaletteBody({ palette }) {
  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();

  return (
    <div
      className={`grid p-2 gap-4 grid-flow-row max-h-[460px] overflow-y-auto`}
    >
      {palette.colors.map((colour, i) => (
        <PaletteColour
          isSelected={selected === i}
          onDelete={() => {
            dispatch(
              deleteColour({ paletteId: palette.id, colourId: selected }),
            );
          }}
          onSelectColour={() => {
            if (selected === i) {
              setSelected(-1);
              return;
            }
            setSelected(i);
          }}
          color={colour}
          key={colour.token + i}
        />
      ))}
    </div>
  );
}

export default PaletteBody;
