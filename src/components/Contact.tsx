
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="bg-white p-3 rounded-full shadow-md">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      {content}
    </div>
  </div>
);

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Ready to start your next project? Contact us for a consultation. Our team is here to answer your questions and help you find the right solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="How can we help you?" 
                  required 
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  required 
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-nerd-blue to-nerd-green text-white hover:opacity-90"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8 opacity-0 animate-fade-in delay-200">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Reach out using the information below or fill out the contact form.
              </p>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail className="h-6 w-6 text-nerd-blue" />}
                  title="Email Us"
                  content={<a href="mailto:info@nerdplatoon.com" className="text-gray-600 hover:text-nerd-blue transition-colors">info@nerdplatoon.com</a>}
                />
                <ContactInfo 
                  icon={<Phone className="h-6 w-6 text-nerd-green" />}
                  title="Call Us"
                  content={<a href="tel:+15551234567" className="text-gray-600 hover:text-nerd-green transition-colors">+1 (555) 123-4567</a>}
                />
                <ContactInfo 
                  icon={<MapPin className="h-6 w-6 text-nerd-orange" />}
                  title="Visit Our Office"
                  content={<address className="text-gray-600 not-italic">123 Tech Avenue<br />Suite 200<br />Vancouver, BC V6B 4Y8<br />Canada</address>}
                />
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-lg mb-2">Office Hours</h4>
              <div className="space-y-1 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
