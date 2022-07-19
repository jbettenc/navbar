interface NavbarItem {
  text: string;
  onClick?: (e: any) => void;
  children?: NavbarItem[];
}
