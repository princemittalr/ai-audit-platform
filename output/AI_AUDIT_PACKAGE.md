# AI AUDIT PACKAGE

## Project

- Repository: /home/prince-mittal/eduing-landing
- Framework: Next.js
- Language: TypeScript
- Package Manager: npm
- CSS: Tailwind CSS

---

## Repository Statistics

- Files: 79
- Folders: 32
- Components: 32
- Hooks: 50
- Context Usage: 0

---

# Engineering Findings

## MEDIUM — Middleware not found

**Category:** Architecture

**Description:** No Next.js middleware detected.

**Recommendation:** Add middleware if authentication, redirects or request filtering are required.

---

## LOW — No environment files

**Category:** Configuration

**Description:** No .env files were detected.

**Recommendation:** Verify environment configuration is documented.




---

# HIGH PRIORITY SOURCE CODE



==================================================

FILE

package.json

IMPORTANCE

100

```
{
  "name": "eduing-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^11.18.2",
    "next": "14.2.35",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.35",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```



==================================================

FILE

README.md

IMPORTANCE

99

```
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```



==================================================

FILE

next.config.mjs

IMPORTANCE

98

```
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```



==================================================

FILE

app/layout.tsx

IMPORTANCE

97

```
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EDUING.in — Unified University Admissions Platform",
  description: "Discover, apply, and get admitted to universities across India with one profile. Zero repeated forms. 500+ universities, 50K+ students.",
  openGraph: {
    title: "EDUING.in — Unified University Admissions Platform",
    description: "One profile. Hundreds of universities. Zero repeated forms. EDUING.in connects students with the right programs across India.",
    type: "website",
    url: "https://eduing.in",
    siteName: "EDUING.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDUING.in — Unified University Admissions Platform",
    description: "One profile. Hundreds of universities. Zero repeated forms.",
  },
  icons: {
    icon: '/bandwlogo.PNG',
    apple: '/bandwlogo.PNG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, background: '#06060A' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

```



==================================================

FILE

tsconfig.json

IMPORTANCE

97

```
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```



==================================================

FILE

app/(public)/page.tsx

IMPORTANCE

95

```
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import StatsBar from '@/components/sections/StatsBar';
import UniversitySection from '@/components/sections/UniversitySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import ProblemSection from '@/components/sections/ProblemSection';
import DownloadSection from '@/components/sections/DownloadSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <UniversitySection />
      <Features />
      <HowItWorks />
      <ProblemSection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadSection />
      <CTASection />
    </main>
  );
}

```



==================================================

FILE

app/about/page.tsx

IMPORTANCE

95

```
import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About — EDUING.in',
  description: 'Learn about EDUING.in, our mission to simplify university admissions across India, and meet our founder Aaryan Sharma.',
  openGraph: {
    title: 'About — EDUING.in',
    description: 'Learn about EDUING.in, our mission to simplify university admissions across India.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="about-hero">
        <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">OUR MISSION</span>
            <h1 className="section-title mb-6">
              About <span style={{ color: '#6366F1' }}>EDUING.in</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              We&apos;re building India&apos;s most student-friendly university admissions platform —
              one that removes the chaos of applying to multiple colleges and replaces it with
              a seamless, unified experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding" style={{ background: '#0C0C10' }} id="about-problem">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">THE PROBLEM</span>
            <h2 className="section-title mb-8" style={{ fontSize: '36px' }}>Why We Built This</h2>
            <div className="mob-card">
              <p className="text-[16px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Every year, millions of students across India go through the painful process of
                applying to universities. They fill the same forms repeatedly, navigate confusing
                eligibility criteria, miss deadlines because there&apos;s no central tracking, and
                struggle to compare institutions objectively.
              </p>
              <p className="text-[16px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                The system is fragmented — each university has its own portal, its own format,
                its own timeline. Students waste weeks on administrative work that should take hours.
              </p>
              <p className="text-[16px] leading-relaxed font-medium text-white">
                We knew there had to be a better way. That&apos;s why we built EDUING.in.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Solution */}
      <section className="section-padding" style={{ background: '#08080A' }} id="about-solution">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">WHAT WE DO</span>
            <h2 className="section-title mb-8" style={{ fontSize: '36px' }}>Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mob-card">
                <span className="block mb-3" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                  FOR STUDENTS
                </span>
                <h3 className="text-[20px] font-bold text-white mb-3">For Students</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Create one comprehensive profile. Discover universities across India.
                  Apply with a single click. Track every application in real-time.
                  No repeated forms, no missed deadlines.
                </p>
              </div>
              <div className="mob-card">
                <span className="block mb-3" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                  FOR UNIVERSITIES
                </span>
                <h3 className="text-[20px] font-bold text-white mb-3">For Universities</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Receive structured, verified applications. Access a wider pool of qualified
                  applicants. Use analytics to make data-driven admission decisions.
                  Reduce administrative overhead significantly.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding" style={{ background: '#0C0C10' }} id="about-founder">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label text-center block">FOUNDERS</span>
            <h2 className="section-title mb-8 text-center" style={{ fontSize: '36px' }}>Meet the Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mob-card text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-[32px] mx-auto mb-4"
                style={{ background: 'rgba(79,70,229,0.15)' }}
              >
                👨‍💻
              </div>
              <h3 className="text-[22px] font-bold text-white mb-1">Aaryan Sharma</h3>
              <p className="text-[15px] font-medium mb-1" style={{ color: '#6366F1' }}>
                Founder & CEO
              </p>
              <p className="text-[14px] mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                B.Tech CSE, Dayananda Sagar University
              </p>
              <blockquote
                className="text-[16px] leading-relaxed italic text-left pl-5"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  borderLeft: '3px solid #4F46E5',
                }}
              >
                &ldquo;I experienced the frustration of college admissions firsthand —
                filling the same details on dozens of portals, missing deadlines, and
                not knowing where I stood. EDUING.in is the solution I wish I had.
                We&apos;re building it so that no student has to go through that chaos again.&rdquo;
              </blockquote>
            </div>

            <div className="mob-card text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-[32px] mx-auto mb-4"
                style={{ background: 'rgba(79,70,229,0.15)' }}
              >
                👨‍💻
              </div>
              <h3 className="text-[22px] font-bold text-white mb-1">Lakshya Pandey</h3>
              <p className="text-[15px] font-medium mb-1" style={{ color: '#6366F1' }}>
                Founder & CEO
              </p>
              <p className="text-[14px] mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                B.Tech CSE - AI ML, Dayananda Sagar University
              </p>
              <blockquote
                className="text-[16px] leading-relaxed italic text-left pl-5"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  borderLeft: '3px solid #4F46E5',
                }}
              >
                &ldquo;As someone passionate about building technology that solves real problems, I wanted to create a platform that simplifies one of the most important journeys in a student's life. EDUING.in is our commitment to making higher education more accessible through innovation.&rdquo;
              </blockquote>
            </div>

          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding" style={{ background: '#08080A' }} id="about-vision">
        <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">VISION</span>
            <h2 className="section-title mb-6" style={{ fontSize: '36px' }}>Our Vision</h2>
            <p className="mb-10" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              To become India&apos;s default university admissions infrastructure — where every
              student applies through one platform, and every university receives structured,
              verified applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: '2026', label: 'Launch Year' },
                { value: '500+', label: 'Target Universities' },
                { value: '20+', label: 'States Covered' },
              ].map((stat) => (
                <div key={stat.label} className="mob-card px-8 py-5 text-center">
                  <p className="text-[28px] font-bold" style={{ color: '#6366F1' }}>{stat.value}</p>
                  <p className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding" style={{ background: '#0C0C10' }} id="about-cta">
        <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
          <AnimatedSection>
            <div
              className="mx-auto"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '64px 48px',
                background: '#111114',
              }}
            >
              <h2 className="text-[36px] font-bold text-white mb-4">Want to Know More?</h2>
              <p className="mb-8" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '17px' }}>
                We&apos;d love to hear from you. Reach out for partnerships, press, or just to say hello.
              </p>
              <a href="/contact" className="btn-primary">
                Contact Us →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

```



