
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const statsData = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
  { value: "350+", label: "Projects Delivered" },
  { value: "25+", label: "Countries Served" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-nerd-green/5 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-nerd-orange/5 rounded-full blur-xl"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="NerdPlatoon Team" 
              className="rounded-xl shadow-lg object-cover w-full h-[400px] opacity-0 animate-fade-in"
            />
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {statsData.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md border border-gray-100 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-nerd-blue">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 opacity-0 animate-fade-in delay-200">
            <h2 className="text-3xl md:text-4xl font-bold">Empowering Businesses with Technology Solutions</h2>
            <p className="text-gray-600">
              NerdPlatoon is a Canada-based offshore technology company specializing in innovative software development and IT consulting services. Since our founding, we've been dedicated to helping businesses transform their operations and achieve their digital goals.
            </p>
            <p className="text-gray-600">
              Our team of skilled developers, designers, and consultants work together to deliver high-quality solutions that drive growth and efficiency. With expertise across multiple industries and technologies, we bring a wealth of knowledge to every project.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-4 w-4 rounded-full bg-nerd-orange"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Client-Focused Approach</h4>
                  <p className="text-gray-600">We prioritize understanding your unique business needs to deliver tailored solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-4 w-4 rounded-full bg-nerd-green"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Technical Excellence</h4>
                  <p className="text-gray-600">Our team stays at the forefront of technology to provide cutting-edge solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-4 w-4 rounded-full bg-nerd-blue"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Global Experience</h4>
                  <p className="text-gray-600">We've worked with clients across multiple industries and countries.</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-nerd-green to-nerd-blue text-white hover:opacity-90">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
