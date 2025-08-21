const EligibilitySection = () => {
  const requirements = [
    {
      title: 'Early stage',
      highlight: '$10M',
      description: 'Up to $10M in funding.'
    },
    {
      title: 'Small team', 
      highlight: '15 employees',
      description: 'Fewer than 15 employees.'
    },
    {
      title: 'New customer',
      highlight: 'Intercom',
      description: 'Not currently an Intercom customer.'
    }
  ];

  return (
    <div className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark">
            Eligibility requirements
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {requirements.map((req, index) => (
            <div key={index} className="border border-gray-400 p-6 h-full flex flex-col">
              <div className="mb-auto">
                <div className="border-b border-gray-400 pb-4 mb-6">
                  <span className="text-sm font-bold text-dark">{req.title}</span>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-dark">
                    {req.description.includes(req.highlight) ? (
                      <>
                        {req.description.split(req.highlight)[0]}
                        <span className="text-highlight font-normal">{req.highlight}</span>
                        {req.description.split(req.highlight)[1]}
                      </>
                    ) : (
                      req.description
                    )}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EligibilitySection;