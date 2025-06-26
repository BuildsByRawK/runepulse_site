import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const inviteLink = 'YOUR_INVITE_LINK_HERE';

  const features = [
    {
      title: '🧙 Stat Lookup',
      desc: 'Check any RuneScape player’s stats directly from Discord with detailed embeds.',
    },
    {
      title: '⚔️ Compare Players',
      desc: 'View two RuneScape accounts side by side with highlights for higher stats.',
    },
    {
      title: '🎯 Weekly XP Leaderboards',
      desc: 'Track and post weekly XP gains automatically to your Discord server.',
    },
    {
      title: '🎉 Level-Up Announcements',
      desc: 'Celebrate level-ups and major milestones like 99s in your community.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.feature-card').forEach((el) => observer.observe(el));
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex flex-col font-sans">

      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold text-blue-400 hover:text-blue-300 transition">
            RunePulse
          </Link>
          <nav className="flex gap-6 text-sm md:text-base">
            <Link href="/privacy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="/tos" className="hover:text-slate-300 transition">
              Terms of Service
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-6 flex justify-center items-center fade-in mb-10">
        <div className="max-w-5xl w-full text-center panel">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-shadow select-none">
            RunePulse
          </h1>
          <p className="text-slate-200 text-base md:text-lg mb-3 leading-relaxed max-w-3xl mx-auto">
            Your ultimate RuneScape Discord companion.
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Look up stats, compare players, announce achievements, and more — all from your server.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-6 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-shadow select-none max-w-4xl mx-auto">
            Powerful Features
          </h2>
          <div className="grid gap-y-8 gap-x-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center">
            {features.map(({ title, desc }, index) => (
              <div
                key={title}
                className="feature-card opacity-0 translate-y-8 transition duration-700 ease-out"
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="panel-glow p-6 w-full max-w-[400px] mx-auto text-center rounded-2xl cursor-default hover:scale-105 hover:ring-2 hover:ring-blue-500/50 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-3">{title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invite CTA */}
      <section className="pt-10 pb-16 px-6 flex justify-center fade-in mt-10">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse z-0"></div>
          <a
            href={inviteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 glow-btn-lg select-none"
          >
            Invite RunePulse
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6 text-sm text-slate-500 select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p>© {new Date().getFullYear()} RunePulse. Not affiliated with Jagex Ltd.</p>
          <div className="flex justify-center gap-x-4">
            <Link href="/privacy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="/tos" className="hover:text-slate-300 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .panel {
          background-color: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
        }

        .panel-glow {
          background-color: rgba(51, 65, 85, 0.35);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(16px);
          box-shadow: 0 0 24px rgba(59, 130, 246, 0.12);
          will-change: transform;
        }

        .glow-btn-lg {
          display: inline-block;
          background: linear-gradient(to right, #3b82f6, #2563eb);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          box-shadow: 0 0 24px rgba(59, 130, 246, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
        }

        .glow-btn-lg:hover {
          transform: scale(1.03);
          box-shadow: 0 0 36px rgba(59, 130, 246, 0.7);
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-card.show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .text-shadow {
          text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
}
