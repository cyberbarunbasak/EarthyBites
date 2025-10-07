import React, { useState, useEffect } from 'react';
import { Phone, Leaf, Clock, Home, ChevronDown, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'mushrooms', 'why', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const whatsappNumber = '9007607064';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-green-800">Earthy Bites</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Mushrooms', 'Why Us', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase().replace(' ', '') 
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Mushrooms', 'Why Us', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
              Earthy Bites
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Fresh. Organic. Home-Grown Mushrooms.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Order Now on WhatsApp
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-green-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-green-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Earthy Bites, our journey began in the heart of our home, where passion for sustainable living 
                meets the art of mushroom cultivation. What started as a small hobby has blossomed into a mission 
                to bring the purest, most nutritious mushrooms to your table.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every mushroom is grown with meticulous care, using organic methods that honor nature's wisdom. 
                We believe in transparency, sustainability, and the incredible power of home-grown goodness.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <p className="text-green-800 font-semibold">Home-Grown with Love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mushrooms Section */}
      <section id="mushrooms" className="py-20 bg-gradient-to-br from-cream to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Premium Varieties</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Discover our carefully cultivated mushroom varieties, each offering unique flavors and health benefits
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Oyster Mushrooms */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-6xl">🍄</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Oyster Mushrooms</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Rich in protein and essential nutrients</li>
                  <li>• Delicate, slightly sweet flavor</li>
                  <li>• Perfect for stir-fries and soups</li>
                  <li>• High in antioxidants</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>

            {/* Milky Mushrooms */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-r from-pink-100 to-orange-100 flex items-center justify-center">
                <div className="text-6xl">🍶</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Milky Mushrooms</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Creamy texture with mild flavor</li>
                  <li>• Excellent source of B vitamins</li>
                  <li>• Great for grilling and roasting</li>
                  <li>• Supports immune health</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Why Choose Earthy Bites?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Experience the difference that comes from passionate, home-based cultivation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "100% Organic",
                description: "Grown without synthetic pesticides or chemicals"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Freshly Harvested",
                description: "Picked at peak freshness for maximum flavor and nutrition"
              },
              {
                icon: <Home className="w-8 h-8" />,
                title: "Home-Grown Care",
                description: "Each mushroom receives personal attention and care"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Local Delivery",
                description: "Fresh mushrooms delivered right to your doorstep"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Order?</h2>
            <p className="text-xl text-green-100 mb-8">
              Have a question or want to order? Chat with us on WhatsApp!
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-green-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Earthy Bites</span>
            </div>
            <p className="text-gray-400 mb-4">
              Fresh, organic, home-grown mushrooms delivered with care
            </p>
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                WhatsApp
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Instagram
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Earthy Bites. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors z-50 md:hidden"
      >
        <Phone className="w-6 h-6" />
      </a>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;