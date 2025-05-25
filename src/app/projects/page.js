'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectsPage() {
  const allProjects = [
    {
      title: 'Game of Life (Java)',
      description: 'Cellular automaton simulation based on Conway’s Game of Life.',
      details: 'Built from scratch using Java and a custom DynamicArray. Features GUI, pattern loading, and simulation controls.',
      tech: ['Java', 'CS310'],
      github: 'https://github.com/priyuh/310_project1',
    },
    {
      title: 'Social Network Simulation (Java)',
      description: 'Graph-based simulation with influencer detection and link prediction.',
      details: 'Final CS310 project implementing Graph310 with directed edges, Kevin Bacon pathfinding, contact suggestion, and GUI integration via JUNG library.',
      tech: ['Java', 'CS310'],
      github: 'https://github.com/priyuh/CS310_project5',
    },
    {
      title: 'Window Manager (Java)',
      description: 'Custom window system using linked lists and stacks.',
      details: 'Built for CS310 using Java to manage interactive square grids with sorting and click-based rendering.',
      tech: ['Java', 'CS310'],
      github: 'https://github.com/priyuh/310_project2',
    },
    {
      title: 'Postfix Computer (Java)',
      description: 'Stack-based interpreter with queue and hash table support.',
      details: 'Built using custom implementations of queues, stacks, and a quadratic probing hash table. Supports variable assignment and debug mode.',
      tech: ['Java', 'CS310'],
      github: 'https://github.com/priyuh/310_project3',
    },
    {
      title: 'Tree Structures & Mutation Testing',
      description: 'JUnit and mutation testing for heaps and binary search trees.',
      details: 'Built for CS310 using Java. Demonstrates white-box test suite creation using Pitest coverage reports.',
      tech: ['Java', 'CS310'],
      github: 'https://github.com/priyuh/310_project4',
    },
    {
      title: 'Wlf CPU Scheduler (C)',
      description: 'C-based process scheduling simulator for StrawHat OS shell.',
      details: 'Built for CS367 using singly linked lists and bitwise operations to manage Ready and Terminated Queues.',
      tech: ['C', 'CS367'],
      github: 'https://github.com/priyuh/CS367_project1',
    },
    {
      title: 'SmallFP Floating-Point Library (C)',
      description: 'Custom software floating-point library for embedded systems.',
      details: 'Built for CS367 using bitwise manipulation in C to simulate 11-bit floating-point operations.',
      tech: ['C', 'CS367'],
      github: 'https://github.com/priyuh/CS367_project2',
    },
    {
      title: 'Portfolio Website',
      description: 'A personalized portfolio built with Next.js and Tailwind CSS.',
      details: 'Includes animations, theming, and projects display with custom UI.',
      tech: ['Next.js', 'Frontend', 'Personal'],
    },
    {
      title: 'Real-Time Weather Alerts',
      description: 'Hackathon project detecting live disaster zones.',
      details: 'Used React, APIs, and Firebase to deliver instant alerts and location data.',
      tech: ['React', 'Hackathon'],
    },
  ];

  const tags = ['All', 'Java', 'C', 'CS310', 'CS367', 'Frontend', 'Hackathon', 'Next.js'];
  const [activeTag, setActiveTag] = useState('All');
  const filteredProjects = activeTag === 'All' ? allProjects : allProjects.filter(p => p.tech.includes(activeTag));

  return (
    <main className="bg-pink-50 min-h-screen px-6 py-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-pink-700 mb-2">📁 My Projects</h1>
          <p className="text-pink-600 mb-6">Explore my class, personal, and hackathon projects below!</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1 rounded-full border text-sm transition-all shadow-sm ${activeTag === tag ? 'bg-pink-500 text-white border-pink-500' : 'bg-white text-pink-600 border-pink-300 hover:bg-pink-100'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-pink-200 p-6"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-semibold text-pink-700">{project.title}</h3>
              <p className="text-pink-600 text-sm mt-1">{project.description}</p>
              <p className="text-pink-800 mt-2">{project.details}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {project.tech.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded-full">{tag}</span>
                ))}
              </div>
              {project.github && (
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-full shadow"
                  >
                    GitHub Repo
                  </a>
                </div>
              )}
            </motion.div>
          ))}
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
