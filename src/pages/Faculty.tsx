import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, BookOpen, Users } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Head of Department",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      education: "PhD in Computer Science, IIT Bombay",
      previousCompanies: ["Google", "Microsoft", "Amazon"],
      specialization: ["Advanced Algorithms", "System Design", "Competitive Programming"],
      bio: "Former Senior Software Engineer at Google with extensive experience in algorithm design and optimization."
    },
    {
      name: "Prof. Priya Sharma",
      designation: "Senior Faculty",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      education: "M.Tech CSE, IIT Delhi",
      previousCompanies: ["Facebook", "Adobe", "Flipkart"],
      specialization: ["Data Structures", "Dynamic Programming", "Graph Algorithms"],
      bio: "Expert in DSA with a passion for teaching and mentoring students to achieve their career goals."
    },
    {
      name: "Mr. Arjun Patel",
      designation: "Industry Expert",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      education: "B.Tech CSE, NIT Trichy",
      previousCompanies: ["Amazon", "Swiggy", "Zomato"],
      specialization: ["Problem Solving", "Interview Preparation", "Coding Best Practices"],
      bio: "Passionate educator with hands-on industry experience in building scalable systems."
    },
    {
      name: "Ms. Sneha Reddy",
      designation: "Placement Coordinator",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      education: "M.Tech CSE, IIIT Hyderabad",
      previousCompanies: ["Microsoft", "Uber", "PayPal"],
      specialization: ["Mock Interviews", "Resume Building", "Soft Skills"],
      bio: "Dedicated to ensuring every student gets placed in their dream company with comprehensive interview preparation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-accent">Faculty</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Learn from industry experts who have worked at top tech companies
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="p-8 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="w-32 h-32 rounded-lg object-cover mx-auto md:mx-0"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {faculty.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {faculty.designation}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{faculty.experience}</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Education</span>
                      </div>
                      <p className="text-sm text-card-foreground">{faculty.education}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Previous Companies:</p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {faculty.previousCompanies.map((company, idx) => (
                          <Badge key={idx} variant="outline" className="text-primary border-primary">
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Specialization:</p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {faculty.specialization.map((skill, idx) => (
                          <Badge key={idx} variant="default" className="bg-primary/10 text-primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground italic">
                      {faculty.bio}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Faculty <span className="text-primary">Excellence</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { 
                icon: <Users className="w-8 h-8" />,
                number: "50+", 
                label: "Combined Years Experience" 
              },
              { 
                icon: <Award className="w-8 h-8" />,
                number: "100%", 
                label: "Industry Veterans" 
              },
              { 
                icon: <BookOpen className="w-8 h-8" />,
                number: "2000+", 
                label: "Students Mentored" 
              },
              { 
                icon: <MapPin className="w-8 h-8" />,
                number: "10+", 
                label: "Top Companies Represented" 
              }
            ].map((stat, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;