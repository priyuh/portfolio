'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="bg-pink-50 min-h-screen px-6 py-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-pink-700 mb-2">📁 My Projects</h1>
          <p className="text-pink-600">Explore my class, personal, and hackathon projects below!</p>
        </header>

        {/* Class Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-pink-700 mb-6">🎓 Class Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-pink-200 p-6"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-pink-700">🌍 MARS Simulation</h3>
              <p className="text-pink-600 text-sm mt-1">Java simulation of Martian tourist quarantine logistics.</p>
              <p className="text-pink-800 mt-2">Built for CS310 using Java OOP, Lists, and simulation modeling concepts.</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg border border-pink-200 p-6"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-semibold text-pink-700">🧬 Game of Life (Java)</h3>
              <p className="text-pink-600 text-sm mt-1">Cellular automaton simulation based on Conway’s Game of Life.</p>
              <p className="text-pink-800 mt-2">Built from scratch using Java and a custom DynamicArray. Features GUI, pattern loading, and simulation controls.</p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://github.com/priyuh/310_project1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-full shadow"
                >
                  GitHub Repo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Personal Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-pink-700 mb-6">🌟 Personal Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-pink-200 p-6"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-pink-700">💖 Portfolio Website</h3>
              <p className="text-pink-600 text-sm mt-1">A personalized portfolio built with Next.js and Tailwind CSS.</p>
              <p className="text-pink-800 mt-2">Includes animations, theming, and projects display with custom UI.</p>
            </motion.div>
          </div>
        </section>

        {/* Hackathon Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-pink-700 mb-6">🚀 Hackathon Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-pink-200 p-6"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-pink-700">☀️ Real-Time Weather Alerts</h3>
              <p className="text-pink-600 text-sm mt-1">Hackathon project detecting live disaster zones.</p>
              <p className="text-pink-800 mt-2">Used React, APIs, and Firebase to deliver instant alerts and location data.</p>
            </motion.div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/" className="text-pink-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
