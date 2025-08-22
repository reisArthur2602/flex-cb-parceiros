import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "/example.png";
import { PartnerCard } from "./partner-card";
import { motion } from "framer-motion";

interface Partner {
  id: string;
  name: string;
  description: string;
  discount: string;
  logo: string;
  category: string;
}

const partners: Partner[] = [
  {
    id: "1",
    name: "StyleHub",
    description: "Moda feminina e masculina com as últimas tendências",
    discount: "25% OFF",
    logo: logo,
    category: "moda",
  },
  {
    id: "2",
    name: "TechMax",
    description: "Tecnologia de ponta com os melhores preços",
    discount: "15% OFF",
    logo: logo,
    category: "tecnologia",
  },
  {
    id: "3",
    name: "Fresh Market",
    description: "Produtos frescos e orgânicos para sua mesa",
    discount: "10% OFF",
    logo: logo,
    category: "mercado",
  },
  {
    id: "4",
    name: "SportZone",
    description: "Equipamentos esportivos para todos os esportes",
    discount: "20% OFF",
    logo: logo,
    category: "esportes",
  },
  {
    id: "5",
    name: "StyleHub",
    description: "Moda feminina e masculina com as últimas tendências",
    discount: "30% OFF",
    logo: logo,
    category: "moda",
  },
  {
    id: "6",
    name: "TechMax",
    description: "Tecnologia de ponta com os melhores preços",
    discount: "18% OFF",
    logo: logo,
    category: "tecnologia",
  },
  {
    id: "7",
    name: "Fresh Market",
    description: "Produtos frescos e orgânicos para sua mesa",
    discount: "12% OFF",
    logo: logo,
    category: "mercado",
  },
  {
    id: "8",
    name: "SportZone",
    description: "Equipamentos esportivos para todos os esportes",
    discount: "25% OFF",
    logo: logo,
    category: "esportes",
  },
];

const categories = [
  { id: "all", name: "Todos", count: partners.length },
  {
    id: "moda",
    name: "Moda",
    count: partners.filter((p) => p.category === "moda").length,
  },
  {
    id: "tecnologia",
    name: "Tecnologia",
    count: partners.filter((p) => p.category === "tecnologia").length,
  },
  {
    id: "mercado",
    name: "Mercado",
    count: partners.filter((p) => p.category === "mercado").length,
  },
  {
    id: "esportes",
    name: "Esportes",
    count: partners.filter((p) => p.category === "esportes").length,
  },
];

interface PartnerCatalogProps {
  id?: string;
}

export const PartnerCatalog = ({ id }: PartnerCatalogProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPartners =
    selectedCategory === "all"
      ? partners
      : partners.filter((partner) => partner.category === selectedCategory);

  return (
    <section id={id} className="py-20 space-y-8">
      <div className="text-center ">
        <motion.h2
          className="font-bold md:text-3xl text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Catálogo de Parceiros
        </motion.h2>
        <motion.p
          className="text-muted-foreground font-medium leading-tight text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Descubra descontos exclusivos em marcas que você já conhece e ama
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full px-6 py-2 text-sm font-medium"
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">
                ({category.count})
              </span>
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPartners.map((partner) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <PartnerCard partner={partner} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
