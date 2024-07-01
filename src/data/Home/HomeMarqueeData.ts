import { MarqueeAtom } from "~/components/Atoms/MarqueeAtom/MarqueeAtom";
import HomeMarqueeModule from "~/components/Modules/Home/HomeMarqueeModule";

export const HomeMarqueeData: React.ComponentProps<typeof HomeMarqueeModule> = {
  data: ["Creative", "Design", "UX", "Web", "Development"],
};
