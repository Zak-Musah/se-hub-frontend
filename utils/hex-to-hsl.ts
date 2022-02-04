/**
 *
 * Coverts from hex value to hsl
 * Adapted from https://css-tricks.com/converting-color-spaces-in-javascript/
 */

export const hexToHSL = (
  hexValue: string,
  removeSaturationByPercent: number = 0,
  fixedLightness?: number,
): string => {
  // Convert hex to RGB first
  let r = 0;
  let g = 0;
  let b = 0;
  if (hexValue.length == 4) {
    r = Number("0x" + hexValue[1] + hexValue[1]);
    g = Number("0x" + hexValue[2] + hexValue[2]);
    b = Number("0x" + hexValue[3] + hexValue[3]);
  } else if (hexValue.length == 7) {
    r = Number("0x" + hexValue[1] + hexValue[2]);
    g = Number("0x" + hexValue[3] + hexValue[4]);
    b = Number("0x" + hexValue[5] + hexValue[6]);
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * (1 - removeSaturationByPercent) * 100).toFixed(1);
  l = +Math.min((fixedLightness ?? l) * 100, 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
};
