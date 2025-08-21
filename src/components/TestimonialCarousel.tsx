import { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      company: 'Equals',
      quote: "Intercom's startup program is a game-changer for early-stage companies. Its customer service platform has powerful AI capabilities that let us scale up with demand, and delight our customers by delivering fast, proactive, and accurate support.",
      author: 'Bobby Pinero',
      title: 'CEO and Co-Founder at Equals',
      bgColor: 'bg-green-light',
    },
    {
      company: 'Passionfroot', 
      quote: "As a startup - every. customer. matters. When we had 10 customers, Intercom helped us deliver personal support. When we scaled to 1,000s of customers, Fin AI helped us delight them as if we still had 10 customers! Their startup program made picking them even more of a no-brainer.",
      author: 'Filip Mark',
      title: 'Chief Growth Officer',
      bgColor: 'bg-orange-light',
    },
    {
      company: 'Runna',
      quote: "Intercom allowed us to provide great customer outcomes at scale. With average weekly volumes of 3000+ we knew we needed a system that allowed us to speak to multiple customers concurrently.",
      author: 'Samuel Barrett', 
      title: 'Head of Customer Experience',
      bgColor: 'bg-blue',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-4xl">
        {/* Company tabs */}
        <div className="flex items-center gap-4 mb-8 justify-center overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap px-4 py-2 font-semibold transition-all relative ${
                activeIndex === index ? 'text-dark' : 'text-gray-400'
              }`}
            >
              {testimonial.company}
              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-dark"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Testimonial card */}
        <div className="max-w-2xl mx-auto">
          <div className={`${testimonials[activeIndex].bgColor} rounded-lg p-8 transition-all duration-500`}>
            <div className="mb-6">
              <span className="text-2xl font-bold text-dark">
                {testimonials[activeIndex].company}
              </span>
            </div>
            
            <blockquote className="text-lg text-dark mb-6 leading-relaxed">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div className="w-full h-px bg-repeat-x dotted-separator mb-6"></div>
            
            <div>
              <h6 className="font-semibold text-dark mb-1">
                {testimonials[activeIndex].author}
              </h6>
              <span className="text-gray-600">
                {testimonials[activeIndex].title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;