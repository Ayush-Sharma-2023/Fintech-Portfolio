"use client";
import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  Code2,
  ArrowRight,
  Briefcase,
  TerminalSquare,
  Users,
} from "lucide-react";

export default function ContactMe() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-16">
      <div className="bg-gray-900 rounded-3xl shadow-2xl max-w-5xl w-full p-10">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-green-400 text-center mb-4 tracking-wide">
          Contact Me
        </h1>
        <p className="text-lg text-gray-300 text-center mb-6 max-w-5xl mx-auto">
          I'm passionate about the intersection of finance and technology. With
          a strong command of programming and a deep understanding of the stock
          market, I bridge the gap between financial experts and developers. I
          see the future in{" "}
          <span className="text-green-400 font-medium">FinTech</span> — and I'm
          equipped with the rare blend of skills to help shape it.
        </p>
        {/* <p className="text-md text-gray-400 text-center mb-10 italic">
          Let’s collaborate on building the next generation of trading tools,
          investment platforms, or data-driven financial products.
        </p> */}

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 gap-8 text-lg">
          <ContactItem
            icon={<Mail className="text-yellow-400 mt-1" size={24} />}
            label="Email"
            value="ayushsharmaarps@gmail.com"
            href="mailto:ayushsharmaarps@gmail.com"
          />
          <ContactItem
            icon={<Linkedin className="text-blue-500 mt-1" size={24} />}
            label="LinkedIn"
            value="linkedin.com/in/ayush-sharma-fsd/"
            href="https://www.linkedin.com/in/ayush-sharma-fsd/"
          />
          <ContactItem
            icon={<Github className="text-gray-300 mt-1" size={24} />}
            label="GitHub"
            value="github.com/Ayush-Sharma-2023"
            href="https://github.com/Ayush-Sharma-2023"
          />
          <ContactItem
            icon={<Code2 className="text-purple-400 mt-1" size={24} />}
            label="CodeChef"
            value="codechef.com/users/ayush_sharma32"
            href="https://www.codechef.com/users/ayush_sharma32"
          />
        </div>

        {/* CTA Box */}
        {/* <div className="mt-12 bg-gray-800 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-green-300">💼 Let's Build Together</h2>
            <p className="text-gray-400 mt-2">
              Have an idea, a job offer, or just want to chat tech? I'm just a message away.
            </p>
          </div>
          <a
            href="mailto:ayushsharmaarps@gmail.com"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full flex items-center gap-2 transition"
          >
            Reach Out <ArrowRight size={18} />
          </a>
        </div> */}

        {/* Social Sentiment */}
        {/* <div className="mt-16 grid sm:grid-cols-3 gap-6 text-center">
          <SentimentCard
            icon={<Briefcase size={28} className="text-green-400 mx-auto mb-2" />}
            title="Full-time"
            subtitle="Open to SDE roles"
          />
          <SentimentCard
            icon={<Users size={28} className="text-yellow-300 mx-auto mb-2" />}
            title="Collaborations"
            subtitle="Hackathons / Projects"
          />
          <SentimentCard
            icon={<TerminalSquare size={28} className="text-blue-400 mx-auto mb-2" />}
            title="Side Hustles"
            subtitle="Freelance or Startup work"
          />
        </div> */}

        {/* Footer Quote */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            “Positioned long on learning, diversified across domains, and always
            ready to deploy skills ”
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function ContactItem({ icon, label, value, href }) {
  return (
    <div className="flex items-start space-x-4">
      {icon}
      <div>
        <p className="text-gray-400">{label}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-300 transition"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

function SentimentCard({ icon, title, subtitle }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition">
      {icon}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}
