export type Project = {
  slug:string; title:string; location:string; year:string; category:string; description:string; image:string;
};

const unsplash = (id:string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=82`;

export const projects: Project[] = [
  {
    slug:"khaneh-sokoot",
    title:"خانه سکوت",
    location:"لواسان",
    year:"۱۴۰۵",
    category:"مسکونی",
    description:"خانه‌ای میان سنگ، نور و چشم‌انداز؛ جایی برای آرام شدن مرز میان معماری و طبیعت.",
    image:unsplash("photo-1521672108938-ab7a5f000d1f"),
  },
  {
    slug:"khaneh-noor",
    title:"خانه نور",
    location:"تهران",
    year:"۱۴۰۵",
    category:"مسکونی",
    description:"روایتی از نور طبیعی که در طول روز شکل فضا را تغییر می‌دهد.",
    image:unsplash("photo-1495274730908-06727bd78076"),
  },
  {
    slug:"khaneh-hayat",
    title:"خانه حیاط",
    location:"ارومیه",
    year:"۱۴۰۴",
    category:"مسکونی",
    description:"بازخوانی حیاط ایرانی در مقیاسی معاصر و آرام.",
    image:unsplash("photo-1776851629268-c878a7978c61"),
  },
  {
    slug:"pavilion-baad",
    title:"پاویون باد",
    location:"کردستان",
    year:"۱۴۰۴",
    category:"پاویون",
    description:"ساختاری سبک که حرکت باد و سایه را به بخشی از تجربه فضا تبدیل می‌کند.",
    image:unsplash("photo-1757472022971-45fd45d31e1c"),
  },
  {
    slug:"khaneh-khat",
    title:"خانه خط",
    location:"کرج",
    year:"۱۴۰۳",
    category:"مسکونی",
    description:"ترکیبی از صفحات افقی، نور کنترل‌شده و ارتباط پیوسته با باغ.",
    image:unsplash("photo-1773372277975-307bdae8f49e"),
  },
  {
    slug:"gallery-kham",
    title:"گالری خام",
    location:"تهران",
    year:"۱۴۰۳",
    category:"فرهنگی",
    description:"فضایی برای هنر معاصر با تأکید بر ماده، سکوت و حرکت بازدیدکننده.",
    image:unsplash("photo-1767854507654-5852c55b8d2f"),
  }
];

// تصاویر از Unsplash و تحت مجوز Unsplash استفاده می‌شوند.
