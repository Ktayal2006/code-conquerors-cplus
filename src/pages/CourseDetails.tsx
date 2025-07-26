import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Users, Star, BookOpen, Award, Target } from "lucide-react";

const CourseDetails = () => {
  const { courseId } = useParams();

  const courses = {
    "dsa-fundamentals": {
      title: "DSA Fundamentals",
      subtitle: "Perfect for Beginners",
      duration: "3 Months",
      students: "150+ Students",
      rating: "4.9",
      price: "₹15,000",
      originalPrice: "₹20,000",
      description: "Master the fundamentals of Data Structures and Algorithms with our comprehensive beginner-friendly course.",
      features: [
        "Basic C++ Programming",
        "Arrays & Strings",
        "Linked Lists & Stacks",
        "Recursion & Backtracking",
        "Time & Space Complexity",
        "50+ Practice Problems"
      ],
      curriculum: [
        {
          week: "Week 1-2",
          title: "C++ Fundamentals",
          topics: ["Variables & Data Types", "Control Structures", "Functions", "OOP Basics"]
        },
        {
          week: "Week 3-4",
          title: "Arrays & Strings",
          topics: ["Array Operations", "String Manipulation", "Two Pointers", "Sliding Window"]
        },
        {
          week: "Week 5-6",
          title: "Linked Lists",
          topics: ["Singly Linked Lists", "Doubly Linked Lists", "Circular Lists", "Operations"]
        },
        {
          week: "Week 7-8",
          title: "Stacks & Queues",
          topics: ["Stack Implementation", "Queue Implementation", "Applications", "Problems"]
        },
        {
          week: "Week 9-10",
          title: "Recursion",
          topics: ["Recursive Thinking", "Base Cases", "Backtracking", "Tree Recursion"]
        },
        {
          week: "Week 11-12",
          title: "Complexity Analysis",
          topics: ["Time Complexity", "Space Complexity", "Big O Notation", "Analysis Techniques"]
        }
      ]
    },
    "advanced-dsa": {
      title: "Advanced DSA Mastery",
      subtitle: "Industry Ready Program",
      duration: "6 Months",
      students: "300+ Students",
      rating: "4.9",
      price: "₹25,000",
      originalPrice: "₹35,000",
      description: "Comprehensive advanced course covering all topics needed for top tech company interviews.",
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
      curriculum: [
        {
          week: "Month 1",
          title: "Advanced Data Structures",
          topics: ["Binary Trees", "BST", "AVL Trees", "Heaps", "Tries"]
        },
        {
          week: "Month 2",
          title: "Graph Algorithms",
          topics: ["Graph Traversal", "Shortest Path", "MST", "Topological Sort"]
        },
        {
          week: "Month 3",
          title: "Dynamic Programming",
          topics: ["1D DP", "2D DP", "DP on Trees", "DP Optimization"]
        },
        {
          week: "Month 4",
          title: "Advanced Algorithms",
          topics: ["Greedy Algorithms", "Divide & Conquer", "String Algorithms"]
        },
        {
          week: "Month 5",
          title: "System Design",
          topics: ["Design Principles", "Scalability", "Database Design", "API Design"]
        },
        {
          week: "Month 6",
          title: "Interview Preparation",
          topics: ["Mock Interviews", "Problem Solving", "Communication", "Behavioral"]
        }
      ]
    },
    "placement-bootcamp": {
      title: "Placement Bootcamp",
      subtitle: "Intensive Interview Prep",
      duration: "2 Months",
      students: "100+ Students",
      rating: "4.8",
      price: "₹18,000",
      originalPrice: "₹25,000",
      description: "Intensive bootcamp focused on cracking interviews at top tech companies.",
      features: [
        "Company-Specific Preparation",
        "Mock Interviews",
        "Resume Building",
        "Soft Skills Training",
        "Salary Negotiation",
        "100+ Interview Questions"
      ],
      curriculum: [
        {
          week: "Week 1-2",
          title: "Interview Fundamentals",
          topics: ["Problem Solving Approach", "Time Management", "Communication Skills"]
        },
        {
          week: "Week 3-4",
          title: "Technical Preparation",
          topics: ["Coding Rounds", "System Design", "Technical Questions"]
        },
        {
          week: "Week 5-6",
          title: "Company Specific",
          topics: ["FAANG Preparation", "Product Companies", "Service Companies"]
        },
        {
          week: "Week 7-8",
          title: "Final Preparation",
          topics: ["Mock Interviews", "Resume Review", "Salary Negotiation"]
        }
      ]
    }
  };

  const course = courses[courseId as keyof typeof courses];

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {course.description}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {course.students}
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                {course.rating}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-4xl font-bold">{course.price}</span>
              <span className="text-xl text-white/60 line-through">{course.originalPrice}</span>
            </div>

            <Button variant="cta" size="xl">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              What You'll <span className="text-primary">Learn</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.features.map((feature, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-card-foreground font-medium">{feature}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Course <span className="text-primary">Curriculum</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.curriculum.map((module, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground">{module.title}</h3>
                      <p className="text-sm text-primary">{module.week}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Why Choose This <span className="text-primary">Course?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Industry Experts",
                  description: "Learn from professionals who have worked at top tech companies"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Practical Approach",
                  description: "Hands-on learning with real-world problems and projects"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Personal Mentorship",
                  description: "One-on-one guidance to help you achieve your career goals"
                }
              ].map((benefit, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-card text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-accent">Journey?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with this course
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Enroll Now - {course.price}
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              Download Syllabus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;