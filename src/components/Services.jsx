// Services.jsx
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function Services() {
  return (
    <section id="services" className="pt-16 px-6 grid justify-center">
      <div className="max-w-7xl">
        <h3 className="text-4xl font-semibold">Services</h3>
        <Divider className="my-6" />
        <section className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="font text-2xl flex gap-2">
              Content Creation
            </CardHeader>
            <CardBody className="tracking-wide text-xl">
              Crafting engaging and original content tailored to your
              brand&apos;s voice and audience, elevating your social media
              presence.
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="font-bold">Content Planning</CardHeader>
            <CardBody className="tracking-wide">
              Strategically planning your content calendar to ensure a
              consistent and impactful online presence that resonates with your
              audience.
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="font-bold">Automation</CardHeader>
            <CardBody className="tracking-wide">
              Implementing efficient automation tools to streamline your social
              media processes, ensuring timely and regular engagement with your
              audience.
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="font-bold">Market Research</CardHeader>
            <CardBody className="tracking-wide">
              Conducting in-depth research including trend analysis, hashtag
              optimization, and keyword searches to keep your content relevant
              and ahead of the curve.
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="font-bold">Copywriting</CardHeader>
            <CardBody className="tracking-wide">
              Producing compelling and persuasive copy that captures your
              brand&apos;s message and encourages audience interaction and
              conversion.
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="font-bold">Analytics</CardHeader>
            <CardBody className="tracking-wide">
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
