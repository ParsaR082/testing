import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeIntro } from "@/components/home/HomeIntro";
import { StudioStatement } from "@/components/home/StudioStatement";
import { Hero } from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <main
      dir="rtl"
      className="bg-background text-right text-foreground"
    >
      <Hero />
      <HomeIntro />
      <FeaturedProjects />
      <StudioStatement />
    </main>
  );
}