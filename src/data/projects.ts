export type Project = {
  slug:string; title:string; location:string; year:string; category:string; description:string; image:string;
};

export const projects: Project[] = [
  {slug:"khaneh-sokoot",title:"خانه سکوت",location:"لواسان",year:"۱۴۰۵",category:"مسکونی",description:"خانه‌ای میان سنگ، نور و چشم‌انداز؛ جایی برای آرام شدن مرز میان معماری و طبیعت.",image:"/images/architecture-01.svg"},
  {slug:"khaneh-noor",title:"خانه نور",location:"تهران",year:"۱۴۰۵",category:"مسکونی",description:"روایتی از نور طبیعی که در طول روز شکل فضا را تغییر می‌دهد.",image:"/images/architecture-02.svg"},
  {slug:"khaneh-hayat",title:"خانه حیاط",location:"ارومیه",year:"۱۴۰۴",category:"مسکونی",description:"بازخوانی حیاط ایرانی در مقیاسی معاصر و آرام.",image:"/images/architecture-03.svg"},
  {slug:"pavilion-baad",title:"پاویون باد",location:"کردستان",year:"۱۴۰۴",category:"پاویون",description:"ساختاری سبک که حرکت باد و سایه را به بخشی از تجربه فضا تبدیل می‌کند.",image:"/images/architecture-04.svg"},
  {slug:"khaneh-khat",title:"خانه خط",location:"کرج",year:"۱۴۰۳",category:"مسکونی",description:"ترکیبی از صفحات افقی، نور کنترل‌شده و ارتباط پیوسته با باغ.",image:"/images/architecture-05.svg"},
  {slug:"gallery-kham",title:"گالری خام",location:"تهران",year:"۱۴۰۳",category:"فرهنگی",description:"فضایی برای هنر معاصر با تأکید بر ماده، سکوت و حرکت بازدیدکننده.",image:"/images/architecture-06.svg"}
];
