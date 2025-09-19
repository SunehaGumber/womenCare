import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-pink-900 text-white bottom-0">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        
        <div className="flex gap-3">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        

        <div className="text-sm">
          <p>This website is for informational purposes only. Please consult a healthcare professional for personal guidance.</p>
          <p className="mt-2">© 2025 <span className="font-bold">HerHealth</span> | Made with ❤️ by Suneha</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
