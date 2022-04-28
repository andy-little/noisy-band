interface NavItem {
    url: string;
    name: string;
    id: number;
}
export const navItems: NavItem[] = [
    { name: "home", url: "/", id: 1 },
    { name: "about", url: "/about", id: 2 },
    { name: "video", url: "/video", id: 3 },
    { name: "shop", url: "/shop", id: 4 },
    { name: "contact", url: "/contact", id: 5 },
];
