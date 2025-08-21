const CompanyMarquee = () => {
  const companies = [
    'Anthropic', 'Lovable', 'Clay', 'Perplexity', 
    'Consensus', 'Gamma', 'Synthesia', 'ChatPRD'
  ];

  return (
    <div className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-6xl text-center">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark mb-12 max-w-2xl mx-auto">
          Join 10,000+ fast-growing startups using Intercom
        </h2>
        
        <div className="max-w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set */}
            {companies.map((company, index) => (
              <span 
                key={`first-${index}`}
                className="inline-block text-2xl lg:text-4xl font-bold text-gray-400 mx-8 font-sans"
              >
                {company}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company, index) => (
              <span 
                key={`second-${index}`}
                className="inline-block text-2xl lg:text-4xl font-bold text-gray-400 mx-8 font-sans"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-md font-semibold">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyMarquee;