export type ProjectImage = {
  src: string;
  alt: string;
  type?: "wide" | "portrait" | "square";
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  year: string;
  category: string;
  image: string;
  featured?: boolean;
  description: string;
  concept: string;
  area: string;
  status: string;
  gallery: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "desert-house",
    name: "خانه کویر",
    location: "یزد، ایران",
    year: "2026",
    category: "مسکونی",
    image: "/images/projects/project-01.jpg",
    featured: true,
    description:
      "مطالعه‌ای درباره سایه، توده و سکوت که بر پایه رابطه میان زندگی درون خانه و چشم‌انداز پیرامون شکل گرفته است.",
    concept:
      "خانه به‌عنوان مجموعه‌ای از فضاهای محافظت‌شده تصور شده که به‌تدریج به سوی کویر گشوده می‌شوند. توده‌های سنگین حریم خصوصی را شکل می‌دهند، در حالی که خلأهای دقیقاً جانمایی‌شده، نور کنترل‌شده و قاب‌هایی از چشم‌انداز را وارد فضا می‌کنند.",
    area: "420 m²",
    status: "تکمیل‌شده",
    gallery: [
      {
        src: "/images/projects/project-01.jpg",
        alt: "نمای بیرونی خانه کویر",
        type: "wide",
      },
      {
        src: "/images/projects/project-01-detail.jpg",
        alt: "جزئیات معماری خانه کویر",
        type: "portrait",
      },
      {
        src: "/images/projects/project-01-detail.jpg",
        alt: "فضای داخلی خانه کویر",
        type: "square",
      },
    ],
  },

  {
    slug: "courtyard-house",
    name: "خانه حیاط",
    location: "ارومیه، ایران",
    year: "2025",
    category: "مسکونی",
    image: "/images/projects/project-02.jpg",
    description:
      "برداشتی معاصر از حیاط ایرانی که بر پایه نور، حریم خصوصی و گذار تدریجی میان فضای درون و بیرون شکل گرفته است.",
    concept:
      "این پروژه حیاط سنتی را به‌عنوان قلب اجتماعی و محیطی خانه بازتفسیر می‌کند. فضاها پیرامون آن سازمان یافته‌اند تا گفت‌وگویی پیوسته میان سایه، پوشش گیاهی و نور روز شکل بگیرد.",
    area: "360 m²",
    status: "تکمیل‌شده",
    gallery: [
      {
        src: "/images/projects/project-02.jpg",
        alt: "نمای بیرونی خانه حیاط",
        type: "wide",
      },
      {
        src: "/images/projects/project-02-detail.jpg",
        alt: "حیاط خانه حیاط",
        type: "portrait",
      },
      {
        src: "/images/projects/project-02-detail.jpg",
        alt: "فضای داخلی خانه حیاط",
        type: "square",
      },
    ],
  },

  {
    slug: "concrete-residence",
    name: "خانه بتنی",
    location: "تهران، ایران",
    year: "2025",
    category: "مسکونی",
    image: "/images/projects/project-03.jpg",
    description:
      "ترکیبی مسکونی و مینیمال که در آن بتن، نور طبیعی و قاب‌بندی دقیق مناظر، تجربه زندگی در خانه را شکل می‌دهند.",
    concept:
      "معماری به رابطه‌ای دقیق میان سازه، نور و حرکت تقلیل یافته است. بتن زبان مادی پیوسته‌ای ایجاد می‌کند و گشودگی‌ها به‌گونه‌ای جانمایی شده‌اند که شهر را قاب بگیرند، بدون آنکه بر فضای داخلی غلبه کنند.",
    area: "510 m²",
    status: "تکمیل‌شده",
    gallery: [
      {
        src: "/images/projects/project-03.jpg",
        alt: "نمای بیرونی خانه بتنی",
        type: "wide",
      },
      {
        src: "/images/projects/project-03-detail.jpg",
        alt: "جزئیات خانه بتنی",
        type: "portrait",
      },
      {
        src: "/images/projects/project-03-detail.jpg",
        alt: "فضای داخلی خانه بتنی",
        type: "square",
      },
    ],
  },

  {
    slug: "light-house",
    name: "خانه نور",
    location: "تبریز، ایران",
    year: "2024",
    category: "مسکونی",
    image: "/images/projects/project-04.jpg",
    description:
      "کاوشی در این‌که چگونه نور روز می‌تواند به یک ماده معماری تبدیل شود و شخصیت فضا را در طول روز دگرگون کند.",
    concept:
      "در این پروژه نور به‌عنوان عنصری ثانویه در نظر گرفته نشده، بلکه به‌عنوان ماده‌ای سازمان‌دهنده به کار رفته است. گشودگی‌ها، سطوح و مسیرهای حرکتی با دقت جانمایی شده‌اند تا در طول روز، فضاهایی با حال‌وهوای متغیر ایجاد کنند.",
    area: "290 m²",
    status: "تکمیل‌شده",
    gallery: [
      {
        src: "/images/projects/project-04.jpg",
        alt: "نمای بیرونی خانه نور",
        type: "wide",
      },
      {
        src: "/images/projects/project-04-detail.jpg",
        alt: "جزئیات معماری خانه نور",
        type: "portrait",
      },
      {
        src: "/images/projects/project-04-detail.jpg",
        alt: "فضای داخلی خانه نور",
        type: "square",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}