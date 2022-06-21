import Location from './Location';
interface NavItem {
  url: string;
  name: string;
  id: number;
  location: Location;
}
export const navItems: NavItem[] = [
  { name: 'home', url: '/', id: 1, location: Location.HOME },
  { name: 'about', url: '/', id: 2, location: Location.ABOUT },
  { name: 'video', url: '/', id: 3, location: Location.VIDEO },
  { name: 'shop', url: '/shop', id: 4, location: Location.NONE },
  { name: 'contact', url: '/contact', id: 5, location: Location.NONE },
];
