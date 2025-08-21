const ResourcesSection = () => {
  const resources = [
    {
      number: '01',
      title: 'Exclusive deals on startup tools',
      description: 'Program members get credits and discounts worth $100K on Stripe, Notion and more.',
      link: '#'
    },
    {
      number: '02', 
      title: 'Early Stage Academy',
      description: 'Deep-dive courses from Intercom experts on topics like support, engagement, and sales.',
      link: '#'
    },
    {
      number: '03',
      title: 'Inside the Intercom Blog', 
      description: 'Our blog and podcast give you in-depth interviews, best practices, insights and more.',
      link: '#'
    },
    {
      number: '04',
      title: 'Intercom Community',
      description: 'Join our community forum to ask questions or connect with Intercom customers and partners.',
      link: '#'
    }
  ];

  return (
    <div className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark">
            Other helpful resources
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="mb-4">
                <span className="font-serif text-2xl font-bold text-dark">
                  {resource.number}
                </span>
                <div className="w-full h-px bg-repeat-x dotted-separator mt-2"></div>
              </div>
              
              <h6 className="font-bold text-dark mb-3">
                {resource.title}
              </h6>
              
              <p className="text-xs text-gray-600 mb-4">
                {resource.description}
              </p>
              
              <a 
                href={resource.link}
                className="text-sm font-semibold text-dark underline hover:no-underline"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;