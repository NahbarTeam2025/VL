import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export const NeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let pulses: { start: number; end: number; progress: number; speed: number }[] = [];
    
    // Resize handler with debounce and stability check
    let lastWidth = 0;
    let lastHeight = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const newWidth = parent.clientWidth;
      const newHeight = parent.clientHeight;

      // Only resize if dimensions actually changed
      if (newWidth === lastWidth && newHeight === lastHeight) return;

      canvas.width = newWidth;
      canvas.height = newHeight;

      // Only re-initialize particles if width changed significantly or if it's the first time
      // This prevents "jumping" on mobile scroll when the address bar hides/shows
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
      pulses = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 8000); // Responsive particle count
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: Math.random() > 0.5 ? '#4FD1FF' : '#2F80FF'
        });
      }
    };

    const createPulse = () => {
      if (particles.length < 2) return;
      const startIdx = Math.floor(Math.random() * particles.length);
      // Find a nearby particle to pulse to
      const nearby = [];
      for (let i = 0; i < particles.length; i++) {
        if (i === startIdx) continue;
        const dx = particles[startIdx].x - particles[i].x;
        const dy = particles[startIdx].y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) nearby.push(i);
      }

      if (nearby.length > 0) {
        const endIdx = nearby[Math.floor(Math.random() * nearby.length)];
        pulses.push({
          start: startIdx,
          end: endIdx,
          progress: 0,
          speed: 0.01 + Math.random() * 0.02
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Randomly create pulses
      if (Math.random() < 0.08 && pulses.length < 15) {
        createPulse();
      }

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around instead of bouncing
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Add glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 14400) { // 120 * 120
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Opacity based on distance
            const opacity = 1 - dist / 120;
            ctx.strokeStyle = `rgba(79, 209, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      // Draw pulses
      ctx.lineWidth = 2;
      pulses = pulses.filter(pulse => {
        const p1 = particles[pulse.start];
        const p2 = particles[pulse.end];
        if (!p1 || !p2) return false;

        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) return false;

        const x = p1.x + (p2.x - p1.x) * pulse.progress;
        const y = p1.y + (p2.y - p1.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#4FD1FF';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw a small line trail for the pulse
        ctx.beginPath();
        ctx.moveTo(p1.x + (p2.x - p1.x) * Math.max(0, pulse.progress - 0.1), p1.y + (p2.y - p1.y) * Math.max(0, pulse.progress - 0.1));
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#4FD1FF';
        ctx.lineWidth = 2;
        ctx.stroke();

        return true;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
};
