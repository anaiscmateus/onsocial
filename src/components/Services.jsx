// Services.jsx
import { Divider, Accordion, AccordionItem } from "@nextui-org/react";
import SparklesIcon from "../assets/icons/SparklesIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import BoltIcon from "../assets/icons/BoltIcon";
import ChartIcon from "../assets/icons/ChartIcon";
import DocumentIcon from "../assets/icons/DocumentIcon";
import PieChartIcon from "../assets/icons/PieChartIcon";
import ScrollAnimation from "react-animate-on-scroll";

export default function Services() {
  return (
    <ScrollAnimation animateIn="animate__fadeIn">
      <section id="services" className="py-28 px-6 grid justify-center">
        <div className="grid max-w-7xl">
          <h3 className="text-4xl font-semibold text-center">Services</h3>
          <Divider className="my-6" />
          <p className="mb-5 text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            ducimus et expedita voluptatibus aperiam, consequuntur eligendi
            adipisci fugit inventore. Est provident hic illum ipsa rem
            laudantium facere omnis qui velit.
          </p>

          <Accordion className="px-0">
            <AccordionItem
              key="sparkles"
              aria-label="Sparkles"
              startContent={<SparklesIcon />}
              title="Content Creation"
            >
              <p className="tracking-wide">
                Crafting engaging and original content tailored to your
                brand&apos;s voice and audience, elevating your social media
                presence.
              </p>
            </AccordionItem>
            <AccordionItem
              key="calendar"
              aria-label="Calendar"
              startContent={<CalendarIcon />}
              title="Content Planning"
            >
              <p className="tracking-wide">
                Strategically planning your content calendar to ensure a
                consistent and impactful online presence that resonates with
                your audience.
              </p>
            </AccordionItem>
            <AccordionItem
              key="bolt"
              aria-label="Bolt"
              startContent={<BoltIcon />}
              title="Automation"
            >
              <p className="tracking-wide">
                Implementing efficient automation tools to streamline your
                social media processes, ensuring timely and regular engagement
                with your audience.
              </p>
            </AccordionItem>
            <AccordionItem
              key="chart"
              aria-label="Chart"
              startContent={<ChartIcon />}
              title="Market Research"
            >
              <p className="tracking-wide">
                Conducting in-depth research including trend analysis, hashtag
                optimization, and keyword searches to keep your content relevant
                and ahead of the curve.
              </p>
            </AccordionItem>
            <AccordionItem
              key="document"
              aria-label="Document"
              startContent={<DocumentIcon />}
              title="Copywriting"
            >
              <p className="tracking-wide">
                Producing compelling and persuasive copy that captures your
                brand&apos;s message and encourages audience interaction and
                conversion.
              </p>
            </AccordionItem>
            <AccordionItem
              key="pie"
              aria-label="Pie"
              startContent={<PieChartIcon />}
              title="Analytics"
            >
              <p className="tracking-wide">
                Providing detailed analytics to track and measure the
                performance of your social media campaigns, enabling data-driven
                decisions for future strategies.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </ScrollAnimation>
  );
}
