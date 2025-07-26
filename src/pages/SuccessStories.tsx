import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Rahul Sharma",
      college: "IIT Delhi",
      company: "Google",
      package: "₹45 LPA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "CodeMaster's structured approach helped me crack Google's interview. The practice problems and mock interviews were invaluable.",
      course: "Advanced DSA Mastery"
    },
    {
      name: "Priya Patel",
      college: "NIT Trichy",
      company: "Microsoft",
      package: "₹42 LPA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimonial: "The faculty's industry experience and personalized mentorship made all the difference in my preparation.",
      course: "Placement Bootcamp"
    },
    {
      name: "Arjun Kumar",
      college: "BITS Pilani",
      company: "Amazon",
      package: "₹40 LPA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "From struggling with basic arrays to solving complex DP problems, CodeMaster transformed my coding skills completely.",
      course: "DSA Fundamentals"
    },
    {
      name: "Sneha Reddy",
      college: "IIIT Hyderabad",
      company: "Facebook",
      package: "₹50 LPA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: "The comprehensive curriculum and real-world problem-solving approach prepared me for the toughest interviews.",
      course: "Advanced DSA Mastery"
    },
    {
      name: "Vikash Singh",
      college: "DTU Delhi",
      company: "Flipkart",
      package: "₹35 LPA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      testimonial: "The mock interviews and interview tips helped me gain confidence and perform well in actual interviews.",
      course: "Placement Bootcamp"
    },
    {
      name: "Ananya Gupta",
      college: "VIT Vellore",
      company: "Adobe",
      package: "₹38 LPA",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      testimonial: "CodeMaster's teaching methodology is exceptional. They focus on building strong fundamentals first.",
      course: "DSA Fundamentals"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-accent">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Meet our successful graduates who are now working at top tech companies
          </p>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.college}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default" className="bg-primary/10 text-primary">
                    {story.company}
                  </Badge>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {story.package}
                  </Badge>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-4">
                    "{story.testimonial}"
                  </p>
                </div>

                <div className="text-sm text-primary font-medium">
                  Course: {story.course}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Write Your <span className="text-primary">Success Story?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who transformed their careers with CodeMaster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Start Your Journey
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;