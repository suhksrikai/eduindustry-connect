'use client';

import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const benefits = [
  {
    title: 'Benefits',
    description: 'Give students access to hands-on learning experiences that build confidence, curiosity, and career awareness.',
  },
  {
    title: 'Curriculum Alignment',
    description: 'Each experience is mapped to curriculum outcomes so teachers can easily connect learning to class goals.',
  },
  {
    title: 'Safety',
    description: 'Every partner undergoes a review process covering safeguarding, risk management, and duty of care.',
  },
];

const steps = [
  'Share your school goals and preferred year levels.',
  'Browse aligned experiences and shortlist opportunities.',
  'Submit a booking request and confirm the visit details.',
];

export default function ForSchoolsPage() {
  return (
    <SiteShell>
      <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
              For Schools
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Bring real-world industry learning into your classroom
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Discover safe, curriculum-aligned experiences that help students connect lessons with future careers and community opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/experiences" className="rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                Explore Experiences
              </Link>
              <Link href="/" className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:border-white/60">
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-teal-50 p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <p className="mt-3 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Booking Process</h2>
              <p className="mt-4 text-gray-600">
                Our simple process helps schools organise meaningful and safe learning experiences with minimal admin.
              </p>
              <ol className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900">Join the Waitlist</h3>
              <p className="mt-3 text-gray-600">
                Be first to hear about new experiences, school programs, and partner opportunities in your region.
              </p>
              <Link href="/" className="mt-6 inline-flex rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </SiteShell>
  );
}
