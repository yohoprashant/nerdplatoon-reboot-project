
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-nerd-orange rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/69725e7b-197f-466d-a13b-82582d29ebf8.png" 
              alt="NerdPlatoon Logo" 
              className="h-10 object-contain"
            />
          </div>
          <span className="text-xl font-bold">
            <span className="text-nerd-green">NERD</span>
            <span className="text-nerd-blue">PLATOON</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="font-medium text-gray-800 hover:text-nerd-blue transition-colors">
            Home
          </a>
          <a href="#services" className="font-medium text-gray-800 hover:text-nerd-blue transition-colors">
            Services
          </a>
          <a href="#about" className="font-medium text-gray-800 hover:text-nerd-blue transition-colors">
            About
          </a>
          <a href="#testimonials" className="font-medium text-gray-800 hover:text-nerd-blue transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="font-medium text-gray-800 hover:text-nerd-blue transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-nerd-blue to-nerd-green text-white hover:opacity-90">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col gap-4 animate-fade-in">
          <a 
            href="#home" 
            className="font-medium text-gray-800 hover:text-nerd-blue transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="font-medium text-gray-800 hover:text-nerd-blue transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="font-medium text-gray-800 hover:text-nerd-blue transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="font-medium text-gray-800 hover:text-nerd-blue transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="font-medium text-gray-800 hover:text-nerd-blue transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="bg-gradient-to-r from-nerd-blue to-nerd-green text-white hover:opacity-90 w-full">
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