==================================================

FILE

app/contact/page.tsx

IMPORTANCE

95

```
'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined') {
      try {
        const existing = JSON.parse(window.localStorage.getItem('eduing_contacts') || '[]');
        existing.push({
          ...formData,
          timestamp: new Date().toISOString(),
        });
        window.localStorage.setItem('eduing_contacts', JSON.stringify(existing));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle = {
    background: '#18181C',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#FAFAFA',
    borderRadius: '8px',
  };

  const inputFocusClass = 'w-full px-4 py-3 text-[15px] focus:outline-none focus:border-accent transition-colors';

  return (
    <>
      <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="contact">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-label">CONTACT</span>
              <h1 className="section-title mb-4">Get in touch</h1>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '17px' }}>
                Have a question or want to partner? We&apos;d love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left — Contact Info */}
            <AnimatedSection delay={0.1}>
              <div className="mob-card h-full">
                <h2 className="text-[22px] font-bold text-white mb-8">Contact Information</h2>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0"
                      style={{ background: 'rgba(79,70,229,0.15)' }}
                    >
                      📧
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-white mb-1">Email</p>
                      <a
                        href="mailto:eduing.in2026@gmail.com"
                        className="text-[14px] hover:text-white transition-colors"
                        style={{ color: '#818CF8' }}
                      >
                        eduing.in2026@gmail.com
                      </a>
                    </div>
                  </div>

                  

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0"
                      style={{ background: 'rgba(245,158,11,0.15)' }}
                    >
                      📍
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-white mb-1">Location</p>
                      <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-10 pt-8"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <h3 className="text-[16px] font-bold text-white mb-2">For University Partnerships</h3>
                  <p className="text-[14px] mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Interested in bringing EDUING.in to your institution?
                  </p>
                  <a
                    href="mailto:eduing.in2026@gmail.com"
                    className="text-[14px] font-medium hover:text-white transition-colors"
                    style={{ color: '#818CF8' }}
                  >
                    eduing.in2026@gmail.com →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="mob-card h-full">
                <h2 className="text-[22px] font-bold text-white mb-8">Send a Message</h2>

                {submitted && (
                  <div
                    className="mb-6 p-4 rounded-lg"
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.25)',
                    }}
                  >
                    <p className="text-[14px] font-medium" style={{ color: '#22C55E' }}>
                      ✅ Message sent successfully! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-form">
                  <div>
                    <label htmlFor="name" className="block text-[14px] font-medium text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputFocusClass}
                      style={inputStyle}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputFocusClass}
                      style={inputStyle}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[14px] font-medium text-white mb-2">Subject</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={inputFocusClass}
                      style={inputStyle}
                    >
                      <option>General Inquiry</option>
                      <option>University Partnership</option>
                      <option>Student Support</option>
                      <option>Technical Issue</option>
                      <option>Press & Media</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[14px] font-medium text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputFocusClass} resize-none`}
                      style={inputStyle}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center" id="contact-submit">
                    Send Message →
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

```



==================================================

FILE

app/features/page.tsx

IMPORTANCE

95

```
import Features from '@/components/landing/Features';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Features | EDUING.in',
  description: 'Discover the features of EDUING.in - the ultimate platform for university admissions.',
};

