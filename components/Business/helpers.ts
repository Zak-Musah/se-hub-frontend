import { hexToHSL } from "../../utils/hex-to-hsl";

export const categoryColors: any = {
  fashion: {
    color: "#2073d4",
    backGround: hexToHSL("#2073d4", 0.3, 0.93),
    border: hexToHSL("#2073d4", 0.15, 0.85),
  },
  "Enterprise Support": {
    color: "#FFA500",
    backGround: hexToHSL("#FFA500", 0.3, 0.93),
    border: hexToHSL("#FFA500", 0.15, 0.85),
  },
  IT: {
    color: "#00FF00",
    backGround: hexToHSL("#00FF00", 0.3, 0.93),
    border: hexToHSL("#00FF00", 0.15, 0.85),
  },
};

export const style = (selectedTag: Boolean, category: string) => {
  const color: string = categoryColors[category].color;
  const toBorderColor: string = categoryColors[category].border;
  const toBackgroundColor: string = categoryColors[category].backGround;
  const borderColor: string = selectedTag ? color : toBorderColor;
  const border = `1px solid ${borderColor}`;

  return {
    color: selectedTag ? "white" : color,
    backgroundColor: selectedTag ? color : toBackgroundColor,
    border,
    opacity: "100%",
  };
};

export const cardBorderTop = (category: string) => {
  return {
    borderTop: `4px solid ${categoryColors[category].color}`,
  };
};
