import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const BgColor = () => {
  const [colorState, setcolorState] = useState<string>("hex");
  const [color, setColor] = useState<string>("#000000");

  function generateRandomHexColor(): void {
    const randomColorInt = Math.floor(Math.random() * 0xffffff);
    let hexColor = randomColorInt.toString(16);
    hexColor = hexColor.padStart(6, "0");

    return setColor(`#${hexColor.toUpperCase()}`);
  }

  function generateRandomRgbColor(): void {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function handleSelection(type?: string): void {
    const currentType = type || colorState;

    if (currentType === "rgb") {
      generateRandomRgbColor();
    } else if (currentType === "hex") {
      generateRandomHexColor();
    }
  }

  //   useEffect(() => {
  //     handleSelection();
  //   }, [colorState]);

  return (
    <div>
      <div className="buttons mx-auto my-1.5 flex w-[70%] justify-center gap-x-3.5">
        <Button
          onClick={() => {
            setcolorState("hex");
            handleSelection("hex");
          }}
          variant="secondary"
          className="px-8 py-4"
        >
          Create HEX Color
        </Button>
        <Button
          onClick={() => {
            setcolorState("rgb");
            handleSelection("rgb");
          }}
          variant="secondary"
          className="px-8 py-4"
        >
          Create RGB Color
        </Button>
        <Button
          onClick={() => handleSelection(colorState)}
          className="px-8 py-4"
        >
          Generate Random Color
        </Button>
      </div>
      <div
        style={{ backgroundColor: color }}
        className="color-canvas text-content mt-10 flex h-96 max-h-96 max-w-full flex-col items-center justify-center gap-2 rounded-2xl text-xl font-semibold text-white"
      >
        <h1>{colorState === "hex" ? "HEX Color" : "RGB Color"}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default BgColor;
