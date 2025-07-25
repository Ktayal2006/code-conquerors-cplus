import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coding.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning DSA" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Master <span className="bg-gradient-accent bg-clip-text text-transparent">DSA</span> in C++
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
          Transform your BTech journey with expert-led Data Structures & Algorithms coaching
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of successful students who cracked their dream companies with our proven methodology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cta" size="xl">
            Start Your Journey
          </Button>
          <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
            View Courses
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2000+</div>
            <div className="text-lg opacity-90">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-lg opacity-90">Top Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;