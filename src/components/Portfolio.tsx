
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'reels', label: 'Instagram Reels' },
    { id: 'youtube', label: 'YouTube Shorts' },
    { id: 'tiktok', label: 'TikTok Content' },
    { id: 'longform', label: 'Long-form' }
  ];

  const projects = [
    {
      id: 1,
      title: "Fitness Transformation Reel",
      category: "reels",
      views: "2.3M",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      client: "FitLife Studio"
    },
    {
      id: 2,
      title: "Recipe Tutorial Short",
      category: "youtube",
      views: "890K",
      image: "https://images.unsplash.com/photo-1556909075-f3dc0b6aa39e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      client: "Chef's Corner"
    },
    {
      id: 3,
      title: "Tech Product Review",
      category: "tiktok",
      views: "1.5M",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      client: "TechReview Pro"
    },
    {
      id: 4,
      title: "Fashion Lookbook",
      category: "reels",
      views: "3.1M",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      client: "Style Maven"
    },
    {
      id: 5,
      title: "Business Podcast Edit",
      category: "longform",
      views: "45K",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      client: "Entrepreneur Hub"
    },
    {
      id: 6,
      title: "Travel Adventure Vlog",
      category: "youtube",
      views: "678K",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      client: "Wanderlust Media"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleViewProject = (projectId: number) => {
    console.log(`Viewing project ${projectId}`);
    // In a real app, this would open a modal or navigate to project details
    alert(`Opening project details for ${projects.find(p => p.id === projectId)?.title}`);
  };

  const handleCaseStudy = (projectId: number) => {
    console.log(`Opening case study for project ${projectId}`);
    // In a real app, this would navigate to a detailed case study page
    alert(`Opening case study for ${projects.find(p => p.id === projectId)?.title}`);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            See how we've helped brands and creators achieve viral success across platforms
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 border-gray-300'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 rounded-full"
                    onClick={() => handleViewProject(project.id)}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Video
                  </Button>
                </div>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.views}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.client}</p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  onClick={() => handleCaseStudy(project.id)}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full"
            onClick={() => scrollToSection('contact')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
