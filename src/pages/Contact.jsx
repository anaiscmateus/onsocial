// Contact.jsx
import { Link, Input, Textarea, Button } from "@nextui-org/react";

export default function Contact() {
  return (
    <>
      <h2>OnSocial Marketing Solutions Intake Form</h2>
      <p>
        We will reach out to you as soon as possible from{" "}
        <Link href="mailto:onsocialphl@gmail.com">onsocialphl@gmail.com</Link>{" "}
        once filled out.
      </p>

      <form>
        <Input label="Name:" placeholder="Biggie Smalls" type="text" />
        <Input
          label="Email:"
          placeholder="biggiesmalls@gmail.com"
          type="email"
        />
        <Input
          label="Please list the social platform(s) you will need assistance with managing: 
"
          placeholder="Instagram, LinkedIn, Email, etc."
          type="text"
        />
        <Textarea label="In a couple of sentences, what vision do you have for your social presence, and what are your pain points?:" />
        <Input
          label="Please list your budget (per month) for services:"
          placeholder="0.00"
          type="number"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Textarea
          label="Use this space for comments & questions you would like addressed in the initial email:"
        />
      <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
