'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SiteShell } from '@/components/site-shell';

export default function Home() {
  const router = useRouter();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Waitlist form state
  const [waitlist, setWaitlist] = useState({ name: '', org: '', email: '', role: '' });
  const [joined, setJoined] = useState(false);

  const faqs = [
    {
      question: 'How are experiences aligned to curriculum outcomes?',
      answer: 'Every experience on our platform is mapped to specific curriculum standards and learning outcomes. Schools can filter by year level, subject, and learning objectives to find perfectly aligned opportunities.',
    },
    {
      question: 'Which year levels are supported?',
      answer: 'We support educational experiences for all year levels from primary through secondary education. Each experience is tagged with appropriate year levels and age groups.',
    },
    {
      question: 'How do organisations become partners?',
      answer: 'Industry partners can apply through our partner portal. We review applications to ensure experiences meet our educational standards and safety requirements.',
    },
    {
      question: 'Are safety requirements included?',
      answer: 'Yes! Safety is our top priority. All industry partners must meet strict safety standards, and every experience includes risk assessments and duty of care protocols.',
    },
    {
      question: 'Can we customize experiences for our school?',
      answer: 'Absolutely. Many partners offer customizable experiences tailored to specific curriculum requirements or learning objectives of your school.',
    },
    {
      question: 'How do we book experiences?',
      answer: 'Booking is simple through our platform. Select your experience, review dates and details, and submit a booking request. Partners typically respond within 48 hours.',
    },
  ];

  const industries = [
    { name: 'Technology', icon: '💻' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Renewable Energy', icon: '⚡' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Agriculture', icon: '🌾' },
    { name: 'Finance', icon: '💰' },
    { name: 'Engineering', icon: '🔧' },
    { name: 'Media & Creative', icon: '🎨' },
  ];

  const testimonials = [
    {
      content: 'BeyondClassrooms transformed how our students understand career pathways. The curriculum alignment is exceptional.',
      author: 'Sarah Martinez',
      role: 'School Principal',
      school: 'Riverside Academy',
    },
    {
      content: 'An outstanding platform for connecting STEM learning with real-world applications. Our students were engaged and inspired.',
      author: 'David Thompson',
      role: 'Science Coordinator',
      school: 'Central High School',
    },
    {
      content: 'As an industry partner, we love giving back to education. The platform makes it easy and impactful.',
      author: 'Emma Kumar',
      role: 'CSR Manager',
      company: 'TechCorp Industries',
    },
  ];

  return (
    <SiteShell>
      <div suppressHydrationWarning className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-20 md:py-32 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-blue-400/10 backdrop-blur-sm border border-blue-400/20 px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-blue-200">✨ Transforming Education</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Connect Classrooms with Real-World Industry
              </h1>

              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
                BeyondClassrooms is the marketplace connecting schools with curriculum-aligned industry experiences. Inspire students, engage partners, and bridge the gap between education and careers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/experiences" className="rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-4 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 text-center">
                  Explore Experiences
                </Link>
                <Link href="/for-partners" className="rounded-lg border-2 border-white/30 hover:border-white/60 px-8 py-4 text-white font-semibold backdrop-blur-sm transition duration-300 text-center">
                  Become a Partner
                </Link>
              </div>
            </div>

            {/* Hero visual section */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-teal-400/20 blur-3xl"></div>
              <div className="relative grid grid-cols-1 gap-4 rounded-2xl lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-blue-600/20 to-teal-500/20 p-6 shadow-2xl backdrop-blur-sm">
                  <div className="rounded-2xl border border-white/20 bg-slate-950/70 p-6 shadow-inner">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Industry Visits</p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Students exploring innovation</h3>
                      </div>
                      <div className="rounded-full bg-teal-500/20 px-3 py-1 text-sm font-medium text-teal-200">
                        Live learning
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                        <p className="text-sm text-blue-100">Technology</p>
                        <p className="mt-2 text-2xl font-semibold text-white">AI & Robotics</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                        <p className="text-sm text-blue-100">Manufacturing</p>
                        <p className="mt-2 text-2xl font-semibold text-white">EV Systems</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                        <p className="text-sm text-blue-100">Healthcare</p>
                        <p className="mt-2 text-2xl font-semibold text-white">Career Discovery</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                        <p className="text-sm text-blue-100">Sustainability</p>
                        <p className="mt-2 text-2xl font-semibold text-white">Renewable Energy</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-lg font-semibold text-white">
                      ✦
                    </div>
                    <h3 className="text-xl font-semibold text-white">STEM Learning</h3>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100">
                      Real-world experiences that connect theory, curiosity, and future careers.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-lg font-semibold text-white">
                      ↗
                    </div>
                    <h3 className="text-xl font-semibold text-white">Innovation Hub</h3>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100">
                      Designed for schools seeking inspiring, curriculum-aligned industry engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Waitlist */}
      <section id="waitlist" className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div suppressHydrationWarning className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Join the Waitlist</h2>
            <p className="text-gray-600 mb-6">Be the first to know about new experiences and partner opportunities.</p>

            {!joined ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setJoined(true);
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input
                  value={waitlist.name}
                  onChange={(e) => setWaitlist({ ...waitlist, name: e.target.value })}
                  placeholder="Name"
                  className="rounded-lg border border-gray-300 px-4 py-3"
                  required
                />

                <input
                  value={waitlist.org}
                  onChange={(e) => setWaitlist({ ...waitlist, org: e.target.value })}
                  placeholder="School / Organisation"
                  className="rounded-lg border border-gray-300 px-4 py-3"
                  required
                />

                <input
                  type="email"
                  value={waitlist.email}
                  onChange={(e) => setWaitlist({ ...waitlist, email: e.target.value })}
                  placeholder="Email"
                  className="rounded-lg border border-gray-300 px-4 py-3 md:col-span-2"
                  required
                />

                <input
                  value={waitlist.role}
                  onChange={(e) => setWaitlist({ ...waitlist, role: e.target.value })}
                  placeholder="Role (e.g. Teacher, Coordinator)"
                  className="rounded-lg border border-gray-300 px-4 py-3 md:col-span-2"
                  required
                />

                <div className="md:col-span-2 text-right">
                  <button type="submit" className="rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 text-white font-semibold">
                    Join Waitlist
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-lg font-semibold text-gray-900">Thanks — you’re on the waitlist!</h3>
                <p className="text-gray-600 mt-2">We’ll email you when new opportunities and partner invites are available.</p>
                <button
                  onClick={() => {
                    setJoined(false);
                    setWaitlist({ name: '', org: '', email: '', role: '' });
                  }}
                  className="mt-6 rounded-lg border border-gray-300 px-6 py-2"
                >
                  Add another
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Curriculum Aligned', desc: 'Aligned to curriculum outcomes and standards' },
              { title: 'Industry Led', desc: 'Delivered by experienced industry partners' },
              { title: 'Real World Learning', desc: 'Hands-on experiences connecting theory to practice' },
              { title: 'Australia Wide', desc: 'Available across Australia' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.title}
                </div>
                <p className="text-gray-600 font-medium">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Perfect Learning Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Search by curriculum outcomes, year level, industry, or learning objective
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const trimmed = searchQuery.trim();
                router.push(`/experiences${trimmed ? `?search=${encodeURIComponent(trimmed)}` : ''}`);
              }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Curriculum outcome"
                  className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Year level"
                  className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Industry"
                  className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 text-white font-semibold hover:shadow-lg transition">
                  Search
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Explore 1000+ curriculum-aligned experiences ready to inspire your students
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Browse by Industry */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Browse by Industry
            </h2>
            <p className="text-xl text-gray-600">
              Explore learning opportunities across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-teal-50 p-8 cursor-pointer transition duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  24+ experiences
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Schools */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Benefits for Schools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: 'Curriculum Alignment',
                description: 'Every experience is mapped to specific learning outcomes and standards',
              },
              {
                icon: '🎯',
                title: 'Flexible Scheduling',
                description: 'Book experiences that fit your school calendar and class timetable',
              },
              {
                icon: '🌟',
                title: 'Student Engagement',
                description: 'Connect classroom theory with real-world industry applications',
              },
              {
                icon: '💼',
                title: 'Career Exploration',
                description: 'Expose students to diverse career pathways and industry roles',
              },
              {
                icon: '✅',
                title: 'Safety Assured',
                description: 'All partners meet strict safety standards and duty of care requirements',
              },
              {
                icon: '🚀',
                title: 'Easy Booking',
                description: 'Simple platform to discover, compare, and book experiences',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Industry Partners */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Benefits for Industry Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Inspire Future Talent',
                description: 'Engage the next generation and build pipeline of potential employees',
              },
              {
                icon: '🤝',
                title: 'Community Impact',
                description: 'Support education initiatives and strengthen community relationships',
              },
              {
                icon: '📢',
                title: 'Brand Visibility',
                description: 'Showcase your company culture and innovation to schools and students',
              },
              {
                icon: '📊',
                title: 'Insights & Analytics',
                description: 'Track engagement metrics and understand your educational impact',
              },
              {
                icon: '⚙️',
                title: 'Easy Management',
                description: 'Manage experiences, bookings, and communications from one platform',
              },
              {
                icon: '🏆',
                title: 'CSR Excellence',
                description: 'Demonstrate commitment to education and workforce development',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Schools Discover',
                description: 'Browse and search curriculum-aligned experiences from industry partners',
              },
              {
                step: 2,
                title: 'Partners Showcase',
                description: 'Industry organisations create and manage educational experiences and tours',
              },
              {
                step: 3,
                title: 'Students Connect',
                description: 'Experience real-world applications and explore exciting career pathways',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 text-white font-bold text-2xl mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Loved by Educators & Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}{testimonial.school ? ` at ${testimonial.school}` : ` at ${testimonial.company}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Everything you need to know about BeyondClassrooms
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-5 flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 transition duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                  <span className={`text-2xl text-blue-600 transition-transform duration-300 flex-shrink-0 ml-4 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    ⌄
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-8 py-5 bg-gradient-to-r from-blue-50 to-teal-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join 500+ schools and 250+ industry partners creating meaningful educational experiences that inspire students and shape careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-schools" className="rounded-lg bg-white px-8 py-4 text-blue-600 font-semibold hover:shadow-2xl transition duration-300 text-center">
              Start as a School
            </Link>
            <Link href="/for-partners" className="rounded-lg border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition duration-300 text-center">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Questions? We're here to help.
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team or explore our help center
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition text-center">
                Contact Us
              </Link>
              <Link href="/resources" className="rounded-lg border border-gray-300 px-8 py-3 font-semibold hover:bg-gray-50 transition text-center">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </SiteShell>
  );
}