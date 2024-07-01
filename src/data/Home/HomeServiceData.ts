import { type HomeServiceModule } from "~/components/Modules/Home/HomeServiceModule";

export const HomeServiceData: React.ComponentProps<typeof HomeServiceModule> = {
  subtitle: "Accusamus Et Iust",
  title: "The way we do things in our line of work.",
  content:
    "We are helping client to create WordPress websites with our talented expert.",
  cta: "Read case study",
  services: {
    data: [
      {
        img: "/images/green-bean.png",
        link: "#",
        titlle: "Web UI/UX Design",
        content: "We are helping client to create WordPress websites.",
      },
      {
        img: "/images/cute-flower.png",
        link: "#",
        titlle: "Mobile UI/UX Design",
        content: "We are helping client to create WordPress websites.",
        height: 98,
      },
      {
        img: "/images/yellow-cutie.png",
        link: "#",
        titlle: "Branding Design",
        content: "We are helping client to create WordPress websitess.",
        height: 112,
      },
      {
        img: "/images/hour-g.png",
        link: "#",
        titlle: "Creative Design",
        content: "We are helping client to create WordPress websites.",
        height: 104,
      },
    ],
  },
};
