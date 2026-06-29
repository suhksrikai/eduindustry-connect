'use client';

import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const highlights = [
  {
    title: 'Benefits',
    description: 'Share your expertise, strengthen your community impact, and connect with future talent through meaningful learning experiences.',
  },
  {
    title: 'CSR Impact',
    description: 'Support education and create measurable social value while inspiring the next generation of professionals.',
  },
  {
    title: 'Talent Pipeline',
    description: 'Build early visibility with students and schools and create pathways into internships, apprenticeships, and careers.',
  },
  {
    title: 'Community Engagement',
    description: 'Partner with local educators to create exciting opportunities that enrich students and strengthen community relationships.',
  },
];

export default function ForPartnersPage() {
  return (
    <SiteShell>
      <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
              For Partners
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Connect your organisation with the next generation of learners
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Create meaningful industry experiences that inspire students, strengthen your brand, and support long-term talent development.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/" className="rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                Become a Partner
              </Link>
              <Link href="/experiences" className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:border-white/60">
                View Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-teal-50 p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <p className="mt-3 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">Become a Partner</h2>
          <p className="mt-4 text-gray-600">
            Share your workplace, host learning experiences, and contribute to a stronger future workforce through safe, engaging programs.
          </p>
          <Link href="/" className="mt-6 inline-flex rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 font-semibold text-white transition hover:opacity-90">
            Start Partnership Enquiry
          </Link>
        </div>
      </section>
      </div>
    </SiteShell>
  );
}
