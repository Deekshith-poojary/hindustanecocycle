import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-900 border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap md:flex-row flex-col-reverse justify-between">
          {/* Logo and Copyright */}
          <div className="w-full md:w-1/4 p-6">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-50">
                &copy; 2025 Hindustan Eco Cycle. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* About Us */}
          <div className="w-full md:w-1/4 p-6">
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-4">About Us</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-base text-gray-50 hover:text-gray-300" to="/about">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-50 hover:text-gray-300" to="/contact-us">
                  Meet the Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/4 p-6">
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-base text-gray-50 hover:text-gray-300" to="/services">
                  What We Offer
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-50 hover:text-gray-300" to="/pricing">
                  
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/4 p-6">
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-4">Contact Us</h3>
            <p className="text-base text-gray-50">
              Email: <a className="hover:text-gray-300" href="mailto:support@hindustanecocycle.com">support@hindustanecocycle.com</a>
            </p>
            <p className="text-base text-gray-50">
              Phone: <a className="hover:text-gray-300" href="tel:+911234567890">+91 12345 67890</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
