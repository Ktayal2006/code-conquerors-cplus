import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
