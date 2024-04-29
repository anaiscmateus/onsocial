// Testimonials.jsx
import { Divider } from "@nextui-org/react";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  const testimonials  = [
    {
      image: "images/pigeon-logo.jpg",
      author: "Kai Davis",
      source: "The Philly Piegon",
      text:
        "Mateo is the Digital Marketing Manager for our monthly poetry show. Mateo has been a huge asset to our team, freeing up the time of our collective so that we can focus more on creating a show rather than promoting it. Mateo has created clear systems to get our input when needed, keep promotion on schedule and track performance. Tickets are selling out faster and engagement is up. Mateo balances using best practices and experimentation and is always open to feedback. They have brought fresh ideas to our online marketing, while maintaining our brand identity. Mateo is responsive to feedback and holds firm when speaking from a place of expertise.",
    },
    {
      image: "images/rooted-logo.jpg",
      author: "Khyania Adams",
      source: "Rooted Soul",
      text:
        "Mateo has been a gem! They have made working with them seamless andeffortless. They’re super creative when it comes to helping withcreating content and very helpful when there are areas I’m not familiar with. I tell everyone about Mateo and the wonders they’ve done with my brand!",
    },
    {
      image: "images/pentridge-logo.png",
      author: "Jocelyn",
      source: "Pentride Station Pop-up LLC",
      text:
        "Mateo has helped our small business grow by expanding our social network reach and working with us to better define the responsibilities of our Operations Manager role. A specific situation that really stood out for me was Mateo’s response when our city experienced the shooting on South Street on June 5th. Mateo has a great skill at being able to take a thoughtful temperature of our communities feelings and needs, they almost instantaneously reached out to me about creating a post to offer Pentridge Station “as a safe space for reflection, community building and love.” As a small business owner, I often times find myself so busy with weekly business aspects that I miss the opportunity to thoughtfully engage with my community. Mateo steps in when I might not have the capacity to do so and I’m so happy to have them as a part of our team!",
    },
  ];
  return (
    <section id="testimonials" className="py-28 px-6 grid justify-center">
      <h3 className="text-4xl font-semibold text-center">
        Here&lsquo;s what others say about OnSocial...
      </h3>
      <Divider className="my-6" />
      <section className="max-w-7xl grid gap-8">
        <TestimonialCarousel testimonials={testimonials} />
      </section>
    </section>
  );
}

