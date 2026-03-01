import React, { useEffect, useRef } from 'react';

    interface DataFlowProps {
        shape?: 'sphere' | 'head';
    }

    export const DataFlow: React.FC<DataFlowProps> = ({ shape = 'sphere' }) => {
      const canvasRef = useRef<HTMLCanvasElement>(null);
    
      useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;

    // Configuration
    const PARTICLE_COUNT = 60;
    const CONNECTION_DISTANCE = 120;
    const ROTATION_SPEED = 0.001;
    const PERSPECTIVE = 800;
    const SPHERE_RADIUS = 350; // Increased radius for larger network
    
    // Color Palette for Accents
    const COLORS = [
        '#4FD1FF', // Primary Cyan
        '#2F80FF', // Deep Blue
        '#A855F7', // Purple Accent
        '#ffffff'  // White for highlights
    ];

    interface Point3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      color: string; // Add color property
    }

    interface Signal {
      startIndex: number;
      endIndex: number;
      progress: number;
      speed: number;
    }

    let points: Point3D[] = [];
    let signals: Signal[] = [];
    let angle = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width;
        canvas.height = height;
        initPoints();
      }
    };

    const initPoints = () => {
      points = [];
      // Create a cloud of points
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        let x, y, z;

        if (shape === 'head') {
            // Approximate head shape using multiple spheres/ellipsoids
            // Main cranium
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            
            // Base radius
            let r = SPHERE_RADIUS * 0.6; // Slightly smaller base
            
            // Elongate for face/jaw
            let sy = 1.2; 
            let sx = 0.9;
            let sz = 1.0;

            // Simple procedural head shape modification
            // Taper bottom for jaw
            const yFactor = Math.cos(phi); // -1 at bottom, 1 at top
            if (yFactor < 0) {
                sx *= 0.8; // Narrow jaw
                sz *= 0.9;
            }

            x = r * sx * Math.sin(phi) * Math.cos(theta);
            y = r * sy * Math.cos(phi); // Swap cos/sin for upright orientation if needed, but standard spherical is fine. Let's adjust.
            // Standard spherical: y is up/down if we map it right. 
            // Actually in 3D canvas usually Y is down.
            // Let's stick to standard sphere math then stretch.
            
            y = r * Math.cos(phi) * 1.3; // Stretch vertically
            x = r * Math.sin(phi) * Math.cos(theta) * 0.9; // Narrow width
            z = r * Math.sin(phi) * Math.sin(theta);

            // Add some noise/variation
            x += (Math.random() - 0.5) * 20;
            y += (Math.random() - 0.5) * 20;
            z += (Math.random() - 0.5) * 20;

        } else {
            // Random spherical distribution (default)
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = SPHERE_RADIUS * (0.5 + Math.random() * 0.5); // Varying radius

            x = r * Math.sin(phi) * Math.cos(theta);
            y = r * Math.sin(phi) * Math.sin(theta);
            z = r * Math.cos(phi);
        }

        // Assign random color with weighted probability
        const colorIndex = Math.random() > 0.8 ? 2 : (Math.random() > 0.5 ? 1 : 0);
        // 20% Purple, 30% Deep Blue, 50% Cyan/White mix (handled below)
        let color = COLORS[colorIndex];
        if (colorIndex === 0 && Math.random() > 0.8) color = COLORS[3]; // Occasional white

        points.push({
          x, y, z,
          baseX: x, baseY: y, baseZ: z,
          vx: (Math.random() - 0.5) * 0.2, // Random slow velocity
          vy: (Math.random() - 0.5) * 0.2,
          vz: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.5 + 0.5,
          color: color
        });
      }
    };

    // Helper to convert hex to rgb object
    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 79, g: 209, b: 255 };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Center of the canvas
      const cx = width * 0.6; // Shift slightly right
      const cy = height * 0.5;

      // Constant rotation
      angle += ROTATION_SPEED;

      // Rotate and project points
      const projectedPoints = points.map(p => {
        // Update position based on velocity
        p.baseX += p.vx;
        p.baseY += p.vy;
        p.baseZ += p.vz;

        // Soft boundary constraint (keep points inside sphere)
        const dist = Math.sqrt(p.baseX * p.baseX + p.baseY * p.baseY + p.baseZ * p.baseZ);
        if (dist > SPHERE_RADIUS) {
            // Push back towards center
            const force = 0.005;
            p.vx -= (p.baseX / dist) * force;
            p.vy -= (p.baseY / dist) * force;
            p.vz -= (p.baseZ / dist) * force;
        }

        // Rotate around Y axis
        
        // Apply rotation matrix
        let x = p.baseX;
        let y = p.baseY;
        let z = p.baseZ;

        // Y-axis rotation
        const rx = x * Math.cos(angle) - z * Math.sin(angle);
        const rz = x * Math.sin(angle) + z * Math.cos(angle);
        x = rx;
        z = rz;

        // Project 3D to 2D
        const scale = PERSPECTIVE / (PERSPECTIVE + z + SPHERE_RADIUS);
        const x2d = cx + x * scale;
        const y2d = cy + y * scale;
        const alpha = Math.max(0, Math.min(1, (z + SPHERE_RADIUS) / (SPHERE_RADIUS * 2))); // Depth based opacity

        return { x: x2d, y: y2d, z, scale, alpha, size: p.size, color: p.color };
      });

      // Draw connections and spawn signals
      ctx.lineWidth = 0.5;
      const connectedPairs: number[][] = []; // Store connected indices for signals

      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          
          // Calculate 2D distance
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            connectedPairs.push([i, j]);

            // Opacity based on distance and depth (z-index)
            // We want closer points (higher z) to be more visible
            const depthAlpha = (p1.alpha + p2.alpha) / 2;
            const distAlpha = 1 - (dist / CONNECTION_DISTANCE);
            
            if (depthAlpha > 0.2) {
                ctx.beginPath();
                
                const c1 = hexToRgb(p1.color);
                const c2 = hexToRgb(p2.color);

                const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                // Increased opacity from 0.3 to 0.6 for brighter connections
                grad.addColorStop(0, `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${depthAlpha * distAlpha * 0.6})`);
                grad.addColorStop(1, `rgba(${c2.r}, ${c2.g}, ${c2.b}, ${depthAlpha * distAlpha * 0.6})`);

                ctx.strokeStyle = grad;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
          }
        }
      }

      // Manage Signals
      // 1. Spawn new signals
      if (Math.random() < 0.05 && connectedPairs.length > 0) { // 5% chance per frame
          const pair = connectedPairs[Math.floor(Math.random() * connectedPairs.length)];
          // Random direction
          if (Math.random() > 0.5) {
              signals.push({ startIndex: pair[0], endIndex: pair[1], progress: 0, speed: 0.02 + Math.random() * 0.03 });
          } else {
              signals.push({ startIndex: pair[1], endIndex: pair[0], progress: 0, speed: 0.02 + Math.random() * 0.03 });
          }
      }

      // 2. Update and draw signals
      for (let i = signals.length - 1; i >= 0; i--) {
          const s = signals[i];
          s.progress += s.speed;
          
          if (s.progress >= 1) {
              signals.splice(i, 1);
              continue;
          }

          const pStart = projectedPoints[s.startIndex];
          const pEnd = projectedPoints[s.endIndex];

          // If points are too far apart (connection broken), kill signal
          const dx = pStart.x - pEnd.x;
          const dy = pStart.y - pEnd.y;
          if (Math.sqrt(dx*dx + dy*dy) > CONNECTION_DISTANCE) {
               signals.splice(i, 1);
               continue;
          }

          const curX = pStart.x + (pEnd.x - pStart.x) * s.progress;
          const curY = pStart.y + (pEnd.y - pStart.y) * s.progress;
          
          // Draw signal particle
          const alpha = (pStart.alpha + pEnd.alpha) / 2;
          if (alpha > 0.2) {
              ctx.beginPath();
              ctx.arc(curX, curY, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.shadowBlur = 4;
              ctx.shadowColor = '#ffffff';
              ctx.fill();
              ctx.shadowBlur = 0;
          }
      }

      // Draw points
      projectedPoints.forEach(p => {
        if (p.alpha > 0.1) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * p.scale, 0, Math.PI * 2);
            
            const rgb = hexToRgb(p.color);
            // Increased point opacity from 0.8 to 1.0
            ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.alpha})`;
            ctx.fill();
            
            // Glow effect for closer points
            if (p.alpha > 0.6) { // Lowered threshold for glow
                ctx.shadowBlur = 15; // Increased glow radius
                ctx.shadowColor = p.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }
      });

      // Gradient Mask to fade out left side completely (protect text)
      const gradient = ctx.createLinearGradient(0, 0, width * 0.4, 0);
      gradient.addColorStop(0, 'rgba(0,0,0,1)'); // Destination-out uses alpha
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width * 0.4, height);
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shape]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block"
      style={{ background: 'transparent' }}
    />
  );
};
