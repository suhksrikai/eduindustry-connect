'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { SiteShell } from '@/components/site-shell';

const experiences = [
  {
    title: 'Software Engineering Studio Visit',
    yearLevels: 'Years 9–12',
    curriculum: ['Software Development', 'Digital Technologies', 'Problem Solving'],
    duration: '2–3 hours',
    location: 'Bangalore',
    outcomes: [
      'Understand modern software development workflows',
      'Explore coding, testing, and team collaboration',
    ],
  },
  {
    title: 'AI & Robotics Lab Experience',
    yearLevels: 'Years 8–12',
    curriculum: ['STEM', 'Engineering', 'Artificial Intelligence'],
    duration: '3 hours',
    location: 'Bangalore',
    outcomes: [
      'See robotics systems in action',
      'Discuss ethics, automation, and machine learning',
    ],
  },
  {
    title: 'Aerospace & Engineering Tour',
    yearLevels: 'Years 10–12',
    curriculum: ['Physics', 'Engineering', 'Design Thinking'],
    duration: '4 hours',
    location: 'Bangalore',
    outcomes: [
      'Explore flight systems and engineering design',
      'Connect physics concepts to real-world applications',
    ],
  },
  {
    title: 'EV Manufacturing Experience',
    yearLevels: 'Years 9–12',
    curriculum: ['Science', 'Manufacturing', 'Sustainability'],
    duration: '2.5 hours',
    location: 'Bangalore',
    outcomes: [
      'Learn how electric vehicles are designed and built',
      'Examine sustainable manufacturing practices',
    ],
  },
  {
    title: 'Biotechnology Research Visit',
    yearLevels: 'Years 10–12',
    curriculum: ['Biology', 'Chemistry', 'Health Science'],
    duration: '3 hours',
    location: 'Bangalore',
    outcomes: [
      'Explore laboratory research and innovation',
      'Connect health science with biotechnology careers',
    ],
  },
  {
    title: 'Hospital Career Discovery Program',
    yearLevels: 'Years 9–12',
    curriculum: ['Health', 'Careers', 'Human Biology'],
    duration: '2 hours',
    location: 'Bangalore',
    outcomes: [
      'Discover health careers and workplace pathways',
      'Understand patient care, diagnostics, and healthcare systems',
    ],
  },
  {
    title: 'Renewable Energy Learning Experience',
    yearLevels: 'Years 8–12',
    curriculum: ['Environmental Science', 'Energy', 'Sustainability'],
    duration: '2.5 hours',
    location: 'Bangalore',
    outcomes: [
      'Learn about clean energy systems',
      'Investigate sustainability and innovation',
    ],
  },
  {
    title: 'Startup Innovation Hub Visit',
    yearLevels: 'Years 9–12',
    curriculum: ['Entrepreneurship', 'Business', 'Innovation'],
    duration: '2 hours',
    location: 'Bangalore',
    outcomes: [
      'See startup teams create products and services',
      'Understand entrepreneurship and innovation culture',
    ],
  },
];

export default function ExperiencesPage() {
  const [query, setQuery] = useState('');

  const filteredExperiences = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return experiences;

    return experiences.filter((experience) => {
      const haystack = [
        experience.title,
        experience.yearLevels,
        experience.curriculum.join(' '),
        experience.location,
        experience.outcomes.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(search);
    });
  }, [query]);

  return (
    <SiteShell>
      <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
              Bangalore Learning Experiences
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Discover curriculum-aligned industry learning experiences in Bangalore
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Browse hands-on experiences that connect students with real-world technology, manufacturing, healthcare, and innovation environments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search experiences by title, curriculum, or year level"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none ring-0 focus:border-blue-400 focus:bg-white"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Experiences</h2>
            <p className="mt-2 text-gray-600">Premium, curriculum-friendly experiences for schools and teachers.</p>
          </div>
          <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            {filteredExperiences.length} experiences
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <article key={experience.title} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {experience.location}
                </span>
                <span className="text-sm font-medium text-gray-500">{experience.duration}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>

              <div className="mt-6 space-y-4 text-sm text-gray-600">
                <div>
                  <p className="mb-1 font-semibold text-gray-900">Recommended Year Levels</p>
                  <p>{experience.yearLevels}</p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-gray-900">Curriculum Areas</p>
                  <p>{experience.curriculum.join(' • ')}</p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-gray-900">Bangalore Location</p>
                  <p>{experience.location}</p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-gray-900">Key Learning Outcomes</p>
                  <ul className="list-disc space-y-1 pl-5">
                    {experience.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link href="/for-schools" className="inline-flex rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  Request Experience
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>
    </SiteShell>
  );
}
