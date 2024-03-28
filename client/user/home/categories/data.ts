export interface ICategories {
  label: string;
  src: string;
  total: number;
}

export const CATEGORIES: ICategories[] = [
  {
    src: 'short-sleeve.png',
    label: 'T-Shirts',
    total: 12,
  },
  {
    src: 'long-sleeve.png',
    label: 'Long Sleeve',
    total: 4,
  },
  {
    src: 'sweater.png',
    label: 'Sweater',
    total: 9,
  },
  {
    src: 'hoodie.png',
    label: 'Hoodies',
    total: 8,
  },
  {
    src: 'tanktop.png',
    label: 'Tank Top',
    total: 3,
  },
  {
    src: 'children.png',
    label: 'Children',
    total: 10,
  },
];
