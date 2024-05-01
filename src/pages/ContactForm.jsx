// ContactForm.jsx
import { Link, Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platforms: "",
    vision: "",
    budget: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <p>
        We will reach out to you as soon as possible from{" "}
        <Link href="mailto:onsocialphl@gmail.com">onsocialphl@gmail.com</Link>{" "}
        once filled out.
      </p>
      <form
        name="contact"
        method="POST"
        action="/success"
        className="grid gap-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input
          autoFocus
          type="text"
          name="name"
          label="Name:"
          placeholder="Biggie Smalls"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          label="Email:"
          placeholder="biggiesmalls@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="platforms"
          label="Please list the social platform(s) you will need assistance with managing:"
          placeholder="Instagram, LinkedIn, Email, etc."
          value={formData.platforms}
          onChange={handleChange}
        />
        <Textarea
          label="What vision do you have for your social presence, and what are your pain points?:"
          name="vision"
          value={formData.vision}
          onChange={handleChange}
        />
        <Input
          label="Please list your budget (per month) for services:"
          placeholder="0.00"
          type="number"
          name="budget"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          value={formData.budget}
          onChange={handleChange}
        />
        <Textarea
          label="Use this space for comments & questions you would like addressed in the initial email:"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
        <Button color="primary" type="submit">
          Send
        </Button>
      </form>
    </>
  );
}
