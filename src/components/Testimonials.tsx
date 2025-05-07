
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CTO, TechGrowth Inc.",
    content: "NerdPlatoon delivered our e-commerce platform ahead of schedule and exceeded our expectations. Their team was responsive, professional, and technically excellent throughout the project.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "CEO, InnovateMed",
    content: "Working with NerdPlatoon transformed our healthcare application. They understood our complex requirements and delivered a solution that has significantly improved our operations.",
    rating: 5,
  },
  {
    name: "David Wilson",
    role: "Director of IT, GlobalFinance",
    content: "NerdPlatoon's DevOps expertise helped us modernize our infrastructure and deployment processes. The result was a 70% reduction in deployment time and improved system reliability.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with NerdPlatoon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="opacity-0 animate-fade-in border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-white to-gray-50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
