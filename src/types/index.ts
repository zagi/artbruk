export interface Link {
  name: string;
  href: string;
  isExternal: boolean;
}
export interface InternalLink {
  ref: string;
  name: string;
  href: string;
}
export interface BottomLinks {
  header: string;
  links: Link[];
}

export interface Service {
  step: string;
  name: string;
  description: string;
}
export interface FAQ {
  id: string;
  name: string;
  description: string;
}
export interface Testimonial {
  name: string;
  description: string;
  image: string;
  message: string;
}

export interface Stat {
  name: string;
  value: string;
}

export interface ValueItem {
  ref: string;
  name: string;
  description: string;
}

export interface Value extends Array<ValueItem[]> {}
