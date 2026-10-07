"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { Send, CheckCircle2, Mail, Copy } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Graceful transmission mechanism:
    // Generate mailto link and trigger, then display state feedback
    const subject = encodeURIComponent(`[Transmission] STARDUST Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.contactEmail}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-astro-blue/15"
      aria-label="Establish Transmission Contact"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs text-stardust-gold tracking-cosmic">10 //</span>
          <h2 className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-text-primary uppercase">
            ESTABLISH TRANSMISSION
          </h2>
        </div>
        <div className="font-mono text-[11px] tracking-widest text-text-muted">
          COMM CHANNEL // DIRECT FREQUENCY
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Transmission Context & Direct Address */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-light text-text-primary mb-4 leading-snug">
              Open to technical collaboration, competition dialogue, or constructive critique.
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Whether discussing computer vision architectures, robotics sensor loops, CTF methodologies, or virtual world design—transmissions are monitored directly.
            </p>
          </div>

          {/* Direct Frequency Card */}
          <div className="bg-space-900 border border-astro-blue/20 p-6 space-y-4">
            <div className="flex items-center space-x-2 font-mono text-[10px] text-astro-blue uppercase tracking-widest">
              <Mail className="w-3.5 h-3.5 text-stardust-gold" />
              <span>DIRECT FREQUENCY</span>
            </div>

            <div className="font-mono text-sm text-text-primary break-all">
              {profile.contactEmail}
            </div>

            <button
              onClick={handleCopyEmail}
              className="flex items-center space-x-2 font-mono text-xs text-stardust-gold hover:text-white transition-colors duration-150 uppercase tracking-wider"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? "COPIED TO CLIPBOARD" : "COPY ADDRESS"}</span>
            </button>
          </div>

          <div className="font-mono text-[10px] text-text-muted">
            RESPONSE LATENCY: TYPICALLY &lt; 24-48 HOURS
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="lg:col-span-7 bg-space-900 border border-astro-blue/20 p-8 md:p-10">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-stardust-gold animate-pulse-subtle" />
              <h4 className="font-heading text-2xl font-light text-text-primary uppercase tracking-wide">
                TRANSMISSION DISPATCHED
              </h4>
              <p className="font-body text-sm text-text-secondary max-w-md">
                Your transmission packet has been prepared and triggered through your mail client. If it did not open automatically, please send directly to {profile.contactEmail}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 font-mono text-xs text-stardust-gold hover:text-white uppercase tracking-widest border border-stardust-gold/30 px-4 py-2"
              >
                DISPATCH ANOTHER PACKET
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                  CALLSIGN / NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Alex Mercer"
                  className="w-full bg-space-950 border border-astro-blue/20 text-sm text-text-primary px-4 py-3 font-mono focus:border-stardust-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                  RETURN FREQUENCY / EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="e.g. alex@domain.org"
                  className="w-full bg-space-950 border border-astro-blue/20 text-sm text-text-primary px-4 py-3 font-mono focus:border-stardust-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                  TRANSMISSION PAYLOAD / MESSAGE
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Outline your thoughts, proposal, or question..."
                  className="w-full bg-space-950 border border-astro-blue/20 text-sm text-text-primary px-4 py-3 font-mono focus:border-stardust-gold focus:outline-none transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center space-x-3 bg-stardust-gold text-space-950 font-mono text-xs tracking-widest uppercase py-4 hover:bg-white transition-all duration-200 font-medium"
              >
                <span>SEND TRANSMISSION</span>
                <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
