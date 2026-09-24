import { projects } from "@/data/projects";

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  image: string;
};

export const articles: Article[] = [
  {
    slug: "christian-de-portzamparc",
    category: "تاریخ",
    title: "کریستین دو پورتزامپارک",
    excerpt: "نگاهی به زبان معماری، شهر و فضاهای عمومی در آثار یکی از چهره‌های اثرگذار معماری معاصر.",
    author: "جیمی براون",
    image: projects[0].image,
  },
  {
    slug: "material-and-light",
    category: "ماده",
    title: "ماده، نور و کیفیت سطح",
    excerpt: "چگونه نسبت میان بافت، سایه و نور می‌تواند ادراک یک فضای معماری را تغییر دهد.",
    author: "استودیو معماری",
    image: projects[1].image,
  },
  {
    slug: "open-space",
    category: "طراحی",
    title: "فضای باز و مسیر حرکت",
    excerpt: "خوانش حرکت، مکث و دید در طراحی فضاهای باز معاصر.",
    author: "استودیو معماری",
    image: projects[2].image,
  },
  {
    slug: "digital-craft",
    category: "فناوری",
    title: "ساخت دیجیتال و جزئیات انسانی",
    excerpt: "وقتی ابزارهای ساخت دیجیتال در خدمت منطق ماده و تجربه انسانی قرار می‌گیرند.",
    author: "استودیو معماری",
    image: projects[3].image,
  },
  {
    slug: "light-and-arc",
    category: "نور",
    title: "قوس، سایه و روشنایی",
    excerpt: "بازخوانی رابطه نور و فرم در فضاهای آیینی و آرام.",
    author: "استودیو معماری",
    image: projects[4].image,
  },
  {
    slug: "reading-place",
    category: "مکان",
    title: "معماری از مشاهده آغاز می‌شود",
    excerpt: "چرا شناخت دقیق زمینه، نخستین مرحله هر تصمیم معماری است.",
    author: "استودیو معماری",
    image: projects[5].image,
  },
];
