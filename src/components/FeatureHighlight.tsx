import { useState } from 'react';
import { Button } from '@/components/ui/button';

const FeatureHighlight = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: 'Inbox',
      description: 'Work smarter and collaborate faster with our configurable, AI-enhanced Inbox designed for speed and efficiency—with a fully integrated ticketing system.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Fin AI Agent',
      description: 'Your free AI agent for a full year. Includes 300 resolutions a month—just like having a full-time human support agent on your team.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Outbound',
      description: 'Onboard, educate, and notify your customers with in-context, automated messages—cutting support volume and keeping customers happy.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
    },
  ];

  return (
    <div className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark">
            Get a direct line to customers with best-in-class support
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-1">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left p-6 border-l-4 transition-all duration-300 ${
                  activeFeature === index 
                    ? 'border-l-primary bg-white shadow-sm' 
                    : 'border-l-transparent hover:bg-gray-50'
                }`}
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>
          
          {/* Feature Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img 
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;