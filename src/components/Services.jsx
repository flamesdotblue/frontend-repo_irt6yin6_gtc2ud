import React from 'react';
import { Monitor, Megaphone, Mic, Scissors, Bot } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    slug: 'website-design',
    desc: 'Conversion-focused websites that look stunning and perform beautifully on every device.',
    points: ['Responsive & fast', 'SEO-ready', 'CMS or static options'],
  },
  {
    icon: Megaphone,
    title: 'Social Media Management',
    slug: 'social-media-management',
    desc: 'End-to-end content planning, design, and scheduling to grow your audience and engagement.',
    points: ['Content calendars', 'Design & captions', 'Analytics & growth'],
  },
  {
    icon: Mic,
    title: 'Podcast Post‑Production',
    slug: 'podcast-post-production',
    desc: 'Polished podcasts with professional editing, cleanup, mastering, and show notes.',
    points: ['Noise reduction', 'Mix & master', 'Show notes'],
  },
  {
    icon: Scissors,
    title: 'Audio & Video Editing',
    slug: 'audio-video-editing',
    desc: 'Clean cuts, motion graphics, reels/shorts, and export-ready formats for every platform.',
    points: ['Color & sound polish', 'Captions & reels', 'YouTube/TikTok ready'],
  },
  {
    icon: Bot,
    title: 'Virtual Assistant',
    slug: 'virtual-assistant',
    desc: 'Admin, research, inbox, and scheduling support so you can focus on the big moves.',
    points: ['Inbox & calendar', 'Research & docs', 'Client support'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">What we do</h2>
          <p className="mt-3 text-slate-300">A flexible menu of services to support your brand from strategy to production.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, points, slug }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400/40 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-300">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between">
                <a href={`#/services/${slug}`} className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">Learn more →</a>
                <a href="#contact" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">Get a quote →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
