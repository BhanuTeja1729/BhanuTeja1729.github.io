import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Bhanu Teja
          </div>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <a href="https://github.com/BhanuTeja1729" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Github size={20} className="text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/y-bhanuteja-reddy-109658395" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Linkedin size={20} className="text-gray-700" />
            </a>
            <a href="mailto:bhanutejary02@gmail.com" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Mail size={20} className="text-gray-700" />
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white rounded-b-lg shadow-lg">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/BhanuTeja1729" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/y-bhanuteja-reddy-109658395" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="text-gray-700" />
                </a>
                <a href="mailto:bhanutejary02@gmail.com">
                  <Mail size={20} className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}