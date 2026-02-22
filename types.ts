export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  TOURS = 'tours',
  COMPANY = 'company',
  CONTACT = 'contact',
}