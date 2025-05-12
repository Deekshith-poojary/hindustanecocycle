import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Bodycomp } from "../components";
import TeamPage from "./Teampage";
export default function Contact() {
  return (
    <div>        
    <Bodycomp title="Contact Us" className='' />
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8 rounded-t-4xl md:flex-row flex-col" >
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col gap-8 md:mr-60">
        {/* <h2 className="text-3xl font-extrabold text-center text-slate-800">Contact Us</h2> */}

        {/* Email */}
        <a
          href="mailto:contact@example.com"
          className="flex items-center gap-4 hover:text-blue-500 transition-colors"
        >
          <Mail className="w-6 h-6 text-blue-400" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Email</span>
            <p className="text-gray-600 text-sm">contact@example.com</p>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+12345678901"
          className="flex items-center gap-4 hover:text-blue-500 transition-colors"
        >
          <Phone className="w-6 h-6 text-blue-400" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Phone</span>
            <p className="text-gray-600 text-sm">+1 (234) 567-8901</p>
          </div>
        </a>

        {/* Address */}
        <a
          href="https://maps.google.com/?q=123+Main+Street+Springfield+USA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:text-blue-500 transition-colors"
        >
          <MapPin className="w-6 h-6 text-blue-400" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Address</span>
            <p className="text-gray-600 text-sm">
              123 Main Street,
              <br />
              Springfield, USA
            </p>
          </div>
        </a>
      </div>
      <TeamPage />
    </div>
    </div>

  );
}
