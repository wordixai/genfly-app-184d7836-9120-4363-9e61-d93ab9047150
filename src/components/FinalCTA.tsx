import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <div className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&crop=center"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 py-24 px-8 text-center">
            <h2 className="font-sans text-3xl lg:text-4xl font-bold text-white mb-8 max-w-2xl mx-auto">
              Get started with our Early Stage Program today
            </h2>
            
            <Button className="bg-white text-dark hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Apply now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;