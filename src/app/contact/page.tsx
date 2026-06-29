import Link from 'next/link';
import { SiteShell } from '@/components/site-shell';

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
              Contact Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              We’d love to hear from schools, partners, and educators.
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Whether you want to book an experience, discuss a partnership, or ask about program details, our team will be happy to help.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Get in touch</h2>
            <p className="mt-4 text-gray-600">
              Share your goals and we’ll help you find the right pathway for your school or organisation.
            </p>
            <div className="mt-8 space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:hello@beyondclassrooms.com" className="text-blue-600 hover:text-blue-700">
                  hello@beyondclassrooms.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <a href="tel:+611300000000" className="text-blue-600 hover:text-blue-700">
                  +61 1300 000 000
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p>Serving schools and partners across Australia</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-teal-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">Start a conversation</h3>
            <p className="mt-4 text-gray-600">
              Tell us whether you’re a school, partner, or educator and we’ll guide you to the right next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/for-schools" className="rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-5 py-3 font-semibold text-white transition hover:opacity-90">
                For Schools
              </Link>
              <Link href="/for-partners" className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:border-blue-300 hover:text-blue-600">
                For Partners
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
