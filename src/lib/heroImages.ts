import image0mobile from "@/assets/hero-bim-3d-model-mobile.webp";
import image0desktop from "@/assets/hero-bim-3d-model-desktop.webp";
import image0 from "@/assets/hero-bim-3d-model.jpg";
import image1mobile from "@/assets/hero-bim-clash-mobile.webp";
import image1desktop from "@/assets/hero-bim-clash-desktop.webp";
import image1 from "@/assets/hero-bim-clash.jpg";
import image2mobile from "@/assets/hero-bim-mepf-mobile.webp";
import image2desktop from "@/assets/hero-bim-mepf-desktop.webp";
import image2 from "@/assets/hero-bim-mepf.jpg";
import image3mobile from "@/assets/hero-digital-twin-mobile.webp";
import image3desktop from "@/assets/hero-digital-twin-desktop.webp";
import image3 from "@/assets/hero-digital-twin.jpg";
import image4mobile from "@/assets/hero-construction-crane-mobile.webp";
import image4desktop from "@/assets/hero-construction-crane-desktop.webp";
import image4 from "@/assets/hero-construction-crane.jpg";
import image5mobile from "@/assets/hero-construction-site-mobile.webp";
import image5desktop from "@/assets/hero-construction-site-desktop.webp";
import image5 from "@/assets/hero-construction-site.jpg";
import image6mobile from "@/assets/hero-team-collab-mobile.webp";
import image6desktop from "@/assets/hero-team-collab-desktop.webp";
import image6 from "@/assets/hero-team-collab.jpg";
import image7mobile from "@/assets/hero-construction-team-mobile.webp";
import image7desktop from "@/assets/hero-construction-team-desktop.webp";
import image7 from "@/assets/hero-construction-team.jpg";
import image8mobile from "@/assets/wc-projects-bg-mobile.webp";
import image8desktop from "@/assets/wc-projects-bg-desktop.webp";
import image8 from "@/assets/wc-projects-bg.jpg";
import image9mobile from "@/assets/wc-services-bg-mobile.webp";
import image9desktop from "@/assets/wc-services-bg-desktop.webp";
import image9 from "@/assets/wc-services-bg.jpg";
import image10mobile from "@/assets/discipline-architecture-mobile.webp";
import image10desktop from "@/assets/discipline-architecture-desktop.webp";
import image10 from "@/assets/discipline-architecture.jpg";

const sources: Record<string, string> = {
  [image0]: `${image0mobile} 640w, ${image0desktop} 1600w`,
  [image1]: `${image1mobile} 640w, ${image1desktop} 1600w`,
  [image2]: `${image2mobile} 640w, ${image2desktop} 1600w`,
  [image3]: `${image3mobile} 640w, ${image3desktop} 1600w`,
  [image4]: `${image4mobile} 640w, ${image4desktop} 1024w`,
  [image5]: `${image5mobile} 640w, ${image5desktop} 1280w`,
  [image6]: `${image6mobile} 640w, ${image6desktop} 1280w`,
  [image7]: `${image7mobile} 640w, ${image7desktop} 1024w`,
  [image8]: `${image8mobile} 640w, ${image8desktop} 1600w`,
  [image9]: `${image9mobile} 640w, ${image9desktop} 1600w`,
  [image10]: `${image10mobile} 640w, ${image10desktop} 1024w`,
};

export function heroImageSrcSet(src: string): string | undefined {
  return sources[src];
}
