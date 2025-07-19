import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    By accessing and using IVYDon's tutoring services, you accept and agree to be bound 
                    by the terms and provision of this agreement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Description</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    IVYDon provides online and in-person tutoring services for AP, IBDP, IGCSE, and 
                    AS-A Level curricula in Physics, Chemistry, Mathematics, and Biology.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <ul>
                    <li>Payment is required before or at the time of service delivery</li>
                    <li>All fees are non-refundable unless otherwise specified</li>
                    <li>Session packages must be used within the validity period</li>
                    <li>Pricing is subject to change with notice</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cancellation Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Sessions can be cancelled or rescheduled with at least 24 hours notice. 
                    Late cancellations may result in session charges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Responsibilities</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <ul>
                    <li>Provide accurate information when registering</li>
                    <li>Attend scheduled sessions on time</li>
                    <li>Maintain respectful communication with tutors</li>
                    <li>Complete assignments and practice materials as recommended</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    IVYDon's liability is limited to the amount paid for services. We are not responsible 
                    for exam results or academic outcomes, as these depend on various factors including 
                    student effort and preparation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    For questions regarding these terms, please contact us at hello@ivydon.com 
                    or +91 7208205268.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;