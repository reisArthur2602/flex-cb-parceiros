import { Button } from "@/components/ui/button";

const cta = {
  heading: "Call to Action",
  description:
    "Lorem ipsum dolor sit amet. Qui provident beatae aut odit repellendus rem officiis dolorum qui quidem ",
  buttons: {
    text: "Call to Action",
    url: "https://www.shadcnblocks.com",
  },
};

export const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="bg-accent/40 flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            <h3>{cta.heading}</h3>
            <p>{cta.description}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button asChild size="lg">
              <a href={cta.buttons.url}>{cta.buttons.text}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
