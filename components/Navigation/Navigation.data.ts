export type ListItem = {
  title: string;
  to: string;
};

const LIST: ListItem[] = [
  { title: 'Home', to: '/' },
  { title: 'About Us', to: '/about-us' },
  { title: 'Research', to: '/research' },
  { title: 'Contact', to: '/contact' },
];

export default LIST;
