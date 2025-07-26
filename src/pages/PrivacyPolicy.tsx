import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-card">
              <div className="prose prose-lg max-w-none text-card-foreground">
                <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
                <p className="mb-6 text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an account, 
                  enroll in courses, or contact us for support.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>To provide and improve our educational services</li>
                  <li>To communicate with you about courses and updates</li>
                  <li>To process payments and manage your account</li>
                  <li>To analyze usage patterns and improve our platform</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-primary">Information Sharing</h2>
                <p className="mb-6 text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">Data Security</h2>
                <p className="mb-6 text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at ptayal@gmail.com 
                  or call +91 9810784753.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;