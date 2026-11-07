// Genera la imagen social (Open Graph) de cada idioma antes del build.
import { createElement } from 'react';
import { ImageResponse } from 'next/og.js';
import { readFile, writeFile } from 'node:fs/promises';

const asset = (name) => readFile(new URL(`./assets/${name}`, import.meta.url));
const photo = await asset('david-egea.png');
const fonts = [
  { name: 'Manrope', data: await asset('fonts/Manrope-500.woff'), weight: 500 },
  { name: 'Manrope', data: await asset('fonts/Manrope-700.woff'), weight: 700 },
  {
    name: 'Instrument Serif',
    data: await asset('fonts/Serif-400i.woff'),
    weight: 400,
    style: 'italic',
  },
];

const locales = {
  es: {
    dirs: ['app/(es)', 'app/(es)/privacidad'],
    tagline: 'SOFTWARE · DATOS · IA',
    title: ['Software.', 'Datos.', 'Criterio.'],
    role: 'CTO y cofundador de Zogic Studio · IA & Data Engineer en Hawkers',
    years: 'MÁS DE 10 AÑOS CONECTANDO TECNOLOGÍA Y NEGOCIO',
    place: 'CARTAGENA, ESPAÑA',
    alt: 'David Egea García — CTO y cofundador de Zogic Studio · IA & Data Engineer en Hawkers',
  },
  en: {
    dirs: ['app/(en)/en', 'app/(en)/en/privacy'],
    tagline: 'SOFTWARE · DATA · AI',
    title: ['Software.', 'Data.', 'Sense.'],
    role: 'CTO & Co-founder of Zogic Studio · AI & Data Engineer at Hawkers',
    years: 'OVER 10 YEARS CONNECTING TECHNOLOGY AND BUSINESS',
    place: 'CARTAGENA, SPAIN',
    alt: 'David Egea García — CTO & Co-founder of Zogic Studio · AI & Data Engineer at Hawkers',
  },
};

const element = (tag, style, ...children) =>
  createElement(tag, { style }, ...children);

for (const t of Object.values(locales)) {
  const tree = element(
    'div',
    {
      display: 'flex',
      width: '100%',
      height: '100%',
      background: '#f4f2ed',
      color: '#262923',
      padding: '50px 60px',
      flexDirection: 'column',
      fontFamily: 'Manrope',
      fontWeight: 500,
    },
    element(
      'div',
      {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #d8d9ce',
        paddingBottom: 20,
      },
      element('span', { fontSize: 27, fontWeight: 700 }, 'David Egea García.'),
      element('span', { fontSize: 13, letterSpacing: 2 }, t.tagline),
    ),
    element(
      'div',
      {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 45,
      },
      element(
        'div',
        { display: 'flex', flexDirection: 'column', gap: 20 },
        element(
          'div',
          {
            display: 'flex',
            flexDirection: 'column',
            fontSize: 82,
            letterSpacing: -4,
            lineHeight: 1,
          },
          element('span', {}, t.title[0]),
          element('span', {}, t.title[1]),
          element(
            'span',
            {
              color: '#ad4427',
              fontFamily: 'Instrument Serif',
              fontStyle: 'italic',
              fontSize: 92,
              letterSpacing: -2,
            },
            t.title[2],
          ),
        ),
        element('span', { fontSize: 17, color: '#66695e' }, t.role),
      ),
      createElement('img', {
        src: 'data:image/png;base64,' + photo.toString('base64'),
        alt: '',
        width: 300,
        height: 360,
        style: { objectFit: 'cover', borderRadius: '12px 70px 12px 12px' },
      }),
    ),
    element(
      'div',
      {
        display: 'flex',
        justifyContent: 'space-between',
        background: '#dce5c8',
        borderRadius: 8,
        padding: '14px 20px',
        fontSize: 12,
        letterSpacing: 1,
      },
      element('span', {}, t.years),
      element('span', {}, t.place),
    ),
  );
  const response = new ImageResponse(tree, { width: 1200, height: 630, fonts });
  const png = Buffer.from(await response.arrayBuffer());
  // Una copia por segmento: el openGraph propio de una página interior no
  // hereda la imagen del layout.
  for (const dir of t.dirs) {
    await writeFile(`${dir}/opengraph-image.png`, png);
    await writeFile(`${dir}/opengraph-image.alt.txt`, t.alt);
  }
}
