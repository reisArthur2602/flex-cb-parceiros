import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const hero = {
  badge: "💳 Clube de Descontos Exclusivos",
  heading: "Lorem ipsum dolor sit amet. Qui provident ",
  description:
    "Lorem ipsum dolor sit amet. Qui provident beatae aut odit repellendus rem officiis dolorum qui quidem nihil et voluptatum animi ex amet maiores et enim nesciunt. Est eaque nostrum ea ",
  buttons: {
    primary: {
      text: "Call Action",
      url: "#parceiros",
    },
    secondary: {
      text: "Call Action",
      url: "#assine",
    },
  },
  image: {
    src: "/hero-banner.jpg",
    alt: "Imagem de benefícios do Flex Club mostrando restaurantes, academias e serviços de beleza",
  },
};

export const HeroSection = () => {
  return (
    <section className="section-padding">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {hero.badge && (
              <motion.div
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <Badge variant="outline">
                  {hero.badge}
                  <ArrowUpRight className="ml-2 size-4" />
                </Badge>
              </motion.div>
            )}

            <motion.h1
              className="my-6 text-pretty"
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
            >
              {hero.heading}
            </motion.h1>

            <motion.p
              className="mb-8 max-w-xl"
              variants={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
            >
              {hero.description}
            </motion.p>

            <motion.div
              className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              {hero.buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={hero.buttons.primary.url}>
                    {hero.buttons.primary.text}
                  </a>
                </Button>
              )}
              {hero.buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={hero.buttons.secondary.url}>
                    {hero.buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </motion.div>
          </div>

          {/* Imagem */}
          <motion.img
            src={hero.image.src}
            alt={hero.image.alt}
            className="max-h-96 w-full rounded-md object-cover"
            variants={{
              hidden: { x: 50, opacity: 0 },
              show: { x: 0, opacity: 1 },
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
