import { HomeBlogModule } from "~/components/Modules/Home/HomeBlogModule";

export const HomeBlogData: React.ComponentProps<typeof HomeBlogModule> = {
  title: "My Latest Articles",
  subTitle: "Blog Post",
  blogProps: {
    data: [
      {
        subtitle: `in Design\nOctober 25, 2023`,
        title: "10 Reasons why you should make a physical portfolio",
        body: "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...",
        link: "",
      },
      {
        subtitle: `in Design\nOctober 25, 2023`,
        title: "A Day in the Life: Cool and Exteriors",
        body: "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...",
        link: "",
      },
      {
        subtitle: `in Design\nOctober 25, 2023`,
        title: "Increasing productivity through workplace friends",
        body: "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...",
        link: "",
      },
    ],
  },
};
