export interface FrontmatterData {
  title: string;
  description: string;
  date: Date;
  coverImgSrc: string;
  coverImgFixed: {
    src: string;
    height: number;
    width: number;
  };
  tags: string[];
}
