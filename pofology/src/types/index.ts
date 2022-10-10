import { Url } from 'url';

export type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Service = {
  name: string;
  description: string;
  image: string;
};

export type Work = {
  id: number;
  title: string;
  category: string;
  thumbnailUrl: string;
  description?: string;
  images: string[];
  previewUrl: string;
  publishedAt: string;
  featureList: string[];
  attributes: {
    name: string;
    value: string | number;
  }[];
};

export type Post = {
  id: number;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
  imageUrl: string;
  authorName: string;
  content: string;
};

export type Review = {
  author: {
    name: string;
    imageUrl: string;
    designation: string;
    company: string;
  };
  comment: string;
};
