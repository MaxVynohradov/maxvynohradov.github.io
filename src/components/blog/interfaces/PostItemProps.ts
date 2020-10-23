export interface PostItemProps {
  slug: string;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  coverImgSrc: string;
  originalUrl?: string;
  stats: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}
