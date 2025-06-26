import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6 py-24 panel mt-24 mb-32 text-center animate-fadeIn">
        <h1 className="text-5xl font-extrabold mb-4 text-shadow select-none">Privacy Policy</h1>
        <p className="mb-14 text-sm text-slate-400">Effective Date: June 2025</p>

        <section className="space-y-14 text-slate-300">
          <CenteredBlock title="1. Introduction">
            This Privacy Policy explains how RunePulse ("we", "our", "the Bot") collects, uses, and protects information from users ("you") who use the Discord Bot and this website ("the Site"). RunePulse is a third-party tool and is not affiliated with Jagex Ltd. or RuneScape.
          </CenteredBlock>

          <CenteredBlock title="2. Information We Collect">
            <CenteredList items={[
              'Discord User ID',
              'Linked RuneScape usernames (RSNs)',
              'XP snapshots and skill progress for tracking features',
              'Optional data related to boss kill counts, achievements, and leaderboards',
            ]} />
          </CenteredBlock>

          <CenteredBlock title="3. How We Use Your Information">
            <p>Your data is used exclusively for the functionality of the Bot, including:</p>
            <CenteredList items={[
              'Tracking RuneScape stats and progress',
              'Providing XP tracking, weekly leaderboards, and achievement announcements',
              'Storing linked accounts for personalized features',
            ]} />
          </CenteredBlock>

          <CenteredBlock title="4. Data Sharing">
            RunePulse does not sell, share, or disclose your data to third parties. Data is only accessible to the developer/owner for the purpose of maintaining and improving the Bot.
          </CenteredBlock>

          <CenteredBlock title="5. Data Storage and Security">
            Your data is stored securely in files or databases hosted by the Bot owner. Reasonable measures are in place to protect data from unauthorized access, loss, or misuse.
          </CenteredBlock>

          <CenteredBlock title="6. Data Retention">
            Data is retained as long as your Discord account is linked to RunePulse. You may remove your data at any time using the <code className="bg-slate-800 px-1 rounded text-sm text-slate-200">/unlink</code> command or by requesting removal through Discord support.
          </CenteredBlock>

          <CenteredBlock title="7. Your Rights">
            <CenteredList items={[
              'View the data stored about you',
              'Request corrections or updates',
              'Request deletion of your data at any time',
            ]} />
          </CenteredBlock>

          <CenteredBlock title="8. Changes to This Privacy Policy">
            This Privacy Policy may be updated periodically. Continued use of RunePulse or this Site constitutes acceptance of any changes.
          </CenteredBlock>

          <CenteredBlock title="9. Contact">
            For questions, concerns, or data removal requests, contact the RunePulse developer via Discord or through the support channels listed on this website.
          </CenteredBlock>
        </section>

        <div className="mt-16 flex justify-center gap-8 text-blue-400 font-medium">
          <Link href="/" className="hover:underline">← Back to Home</Link>
          <Link href="/tos" className="hover:underline">Terms of Service</Link>
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

// Fully centered section block
function CenteredBlock({ title, children }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3 text-blue-300">{title}</h2>
      <div className="text-base leading-relaxed text-center">{children}</div>
    </div>
  );
}

// Fully centered bullet list
function CenteredList({ items }) {
  return (
    <ul className="list-disc inline-block text-left pl-6 mt-4 text-sm leading-relaxed space-y-2 text-slate-300">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
