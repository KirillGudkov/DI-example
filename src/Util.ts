export class Util {
  static shadeColor(color: string, percent: number): string {
    const formattedPercent = percent / 100;
    const f = parseInt(color.slice(1), 16);
    const t = formattedPercent < 0 ? 0 : 255;
    const p = Math.abs(formattedPercent);
    const R = f >> 16;
    const G = f >> 8 & 0x00FF;
    const B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }
}
