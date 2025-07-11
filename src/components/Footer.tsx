
import { Instagram, Youtube, Twitter, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform} profile`);
    // In a real app, these would link to actual social media profiles
    switch (platform) {
      case 'instagram':
        window.open('https://instagram.com', '_blank');
        break;
      case 'youtube':
        window.open('https://youtube.com', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com', '_blank');
        break;
      case 'email':
        window.location.href = 'mailto:hello@studioedits.com';
        break;
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', platform: 'instagram' },
    { icon: Youtube, href: '#', label: 'YouTube', platform: 'youtube' },
    { icon: Twitter, href: '#', label: 'Twitter', platform: 'twitter' },
    { icon: Mail, href: 'mailto:hello@studioedits.com', label: 'Email', platform: 'email' },
  ];

  const footerLinks = {
    Services: [
      { label: 'Instagram Reels', action: () => scrollToSection('services') },
      { label: 'YouTube Shorts', action: () => scrollToSection('services') },
      { label: 'TikTok Content', action: () => scrollToSection('services') },
      { label: 'Long-form Editing', action: () => scrollToSection('services') },
      { label: 'Brand Integration', action: () => scrollToSection('services') }
    ],
    Company: [
      { label: 'About Us', action: () => scrollToSection('about') },
      { label: 'Portfolio', action: () => scrollToSection('portfolio') },
      { label: 'Pricing', action: () => scrollToSection('contact') },
      { label: 'Contact', action: () => scrollToSection('contact') },
      { label: 'Careers', action: () => console.log('Careers page') }
    ],
    Resources: [
      { label: 'Blog', action: () => console.log('Blog page') },
      { label: 'Case Studies', action: () => scrollToSection('portfolio') },
      { label: 'Style Guide', action: () => console.log('Style guide') },
      { label: 'FAQ', action: () => console.log('FAQ page') },
      { label: 'Support', action: () => scrollToSection('contact') }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4 hover:opacity-80 transition-opacity"
            >
              edits
            </button>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming your content into viral sensations. Professional social media editing that drives engagement and grows your audience.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  onClick={() => handleSocialClick(social.platform)}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Studio Edits. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/admin-login"
              className="text-gray-500 hover:text-gray-400 transition-colors duration-200 text-xs"
            >
              Admin
            </Link>
            <button 
              onClick={() => console.log('Privacy Policy')}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => console.log('Terms of Service')}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => console.log('Cookie Policy')}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
