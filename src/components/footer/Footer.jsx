import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Company Info */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Cognosphere Dynamics LLC. All
              rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <ul className="flex space-x-4">
            <li>
              <a
                href="/privacy-policy"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="text-sm hover:text-gray-400 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
