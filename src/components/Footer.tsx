import { Button } from "@/components/ui/button";
import { Code, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="w-8 h-8" />
              <span className="text-2xl font-bold">CodeMaster</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering BTech students to master Data Structures & Algorithms in C++ 
              and land their dream tech jobs.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                Facebook
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                YouTube
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/#courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Courses</Link></li>
              <li><Link to="/success-stories" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Success Stories</Link></li>
              <li><Link to="/faculty" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Faculty</Link></li>
              <li><Link to="/placements" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Placements</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><Link to="/courses/dsa-fundamentals" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">DSA Fundamentals</Link></li>
              <li><Link to="/courses/advanced-dsa" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Advanced DSA</Link></li>
              <li><Link to="/courses/placement-bootcamp" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Placement Bootcamp</Link></li>
              <li><Link to="/#courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Mock Interviews</Link></li>
              <li><Link to="/#courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">System Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+91 9810784753</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">ptayal@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-primary-foreground/80">
                  Tech Hub, Block A, Floor 3<br />
                  Cyber City, Bangalore - 560001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 CodeMaster Institute. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;