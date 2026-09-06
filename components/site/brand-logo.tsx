import Image from 'next/image';

const brands = {
  hawkers: { name: 'Hawkers', file: 'hawkers.svg' },
  civica: { name: 'Cívica Software', file: 'civica.png' },
  capgemini: { name: 'Capgemini', file: 'capgemini.svg' },
  bitec: { name: 'Bitec', file: 'bitec.png' },
  ticarum: { name: 'TICARUM', file: 'ticarum.png' },
  sabic: { name: 'SABIC', file: 'sabic.svg' },
  vilvite: { name: 'VilVite', file: 'vilvite.svg' },
  'universidad-murcia': {
    name: 'Universidad de Murcia',
    file: 'universidad-murcia.png',
  },
  wroclaw: {
    name: 'Wrocław University of Science and Technology',
    file: 'wroclaw.svg',
  },
  'cifp-carlos-iii': { name: 'CIFP Carlos III', file: 'cifp-carlos-iii.svg' },
  datacamp: { name: 'DataCamp', file: 'datacamp.svg' },
  microstrategy: { name: 'MicroStrategy', file: 'microstrategy.svg' },
  oracle: { name: 'Oracle', file: 'oracle.svg' },
  zogic: { name: 'Zogic Studio', file: 'zogic.svg' },
} as const;
export type Brand = keyof typeof brands;
export function BrandLogo({
  brand,
  className = '',
  decorative = false,
}: {
  brand: Brand;
  className?: string;
  decorative?: boolean;
}) {
  const { name, file } = brands[brand];
  return (
    <span
      className={['brand-logo', 'brand-logo--' + brand, className].join(' ')}
    >
      <Image
        src={'/logos/' + file}
        alt={decorative ? '' : name}
        width={160}
        height={64}
      />
    </span>
  );
}
