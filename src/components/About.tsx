
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Happy Clients",
      description: "Brands and creators trust us"
    },
    {
      icon: Award,
      number: "500+",
      label: "Projects Completed", 
      description: "Successfully delivered"
    },
    {
      icon: Clock,
      number: "24hrs",
      label: "Average Turnaround",
      description: "Fast delivery guaranteed"
    },
    {
      icon: Zap,
      number: "50M+",
      label: "Total Views",
      description: "Generated for clients"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-8">
              About <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Edits</span>
            </h2>
            
            <div className="space-y-6 text-lg text-red-100 leading-relaxed">
              <p>
                We're a team of passionate video editors and social media strategists who understand what makes content go viral. With years of experience across all major platforms, we've mastered the art of creating scroll-stopping content.
              </p>
              
              <p>
                Our approach combines cutting-edge editing techniques with deep platform knowledge to ensure your content not only looks amazing but performs exceptionally well in the algorithm.
              </p>
              
              <p>
                From trending audio integration to perfect pacing, we handle every detail so you can focus on creating and growing your brand.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2019</div>
                <div className="text-red-200">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-red-200">Team Members</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-red-100 font-semibold mb-1">{stat.label}</div>
                    <div className="text-red-200 text-sm">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
