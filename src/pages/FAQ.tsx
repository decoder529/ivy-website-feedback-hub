import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What subjects do you offer tutoring for?",
      answer: "We offer comprehensive tutoring for Physics, Chemistry, Mathematics, and Biology across AP, IBDP, IGCSE, and AS-A Level curricula."
    },
    {
      question: "Are your tutors qualified?",
      answer: "Yes, all our tutors are highly qualified with advanced degrees and extensive experience in their respective subjects and curricula."
    },
    {
      question: "Do you offer both individual and group sessions?",
      answer: "Yes, we offer both personalized one-on-one sessions and small group classes to cater to different learning preferences and budgets."
    },
    {
      question: "How do I book a trial session?",
      answer: "You can book a free trial session by clicking the 'Get Started' button on our homepage or contacting us directly through our contact form."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for session cancellations. Sessions can be rescheduled without charge with proper notice."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials, practice tests, and resources tailored to each curriculum and subject."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, we offer both in-person and online tutoring sessions using advanced virtual learning platforms."
    },
    {
      question: "How do you track student progress?",
      answer: "We provide regular progress reports, mock exams, and detailed feedback to help students and parents track improvement."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our tutoring services
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Common Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;