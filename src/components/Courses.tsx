import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      title: "DSA Fundamentals",
      subtitle: "Perfect for Beginners",
      duration: "3 Months",
      students: "150+ Students",
      rating: "4.9",
      price: "₹15,000",
      originalPrice: "₹20,000",
      features: [
        "Basic C++ Programming",
        "Arrays & Strings",
        "Linked Lists & Stacks",
        "Recursion & Backtracking",
        "Time & Space Complexity",
        "50+ Practice Problems"
      ],
      popular: false
    },
    {
      title: "Advanced DSA Mastery",
      subtitle: "Industry Ready Program",
      duration: "6 Months",
      students: "300+ Students",
      rating: "4.9",
      price: "₹25,000",
      originalPrice: "₹35,000",
      features: [
        "Advanced Trees & Graphs",
        "Dynamic Programming",
        "Advanced Algorithms",
        "System Design Basics",
        "Mock Interviews",
        "200+ Practice Problems",
        "Placement Assistance",
        "1-on-1 Mentorship"
      ],
      popular: true
    },
    {
      title: "Placement Bootcamp",
      subtitle: "Intensive Interview Prep",
      duration: "2 Months",
      students: "100+ Students",
      rating: "4.8",
      price: "₹18,000",
      originalPrice: "₹25,000",
      features: [
        "Company-Specific Preparation",
        "Mock Interviews",
        "Resume Building",
        "Soft Skills Training",
        "Salary Negotiation",
        "100+ Interview Questions"
      ],
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Course Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect program that aligns with your career goals and current skill level
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className={`relative p-8 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 ${course.popular ? 'border-2 border-primary' : ''}`}>
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                  {course.title}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {course.subtitle}
                </p>
                
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {course.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    One-time payment
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {course.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={course.popular ? "hero" : "default"} 
                className="w-full" 
                size="lg"
                onClick={() => navigate(`/courses/${course.title.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace('mastery', 'dsa')}`)}
              >
                Enroll Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which course is right for you?
          </p>
          <Button variant="outline" size="lg">
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;