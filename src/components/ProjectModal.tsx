
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Play, ExternalLink, Eye, Calendar, Users, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  views: string;
  image: string;
  client: string;
  videoUrl?: string;
  description?: string;
  results?: {
    engagement: string;
    reach: string;
    conversion: string;
  };
  timeline?: string;
  teamSize?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  mode: 'video' | 'case-study';
}

const ProjectModal = ({ project, isOpen, onClose, mode }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={handleBackdropClick}>
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {mode === 'video' ? (
          <div className="p-0">
            <div className="relative aspect-video bg-gray-900 rounded-t-2xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Button 
                  size="lg" 
                  className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 rounded-full"
                >
                  <Play className="w-8 h-8 mr-3" />
                  Play Video
                </Button>
              </div>
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">{project.views}</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">Client: {project.client}</p>
              <p className="text-gray-700">
                This video showcases our creative editing expertise, combining dynamic cuts, 
                color grading, and motion graphics to create engaging content that resonates 
                with the target audience and drives meaningful engagement.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-xl text-gray-600">Client: {project.client}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Timeline</span>
                </div>
                <p className="text-gray-700">5 days</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Team Size</span>
                </div>
                <p className="text-gray-700">3 editors</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Views</span>
                </div>
                <p className="text-gray-700">{project.views}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team worked closely with {project.client} to create this engaging {project.category} content. 
                The project required careful attention to pacing, visual storytelling, and brand consistency 
                to deliver maximum impact across social media platforms.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results Achieved</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">+150%</div>
                  <div className="text-gray-600">Engagement Rate</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{project.views}</div>
                  <div className="text-gray-600">Total Views</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">+85%</div>
                  <div className="text-gray-600">New Followers</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </Button>
              <Button variant="outline">
                Download Case Study PDF
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
