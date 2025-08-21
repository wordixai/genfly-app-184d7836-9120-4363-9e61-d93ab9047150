import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-nav w-full">
      <nav className="w-full border-b border-nav-light bg-nav-light backdrop-blur-58 transition-all duration-300">
        <div className="mx-auto flex w-full items-center justify-between px-3 py-3 md:py-2">
          <div className="container flex items-center justify-between h-full w-full lg:max-w-6xl mx-auto px-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex w-full cursor-pointer items-center justify-between md:px-2 md:py-2 font-semibold text-dark rounded-md border border-transparent bg-transparent hover:opacity-80">
                  <div className="w-20 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                    Intercom
                  </div>
                </button>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center space-x-1 before:h-5 before:w-px before:bg-gray-400 before:mr-4">
                <li><a href="#" className="px-2 py-2 text-sm font-semibold text-dark hover:text-dark/80">Home</a></li>
                <li className="relative group">
                  <button className="flex items-center px-2 py-2 text-sm font-semibold text-dark hover:text-dark/80">
                    Product <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </li>
                <li><a href="#" className="px-2 py-2 text-sm font-semibold text-dark hover:text-dark/80">Customers</a></li>
                <li className="relative group">
                  <button className="flex items-center px-2 py-2 text-sm font-semibold text-dark hover:text-dark/80">
                    Resources <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </li>
                <li><a href="#" className="px-2 py-2 text-sm font-semibold text-dark hover:text-dark/80">Pricing</a></li>
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="px-2 py-2 text-sm font-semibold text-dark hover:text-dark/80">Contact sales</a>
              <a href="#" className="px-2 py-2 text-sm font-semibold text-dark hover:text-dark/80">Sign in</a>
              <a href="#" className="px-2 py-2 text-sm font-semibold text-dark hover:text-dark/80">View demo</a>
              <Button className="bg-primary text-white hover:bg-primary/90">Apply now</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="focus:outline-none text-dark"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-nav-light">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block py-3 text-xl font-bold text-dark">Home</a>
              <button className="flex w-full items-center justify-between py-3 text-xl font-bold text-dark">
                Product <ChevronDown className="h-5 w-5" />
              </button>
              <a href="#" className="block py-3 text-xl font-bold text-dark">Customers</a>
              <button className="flex w-full items-center justify-between py-3 text-xl font-bold text-dark">
                Resources <ChevronDown className="h-5 w-5" />
              </button>
              <a href="#" className="block py-3 text-xl font-bold text-dark">Pricing</a>
              
              <div className="pt-4 space-y-2">
                <a href="#" className="block py-3 font-semibold text-dark">Contact sales</a>
                <a href="#" className="block py-3 font-semibold text-dark">Sign in</a>
                <Button variant="secondary" className="w-full mb-2">View demo</Button>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">Apply now</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;