import { Card } from "@/components/ui/card";
import { Code, Trophy, Users, BookOpen } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Expert C++ Focus",
      description: "Deep dive into C++ with industry-standard practices and advanced concepts specifically for DSA implementation."
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Our students consistently land positions at top tech companies including Google, Microsoft, Amazon, and more."
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Small batch sizes ensure individual attention and customized learning paths for every student."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "From basics to advanced topics - Arrays, Trees, Graphs, Dynamic Programming, and System Design."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-primary">CodeMaster Institute</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've revolutionized DSA education for BTech students with our industry-aligned curriculum 
            and hands-on approach that guarantees placement success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join the next batch starting this month and fast-track your placement journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-lg">
              <strong>Next Batch:</strong> Starting March 15th
            </div>
            <div className="text-lg">
              <strong>Duration:</strong> 6 Months Intensive
            </div>
            <div className="text-lg">
              <strong>Mode:</strong> Online + Offline
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;