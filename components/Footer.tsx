
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {currentYear} VDS prinkzzzzz. All rights reserved.</p>
          <p className="mt-1">A showcase e-commerce experience built with React and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
