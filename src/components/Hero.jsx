import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Global creative services for modern brands
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-200 max-w-2xl">
            Website design, social media management, podcast post-production, audio/video editing, and virtual assistant support — delivered with a playful, modern touch.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-3 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors">
              Get a free quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-semibold hover:border-white/40 hover:bg-white/5 transition">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
