// About.jsx
import { Image, Divider } from "@nextui-org/react";

export default function About() {
  return (
    <section id="about">
      <>
        <h3>About Us</h3>
        <Divider />
        <p>
          OnSocial Marketing Solutions is revolutionizing social media for small
          businesses, taking the weight off of business owners&lsquo; shoulders
          so they can focus on what matters most. The founder of OnSocial is
          Mateo Souada. They are a dynamic social media manager, copywriter, and
          email marketer with four years of experience in their field. Coming
          from an extensive creative writing and social media background, Mateo
          molds their skills into a detailed, well-rounded digital marketing
          package crafted to meet your business goals. They are particularly
          adept at utilizing analytics and trend data to explain complicated
          marketing concepts in an accessible fashion. Using automation tools
          such as Sprout Social, Hootsuite, and Later, as well as Meta Business
          Suite, Mateo can bring your sales goals to fruition by appealing to
          modern digital audiences.
        </p>
      </>
      <>
        <Image
          width={250}
          src="/images/mateo.jpg"
          alt="Mateo the founder of OnSocial Marketing Solutions"
        />
        <p>Mateo Souada // Founder</p>
      </>
    </section>
  );
}
