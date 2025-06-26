import Link from 'next/link';

export default function Tos() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6 py-24 panel mt-24 mb-32 text-center animate-fadeIn">
        <h1 className="text-5xl font-extrabold mb-4 text-shadow select-none">Terms of Service</h1>
        <p className="mb-14 text-sm text-slate-400">Effective Date: June 2025</p>

        <section className="space-y-14 text-slate-300">
          <CenteredBlock title="1. Acceptance of Terms">
            By using RunePulse (“the Bot”) or this website (“the Site”), you agree to comply with and be bound by these Terms of Service. If you do not agree, do not use the Bot or the Site.
          </CenteredBlock>

          <CenteredBlock title="2. Description of Service">
            RunePulse provides RuneScape-related functionality, including checking player stats, tracking boss kill counts, comparing player stats, posting weekly XP gains, and announcing level-ups or achievements. RunePulse is a third-party tool and is not affiliated with Jagex Ltd. or RuneScape.
          </CenteredBlock>

          <CenteredBlock title="3. User Data">
            RunePulse collects and stores Discord User IDs and RuneScape usernames solely to provide its services. This data is not shared, sold, or used for any purpose outside of the Bot’s features. Users may remove their data at any time using the <code className="bg-slate-800 px-1 rounded text-sm text-slate-200">/unlink</code> command or by contacting the Bot owner.
          </CenteredBlock>

          <CenteredBlock title="4. Acceptable Use">
            <p>You agree not to:</p>
            <CenteredList items={[
              'Use RunePulse for illegal, abusive, or malicious purposes.',
              'Attempt to exploit, harm, or disrupt RunePulse or this Site.',
              'Reverse engineer, scrape, or attempt unauthorized access to the Bot systems.',
            ]} />
            <p className="mt-4">Violation may result in bans or restrictions from using RunePulse.</p>
          </CenteredBlock>

          <CenteredBlock title="5. Disclaimer of Warranty">
            RunePulse and this Site are provided "as is" without warranties of any kind. We do not guarantee uptime, availability, or accuracy. You use this service at your own risk.
          </CenteredBlock>

          <CenteredBlock title="6. Limitation of Liability">
            RunePulse owner(s) shall not be liable for any damages or losses arising from use or inability to use the Bot or Site. This includes, but is not limited to, indirect, incidental, or consequential damages.
          </CenteredBlock>

          <CenteredBlock title="7. Termination">
            We reserve the right to terminate or suspend your access to RunePulse or this Site at any time for any reason, including violation of these Terms.
          </CenteredBlock>

          <CenteredBlock title="8. Changes to the Terms">
            These Terms may be updated at any time without prior notice. Continued use of RunePulse or this Site constitutes acceptance of any changes.
          </CenteredBlock>

          <CenteredBlock title="9. Contact">
            For questions, concerns, or data removal requests, contact the RunePulse developer through Discord or the support channels listed on this website.
          </CenteredBlock>
        </section>

        <div className="mt-16 flex justify-center gap-8 text-blue-400 font-medium">
          <Link href="/" className="hover:underline">← Back to Home</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>

        <p className="mt-16 text-xs text-slate-500">
          © {new Date().getFullYear()} RunePulse. This bot is not affiliated with Jagex Ltd. or RuneScape.
        </p>
      </div>

      <style jsx>{`
        .panel {
          background-color: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          backdrop-filter: blur(10px);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
        }
        .text-shadow {
          text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function CenteredBlock({ title, children }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3 text-blue-300">{title}</h2>
      <div className="text-base leading-relaxed text-center">{children}</div>
    </div>
  );
}

function CenteredList({ items }) {
  return (
    <ul className="list-disc inline-block text-left pl-6 mt-4 text-sm leading-relaxed space-y-2 text-slate-300">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
