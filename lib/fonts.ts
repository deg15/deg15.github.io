import localFont from 'next/font/local';

// Fuentes servidas desde el propio repositorio (licencia OFL en app/fonts/),
// recortadas a latín y latín extendido. El build ya no depende de Google Fonts.
export const manrope = localFont({
  src: '../app/fonts/Manrope.woff2',
  weight: '200 800',
  variable: '--font-manrope',
  display: 'swap',
});
export const instrumentSerif = localFont({
  src: [
    { path: '../app/fonts/Serif-400.woff2', weight: '400', style: 'normal' },
    { path: '../app/fonts/Serif-400i.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});
// Texto pequeño y secundario: no compite por la precarga con el titular.
export const plexMono = localFont({
  src: [
    { path: '../app/fonts/PlexMono-400.woff2', weight: '400', style: 'normal' },
    { path: '../app/fonts/PlexMono-500.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-ibm-mono',
  display: 'swap',
  preload: false,
});
export const fontVariables = `${manrope.variable} ${plexMono.variable} ${instrumentSerif.variable}`;
