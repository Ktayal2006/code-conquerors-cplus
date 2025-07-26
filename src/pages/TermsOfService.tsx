import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of <span className="text-accent">Service</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Terms and conditions for using our educational services
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-card">
              <div className="prose prose-lg max-w-none text-card-foreground">
                <h2 className="text-2xl font-bold mb-4 text-primary">Acceptance of Terms</h2>
                <p className="mb-6 text-muted-foreground">
                  By accessing and using CodeMaster's services, you accept and agree to be bound by the 
                  terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">Course Enrollment</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Students must provide accurate information during enrollment</li>
                  <li>Course fees must be paid in full before course commencement</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>Course schedules may be subject to change</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-primary">Student Responsibilities</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Attend classes regularly and participate actively</li>
                  <li>Complete assignments and projects on time</li>
                  <li>Respect faculty and fellow students</li>
                  <li>Maintain academic integrity</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-primary">Intellectual Property</h2>
                <p className="mb-6 text-muted-foreground">
                  All course materials, including but not limited to videos, documents, and code examples, 
                  are the intellectual property of CodeMaster Institute.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">Limitation of Liability</h2>
                <p className="mb-6 text-muted-foreground">
                  CodeMaster Institute shall not be liable for any indirect, incidental, special, 
                  or consequential damages arising from the use of our services.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions regarding these terms, contact us at ptayal@gmail.com or +91 9810784753.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;