export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  images: {
    col1Image1: string;
    col1Image2: string;
    col2Image: string;
  };
  liveUrl?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}
