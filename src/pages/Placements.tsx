import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building, Award, Users } from "lucide-react";

const Placements = () => {
  const companies = [
    "Google", "Microsoft", "Amazon", "Facebook", "Apple", "Netflix", 
    "Adobe", "Uber", "Flipkart", "Zomato", "Swiggy", "Paytm",
    "Razorpay", "CRED", "Byju's", "Unacademy", "PhonePe", "Myntra"
  ];

  const placementData = [
    { year: "2024", placed: 485, avgPackage: "₹28.5 LPA", highestPackage: "₹75 LPA" },
    { year: "2023", placed: 420, avgPackage: "₹25.2 LPA", highestPackage: "₹65 LPA" },
    { year: "2022", placed: 380, avgPackage: "₹22.8 LPA", highestPackage: "₹60 LPA" },
    { year: "2021", placed: 340, avgPackage: "₹20.5 LPA", highestPackage: "₹55 LPA" }
  ];

  const packageRanges = [
    { range: "₹50+ LPA", percentage: "15%", color: "bg-green-500" },
    { range: "₹30-50 LPA", percentage: "35%", color: "bg-blue-500" },
    { range: "₹20-30 LPA", percentage: "30%", color: "bg-yellow-500" },
    { range: "₹10-20 LPA", percentage: "20%", color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Placement <span className="text-accent">Success</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Outstanding placement record with students placed in top tech companies worldwide
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: <Users className="w-8 h-8" />,
                number: "2000+", 
                label: "Students Placed",
                description: "Successfully placed across top companies"
              },
              { 
                icon: <TrendingUp className="w-8 h-8" />,
                number: "95%", 
                label: "Placement Rate",
                description: "Consistent high placement success"
              },
              { 
                icon: <Award className="w-8 h-8" />,
                number: "₹75 LPA", 
                label: "Highest Package",
                description: "Record-breaking package in 2024"
              },
              { 
                icon: <Building className="w-8 h-8" />,
                number: "50+", 
                label: "Partner Companies",
                description: "Strong industry connections"
              }
            ].map((stat, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card text-center hover:shadow-glow transition-all duration-300">
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-card-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Trends */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Placement <span className="text-primary">Trends</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Year-over-year growth in placement success and package offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {placementData.map((data, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card text-center">
                <div className="text-2xl font-bold text-primary mb-4">{data.year}</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-lg font-semibold text-card-foreground">{data.placed}</div>
                    <div className="text-sm text-muted-foreground">Students Placed</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-card-foreground">{data.avgPackage}</div>
                    <div className="text-sm text-muted-foreground">Average Package</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-card-foreground">{data.highestPackage}</div>
                    <div className="text-sm text-muted-foreground">Highest Package</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Distribution */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Package <span className="text-primary">Distribution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Breakdown of salary packages across different ranges
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packageRanges.map((range, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-card text-center">
                  <div className={`w-16 h-16 ${range.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{range.percentage}</span>
                  </div>
                  <div className="text-lg font-semibold text-card-foreground mb-2">{range.range}</div>
                  <div className="text-sm text-muted-foreground">of placements</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Top <span className="text-primary">Companies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our students are working at the world's leading technology companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {companies.map((company, index) => (
              <Card key={index} className="p-4 bg-gradient-card shadow-card text-center hover:shadow-glow transition-all duration-300">
                <div className="text-sm font-semibold text-card-foreground">{company}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our <span className="text-accent">Success Stories?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your dream career in tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Apply Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;