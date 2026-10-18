/** Dummy project image (SVG data URI). Replaced when a project sets `img`. */
export const placeholder = (name: string) =>
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#161616"/><g stroke="#262626">${Array.from({ length: 20 }, (_, k) => `<path d="M${k * 40} 0V500M0 ${k * 25}H800"/>`).join("")}</g><rect x="60" y="64" width="680" height="36" fill="#262626"/><rect x="60" y="130" width="410" height="300" fill="#202020"/><rect x="490" y="130" width="250" height="140" fill="#2a2a2a"/><rect x="490" y="290" width="250" height="140" fill="#1e1e1e"/><text x="400" y="260" fill="#808080" font-family="monospace" font-size="16" text-anchor="middle">${name.toUpperCase()}</text></svg>`,
  );
