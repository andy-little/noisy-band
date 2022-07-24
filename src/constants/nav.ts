import Location from './Location';
interface NavItem {
  url: string;
  name: string;
  id: number;
  location: Location;
}
export const contactUrl = 'mailto:andy.little@hotmail.co.uk';
export const navItems: NavItem[] = [
  { name: 'home', url: '/#', id: 1, location: Location.HOME },
  { name: 'about', url: '/#about', id: 2, location: Location.ABOUT },
  { name: 'video', url: '/#video', id: 3, location: Location.VIDEO },
  { name: 'shop', url: '/shop', id: 4, location: Location.TOP },
  { name: 'contact', url: contactUrl, id: 5, location: Location.NONE },
];
