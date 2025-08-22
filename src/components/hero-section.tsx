import { ArrowUpRight } from "lucide-react";
import { ImageGrid } from "./images-grid";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const images = [
  "/hero-banner.jpg",
  "/hero-banner.jpg",
  "/hero-banner.jpg",
  "/hero-banner.jpg",
  "/hero-banner.jpg",
];

export const HeroSection = () => {
  return (
    <section className="md:py-40 grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
      {/* Texto e Botões */}
      <motion.div
        className="space-y-8 text-center md:text-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Badge variant="outline" asChild>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            #🟧VemSerFlexVocêTmb
            <ArrowUpRight className="ml-2 size-4" />
          </motion.div>
        </Badge>

        <div className="space-y-4">
          <motion.h1
            className="font-bold md:text-6xl text-3xl leading-tight text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Clube Flex: descontos que cuidam de você e da sua família
          </motion.h1>
          <motion.p
            className="font-medium leading-tight text-lg lg:text-xl "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Desde 2010 proporcionando qualidade de Vida para você e para sua
            família
          </motion.p>
        </div>

        <motion.div
          className="flex items-center gap-2 flex-col md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button className="w-full md:w-fit" size="lg">
            Quero ser Flex
          </Button>
          <Button variant="outline" className="w-full md:w-fit" size="lg">
            Conheça nossos parceiros
          </Button>
        </motion.div>
      </motion.div>

      {/* Grid de Imagens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <ImageGrid images={images} />
      </motion.div>
    </section>
  );
};
