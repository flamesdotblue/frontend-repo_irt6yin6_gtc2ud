import React from 'react';
import { Rocket, Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-white">
            <Rocket className="h-6 w-6 text-cyan-400" />
            <span className="text-lg">Flames Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-900 hover:bg-cyan-400 transition-colors">Get a quote</a>
          </nav>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:text-white"
            onClick={() => setOpen(v => !v)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 text-slate-200">
            <a href="#services" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Services</a>
            <a href="#work" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Process</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Contact</a>
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex w-max items-center rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-900 hover:bg-cyan-400 transition-colors">Get a quote</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
