import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-white/5 bg-background/60">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight hover:text-primary transition-colors">
          Faizan Azhar
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://www.upwork.com/freelancers/faizana295?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex"
        >
          <Button size="sm" className="gradient-primary text-white px-6 glow-primary">
            Hire Me
          </Button>
        </a>
        <button
          className="md:hidden p-2 rounded-lg border border-border text-muted-foreground"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-background/90">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className="py-2 border-b border-white/5 last:border-b-0 hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.upwork.com/freelancers/faizana295?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2"
              onClick={handleNavClick}
            >
              <Button className="w-full gradient-primary text-white glow-primary">Hire Me</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

