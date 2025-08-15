import { Logo } from "./logo";

const footerData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Shadcnblocks.com",
    url: "https://www.shadcnblocks.com",
  },
  tagline: "Lorem ipsum dolor sit amet.",
  menuItems: [
    {
      title: "Links Úteis",
      links: [
        { text: "Lorem Ipsum 1", url: "#" },
        { text: "Lorem Ipsum 2", url: "#" },
        { text: "Lorem Ipsum 3", url: "#" },
        { text: "Lorem Ipsum 4", url: "#" },
        { text: "Lorem Ipsum 5", url: "#" },
      ],
    },
  ],
  copyright: "© 2025 Lorem Ipsum. All rights reserved.",
  bottomLinks: [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center gap-2">
                <Logo />
              </div>
              <p className="mt-4 ">{footerData.tagline}</p>
            </div>

            <div>
              <h3 className="mb-4 ">{footerData.menuItems[0].title}</h3>
              <ul className="text-muted-foreground space-y-4">
                {footerData.menuItems[0].links.map((link, idx) => (
                  <li key={idx} className="hover:text-primary font-medium">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t py-8 text-sm font-medium md:flex-row md:items-center">
            <p>{footerData.copyright}</p>
            <ul className="flex gap-4">
              {footerData.bottomLinks.map((link, idx) => (
                <li key={idx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export { Footer };
