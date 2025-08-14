import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Resources',
      links: [
        'Physics Worksheets',
        'Chemistry Worksheets',
        'Biology Worksheets',
        'Maths Worksheets'
      ]
    },
    {
      title: 'Support',
      links: [
        'About Us',
        'Contact Us',
        'FAQ',
        'Privacy Policy',
        'Terms of Service'
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/15ffrQqGfS/?mibextid=qi2Omg', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ivydon.official?igsh=OXdkMWN4MXExYzdm', name: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@ivydonacademy?si=-Gr_a4676ahjr0X-', name: 'YouTube' },
    { icon: MessageCircle, href: 'https://wa.me/917208205268', name: 'WhatsApp' }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* WhatsApp Group Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Teacher's Community
            </h3>
            <p className="text-background/70 mb-8 max-w-2xl mx-auto">
              Connect with fellow students, get instant updates, and access exclusive study materials
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-primary hover:bg-primary-hover"
              onClick={() => window.open('https://forms.gle/p6NmDG6EuBmr81788', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Work with us
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">IVYDon Tuitions</h2>
                <p className="text-xs text-background/70">Excellence in Education</p>
              </div>
            </div>
            
            <p className="text-background/70 mb-6 leading-relaxed">
              Elite AP, IBDP & IGCSE tutoring tailored for excellence. World-class educators 
              delivering unmatched results through personalized, prestigious, and globally trusted support.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/70 text-sm">hello@ivydon.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/70 text-sm">+91 7208205268</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/70 text-sm">Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const getSocialColors = () => {
                  switch (social.name) {
                    case 'Facebook': return 'hover:bg-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]';
                    case 'Instagram': return 'hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-[#833AB4] hover:shadow-[0_0_20px_rgba(228,64,95,0.4)]';
                    case 'YouTube': return 'hover:bg-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]';
                    case 'WhatsApp': return 'hover:bg-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]';
                    default: return 'hover:bg-primary hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]';
                  }
                };

                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-14 h-14 bg-background/10 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover-scale ${getSocialColors()}`}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-7 h-7 text-background hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-background mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => {
                  const getHref = () => {
                    switch (link) {
                      case 'About Us': return '/about';
                      case 'Contact Us': return '/contact';
                      case 'FAQ': return '/faq';
                      case 'Privacy Policy': return '/privacy';
                      case 'Terms of Service': return '/terms';
                      default: return '#';
                    }
                  };

                  return (
                    <li key={linkIndex}>
                      <a
                        href={getHref()}
                        className="text-background/70 text-sm hover:text-primary transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/70 text-sm mb-4 md:mb-0">
              © 2024 IVYDon - AP, IBDP, IGCSE & AS-A Level Tuitions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-background/70 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/70 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;