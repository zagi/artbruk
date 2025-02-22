interface Link {
  name: string;
  href: string;
  isExternal: boolean;
}
interface InternalLink {
  name: string;
  href: string;
}
interface BottomLinks {
  header: string;
  links: Link[];
}
