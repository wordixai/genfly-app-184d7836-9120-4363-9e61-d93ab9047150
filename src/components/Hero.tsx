import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <div className="pt-20 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <section className="py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold bg-gray-200 text-gray-800">
                Early Stage Program
              </Badge>
              
              <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-tight mb-8 text-dark">
                Startups get 90% off Intercom + 1 year of Fin free
              </h1>
              
              <div className="w-full h-px bg-repeat-x dotted-separator mb-8"></div>
              
              <p className="text-lg text-dark mb-8 leading-relaxed">
                Startups receive a 90% discount on the Intercom Customer Service Suite, 
                including Fin—the #1 AI agent in customer service—free for a full year 
                with 300 monthly resolutions. That's equivalent to having a full-time 
                human support agent at no cost.
              </p>
              
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg">
                Apply now
              </Button>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-200 to-blue-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop&crop=center" 
                  alt="Customer service interface"
                  className="w-full h-full object-cover"
                />
                {/* Overlay with mock interface */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full mx-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">I</span>
                      </div>
                      <span className="font-semibold text-gray-800">Intercom</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-gray-600">How can I help you today?</p>
                      </div>
                      <div className="bg-primary text-white rounded-lg p-3 ml-8">
                        <p className="text-sm">I need help with my account</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;