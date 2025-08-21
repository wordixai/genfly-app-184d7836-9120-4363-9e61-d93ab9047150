const Footer = () => {
  const footerSections = [
    {
      title: 'Helpdesk features',
      links: [
        'Inbox', 'Copilot', 'Tickets', 'Omnichannel', 
        'Help Center', 'Apps & Integrations', 'Reporting', 
        'Knowledge Hub', 'Outbound'
      ]
    },
    {
      title: 'Fin features',
      links: ['Fin overview', 'Capabilities', 'AI Engine']
    },
    {
      title: 'Pricing',
      links: ['Intercom Suite pricing', 'Fin pricing']
    },
    {
      title: 'Learn',
      links: ['Events', 'Intercom blog', 'Academy', 'YouTube']
    },
    {
      title: 'Evaluate',
      links: ['Why choose Intercom', 'Safety & security', 'ROI calculator', 'Customer case studies']
    },
    {
      title: 'Support', 
      links: ['Changes', 'Help Center', 'Developer hub', 'Intercom community', 'Status']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Contact Press']
    },
    {
      title: 'Programs',
      links: ['Solution partner', 'Technology partner', 'Early stage']
    },
    {
      title: 'Intercom in action',
      links: ['View demo', 'Free trial', 'Contact sales', 'Sign in']
    }
  ];

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4 lg:max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h6 className="font-semibold mb-4 text-white">
                {section.title}
              </h6>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Terms</a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Security</a>
            </div>
            
            <div className="flex items-center gap-2">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=25&h=12&fit=crop" 
                alt="Privacy choices"
                className="w-6 h-3"
              />
              <button className="text-sm text-gray-400 hover:text-gray-300">
                Your Privacy Choices
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;