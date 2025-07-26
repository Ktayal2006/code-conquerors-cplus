import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-accent">CodeMaster</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering BTech students to excel in Data Structures & Algorithms and secure their dream tech careers
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-card-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between academic learning and industry requirements by providing 
                comprehensive, practical training in Data Structures & Algorithms. We aim to transform 
                every student into a confident programmer ready to tackle real-world challenges.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-card-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading coding institute that consistently produces top-tier software 
                engineers. We envision a future where every graduate from CodeMaster becomes a 
                valuable asset to the tech industry.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-primary">CodeMaster?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Faculty",
                description: "Learn from industry professionals with 10+ years of experience in top tech companies."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Proven Results",
                description: "95% placement rate with students placed in FAANG and other top companies."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Comprehensive Curriculum",
                description: "Complete coverage of DSA topics with real-world problem-solving techniques."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { number: "2000+", label: "Students Trained" },
              { number: "95%", label: "Placement Rate" },
              { number: "50+", label: "Partner Companies" },
              { number: "5", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;