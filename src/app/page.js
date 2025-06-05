'use client';
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FlowerParticles from '@/components/FlowerParticles';

export default function Home() {
  const [showGames, setShowGames] = useState(false);
  const [showMoreFacts, setShowMoreFacts] = useState(false);

  return (
    <>
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
            words={["Hi, I’m Priya 👩🏽‍💻", "Welcome!"]}
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
          <h2 className="text-2xl font-bold text-pink-700 mb-4">About Me</h2>
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
                Hello! I’m <strong>Priya Mohan</strong>, a Computer Science student going into my senior year at George Mason University. I’m passionate about <strong>AI</strong>, <strong>software engineering</strong>, <strong>data science/analytics</strong>, and <strong>solutions engineering</strong>.
              </p>
              <p className="text-pink-700 leading-relaxed mt-3">
                I enjoy using technology to solve real-world problems and create meaningful experiences. Whether it’s working on class projects, building real-time apps at hackathons, or collaborating with peers, I’m always eager to learn and grow as a developer.
              </p>
              <p className="text-pink-700 leading-relaxed mt-3">
                I’m currently seeking internships in software or data-focused roles where I can contribute, learn, and make an impact.
              </p>
            </div>
          </div>

          <hr className="my-6 border-pink-200" />

          {/* Skills Section with Animation */}
          <section id="skills" className="text-center my-12">
            <h3 className="text-2xl font-bold text-pink-700 mb-6">Skills & Tools</h3>
            <div className="flex flex-wrap justify-center gap-10">
              {[
                { name: 'Java', src: '/java.png' },
                { name: 'Python', src: '/python.png' },
                { name: 'JavaScript', src: '/javascript.png' },
                { name: 'React.js', src: '/react.png' },
                { name: 'Tailwind', src: '/tailwind.png' },
                { name: 'Firebase', src: '/firebase.png' },
                { name: 'GitHub', src: '/github.png' },
                { name: 'SQL', src: '/sql.png' },
                { name: 'Next.js', src: '/nextjs.png' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img src={skill.src} alt={skill.name} className="w-12 h-12" />
                  <span className="mt-2 text-pink-700 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <hr className="my-12 border-pink-200 w-full mx-auto" />

          {/* Timeline Section */}
          <section id="timeline" className="my-20">
            <h3 className="text-2xl font-bold text-pink-700 text-center mb-6">My Journey</h3>
            <div className="relative max-w-5xl mx-auto pl-14">
              {/* Vertical line animation */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="absolute left-0 top-0 w-1.5 bg-pink-300 rounded-full"
                style={{ zIndex: 0 }}
              />
              {[
                {
                  date: 'Oct 2024 – Present',
                  title: 'STEM Instructor – Stem Excel',
                  icon: '/stemexcel.png',
                  description: 'Teaching K-8 students engaging STEM curriculum weekly, such as Intro to Computer Science & Robotics',
                },
                {
                  date: 'Apr – Aug 2024',
                  title: 'STEM Instructor – Stem Tree',
                  icon: '/stemtree.png',
                  description: 'Taught children between K-8 diverse subjects including math, coding, science, electrical engineering, etc.',
                },
                {
                  date: 'August 2022',
                  title: 'Started George Mason University',
                  icon: '/georgemason.png',
                  description: 'B.S. in Computer Science, with a focus in AI and Software Engineering.',
                },
                {
                  date: 'June 2022',
                  title: 'Graduated High School',
                  icon: '/highschool.png',
                  description: 'Graduated magna cum laude with a GPA of 3.9, took programming and robotics courses',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative mb-20 flex items-center justify-between"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-6 h-6 bg-pink-500 rounded-full shadow-lg z-10" />

                  {/* Text */}
                  <div className="ml-10 flex-1 pr-8">
                    <p className="text-base text-pink-500 font-medium">{item.date}</p>
                    <h4 className="text-2xl font-semibold text-pink-700 mt-1">{item.title}</h4>
                    <p className="text-base text-pink-600 mt-1">{item.description}</p>
                  </div>

                  {/* Icon */}
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="w-20 h-20 object-contain drop-shadow-md"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: index * 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </section>

          <hr className="my-6 border-pink-200" />

          {/* Fun Facts Section with Expandables */}
          <div>
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Fun Facts</h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-pink-700 mb-2"
            >
              I love creating <span className="text-pink-500 font-medium">cute UI designs</span> and <span className="text-pink-500 font-medium">playing cozy games</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-pink-700 mb-4"
            >
              Most of all, I love <span className="text-pink-500 font-medium">teaching and empowering others</span> with creativity + code 💻✨
            </motion.p>

            {/* Toggle buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button
                onClick={() => setShowGames(!showGames)}
                className="bg-pink-200 hover:bg-pink-300 text-pink-700 px-4 py-2 rounded-full transition"
              >
                {showGames ? 'Hide Games 🎮' : 'See Games 🎮'}
              </button>
              <button
                onClick={() => setShowMoreFacts(!showMoreFacts)}
                className="bg-pink-200 hover:bg-pink-300 text-pink-700 px-4 py-2 rounded-full transition"
              >
                {showMoreFacts ? 'Hide More Fun Facts 💫' : 'More Fun Facts 💫'}
              </button>
            </div>

            {/* Games List */}
            {showGames && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.4 }}
                className="list-disc pl-6 mb-6 text-pink-700"
              >
                <li>Stardew Valley</li>
                <li>Animal Crossing: New Horizons</li>
                <li>Spiritfarer</li>
                <li>Cozy Grove</li>
              </motion.ul>
            )}

            {/* More Fun Facts */}
            {showMoreFacts && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.4 }}
                className="text-pink-700"
              >
                <p>📺 Currently Watching: “Ted Lasso”, “The Mandalorian”</p>
                <p>🎵 Favorite Song Right Now: “Sunflower” by Post Malone & Swae Lee</p>
              </motion.div>
            )}
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
