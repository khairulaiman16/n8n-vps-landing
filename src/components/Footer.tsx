import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} GB Network Solutions Sdn. Bhd.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-900">Home</a>
          <a href="#" className="hover:text-slate-900">Web Hosting</a>
          <a href="#" className="hover:text-slate-900">Support</a>
          <a href="#" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
