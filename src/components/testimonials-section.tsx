import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonialsData = [
  {
    text: "Lorem ipsum dolor sit amet. Qui provident beatae aut odit repellendus rem officiis dolorum qui quidem ",
    name: "Lorem ipsum dolor",
    role: "Cliente Flex",
    initials: "LI",
    avatar: "",
  },
  {
    text: "Lorem ipsum dolor sit amet. Qui provident beatae aut odit repellendus rem officiis dolorum qui quidem ",
    name: "Lorem ipsum dolor",
    role: "Cliente Flex",
    initials: "LI",
    avatar: "",
  },
  {
    text: "Lorem ipsum dolor sit amet. Qui provident beatae aut odit repellendus rem officiis dolorum qui quidem ",
    name: "Lorem ipsum dolor",
    role: "Cliente Flex",
    initials: "LI",
    avatar: "",
  },
  {
    text: "Lorem ipsum dolor sit amet. Qui provident beatae aut odit repellendus rem officiis dolorum qui quidem ",
    name: "Lorem ipsum dolor",
    role: "Cliente Flex",
    initials: "LI",
    avatar: "",
  },
  {
    text: "Lorem ipsum dolor sit amet. Qui provident beatae aut odit repellendus rem officiis dolorum qui quidem ",
    name: "Lorem ipsum dolor",
    role: "Cliente Flex",
    initials: "LI",
    avatar: "",
  },
];

const testimonialsHeader = {
  badge: "💳 Clube de Descontos Exclusivos",
  heading: "Lorem ipsum dolor sit amet.",
};

export const TestimonialsSection = () => {
  return (
    <section className="overflow-hidden section-padding">
      <div className="container mx-auto text-center space-y-12">
        {testimonialsHeader.badge && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline">
              {testimonialsHeader.badge}
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>
          </motion.div>
        )}

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold"
        >
          {testimonialsHeader.heading}
        </motion.h2>

        <motion.div
          className="flex gap-6 "
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...testimonialsData, ...testimonialsData].map(
            (testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative w-[400px] min-w-[400px] rounded-2xl border border-border bg-gradient-to-b from-secondary/20 to-card p-6 shadow-md backdrop-blur-sm"
              >
                <div className="absolute -top-5 -left-5 h-40 w-40 rounded-full bg-gradient-to-b from-primary/15 to-card blur-md -z-10" />
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-t to-transparent from-primary/10 opacity-70 blur-xl -z-10" />

                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-primary mb-4"
                >
                  <Quote className="h-10 w-10 -rotate-180" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-foreground/90 mb-6 text-base leading-relaxed"
                >
                  {testimonial.text}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="mt-auto flex items-center gap-3 border-t border-border/40 pt-2"
                >
                  <Avatar className="h-10 w-10 border border-border ring-2 ring-primary/10 ring-offset-1">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h6>{testimonial.name}</h6>
                    <p className="text-primary/80">{testimonial.role}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};
