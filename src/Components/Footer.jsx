const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-purple-500 to-blue-400 p-6 rounded-lg shadow-lg text-center text-white py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Company Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">IT Consulting Firm</h2>
              <p className="text-gray-800 font-medium mt-2">
                Empowering businesses with innovative technology solutions.
              </p>
            </div>
  
            {/* Center: Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-800 font-medium">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#Services" className="hover:text-white">Services</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href="#blog" className="hover:text-white">Blog</a>
            </div>
  
            {/* Right: Social Media Icons */}
            <div className="flex gap-4 text-gray-800 font-medium">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
  
          {/* Bottom: Copyright */}
          <div className="text-center text-gray-800 font-medium mt-6 border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} IT Consulting Firm. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  