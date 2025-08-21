import { Button } from '@/components/ui/button';

const PricingCards = () => {
  const pricingTiers = [
    {
      year: 'Year 1',
      discount: '90%',
      description: 'for the 1st year—300 free Fin resolutions included monthly. Fin, Phone, SMS, and WhatsApp are charged at list price.',
    },
    {
      year: 'Year 2', 
      discount: '50%',
      description: 'for the 2nd year—Fin, Phone, SMS, and WhatsApp are charged at list price.',
    },
    {
      year: 'Year 3',
      discount: '25%', 
      description: 'for the 3rd year—Fin, Phone, SMS, and WhatsApp are charged at list price.',
    },
  ];

  return (
    <div className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6 text-dark">
            Save year on year
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="border border-gray-400 p-6 h-full flex flex-col">
              <div className="mb-auto">
                <div className="border-b border-gray-400 pb-4 mb-6">
                  <span className="text-sm font-bold text-dark">{tier.year}</span>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-dark mb-4">
                    <span className="text-highlight font-normal">{tier.discount}</span> discount
                  </h3>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">{tier.description}</p>
              
              <a href="#" className="text-sm font-semibold text-dark underline hover:no-underline">
                View pricing
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;