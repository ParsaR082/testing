import { ImageReveal } from "@/components/animations/ImageReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";

import type { Project } from "@/lib/projects";

type GalleryProps = {
  project: Project;
};

export function Gallery({ project }: GalleryProps) {
  const [heroImage, secondImage, thirdImage] = project.gallery;

  return (
    <section dir="rtl" className="mt-28 md:mt-48">
      <div className="space-y-20 md:space-y-40">
        <ImageReveal className="aspect-[16/9] w-full bg-[#e8e5df] md:aspect-[2/1]">
          <ParallaxImage
            src={heroImage.src}
            alt={heroImage.alt}
            sizes="100vw"
            className="absolute inset-0 h-full w-full"
          />
        </ImageReveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <ImageReveal className="md:col-span-5 md:col-start-2">
            <div className="aspect-[4/5] bg-[#e8e5df]">
              <ParallaxImage
                src={secondImage.src}
                alt={secondImage.alt}
                sizes="(max-width: 768px) 100vw, 42vw"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </ImageReveal>

          <div className="flex items-end md:col-span-4 md:col-start-8 md:pb-10">
            <p className="max-w-[360px] text-[11px] font-normal leading-[1.9] tracking-[-0.005em] text-muted md:text-[12px] md:leading-[1.8]">
              {project.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="flex items-start md:col-span-4 md:col-start-2">
            <div className="max-w-[280px] border-t border-black/10 pt-5">
              <span className="text-[8px] font-medium leading-none tracking-[0.08em] text-muted md:text-[9px] md:tracking-[0.1em]">
                مطالعه فضایی
              </span>

              <p className="mt-5 text-[12px] font-normal leading-[1.9] tracking-[-0.005em] text-foreground/80 md:text-[13px] md:leading-[1.8]">
                {project.concept}
              </p>
            </div>
          </div>

          <ImageReveal
            delay={0.1}
            className="md:col-span-6 md:col-start-7"
          >
            <div className="aspect-square bg-[#e8e5df]">
              <ParallaxImage
                src={thirdImage.src}
                alt={thirdImage.alt}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}