export default function FeaturesPage() {
  return (
    <main className="pt-14 bg-[#06060A] min-h-screen">
      <div style={{ padding: '80px 24px 40px', textAlign: 'center', background: 'radial-gradient(ellipse at top, rgba(91,95,239,0.15) 0%, transparent 60%)' }}>
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.03em', margin: '0 0 20px',
        }}>
          Powerful features for a<br/>
          <span style={{ color: '#818CF8' }}>seamless admission journey</span>
        </h1>
        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.6)',
          maxWidth: '600px', margin: '0 auto',
        }}>
          Everything you need to discover, apply, and get admitted to top universities across India without the usual stress.
        </p>
      </div>
      <Features />
      <CTASection />
    </main>
  );
}

```



==================================================

FILE

app/privacy/page.tsx

IMPORTANCE

95

```
import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Privacy Policy — EDUING.in',
  description: 'Read the EDUING.in Privacy Policy. Learn how we collect, use, and protect your personal data.',
  openGraph: {
    title: 'Privacy Policy — EDUING.in',
    description: 'Learn how EDUING.in collects, uses, and protects your personal data.',
  },
};

const sections = [
  {
    title: '1. Introduction',
    content: 'EDUING.in (\u201Cwe,\u201D \u201Cour,\u201D or \u201Cus\u201D) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at eduing.in and our mobile applications.',
  },
  {
    title: '2. Information We Collect',
    content: 'We collect the following types of information:',
    list: [
      'Personal Information: Name, email address, phone number, date of birth',
      'Academic Information: 10th & 12th marks, entrance exam scores, preferred programs',
      'Documents: Marksheets, ID proofs, photographs, entrance exam scorecards',
      'Usage Data: Pages visited, features used, application activity',
      'Device Information: Browser type, IP address, operating system',
    ],
  },
  {
    title: '3. How We Use Your Information',
    list: [
      'To facilitate the university admissions process',
      'To create and manage your student profile',
      'To share your application with universities you apply to',
      'To provide real-time application tracking and notifications',
      'To improve our platform and user experience',
      'To communicate important updates about your applications',
      'To generate aggregate analytics (non-personal) for platform improvement',
    ],
  },
  {
    title: '4. Third-Party Services',
    content: 'We use Google Firebase for authentication, database (Firestore), and file storage. Google\u2019s privacy practices are governed by Google\u2019s Privacy Policy. We do not sell your personal data to any third party. Your documents and academic information are only shared with universities you explicitly apply to.',
  },
  {
    title: '5. Data Retention',
    content: 'We retain your personal data for as long as your account is active or as needed to provide our services. You may request deletion of your account and all associated data at any time. Upon account deletion, we will remove your data within 30 days, except where retention is required by law.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to:',
    list: [
      'Access your personal data stored on our platform',
      'Update or correct inaccurate information',
      'Delete your account and all associated data',
      'Withdraw consent for data processing at any time',
      'Export your data in a portable format',
    ],
  },
  {
    title: '7. Data Security',
    content: 'We implement industry-standard security measures through Firebase\u2019s enterprise-grade infrastructure. All data is encrypted at rest and in transit using AES-256 and TLS 1.2+ encryption. Access to user data is restricted and monitored.',
  },
  {
    title: '8. Cookies',
    content: 'We use essential cookies to maintain your session and preferences. We do not use third-party advertising cookies. Analytics cookies are used in aggregate form only.',
  },
  {
    title: '9. Changes to This Policy',
    content: 'We may update this Privacy Policy periodically. We will notify you of any material changes via email or a prominent notice on our platform. Your continued use of EDUING.in after changes constitutes acceptance of the updated policy.',
  },
  {
    title: '10. Governing Law',
    content: 'This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.',
  },
];

