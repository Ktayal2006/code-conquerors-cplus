import { Card } from "@/components/ui/card";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cookie <span className="text-accent">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            How we use cookies to improve your experience
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-card">
              <div className="prose prose-lg max-w-none text-card-foreground">
                <h2 className="text-2xl font-bold mb-4 text-primary">What Are Cookies?</h2>
                <p className="mb-6 text-muted-foreground">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and usage patterns.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Analytics Cookies:</strong> Provide insights about website usage and performance</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-primary">Managing Cookies</h2>
                <p className="mb-6 text-muted-foreground">
                  You can control and manage cookies through your browser settings. However, disabling certain 
                  cookies may impact your experience on our website.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Cookies</h2>
                <p className="mb-6 text-muted-foreground">
                  We may use third-party services like Google Analytics that place cookies on your device 
                  to help us analyze website traffic and improve our services.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">Updates to This Policy</h2>
                <p className="mb-6 text-muted-foreground">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page 
                  with an updated revision date.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about our use of cookies, please contact us at ptayal@gmail.com.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;