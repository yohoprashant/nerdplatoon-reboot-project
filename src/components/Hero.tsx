
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:py-32 bg-hero-pattern relative overflow-hidden">
      <div className="container flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Innovative 
            <span className="gradient-text"> Tech Solutions </span>
            for Forward-Thinking Businesses
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            NerdPlatoon delivers cutting-edge software development and IT services from our Canada-based offshore team, helping businesses transform their digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-nerd-blue hover:bg-nerd-darkBlue text-white px-8 py-6">
              Our Services
            </Button>
            <Button variant="outline" className="border-nerd-blue text-nerd-blue hover:bg-nerd-blue/5 px-8 py-6">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 opacity-0 animate-fade-in delay-300">
          <div className="relative">
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-nerd-orange/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-nerd-blue/10 rounded-full blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Code on screen" 
              className="rounded-xl shadow-lg object-cover w-full max-h-[500px] z-10 relative"
            />
            <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md z-20">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">Projects Delivered</span>
              </div>
              <div className="text-2xl font-bold">350+</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating shapes */}
      <div className="hidden lg:block absolute top-1/4 left-8 w-16 h-16 rounded-full border-4 border-nerd-green/20 animate-bounce opacity-50" style={{animationDuration: '3s'}}></div>
      <div className="hidden lg:block absolute bottom-1/4 right-16 w-8 h-8 rounded-full border-4 border-nerd-orange/20 animate-bounce opacity-50" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
    </section>
  );
};

export default Hero;
