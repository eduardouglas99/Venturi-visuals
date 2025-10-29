"use client"

import { useState, useEffect } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="hover"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-white mix-blend-difference rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px) scale(${isHovering ? 2 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
    </>
  );
}