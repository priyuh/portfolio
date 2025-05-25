'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const NUM_FLOWERS = 20;

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function FlowerParticles() {
  const [flowers, setFlowers] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const screenWidth = window.innerWidth;

    const flowerArray = Array.from({ length: NUM_FLOWERS }).map(() => ({
      id: crypto.randomUUID(),
      leftPx: getRandom(0, screenWidth),
      delay: getRandom(0, 5),
      size: getRandom(30, 60),
      duration: getRandom(10, 20),
      swayAmount: getRandom(20, 50),
      rotateSpeed: getRandom(5, 15),
    }));

    setFlowers(flowerArray);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const createExplosion = (x, y) => {
    const count = 8;
    const particles = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      particles.push({
        id: crypto.randomUUID(),
        x: x,
        y: y,
        dx: Math.cos(angle) * 50,
        dy: Math.sin(angle) * 50,
      });
    }
    setExplosions((prev) => [...prev, ...particles]);
    setTimeout(() => {
      setExplosions((prev) => prev.slice(count));
    }, 1000);
  };

  const [explosions, setExplosions] = useState([]);

  return (
    <div className="pointer-events-none fixed inset-0 w-full h-full overflow-hidden z-0">
      {flowers.map(({ id, leftPx, delay, size, duration, swayAmount, rotateSpeed }) => (
        <motion.img
          key={id}
          src="/single_flower.png"
          alt="flower"
          initial={{ y: -100, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: '100vh',
            x: [0, swayAmount, -swayAmount, 0],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration, delay, repeat: Infinity, ease: 'linear' },
            x: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: rotateSpeed, repeat: Infinity, ease: 'linear' },
            opacity: { duration: duration, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: leftPx,
            width: `${size}px`,
            height: `${size}px`,
            pointerEvents: 'auto',
            cursor: 'pointer',
            zIndex: 0,
            transformOrigin: 'center center',
          }}
          onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            createExplosion(rect.left + size / 2, rect.top + size / 2);
            e.target.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
            e.target.style.transform = 'scale(1.5)';
            e.target.style.opacity = '0';
            setTimeout(() => {
              e.target.style.transform = 'scale(1)';
              e.target.style.opacity = '1';
            }, 500);
          }}
        />
      ))}

      {explosions.map(({ id, x, y, dx, dy }) => (
        <motion.div
          key={id}
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'pink',
            top: y,
            left: x,
            zIndex: 10,
          }}
          animate={{ x: dx, y: dy, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}