export default function PrivacyPage() {
  return (
    <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="privacy">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2" style={{ fontSize: '40px' }}>Privacy Policy</h1>
          <p className="text-[15px] mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Effective Date: April 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-[20px] font-bold text-white mb-3">{section.title}</h2>
                  {section.content && (
                    <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2 mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <h2 className="text-[20px] font-bold text-white mb-3">Contact Us</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  If you have questions about this Privacy Policy, contact us at:<br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:eduing.in2026@gmail.com" className="hover:text-white transition-colors" style={{ color: '#818CF8' }}>
                    eduing.in2026@gmail.com
                  </a><br />
                  <strong className="text-white">Location:</strong> Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

```



==================================================

FILE

app/terms/page.tsx

IMPORTANCE

95

```
import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Terms & Conditions — EDUING.in',
  description: 'Read the Terms and Conditions for using EDUING.in, the unified university admissions platform.',
  openGraph: {
    title: 'Terms & Conditions — EDUING.in',
    description: 'Terms and Conditions for using EDUING.in platform.',
  },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using EDUING.in (\u201Cthe Platform\u201D), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Platform. These terms apply to all users, including students, universities, and visitors.',
  },
  {
    title: '2. Eligibility',
    content: 'You must be at least 16 years of age to create an account on EDUING.in. Users under 18 must have consent from a parent or legal guardian. By creating an account, you represent that you meet these eligibility requirements. University accounts must be created by authorized institutional representatives.',
  },
  {
    title: '3. Student Responsibilities',
    list: [
      'Provide accurate and truthful personal and academic information',
      'Upload genuine, unaltered documents and certificates',
      'Keep your account credentials secure and confidential',
      'Respond to communications from universities in a timely manner',
      'Not misuse the Platform for any purpose other than its intended use',
      'Maintain updated contact information on your profile',
    ],
  },
  {
    title: '4. University Partner Responsibilities',
    list: [
      'Provide accurate institutional and program information',
      'Process applications in a fair and timely manner',
      'Update application statuses promptly on the Platform',
      'Comply with all applicable education regulations',
      'Maintain confidentiality of student application data',
      'Not discriminate against applicants on prohibited grounds',
    ],
  },
  {
    title: '5. Prohibited Activities',
    content: 'The following activities are strictly prohibited:',
    list: [
      'Uploading fake, forged, or tampered documents',
      'Providing false academic credentials or personal information',
      'Creating multiple accounts for the same individual',
      'Spamming universities with irrelevant applications',
      'Attempting to hack, disrupt, or manipulate the Platform',
      'Scraping or harvesting data from the Platform',
      'Impersonating another user or institution',
    ],
  },
  {
    title: '6. Intellectual Property',
    content: 'EDUING.in owns all intellectual property rights in and to the Platform, including but not limited to the website design, logos, trademarks, software, and content. Users retain ownership of their uploaded documents and personal data but grant EDUING.in a license to use this content solely for the purpose of facilitating the admissions process.',
  },
  {
    title: '7. Limitation of Liability',
    content: 'EDUING.in acts as a facilitator between students and universities. We do not guarantee admission to any institution. We are not liable for admission decisions made by universities, delays in application processing, or any loss arising from use of the Platform. The Platform is provided \u201Cas is\u201D without warranties of any kind.',
  },
  {
    title: '8. Account Termination',
    content: 'We reserve the right to suspend or terminate accounts that violate these Terms, engage in prohibited activities, or are inactive for an extended period. Users may delete their accounts at any time through their profile settings.',
  },
  {
    title: '9. Governing Law & Dispute Resolution',
    content: 'These Terms are governed by the laws of India, specifically the State of Karnataka. Any disputes arising from these Terms or use of the Platform shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India. Parties agree to attempt mediation before pursuing litigation.',
  },
  {
    title: '10. Changes to Terms',
    content: 'EDUING.in reserves the right to modify these Terms at any time. Material changes will be communicated via email and/or a prominent notice on the Platform. Continued use of the Platform after changes constitutes acceptance of the revised Terms.',
  },
];

export default function TermsPage() {
  return (
    <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="terms">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2" style={{ fontSize: '40px' }}>Terms & Conditions</h1>
          <p className="text-[15px] mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Last Updated: April 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-[20px] font-bold text-white mb-3">{section.title}</h2>
                  {section.content && (
                    <p className="text-[15px] leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <h2 className="text-[20px] font-bold text-white mb-3">Contact</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  For questions about these Terms, contact us at:<br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:eduing.in2026@gmail.com" className="hover:text-white transition-colors" style={{ color: '#818CF8' }}>
                    eduing.in2026@gmail.com
                  </a><br />
                  <strong className="text-white">Location:</strong> Bengaluru, Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

```



==================================================

FILE

app/trademark/page.tsx

IMPORTANCE

95

```
import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Trademark — EDUING.in',
  description: 'Trademark notice and brand guidelines for EDUING.in.',
  openGraph: {
    title: 'Trademark — EDUING.in',
    description: 'Trademark and brand usage guidelines for EDUING.in.',
  },
};

export default function TrademarkPage() {
  return (
    <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="trademark">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2" style={{ fontSize: '40px' }}>Trademark Notice</h1>
          <p className="text-[15px] mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Effective: April 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">
              {/* Trademarks */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-3">Trademarks</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <strong className="text-white">EDUING</strong> and <strong className="text-white">EDUING.in</strong> are
                  trademarks of EDUING.in. The EDUING logo, brand name, and associated visual identity
                  are proprietary and protected under applicable trademark and intellectual property laws
                  of India.
                </p>
              </div>

              {/* Logo & Visual Identity */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-4">Logo & Visual Identity</h2>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  The EDUING.in logo consists of:
                </p>
                <div
                  className="flex items-center justify-center py-10 mb-6 rounded-xl"
                  style={{ background: '#18181C', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-baseline gap-0 select-none">
                    <span className="text-4xl font-extrabold text-white tracking-tight">EDU</span>
                    <span className="text-4xl font-extrabold tracking-tight" style={{ color: '#4F46E5' }}>ING</span>
                    <span className="text-2xl font-bold ml-[1px]" style={{ color: '#F59E0B' }}>.in</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <li><strong className="text-white">&ldquo;EDU&rdquo;</strong> — displayed in white (#FAFAFA), representing education</li>
                  <li><strong className="text-white">&ldquo;ING&rdquo;</strong> — displayed in Indigo (#4F46E5), our primary brand color</li>
                  <li><strong className="text-white">&ldquo;.in&rdquo;</strong> — displayed in Gold (#F59E0B), representing India</li>
                </ul>
              </div>

              {/* Brand Colors */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-4">Brand Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {[
                    { name: 'Primary Indigo', hex: '#4F46E5', color: '#4F46E5' },
                    { name: 'Secondary Gold', hex: '#F59E0B', color: '#F59E0B' },
                    { name: 'Primary Text', hex: '#FAFAFA', color: '#FAFAFA' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex-shrink-0"
                        style={{ background: c.color, border: c.name === 'Primary Text' ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
                      />
                      <div>
                        <p className="text-[14px] font-medium text-white">{c.name}</p>
                        <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Permitted Use */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-3">Permitted Use</h2>
                <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <li>Press mentions and editorial references with proper credit</li>
                  <li>Educational or academic references to the platform</li>
                  <li>Linking to EDUING.in from partner university websites</li>
                  <li>Social media mentions with appropriate attribution</li>
                </ul>
              </div>

              {/* Not Permitted */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-3">Not Permitted</h2>
                <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <li>Commercial use of the EDUING brand without written license</li>
                  <li>Modifying, distorting, or altering the logo in any way</li>
                  <li>Using the EDUING name to imply endorsement or partnership without agreement</li>
                  <li>Creating derivative works based on our brand identity</li>
                  <li>Using our trademarks in domain names, social media handles, or app names</li>
                </ul>
              </div>

              {/* Licensing */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <h2 className="text-[20px] font-bold text-white mb-3">Licensing & Permissions</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  For trademark licensing requests, press kit access, or brand usage permissions,
                  please contact us at:<br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:eduing.in2026@gmail.com" className="hover:text-white transition-colors" style={{ color: '#818CF8' }}>
                    eduing.in2026@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

```



==================================================

FILE

components/ui/Accordion.tsx

IMPORTANCE

93

```
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-warm-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-2 text-left hover:text-indigo transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-dark text-[16px] pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl text-gray-400 flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-[15px] leading-relaxed pb-5 px-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="card">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

```



==================================================

FILE

components/ui/AnimatedSection.tsx

IMPORTANCE

93

```
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  // Safe Rendering: if children is null, return nothing
  if (!children) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

```



==================================================

FILE

components/ui/SectionHeading.tsx

IMPORTANCE

93

```
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({ title, subtitle, centered = true, children }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title mb-4">{title}</h2>
      {subtitle && (
        <p className="text-[18px] mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{subtitle}</p>
      )}
      {children}
    </div>
  );
}

```



==================================================

FILE

components/ui/TabSwitcher.tsx

IMPORTANCE

93

```
'use client';

import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
}

export default function TabSwitcher({ tabs }: TabSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex justify-center gap-3 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-8 py-3 rounded-pill font-semibold text-[15px] transition-all duration-300 ${
              activeIndex === index
                ? 'bg-indigo text-white shadow-indigo-glow'
                : 'bg-white text-dark border border-gray-200 hover:border-indigo hover:text-indigo'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {tabs[activeIndex].content}
      </motion.div>
    </div>
  );
}

```



==================================================

FILE

components/Footer.tsx

IMPORTANCE

92

```
import Link from 'next/link';

const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Universities', href: '/#universities' },
      { label: 'Programs', href: '#' },
      { label: 'Mobile App', href: '#' },
    ],
  },
  {
    title: 'Students',
    links: [
      { label: 'Register Free', href: '#' },
      { label: 'Dashboard', href: '#' },
      { label: 'Documents', href: '#' },
      { label: 'Track Applications', href: '#' },
    ],
  },
  {
    title: 'Universities',
    links: [
      { label: 'Register Institution', href: '#' },
      { label: 'Admin Portal', href: '#' },
      { label: 'Analytics', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#08080A',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
      id="footer"
    >
      <div className="container-main px-6 md:px-10 pt-16 pb-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Logo + Tagline */}
          <div className="lg:max-w-[280px]">
            <Link href="/" className="flex items-baseline gap-0 mb-3 select-none">
              <span className="text-xl font-extrabold text-white tracking-tight">EDU</span>
              <span className="text-xl font-extrabold text-accent tracking-tight">ING</span>
              <span className="text-[0.75em] font-bold text-gold ml-[1px]">.in</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', lineHeight: 1.6 }}>
              Simplifying university admissions across India.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  className="mb-4"
                  style={{
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] transition-colors duration-150 hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>
            © 2026 EDUING.in
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[13px] transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Terms
            </Link>
            <Link
              href="/trademark"
              className="text-[13px] transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Trademark
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

```



==================================================

FILE

components/Navbar.tsx

IMPORTANCE

92

```
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Download', href: '/#download' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] h-14 flex items-center"
      style={{
        background: 'rgba(8,8,10,0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
      id="navbar"
    >
      <div className="w-full max-w-container mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0 select-none" id="logo">
          <span className="text-xl font-extrabold text-white tracking-tight">EDU</span>
          <span className="text-xl font-extrabold text-accent tracking-tight">ING</span>
          <span className="text-[0.75em] font-bold text-gold ml-[1px]">.in</span>
        </Link>

        {/* Center Nav Links — Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] transition-colors duration-150"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Buttons — Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.eduing.in"
            className="text-[14px] transition-colors duration-150"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            id="login-btn"
          >
            Log in
          </a>
          <a
            href="https://app.eduing.in/"
            className="bg-white text-[#08080A] px-4 py-2 rounded-btn text-[14px] font-semibold transition-all duration-150 hover:bg-white/90"
            id="get-started-btn"
          >
            Get started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-5 h-[1.5px] bg-white block"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-[1.5px] bg-white block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-5 h-[1.5px] bg-white block"
          />
        </button>
      </div>

      {/* Mobile Full-screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-14 md:hidden flex flex-col"
            style={{
              background: 'rgba(8,8,10,0.97)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-[24px] font-semibold tracking-tight transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8 w-64">
                <a
                  href="https://app.eduing.in/auth/student/login"
                  className="text-center py-3 rounded-btn text-[15px] font-medium"
                  style={{ color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.15)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </a>
                <a
                  href="https://app.eduing.in/auth/student/register"
                  className="text-center py-3 rounded-btn bg-white text-[#08080A] text-[15px] font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Get started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

```



==================================================

FILE

components/landing/Features.tsx

IMPORTANCE

92

```
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const FEATURES = [
  { key: 'APPLY', title: 'Apply to multiple universities', desc: 'One universal profile is all you need to submit applications across hundreds of top institutions without repetitive forms.', icon: '🎓', accent: '#5B5FEF' },
  { key: 'TRACKING', title: 'Track application status', desc: 'Get real-time updates, interview schedules, and offer letters directly on your centralized dashboard.', icon: '📊', accent: '#10B981' },
  { key: 'DOCUMENTS', title: 'Upload & verify documents', desc: 'Store your academic records securely. Upload once, get verified instantly, and reuse them for every application.', icon: '📄', accent: '#F59E0B' },
  { key: 'SECURITY', title: 'Secure admission process', desc: 'End-to-end encryption and verified university partners ensure your personal data is always protected.', icon: '🔒', accent: '#818CF8' },
]

function FeatureCard({ f, i }: { f: typeof FEATURES[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
      style={{
        background: 'rgba(20, 20, 25, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '24px',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      }}
      whileHover={{
        borderColor: `${f.accent}50`,
        background: 'rgba(30, 30, 40, 0.6)',
        y: -5,
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 0 1px ${f.accent}20`,
      }}
    >
      {/* Subtle Glow Background */}
      <div style={{
        position: 'absolute', top: '-50px', right: '-50px',
        width: '150px', height: '150px', borderRadius: '50%',
        background: `radial-gradient(circle, ${f.accent}15 0%, transparent 70%)`,
        pointerEvents: 'none', transition: 'all 0.4s ease',
      }} className="glow-effect" />

      {/* Icon */}
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        style={{
          width: '56px', height: '56px', borderRadius: '16px',
          background: `linear-gradient(135deg, ${f.accent}15, ${f.accent}05)`,
          border: `1px solid ${f.accent}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '28px', marginBottom: '24px',
          boxShadow: `0 8px 16px ${f.accent}10`,
        }}
      >
        {f.icon}
      </motion.div>

      {/* Label */}
      <div style={{
        fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em',
        textTransform: 'uppercase', color: f.accent,
        marginBottom: '12px', fontFamily: 'DM Sans, sans-serif',
      }}>{f.key}</div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: '24px',
        fontWeight: '700', color: '#FFFFFF', letterSpacing: '-0.02em',
        margin: '0 0 12px', lineHeight: '1.3',
      }}>{f.title}</h3>

      {/* Desc */}
      <p style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: '16px',
        color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', margin: 0,
      }}>{f.desc}</p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (!FEATURES || FEATURES.length === 0) return null;
  return (
    <section id="features" style={{ background: '#06060A', padding: '140px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(91,95,239,0.1)', border: '1px solid rgba(91,95,239,0.2)',
            marginBottom: '24px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818CF8', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818CF8', fontFamily: 'DM Sans, sans-serif' }}>Platform Features</span>
          </div>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.03em',
            margin: '0 auto', lineHeight: '1.1', maxWidth: '700px',
          }}>
            Everything you need<br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>to get admitted easily</span>
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {FEATURES.map((f, i) => <FeatureCard key={f.key} f={f} i={i} />)}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
        .glow-effect { transition: all 0.4s ease; }
        div:hover > .glow-effect { transform: scale(1.5); opacity: 0.8; }
      `}} />
    </section>
  )
}

```



==================================================

FILE

components/landing/Hero.tsx

IMPORTANCE

92

```
'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      padding: '140px 5% 80px', background: '#06060A',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute', width: '800px', height: '800px',
            top: '30%', left: '30%', transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, #5B5FEF 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(80px)',
          }} 
        />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)',
        }} />
      </div>

      <div style={{ 
        position: 'relative', zIndex: 1, 
        maxWidth: '1280px', width: '100%', 
        display: 'flex', flexWrap: 'wrap', 
        alignItems: 'center', gap: '60px' 
      }}>
        
        {/* LEFT SIDE: Text and CTAs */}
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: '800', lineHeight: '1.05', letterSpacing: '-0.04em',
              color: '#FFFFFF', margin: '0 0 24px',
            }}
          >
            Apply to Top Universities<br />
            <span style={{
              background: 'linear-gradient(135deg, #818CF8 0%, #5B5FEF 50%, #A78BFA 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>in One Place</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(18px, 2vw, 20px)',
              color: 'rgba(255,255,255,0.6)', lineHeight: '1.6',
              maxWidth: '540px', margin: '0 0 40px',
            }}
          >
            Complete your profile, apply seamlessly, and track your admission status — all in one platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', position: 'relative' }}
          >
            <div style={{
              position: 'absolute', top: '50%', left: '80px', transform: 'translate(-50%, -50%)',
              width: '120px', height: '60px', background: '#5B5FEF', filter: 'blur(40px)',
              opacity: 0.6, zIndex: -1, borderRadius: '50%', pointerEvents: 'none'
            }} />
            
            {/* ✅ External link to student portal */}
            <a href="https://app.eduing.in" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.03, y: -2, boxShadow: '0 10px 25px rgba(91,95,239,0.4)' }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  fontSize: '16px', padding: '16px 36px', borderRadius: '100px', fontWeight: '600',
                  background: 'white', color: '#06060A', border: 'none', cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif', transition: 'box-shadow 0.2s ease',
                }}
              >
                Start Application
              </motion.button>
            </a>

            {/* ✅ Internal anchor — stays as is */}
            <a href="#universities" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '16px 36px', borderRadius: '100px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'transparent', color: 'white',
                  fontSize: '16px', fontWeight: '500',
                  fontFamily: 'DM Sans, sans-serif', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Explore Universities
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Visual Mockups */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: '1 1 500px', position: 'relative', perspective: '1000px', display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '100%', maxWidth: '600px',
              background: 'linear-gradient(145deg, rgba(30,30,35,0.9) 0%, rgba(15,15,20,0.9) 100%)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)', padding: '28px', display: 'flex', flexDirection: 'column',
              overflow: 'hidden', transform: 'rotateY(-5deg) rotateX(5deg)', transformStyle: 'preserve-3d'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #5B5FEF, #7C3AED)' }} />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: 'white', fontFamily: 'DM Sans, sans-serif' }}>Rahul Sharma</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>Profile 100% Complete</div>
                </div>
              </div>
              <div style={{ padding: '6px 14px', background: 'rgba(16,185,129,0.15)', color: '#10B981', borderRadius: '100px', fontSize: '12px', fontWeight: '600' }}>
                Verified
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>Application Progress</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px' }}>✓</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily: 'DM Sans, sans-serif' }}>Submitted</div>
                </div>
                <div style={{ height: '2px', flex: 1, background: '#10B981', margin: '0 12px', opacity: 0.5, marginBottom: '24px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px' }}>⏳</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily: 'DM Sans, sans-serif' }}>Review</div>
                </div>
                <div style={{ height: '2px', flex: 1, background: 'rgba(255,255,255,0.1)', margin: '0 12px', marginBottom: '24px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>🎓</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans, sans-serif' }}>Admitted</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { title: 'Applied', value: '4', icon: '📝' },
                { title: 'Offers', value: '2', icon: '🎉', highlight: true },
                { title: 'Pending', value: '2', icon: '⏳' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: stat.highlight ? 'rgba(91,95,239,0.1)' : 'rgba(255,255,255,0.03)',
                  border: stat.highlight ? '1px solid rgba(91,95,239,0.3)' : '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '16px', padding: '16px', textAlign: 'left',
                  boxShadow: stat.highlight ? '0 10px 20px rgba(91,95,239,0.1)' : 'none',
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'white', fontFamily: 'Syne, sans-serif' }}>{stat.value}</div>
                  <div style={{ fontSize: '13px', color: stat.highlight ? '#818CF8' : 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>{stat.title}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

```



==================================================

FILE

components/landing/HowItWorks.tsx

IMPORTANCE

92

```
'use client'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const STEPS = [
  { num: '01', title: 'Create Your Profile', desc: 'Add your academic details, marks, and entrance scores once. Your profile is your universal application.' },
  { num: '02', title: 'Discover Universities', desc: 'Search and filter 500+ universities by state, program, and eligibility. Compare side by side.' },
  { num: '03', title: 'Apply in Seconds', desc: 'Submit applications with your saved profile. No repeated data entry, ever.' },
  { num: '04', title: 'Track & Get Admitted', desc: 'Real-time status updates from universities directly on your dashboard. Know every step.' },
]

function Step({ step }: { step: { num: string; title: string; desc: string } }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16,1,0.3,1] }}
      style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', position: 'relative' }}
    >
      {/* Number */}
      <div style={{ flexShrink: 0, width: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: inView ? 'linear-gradient(135deg, #5B5FEF, #7C3AED)' : 'rgba(255,255,255,0.06)',
            border: inView ? 'none' : '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', fontWeight: '700', color: 'white',
            fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em',
            boxShadow: inView ? '0 0 24px rgba(91,95,239,0.45)' : 'none',
            transition: 'all 0.5s ease',
          }}
        >{step.num}</motion.div>
      </div>

      {/* Content */}
      <div style={{ paddingBottom: '52px', flex: 1 }}>
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: '700',
            color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 10px',
            lineHeight: '1.2',
          }}
        >{step.title}</motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
            color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', margin: 0,
            maxWidth: '480px',
          }}
        >{step.desc}</motion.p>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.3'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" style={{ background: '#06060A', padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '5px 14px', borderRadius: '100px',
            background: 'rgba(91,95,239,0.12)', border: '1px solid rgba(91,95,239,0.25)',
            marginBottom: '20px',
          }}>
            <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#818CF8', fontFamily: 'DM Sans, sans-serif' }}>How It Works</span>
          </div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.03em',
            margin: '0 0 14px', lineHeight: '1.05',
          }}>Simple. Fast. Effective.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Four steps to your dream university.</p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} style={{ position: 'relative' }}>
          {/* Animated vertical line */}
          <div style={{
            position: 'absolute', left: '23px', top: '24px', bottom: '24px',
            width: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px',
          }}>
            <motion.div style={{
              width: '100%', background: 'linear-gradient(180deg, #5B5FEF, #A78BFA)',
              borderRadius: '2px', height: lineHeight, originY: 0,
            }} />
          </div>

          {STEPS.map((s) => <Step key={s.num} step={s} />)}
        </div>
      </div>
    </section>
  )
}

