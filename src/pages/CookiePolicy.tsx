import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Shield, Eye, Settings } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-hover mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                <Cookie className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Cookie Policy</h1>
                <p className="text-muted-foreground">Last updated: December 2024</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg p-6 border mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-primary" />
                What Are Cookies?
              </h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                improving our educational services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Essential Cookies
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  These cookies are necessary for our educational platform to function properly.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Authentication and login status</li>
                  <li>• Course progress tracking</li>
                  <li>• Security and fraud prevention</li>
                  <li>• Basic website functionality</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-primary" />
                  Performance Cookies
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  These help us understand how students use our platform to improve our services.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Website analytics and usage statistics</li>
                  <li>• Performance monitoring</li>
                  <li>• Error tracking and debugging</li>
                  <li>• User experience optimization</li>
                </ul>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Cookies in Education</h2>
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-semibold mb-3">Educational Purpose</h3>
                <p className="text-muted-foreground mb-4">
                  As an educational technology platform, we use cookies to enhance your learning experience:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Progress Tracking:</strong> Remember where you left off in courses and worksheets</li>
                  <li>• <strong>Personalization:</strong> Customize content based on your subject preferences (Physics, Chemistry, Biology, Maths)</li>
                  <li>• <strong>Assessment Data:</strong> Store test results and performance analytics to track improvement</li>
                  <li>• <strong>Study Habits:</strong> Analyze usage patterns to provide better learning recommendations</li>
                  <li>• <strong>Account Security:</strong> Maintain secure access to your educational materials and progress</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Student Privacy & COPPA Compliance</h2>
              <div className="bg-card rounded-lg p-6 border">
                <p className="text-muted-foreground mb-4">
                  We are committed to protecting student privacy and comply with educational privacy laws:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• We do not sell or share student data with third parties for commercial purposes</li>
                  <li>• Cookies containing educational data are encrypted and securely stored</li>
                  <li>• Parents and students can request access to or deletion of cookie data</li>
                  <li>• We comply with FERPA, COPPA, and other applicable educational privacy regulations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-3">Browser Settings</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    You can control cookies through your browser settings:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Block all cookies</li>
                    <li>• Accept only essential cookies</li>
                    <li>• Delete existing cookies</li>
                    <li>• Set cookie preferences per website</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-3">Impact on Learning</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Disabling cookies may affect your learning experience:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Loss of progress tracking</li>
                    <li>• Repeated login requirements</li>
                    <li>• Reduced personalization</li>
                    <li>• Limited access to some features</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Educational Tools</h2>
              <div className="bg-card rounded-lg p-6 border">
                <p className="text-muted-foreground mb-4">
                  We may use educational third-party services that place their own cookies:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Analytics:</strong> Google Analytics for understanding student engagement</li>
                  <li>• <strong>Video Content:</strong> YouTube for educational videos (if embedded)</li>
                  <li>• <strong>Support:</strong> Chat systems for student and parent support</li>
                  <li>• <strong>Payments:</strong> Secure payment processors for course subscriptions</li>
                </ul>
                <p className="text-muted-foreground mt-4 text-sm">
                  These services have their own cookie policies, which we encourage you to review.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us About Cookies</h2>
              <div className="bg-primary/5 rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  If you have questions about our use of cookies or need to exercise your rights regarding educational data:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> privacy@ivydon.com</p>
                  <p><strong>Phone:</strong> +91 7208205268</p>
                  <p><strong>Address:</strong> Mumbai, India</p>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  We will respond to cookie-related inquiries within 30 days and take appropriate action to protect student privacy.
                </p>
              </div>
            </section>

            <div className="text-center pt-8 border-t">
              <Button asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;