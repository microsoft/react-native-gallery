//all the background colors we can use. Font is always white
export type CoinBackgroundColor = "lightBlue" | "blue" | "darkBlue" | "teal" | "green" | "darkGreen" | "lightPink" | "pink" | "magenta" | "purple" | "orange" | "lightRed" | "darkRed" | "violet" | "gold" | "burgundy" | "warmGray" | "cyan" | "rust" | "coolGray";

const colors: Record<CoinBackgroundColor, string> = {
  "lightBlue": "#4F6BED",
  "blue": "#0078D4",
  "darkBlue": "#004E8C",
  "teal": "#038387",
  "green": "#498205",
  "darkGreen": "#0B6A0B",
  "lightPink": "#C239B3",
  "pink": "#E3008C",
  "magenta": "#881798",
  "purple": "#5C2E91",
  "orange": "#CA5010",
  "lightRed": "#D13438",
  "darkRed": "#A4262C",
  "violet": "#8764B8",
  "gold": "#986F0B",
  "burgundy": "#750B1C",
  "warmGray": "#7A7574",
  "cyan": "#005B70",
  "rust": "#8E562E",
  "coolGray": "#69797E",
};

export function getBackgroundColorFromName(name: string | undefined | null): string {
  if (!name) {
    return colors["blue"];
  }

  let hashCode = 0;
  for (let iLen: number = name.length - 1; iLen >= 0; iLen--) {
    const ch: number = name.charCodeAt(iLen);
    // tslint:disable-next-line no-magic-numbers
    const shift: number = iLen % 8;
    // tslint:disable-next-line no-bitwise no-magic-numbers
    hashCode ^= (ch << shift) + (ch >> (8 - shift));
  }

  const colorsLength = Object.keys(colors).length;
  return Object.values(colors)[hashCode % colorsLength];
}

export function getBackgroundColorFromColor(color: string): string {
  return colors[color];
}
