'use client';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FlowerParticles from '@/components/FlowerParticles';

export default function Home() {
  return (
    <>
      {/* Animated Background */}

      {/* Navigation Bar */}
      <nav className="sticky top-4 z-50 flex justify-center">
        <div className="bg-white/90 backdrop-blur-md shadow-md rounded-full px-6 py-2 flex gap-6 text-pink-700 font-medium">
          <a href="#about" className="hover:text-pink-500 transition">About</a>
          <Link href="/projects" className="hover:text-pink-500 transition">Projects</Link>
          <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 bg-pink-50" id="intro">
      <FlowerParticles />
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
          <Typewriter
            words={["Hi, I'm Priya 👩🏽‍💻", 'Welcome!']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-pink-600 mt-3 text-lg">
          A CS student passionate about AI, software engineering, and anything data!
        </p>
        <div className="mt-5">
          <Link
            href="/projects"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            See My Work
          </Link>
        </div>
      </section>

      <main className="relative z-10 bg-pink-50 min-h-screen p-8 font-sans scroll-smooth">
        {/* About Me Section */}
        <section id="about" className="bg-white p-6 rounded-2xl shadow-md mb-10 border border-pink-200">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">🌸 About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full z-0 animate-pulse bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 blur-2xl opacity-70"></div>
              <motion.img
                src="/priyaportfolio.jpeg"
                alt="Priya Mohan"
                className="w-full h-full rounded-full border-4 border-white shadow-xl object-cover relative z-10"
                initial={{ translateY: 0 }}
                animate={{ translateY: [0, -10, 0, 10, 0] }}
                transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
              />
            </div>
            <div>
              <p className="text-pink-700 leading-relaxed">
                Hello! I'm <strong>Priya Mohan</strong>, a Computer Science student going into my senior year at George Mason University. I'm passionate about <strong>AI</strong>, <strong>software engineering</strong>, <strong>data science/analytics</strong>, and <strong>solutions engineering</strong>.
              </p>
              <p className="text-pink-700 leading-relaxed mt-3">
                I enjoy using technology to solve real-world problems and create meaningful experiences. Whether it's working on class projects, building real-time apps at hackathons, or collaborating with peers, I'm always eager to learn and grow as a developer.
              </p>
              <p className="text-pink-700 leading-relaxed mt-3">
                I'm currently seeking internships in software or data-focused roles where I can contribute, learn, and make an impact.
              </p>
            </div>
          </div>

          <hr className="my-6 border-pink-200" />

          <div>
            <h3 className="text-xl font-semibold text-pink-700 mb-2">🧰 Skills & Tools</h3>
            <p className="text-pink-700">
              Java • Python • JavaScript • React • Tailwind CSS • SQL • Git • Firebase • APIs • Next.js • GitHub
            </p>
          </div>

          <hr className="my-6 border-pink-200" />

          <div>
            <h3 className="text-xl font-semibold text-pink-700 mb-2">💖 Fun Fact</h3>
            <p className="text-pink-700">
              I love creating cute UI designs, journaling, and teaching others—especially when I can blend creativity with code!
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:priya.mohan11304@gmail.com"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-md font-medium transition-all"
            >
              💌 Contact Me
            </a>
            <a
              href="/priya_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-pink-500 text-pink-700 hover:bg-pink-100 px-6 py-2 rounded-full shadow-md font-medium transition-all"
            >
              📄 View Resume
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <footer className="text-center mt-12 text-pink-500">
            <p>Made with 💗 and React • © 2025 Priya Mohan</p>
          </footer>
        </section>
      </main>
    </>
  );
}
