import React from 'react';
import { Mail, Phone, Globe, Rocket } from 'lucide-react';

const ContactFooter = () => {
  const formRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Project inquiry: ${service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
              <Rocket className="h-3.5 w-3.5 text-cyan-400" />
              Start your project
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Let’s build something exceptional</h2>
            <p className="mt-3 text-slate-300">Tell us about your goals and we’ll respond within 24 hours with next steps, timelines, and transparent pricing.</p>

            <div className="mt-6 space-y-2 text-slate-300 text-sm">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-400" /> hello@example.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-400" /> +1 (555) 000‑0000</p>
              <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-cyan-400" /> Serving clients worldwide</p>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-slate-300">Service</label>
                <select name="service" className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400">
                  <option>Website Design</option>
                  <option>Social Media Management</option>
                  <option>Podcast Post-Production</option>
                  <option>Audio & Video Editing</option>
                  <option>Virtual Assistant</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-slate-300">Message</label>
                <textarea name="message" rows={5} className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" placeholder="Share your goals, timeline, and any links." />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-slate-400">By submitting, you agree to be contacted about your project.</p>
              <button type="submit" className="inline-flex items-center rounded-md bg-cyan-500 px-6 py-2.5 font-semibold text-slate-900 hover:bg-cyan-400 transition-colors">Send</button>
            </div>
          </form>
        </div>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4 text-cyan-400" />
            <span>Flames Studio</span>
            <span className="opacity-60">© {new Date().getFullYear()}</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#home" className="hover:text-white">Back to top</a>
          </nav>
        </div>
      </footer>
    </section>
  );
};

export default ContactFooter;
