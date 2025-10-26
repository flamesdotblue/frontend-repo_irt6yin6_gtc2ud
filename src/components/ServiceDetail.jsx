import React from 'react';
import { Monitor, Megaphone, Mic, Scissors, Bot, ArrowLeft, CheckCircle2 } from 'lucide-react';

const SERVICE_MAP = {
  'website-design': {
    title: 'Website Design',
    icon: Monitor,
    intro: 'Conversion-focused websites that look stunning and perform beautifully on every device.',
    highlights: [
      'Responsive layouts built with performance in mind',
      'SEO-ready structure and metadata',
      'CMS or fully static options depending on your needs',
    ],
    deliverables: [
      'Homepage + key inner pages',
      'Design system and component library',
      'SEO setup and on-page best practices',
      'Analytics + basic automation hooks',
    ],
    process: [
      'Discovery and goal mapping',
      'Wireframes and content outline',
      'High-fidelity design and iteration',
      'Development, QA, and launch',
    ],
    startingFrom: '$2,500',
  },
  'social-media-management': {
    title: 'Social Media Management',
    icon: Megaphone,
    intro: 'End-to-end content planning, design, and scheduling to grow your audience and engagement.',
    highlights: [
      'Content calendars aligned to brand goals',
      'Design, captions, and posting handled for you',
      'Monthly reporting and insight-driven tweaks',
    ],
    deliverables: [
      'Monthly content calendar',
      'Graphic templates and reels/shorts edits',
      'Captions and community engagement playbook',
    ],
    process: [
      'Brand and audience discovery',
      'Content strategy and creative direction',
      'Production and scheduling',
      'Reporting and optimization',
    ],
    startingFrom: '$1,200/mo',
  },
  'podcast-post-production': {
    title: 'Podcast Post‑Production',
    icon: Mic,
    intro: 'Polished podcasts with professional editing, cleanup, mastering, and show notes.',
    highlights: [
      'Noise reduction and dialogue cleanup',
      'Mixing and loudness normalization to standards',
      'Timestamps, show notes, and audiograms on request',
    ],
    deliverables: [
      'Edited and mastered episodes',
      'Intro/Outro music integration',
      'Show notes and descriptions',
    ],
    process: [
      'Raw file intake and QC',
      'Edit, cleanup, and mix',
      'Mastering and export',
      'Notes and delivery',
    ],
    startingFrom: '$150/episode',
  },
  'audio-video-editing': {
    title: 'Audio & Video Editing',
    icon: Scissors,
    intro: 'Clean cuts, motion graphics, reels/shorts, and export-ready formats for every platform.',
    highlights: [
      'Color and audio polish for a premium feel',
      'Captions, motion graphics, and social crops',
      'Platform-optimized exports (YouTube, TikTok, IG, etc.)',
    ],
    deliverables: [
      'Edited long-form and shorts/reels',
      'Captions and graphic overlays',
      'Multiple aspect ratios and codecs',
    ],
    process: [
      'Briefing and references',
      'Rough cut and feedback loop',
      'Finishing (color, sound, graphics)',
      'Exports and delivery',
    ],
    startingFrom: '$400/video',
  },
  'virtual-assistant': {
    title: 'Virtual Assistant',
    icon: Bot,
    intro: 'Admin, research, inbox, and scheduling support so you can focus on the big moves.',
    highlights: [
      'Calendar, inbox, and client follow-ups',
      'Research, documentation, and SOPs',
      'Light creative support (presentations, docs)',
    ],
    deliverables: [
      'Hours-based or retainer support',
      'Weekly check-ins and reports',
      'Shared systems and playbooks',
    ],
    process: [
      'Onboarding and access setup',
      'Priority alignment and roadmap',
      'Execution and lightweight PM',
      'Ongoing optimization',
    ],
    startingFrom: '$600/mo',
  },
};

const ServiceDetail = ({ slug }) => {
  const data = SERVICE_MAP[slug];

  if (!data) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <a href="#/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back
        </a>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold">Service not found</h1>
        <p className="mt-2 text-slate-300">The page you’re looking for doesn’t exist.</p>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="#/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to services
        </a>

        <div className="mt-6 flex items-start gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>
            <p className="mt-2 text-slate-300 max-w-2xl">{data.intro}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h2 className="text-xl font-semibold">Highlights</h2>
              <ul className="mt-4 space-y-2 text-slate-300">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h2 className="text-xl font-semibold">Process</h2>
              <ol className="mt-4 space-y-3 text-slate-300 list-decimal list-inside">
                {data.process.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-lg font-semibold">What you get</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {data.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-lg bg-slate-900/60 border border-white/10 p-4">
                <p className="text-sm text-slate-300">Starting from</p>
                <p className="text-2xl font-bold">{data.startingFrom}</p>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-900 hover:bg-cyan-400 transition-colors">Get a quote</a>
                <a href="#/" className="text-center text-sm font-semibold text-cyan-400 hover:text-cyan-300">Explore all services →</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
