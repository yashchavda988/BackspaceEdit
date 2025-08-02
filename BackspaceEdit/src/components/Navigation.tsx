import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-foreground">Mojo</span>
            <span className="text-primary">Edits</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-foreground hover:text-primary transition-colors duration-300">
              Work
            </a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors duration-300">
              Results
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors duration-300">
              Testimonials
            </a>
          </div>
          
          {/* CTA Button */}
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
            Book a call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;