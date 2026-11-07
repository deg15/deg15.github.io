import Image from 'next/image';

// width/height: dimensiones intrínsecas de cada archivo (relación de aspecto).
const brands = {
  hawkers: { name: 'Hawkers', file: 'hawkers.svg', width: 200, height: 16 },
  civica: {
    name: 'Cívica Software',
    file: 'civica.png',
    width: 1543,
    height: 702,
  },
  capgemini: {
    name: 'Capgemini',
    file: 'capgemini.svg',
    width: 285,
    height: 65,
  },
  bitec: { name: 'Bitec', file: 'bitec.png', width: 977, height: 545 },
  ticarum: { name: 'TICARUM', file: 'ticarum.png', width: 400, height: 64 },
  sabic: { name: 'SABIC', file: 'sabic.svg', width: 500, height: 251 },
  vilvite: { name: 'VilVite', file: 'vilvite.svg', width: 401, height: 125 },
  'universidad-murcia': {
    name: 'Universidad de Murcia',
    file: 'universidad-murcia.png',
    width: 220,
    height: 58,
  },
  wroclaw: {
    name: 'Wrocław University of Science and Technology',
    file: 'wroclaw.svg',
    width: 380,
    height: 73,
  },
  'cifp-carlos-iii': {
    name: 'CIFP Carlos III',
    file: 'cifp-carlos-iii.svg',
    width: 279,
    height: 317,
  },
  datacamp: { name: 'DataCamp', file: 'datacamp.svg', width: 173, height: 36 },
  microstrategy: {
    name: 'MicroStrategy',
    file: 'microstrategy.svg',
    width: 109,
    height: 86,
  },
  oracle: { name: 'Oracle', file: 'oracle.svg', width: 136, height: 18 },
  zogic: { name: 'Zogic Studio', file: 'zogic.svg', width: 512, height: 512 },
} as const;
export type Brand = keyof typeof brands;
export const brandName = (brand: Brand) => brands[brand].name;
export function BrandLogo({
  brand,
  className = '',
  decorative = false,
}: {
  brand: Brand;
  className?: string;
  decorative?: boolean;
}) {
  const { name, file, width, height } = brands[brand];
  return (
    <span
      className={['brand-logo', 'brand-logo--' + brand, className].join(' ')}
    >
      <Image
        src={'/logos/' + file}
        alt={decorative ? '' : name}
        width={width}
        height={height}
      />
    </span>
  );
}
