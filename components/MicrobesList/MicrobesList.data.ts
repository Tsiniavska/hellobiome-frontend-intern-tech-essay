export type Microbe = {
  id: string;
  name: string;
  type: 'bacteria' | 'fungi';
  abundance: number; // (relative abundance in %)
  role: 'beneficial' | 'neutral' | 'pathogenic';
};

export const MICROBES: Microbe[] = [
  {
    id: '1',
    name: 'Cutibacterium acnes',
    type: 'bacteria',
    abundance: 32,
    role: 'beneficial',
  },
  {
    id: '2',
    name: 'Staphylococcus epidermidis',
    type: 'bacteria',
    abundance: 24,
    role: 'beneficial',
  },
  {
    id: '3',
    name: 'Malassezia globosa',
    type: 'fungi',
    abundance: 18,
    role: 'neutral',
  },
  {
    id: '4',
    name: 'Candida albicans',
    type: 'fungi',
    abundance: 6,
    role: 'pathogenic',
  },
  {
    id: '5',
    name: 'Staphylococcus hominis',
    type: 'bacteria',
    abundance: 8,
    role: 'neutral',
  },
  {
    id: '6',
    name: 'Malassezia furfur',
    type: 'fungi',
    abundance: 12,
    role: 'neutral',
  },
  {
    id: '7',
    name: 'Lactobacillus rhamnosus',
    type: 'bacteria',
    abundance: 14,
    role: 'beneficial',
  },
];
