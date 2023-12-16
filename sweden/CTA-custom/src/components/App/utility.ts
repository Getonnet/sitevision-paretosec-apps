export function makeDarker(hex: string, percent: number = 20): string {
  // Ensure input is a valid hex color
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex color format. Expected format #RRGGBB.");
  }

  // Convert hex to RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Decrease each component by the specified percentage
  r = Math.round((r * (100 - percent)) / 100);
  g = Math.round((g * (100 - percent)) / 100);
  b = Math.round((b * (100 - percent)) / 100);

  // Ensure the values are within the valid range [0, 255]
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert each component back to a two-digit hex value and return the combined hex color
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
