// Services.jsx
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import SparklesIcon from "../assets/icons/SparklesIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import BoltIcon from "../assets/icons/BoltIcon";
import ChartIcon from "../assets/icons/ChartIcon";
import DocumentIcon from "../assets/icons/DocumentIcon";
import PieChartIcon from "../assets/icons/PieChartIcon";

export default function Services() {
  return (
    <section id="services" className="pt-16 px-6 grid justify-center">
      <div className="max-w-7xl">
        <h3 className="text-3xl font-semibold">Services</h3>
        <Divider className="my-6" />
        <section className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h4 className="text-2xl">Content Creation</h4>
              <SparklesIcon />
            </CardHeader>
            <CardBody className="tracking-wide text-xl">
              Crafting engaging and original content tailored to your
              brand&apos;s voice and audience, elevating your social media
              presence.
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h4 className="text-2xl">Content Planning</h4>
              <CalendarIcon />
            </CardHeader>
            <CardBody className="tracking-wide text-xl">
              Strategically planning your content calendar to ensure a
              consistent and impactful online presence that resonates with your
              audience.
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h4 className="text-2xl">Automation</h4>
              <BoltIcon />
            </CardHeader>
            <CardBody className="tracking-wide text-xl">
              Implementing efficient automation tools to streamline your social
              media processes, ensuring timely and regular engagement with your
              audience.
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h4 className="text-2xl">Market Research</h4>
              <ChartIcon />
            </CardHeader>
            <CardBody className="tracking-wide text-xl">
              Conducting in-depth research including trend analysis, hashtag
              optimization, and keyword searches to keep your content relevant
              and ahead of the curve.
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h4 className="text-2xl">Copywriting</h4>
              <DocumentIcon />
            </CardHeader>
            <CardBody className="tracking-wide text-xl">
              Producing compelling and persuasive copy that captures your
              brand&apos;s message and encourages audience interaction and
              conversion.
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h4 className="text-2xl">Analytics</h4>
              <PieChartIcon />
            </CardHeader>
            <CardBody className="tracking-wide text-xl">
              Providing detailed analytics to track and measure the performance
              of your social media campaigns, enabling data-driven decisions for
              future strategies.
            </CardBody>
          </Card>
        </section>
      </div>
    </section>
  );
}
