import { Button } from '@/components/ui/button';

const G2Report = () => {
  const competitors = [
    { name: 'Fin by Intercom', score: 89, percentage: 100 },
    { name: 'Zendesk AI Agent', score: 59, percentage: 64 },
    { name: 'Decagon', score: 54, percentage: 59 },
    { name: 'Forethought', score: 40, percentage: 45 },
    { name: 'Ada', score: 33, percentage: 38 },
  ];

  return (
    <div className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-dark mb-6">
                It's official: Fin is the best AI agent on the market
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                In G2's most recent User Satisfaction Ratings for Customer Service, 
                Intercom rates highest across the board. Based on over 19,000 reviews 
                from real customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Read the G2 Report
                </Button>
                <Button variant="outline">
                  Read G2 Fin Reviews
                </Button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-4">G2's AI Agent score</p>
              
              <div className="space-y-3">
                {competitors.map((competitor, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-32 text-sm text-gray-700 pr-4">
                      {competitor.name}
                    </div>
                    <div className="flex-1 relative">
                      <div className="h-8 bg-gray-200 rounded-sm overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            index === 0 ? 'bg-primary' : 'bg-gray-400'
                          }`}
                          style={{ width: `${competitor.percentage}%` }}
                        ></div>
                      </div>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-semibold text-white">
                        {competitor.score}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default G2Report;