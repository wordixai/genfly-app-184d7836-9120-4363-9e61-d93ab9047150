import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "What does the Intercom Early Stage Program cover?",
      answer: `Get access to the best AI-first Intercom features for growing teams: like powerful automation tools and Fin AI Agent. Get all of these features at a 90% discount, from $65/month for your first year, 50% off your second year and then 25% off for the third year.

Here's a quick breakdown of what you have access to:
• 6 Advanced Seats (Feature List)
• 6 Copilot Seats  
• 20 Lite Seats
• Proactive Support Plus: 500 messages per month (Product tours, checklists, surveys)
• 300 Fin Resolutions per month

Your 90% discount applies to usage based costs for Email, Messages Sent over (500 per month) and additional Seats (over 6).

The discount does not apply to Fin (over 300 per month), Phone, SMS & WhatsApp which are charged at list price. Here is a full guide to Intercom's usage based costs`,
      bgColor: 'bg-teal-50',
    },
    {
      question: "What about Fin AI Agent pricing?",
      answer: "300 Fin Resolutions per month are included, after that they are charged at 99c per resolution. Read more about Fin pricing here.",
      bgColor: 'bg-pink-50',
    },
    {
      question: "What happens after the first year?",
      answer: "In the first year you get this program for $65 per month from the original list price of $903. That's over a 90% discount! Subsequently, in the second year, you'll get a 50% discount, followed by a 25% discount in the third year. If the costs are too high in the second year and beyond you can move to our Essential plan starting at $39/month.",
      bgColor: 'bg-yellow-50',
    },
    {
      question: "What if we're larger than 15 employees?",
      answer: "If your company is not eligible, you can start a trial of our regular plans on our pricing page or connect with our Sales team through Messenger for more options.",
      bgColor: 'bg-green-50',
    },
    {
      question: "How can I become a partner and offer this discount to my portfolio companies?",
      answer: "You can apply to be a partner here. Our team will review your application and get back to you.",
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div className="py-16 bg-cream">
      <div className="container mx-auto px-4 lg:max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark">
            FAQs
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`w-full text-left p-6 rounded-lg border transition-all ${
                  openIndex === index 
                    ? 'border-gray-300 shadow-sm' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-dark pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
            ))}
          </div>
          
          {/* FAQ Content */}
          <div className="lg:sticky lg:top-8">
            {openIndex >= 0 && (
              <div className={`${faqs[openIndex].bgColor} rounded-lg p-8 transition-all duration-500`}>
                <h3 className="font-semibold text-dark text-xl mb-4">
                  {faqs[openIndex].question}
                </h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {faqs[openIndex].answer}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;