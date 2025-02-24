import type { BottomLinks } from '../types';

export const bottomLinks: BottomLinks[] = [
  {
    header: 'Art-Bruk',
    links: [
      {
        name: 'Strona główna',
        href: '/',
        isExternal: false,
      },
      {
        name: 'O Nas',
        href: '/about',
        isExternal: false,
      },
      //   {
      //     name: 'Remonty premium',
      //     href: '/premium-renovations',
      //     isExternal: false,
      //   },
      {
        name: 'Kontakt',
        href: '/contact',
        isExternal: false,
      },
    ],
  },
  {
    header: 'Informacje',
    links: [
      {
        name: 'Polityka Prywatności',
        href: '/privacy',
        isExternal: false,
      },
    ],
  },
];
