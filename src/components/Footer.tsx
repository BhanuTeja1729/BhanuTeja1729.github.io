import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              BT
            </h3>
            <p className="text-gray-400">Full Stack Developer building intuitive and scalable web solutions</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-blue-400 transition-colors">About</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Projects</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Skills</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/BhanuTeja1729" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/y-bhanuteja-reddy-109658395" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:bhanutejary02@gmail.com" className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              Made with <Heart size={16} className="inline text-red-500 mx-1" /> by Yarramaddu BhanuTeja Reddy
            </p>
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
