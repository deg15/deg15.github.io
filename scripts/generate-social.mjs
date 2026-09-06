import { createElement } from 'react';
import { ImageResponse } from 'next/og.js';
import { readFile, writeFile } from 'node:fs/promises';

const photo = await readFile('public/images/david-egea.png');
const element = (tag, style, ...children) =>
  createElement(tag, { style }, ...children);
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
    fontFamily: 'sans-serif',
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
    element('span', { fontSize: 27, fontWeight: 700 }, 'David Egea.'),
    element(
      'span',
      { fontSize: 13, letterSpacing: 2 },
      'SOFTWARE · DATOS · IA',
    ),
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
        element('span', {}, 'Software.'),
        element('span', {}, 'Datos.'),
        element('span', { color: '#ad4427' }, 'Criterio.'),
      ),
      element(
        'span',
        { fontSize: 16, color: '#66695e' },
        'Ingeniero informático · Data Engineer & Analyst en Hawkers',
      ),
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
    element('span', {}, 'MÁS DE 10 AÑOS CONECTANDO TECNOLOGÍA Y NEGOCIO'),
    element('span', {}, 'CARTAGENA, ESPAÑA'),
  ),
);
const response = new ImageResponse(tree, { width: 1200, height: 630 });
await writeFile(
  'app/opengraph-image.png',
  Buffer.from(await response.arrayBuffer()),
);
