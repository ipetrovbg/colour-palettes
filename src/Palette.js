import { useDispatch } from "react-redux";
import { addColour, deletePalette } from "./reducers/palette";

import PaletteHeader from "./PaletteHeader";
import PaletteBody from "./PaletteBody";
import PaletteFooter from "./PaletteFooter";

function Palette({ palette }) {
  const dispatch = useDispatch();
  return (
    <div
      key={palette.name}
      className="text-lg min-w-[350px] w-[350px] snap-always snap-center border border-slate-100 rounded"
    >
      <PaletteHeader
        onDelete={() => {
          dispatch(deletePalette({ paletteId: palette.id }));
        }}
        name={palette.name}
      />
      <PaletteBody palette={palette} />
      <PaletteFooter
        onAddColour={({ name, hex }) => {
          dispatch(
            addColour({
              paletteId: palette.id,
              colour: { name, hex },
            }),
          );
        }}
        id={palette.id}
      />
    </div>
  );
}

export default Palette;
