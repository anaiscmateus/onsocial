// About.jsx
import { Image, Divider } from "@nextui-org/react";

export default function About() {
    return (
        <div>
          <div>
            <h3>About Us</h3>
            <Divider />
            <p>
              Unlock the full potential of your brand&apos;s online identity with
              OnSocial Marketing Services, a premier social media marketing agency
              based in the vibrant city of Philadelphia. At the helm is Mateo
              Souada, a seasoned professional with a distinctive skill set that
              encompasses social media management, copywriting, and email marketing.
            </p>
          </div>
          <div>
            <Image width={250} src="/images/mateo.jpg" alt="Mateo the founder of OnSocial Marketing Solutions" />
            <p>Mateo Souada // Founder</p>
          </div>
        </div>
      );
}