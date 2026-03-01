import React, { useEffect, useRef } from 'react';

interface ParticlesBackgroundProps {
  color?: string;
  count?: number;
  className?: string;
  speed?: number;
}

export const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ 
  color = '#ffffff', 
  count = 50, 
  className = '',
  speed = 0.5 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    // Resize handler with stability check
    let lastWidth = 0;
    let lastHeight = 0;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const newWidth = parent.clientWidth || window.innerWidth;
      const newHeight = parent.clientHeight || window.innerHeight;

      // Only resize if dimensions actually changed
      if (newWidth === lastWidth && newHeight === lastHeight) return;

      canvas.width = newWidth;
      canvas.height = newHeight;

      // Only re-initialize particles if width changed significantly or if it's the first time
      const widthChangedSignificantly = Math.abs(newWidth - lastWidth) > 50;
      const isFirstInit = lastWidth === 0;

      if (widthChangedSignificantly || isFirstInit) {
        initParticles();
      }

      lastWidth = newWidth;
      lastHeight = newHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const vx = (Math.random() - 0.5) * speed;
        const vy = (Math.random() - 0.5) * speed;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx,
          vy,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.1
        });
      }
    };

    const drawParticles = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Delay start to prioritize LCP
    const timeoutId = setTimeout(() => {
      drawParticles();
    }, 500);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, count, speed]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};