```



==================================================

FILE

components/landing/Navbar.tsx

IMPORTANCE

92

```
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '0',
      width: '100%',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 24px'
    }}>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '1100px',
          background: 'rgba(6, 6, 10, 0.65)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '9999px',
          padding: '8px 8px 8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Logo Section */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
          {/* ✅ Logo image */}
          <img
            src="/bandwlogo.PNG"
            alt="EDUING Logo"
            style={{ width: '30px', height: '30px', objectFit: 'contain', filter: 'invert(1)' }}
          />
          <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: '800', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            EDUING<span style={{ color: '#818CF8', fontSize: '12px' }}>.in</span>
          </span>
        </Link>

        {/* Navigation Items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {['Features', 'Download', 'About', 'Contact'].map(l => {
            const href = l === 'Download' ? '/#download' : `/${l.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <Link key={l} href={href} style={{ textDecoration: 'none' }}>
                <span style={{
                  padding: '8px 18px', borderRadius: '9999px', fontSize: '14px',
                  color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)', 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: isActive ? '600' : '500', 
                  background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.color = isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)'; e.currentTarget.style.background = isActive ? 'rgba(255,255,255,0.08)' : 'transparent' }}>
                  {l}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'flex-end' }}>
          
          {/* Log in */}
          <a href="https://app.eduing.in" style={{ textDecoration: 'none' }}>
            <span style={{
              padding: '8px 16px', fontSize: '14px', fontWeight: '500', 
              color: 'rgba(255, 255, 255, 0.6)', cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
              Log in
            </span>
          </a>
          
          {/* Get started */}
          <a href="https://app.eduing.in/" style={{ 
            textDecoration: 'none',
            opacity: scrolled ? 1 : 0,
            transform: scrolled ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.92)',
            filter: scrolled ? 'blur(0)' : 'blur(6px)',
            pointerEvents: scrolled ? 'auto' : 'none',
            transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: scrolled ? '120ms' : '0ms',
          }}>
            <motion.div 
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '10px 22px', borderRadius: '9999px', fontSize: '14px',
                fontWeight: '600', color: '#06060A', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
                background: 'linear-gradient(135deg, #E0E0FF 0%, #FFFFFF 100%)',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)',
                transition: 'box-shadow 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.15)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.1)'}
            >
              Get started
            </motion.div>
          </a>
        </div>
      </motion.nav>
    </div>
  )
}

