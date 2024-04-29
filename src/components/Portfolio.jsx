// Portfolio.jsx
import PortfolioCarousel from "./PortfolioCarousel";
import { Divider } from "@nextui-org/react";

export default function Portfolio() {
  const data = [
    {
      image: "images/1.png",
    },
    {
      image: "images/2.png",
    },
    {
      image: "images/3.png",
    },
    {
      image: "images/4.png",
    },
    {
      image: "images/5.png",
    },
    {
      image: "images/6.png",
    },
    {
      image: "images/7.png",
    },
    {
      image: "images/8.png",
    },
  ];
  return (
    <section id="portfolio" className="py-28 px-6 flex justify-center">
      <div className="max-w-7xl relative w-full overflow-hidden rounded-lg shadow-md">
      <h3 className="text-4xl font-semibold text-center">Portfolio</h3>
        <Divider className="my-6" />
        <PortfolioCarousel data={data} />
      </div>
    </section>
  );
}
