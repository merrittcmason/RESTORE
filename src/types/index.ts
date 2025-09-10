export interface Staff {
  id: number;
  name: string;
  role: string;
  contact: string;
  bio?: string;
}

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  image: string;
  bodyMarkdown: string;
  author: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface SiteUpdate {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'success';
  startDate: string;
  endDate: string;
  active: boolean;
}

export interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
}