import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Contact us today and let's discuss how we can help you achieve your career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">
                  Email
                </label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">
                  Course Interest
                </label>
                <select className="w-full p-3 border border-input rounded-md bg-background text-foreground">
                  <option>DSA Fundamentals</option>
                  <option>Advanced DSA Mastery</option>
                  <option>Placement Bootcamp</option>
                  <option>Custom Training</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">
                  Message
                </label>
                <Textarea placeholder="Tell us about your goals and any questions you have" rows={4} />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 87654 32109</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Email</h4>
                  <p className="text-muted-foreground">info@codemaster.edu</p>
                  <p className="text-muted-foreground">admissions@codemaster.edu</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Address</h4>
                  <p className="text-muted-foreground">Tech Hub, Block A, Floor 3</p>
                  <p className="text-muted-foreground">Cyber City, Bangalore - 560001</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Sat - Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-hero text-white">
              <h4 className="font-semibold mb-2">Free Demo Class</h4>
              <p className="mb-4 opacity-90">
                Not convinced yet? Attend our free demo class and experience our teaching methodology firsthand.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Book Free Demo
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;