```



==================================================

FILE

components/sections/CTASection.tsx

IMPORTANCE

92

```
'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CTASection() {
  return (
    <section className="section-padding" style={{ background: '#06060A', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(91,95,239,0.1) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none'
      }} />

      <div className="container-main text-center">
        <AnimatedSection>
          <h2 className="section-title mb-8" style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}>
            Ready to start your<br />
            <span style={{ color: 'var(--indigo)' }}>university journey?</span>
          </h2>
          
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="app.eduing.in" className="btn-primary" style={{ padding: '16px 40px', fontSize: '16px' }}>
              Create your profile →
            </a>
            <a href="/about" style={{
              padding: '16px 40px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)',
              color: 'white', fontWeight: '600', fontSize: '16px', textDecoration: 'none', transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Learn more
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

```



==================================================

FILE

components/sections/DownloadSection.tsx

IMPORTANCE

92

```
'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function DownloadSection() {
  return (
    <section id="download" className="section-padding" style={{ background: '#08080A', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(91,95,239,0.15) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none'
      }} />

      <div className="container-main text-center">
        <AnimatedSection>
          <div className="section-label">Mobile App</div>
          <h2 className="section-title mb-8" style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}>
            Get the <span style={{ color: 'var(--indigo)' }}>EDUING App</span>
          </h2>
          <p className="mb-12 mx-auto" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', maxWidth: '600px', lineHeight: 1.6 }}>
            Take your university search and application journey anywhere. Download our mobile app to manage your profile and track applications on the go.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://drive.google.com/file/d/1aYbvkL0WC7Tr_9aKOSmNfYk66YskWCjc/view?usp=sharing" 
              className="group flex items-center gap-2 bg-white text-[#08080A] px-8 py-4 rounded-[16px] font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 0 24 10 24 23v466c0 13 10 23 23 23 4.5 0 8.5-1.3 12-3.5L304 256 59 3.5C55.5 1.3 51.5 0 47 0zm351.7 187.6L126.4 34 325.3 234.3l73.4-46.7zM304 256l172.6 98.6c4.5 2.2 8.5 3.5 13 3.5 13 0 23-10 23-23V178c0-13-10-23-23-23-4.5 0-8.5 1.3-13 3.5L304 256z"/>
              </svg>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wider opacity-60">GET IT ON</span>
                <span className="text-[17px]">Google Play</span>
              </div>
            </a>

            <a 
              href="https://drive.google.com/file/d/1aYbvkL0WC7Tr_9aKOSmNfYk66YskWCjc/view?usp=sharing" 
              className="group flex items-center gap-2 bg-white text-[#08080A] px-8 py-4 rounded-[16px] font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <svg viewBox="0 0 384 512" width="18" height="18" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wider opacity-60">DOWNLOAD ON THE</span>
                <span className="text-[17px]">App Store</span>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

```



==================================================

FILE

components/sections/FAQSection.tsx

IMPORTANCE

92

```
'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const faqs = [
  {
    q: 'How does EDUING.in help me with applications?',
    a: 'We provide a single platform where you create your academic profile once and use it to apply to multiple universities. This eliminates the need to fill out separate forms for each institution.',
  },
  {
    q: 'Are the university listings verified?',
    a: 'Yes, we work directly with university admissions departments to ensure all information regarding programs, fees, and eligibility is accurate and up-to-date.',
  },
  {
    q: 'Is my data secure on the platform?',
    a: 'We use industry-standard encryption to protect your personal and academic documents. Your data is only shared with universities you explicitly choose to apply to.',
  },
  {
    q: 'Can I track my application status?',
    a: 'Absolutely. Your dashboard provides real-time updates on every application you submit, from initial review to final admission decision.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding" style={{ background: '#06060A' }} id="faq">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left: Heading */}
          <div className="w-full lg:w-[40%]">
            <AnimatedSection>
              <span className="section-label">FAQ</span>
              <h2 className="section-title mb-6">
                Common<br />questions.
              </h2>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, maxWidth: '320px' }}>
                Everything you need to know about the platform and the admission process.
              </p>
            </AnimatedSection>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '16px',
                      padding: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                  >
                    <div className="flex justify-between items-center gap-4">
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', fontFamily: 'DM Sans, sans-serif' }}>{faq.q}</h3>
                      <div style={{
                        width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s',
                        transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    
                    <div style={{
                      maxHeight: openIndex === i ? '200px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      opacity: openIndex === i ? 1 : 0,
                    }}>
                      <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginTop: '16px', lineHeight: 1.6 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

```



---

# AI System Prompt

You are an elite software engineering audit team.

You are acting as:

- Staff Software Engineer
- Senior Software Architect
- Staff UI/UX Designer
- Security Engineer
- Performance Engineer
- DevOps Engineer
- QA Engineer
- CTO

Your objective is to audit this project completely.

Review:

- Architecture
- Folder structure
- Code quality
- UI/UX
- Performance
- Security
- Accessibility
- Maintainability
- Scalability
- Best practices
- Missing features
- Bugs
- Edge cases
- Technical debt

For every issue provide:

1. Severity
2. Reason
3. Recommendation
4. Implementation approach

Return the audit in professional markdown.

Do not praise the project.

Focus on improvements.

Assume this project is intended for production.
