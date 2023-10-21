import { useSelector } from "react-redux";
import { selectAllPalette } from "./reducers/palette";
import Palette from "./Palette";
import CreatePalette from "./CreatePalette";

function ListPaletts() {
  const palettes = useSelector(selectAllPalette);
  return (
    <>
      <h1 className="text-2xl">Palettes</h1>
      <div className="pt-4">
        <div className="flex gap-4 snap-x snap-mandatory max-w-full overflow-x-auto">
          <CreatePalette />
          {palettes.map((palette) => (
            <Palette palette={palette} key={palette.name + palette.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListPaletts;
