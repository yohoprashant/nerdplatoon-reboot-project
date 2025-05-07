
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Database, Globe, Layout, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceItems = [
  {
    icon: <Code className="h-10 w-10 text-nerd-blue" />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your unique business challenges and requirements.",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    color: "border-nerd-blue/20 bg-gradient-to-br from-white to-nerd-blue/5"
  },
  {
    icon: <Globe className="h-10 w-10 text-nerd-green" />,
    title: "Web Development",
    description: "Responsive, intuitive websites that look great on any device and drive meaningful engagement.",
    features: ["E-commerce Solutions", "Content Management", "Landing Pages", "Progressive Web Apps"],
    color: "border-nerd-green/20 bg-gradient-to-br from-white to-nerd-green/5"
  },
  {
    icon: <Server className="h-10 w-10 text-nerd-orange" />,
    title: "IT Consulting",
    description: "Strategic technology consulting to optimize your operations and accelerate digital transformation.",
    features: ["IT Strategy", "Technology Assessment", "Process Optimization", "Digital Transformation"],
    color: "border-nerd-orange/20 bg-gradient-to-br from-white to-nerd-orange/5"
  },
  {
    icon: <Database className="h-10 w-10 text-nerd-blue" />,
    title: "DevOps Services",
    description: "Streamline development and operations with our comprehensive DevOps solutions.",
    features: ["CI/CD Implementation", "Cloud Infrastructure", "Containerization", "Performance Optimization"],
    color: "border-nerd-blue/20 bg-gradient-to-br from-white to-nerd-blue/5"
  },
  {
    icon: <Layout className="h-10 w-10 text-nerd-green" />,
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience and drives engagement with your digital products.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    color: "border-nerd-green/20 bg-gradient-to-br from-white to-nerd-green/5"
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of technology solutions to help businesses grow, innovate, and succeed in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card 
              key={index} 
              className={cn(
                "border shadow-md hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in",
                service.color
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-nerd-blue" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
