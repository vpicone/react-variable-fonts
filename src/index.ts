import { useEffect, useState } from "react";
import * as FontFaceObserver from "fontfaceobserver";

export type variationObject = {
  [axis: string]: number;
};

export type variationSettings = variationObject | "normal";

function useVariableFont(
  fontFamily: string,
  initialSettings: variationSettings = "normal"
): [React.CSSProperties, (value: variationSettings | "normal") => void] {
  const [variationState, setVariationState] = useState(
    initialSettings === "normal" ? {} : initialSettings
  );
  useEffect(
    () => {
      const font = new FontFaceObserver(fontFamily);
      font.load().catch(UseVariableFontError => {
        console.error(
          `There was an issue loading a variable font...
          font-family: ${fontFamily}
          error: ${UseVariableFontError}`
        );
      });
    },
    [fontFamily]
  );

  const getVariationSettingString = () => {
    const entries = Object.entries(variationState);
    if (!entries.length) {
      return "normal";
    } else {
      return entries.map(([axis, value]) => `'${axis}' ${value}`).join(", ");
    }
  };

  const updateVariationState = (newState: variationSettings) => {
    if (newState == "normal") {
      setVariationState({});
    } else {
      setVariationState({ ...variationState, ...newState });
    }
  };

  const style = {
    fontFamily,
    fontVariationSettings: getVariationSettingString()
  };

  return [style, updateVariationState];
}

export default useVariableFont;
