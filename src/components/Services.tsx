
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Youtube, Zap, Scissors, Camera, Palette } from 'lucide-react';

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Instagram,
      title: "Instagram Reels",
      description: "Short-form vertical videos optimized for maximum reach and engagement on Instagram.",
      features: ["Trending audio integration", "Text animations", "Hashtag optimization", "Story templates"]
    },
    {
      icon: Youtube,
      title: "YouTube Shorts",
      description: "Eye-catching vertical content designed to capture viewers in the first 3 seconds.",
      features: ["Hook creation", "Retention editing", "Thumbnail design", "SEO optimization"]
    },
    {
      icon: Zap,
      title: "TikTok Content",
      description: "Native TikTok-style editing with trending effects and seamless transitions.",
      features: ["Viral format templates", "Effect synchronization", "Sound selection", "Trend adaptation"]
    },
    {
      icon: Scissors,
      title: "Long-form Editing",
      description: "Comprehensive editing for podcasts, tutorials, and extended content pieces.",
      features: ["Multi-camera sync", "Audio enhancement", "Chapter markers", "Brand integration"]
    },
    {
      icon: Camera,
      title: "Content Strategy",
      description: "Strategic content planning and format optimization for your specific audience.",
      features: ["Content calendar", "Platform analysis", "Audience insights", "Growth strategies"]
    },
    {
      icon: Palette,
      title: "Brand Integration",
      description: "Seamless brand element integration that maintains authenticity while building recognition.",
      features: ["Logo animation", "Color grading", "Font consistency", "Template creation"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to viral content, we handle every aspect of your social media video production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-lg transition-all duration-300 mt-auto"
                  onClick={() => scrollToSection('contact')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
