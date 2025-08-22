import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Clube Flex
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              O melhor clube de descontos do Brasil. Conectamos você com as
              melhores marcas e ofertas exclusivas para economizar em suas
              compras do dia a dia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-foreground">
              Links Úteis
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Termos de uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-foreground">
              Redes Sociais
            </h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-muted-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Clube Flex. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
