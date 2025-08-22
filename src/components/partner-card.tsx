import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";

interface Partner {
  id: string;
  name: string;
  description: string;
  discount: string;
  logo: string;
  category: string;
}

interface PartnerCardProps {
  partner: Partner;
}

export const PartnerCard = ({ partner }: PartnerCardProps) => {
  return (
    <Card className="group card-hover shadow-none ">
      <CardContent>
        <div className="mb-4 flex justify-center">
          <div className="relative">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 w-auto object-contain filter group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute -top-2 -right-2 discount-badge px-2 py-1 text-xs">
              {partner.discount}
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-center mb-2 text-foreground">
          {partner.name}
        </h3>

        <p className="text-sm text-muted-foreground text-center mb-3 capitalize">
          {partner.category}
        </p>

        <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-2">
          {partner.description}
        </p>

        <Button
          size="sm"
          variant="link"
          className="w-full md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        >
          Acessar Desconto
        </Button>
      </CardContent>
    </Card>
  );
};
