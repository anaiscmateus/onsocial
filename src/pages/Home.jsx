// Home.jsx
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className="grid justify-center">
        <h1 className="text-3xl font-bold underline my-3">
          This is the home page!
        </h1>
        <Button radius="none" className="ml-3">
          Click Me!
        </Button>
      </div>
    </>
  );
}
