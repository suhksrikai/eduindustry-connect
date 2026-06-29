import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

const resources = [
  {
    title: 'How it works',
    description: 'A short guide to discovering, booking, and running curriculum-aligned learning experiences.',
  },
  {
    title: 'Safety standards',
    description: 'Everything schools and partners need to know about safeguarding, risk management, and compliance.',
  },
  {
    title: 'Partner onboarding',
    description: 'A simple overview for organisations looking to host experiences and engage with learners.',
  },
];

export default function ResourcesPage() {
  return (
    <SiteShell>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
              Resources
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Helpful guides for schools, partners, and educators
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Explore practical resources to help you understand the experience, the process, and the impact.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">{resource.title}</h2>
              <p className="mt-3 text-gray-600">{resource.description}</p>
              <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">
                Ask a question →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
