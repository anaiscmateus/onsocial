import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../css/embla.css";
import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Card>
              <CardHeader className="flex gap-3">
                <Avatar src="images/pigeon-logo.jpg" />
                <span>The Philly Pigeon</span>
              </CardHeader>
              <CardBody>
                <p>

                </p>
              </CardBody>
            </Card>
          </div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};
