import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  baseX: number;
  baseY: number;
  density: number;
}

interface Signal {
  start: Particle;
  end: Particle;
  progress: number;
  speed: number;
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
    let signals: Signal[] = [];
    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseOver = false;

    // Configuration
    const PARTICLE_COUNT_FACTOR = 0.00008; // Increased density slightly
    const CONNECTION_DISTANCE = 200;
    const MOUSE_RADIUS = 300;
    const PARTICLE_SPEED = 0.005; // Extremely slow, almost static
    const COLORS = ['#4FD1FF', '#2F80FF', '#ffffff'];
    const SIGNAL_CHANCE = 0.008; // More frequent signals

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      // Ensure a minimum but don't force too many if the area is small
      const numParticles = Math.max(20, Math.floor(width * height * PARTICLE_COUNT_FACTOR));
      
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * PARTICLE_SPEED,
          vy: (Math.random() - 0.5) * PARTICLE_SPEED,
          size: Math.random() * 1.5 + 0.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          baseX: x,
          baseY: y,
          density: (Math.random() * 20) + 1,
        });
      }
    };

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02; // Speed of the twinkling effect
      
      // Update particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction (gentle repulsion/attraction)
        if (isMouseOver) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < MOUSE_RADIUS) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
            
            // Push away slightly
            const directionX = forceDirectionX * force * p.density * 0.3; // Reduced force
            const directionY = forceDirectionY * force * p.density * 0.3;
            
            p.x -= directionX;
            p.y -= directionY;
          }
        }
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            // Individual breathing for each connection
            // Use indices to create a unique offset for each pair so they fade independently
            const pairOffset = i * 43 + j * 17; 
            const breathing = (Math.sin(time + pairOffset) + 1) / 2;
            
            const distOpacity = 1 - (distance / CONNECTION_DISTANCE);
            const opacity = distOpacity * breathing * 0.4; // Base opacity

            if (opacity > 0.02) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(79, 209, 255, ${opacity})`;
                ctx.lineWidth = 0.6;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }

            // Randomly spawn signal only when visible
            if (Math.random() < SIGNAL_CHANCE && opacity > 0.15) {
              signals.push({
                start: p1,
                end: p2,
                progress: 0,
                speed: 0.01 + Math.random() * 0.02 // Slower signals
              });
            }
          }
        }
      }

      // Draw and update signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.progress += s.speed;
        
        if (s.progress >= 1) {
          signals.splice(i, 1);
          continue;
        }

        const curX = s.start.x + (s.end.x - s.start.x) * s.progress;
        const curY = s.start.y + (s.end.y - s.start.y) * s.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 1.5, 0, Math.PI * 2); // Smaller signal dots
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; // Less bright
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#4FD1FF';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      }

      // Draw nodes
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.8; // Increased opacity
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block"
      style={{ background: 'transparent' }}
    />
  );
};

