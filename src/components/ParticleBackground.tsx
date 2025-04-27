
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.directionX = (Math.random() - 0.5) * 0.7;
        this.directionY = (Math.random() - 0.5) * 0.7;
        this.size = Math.random() * 3 + 1;
        this.color = 'rgba(113, 201, 206, 0.5)'; // Teal/mint color with transparency
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particle array
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 20)); // Responsive number of particles
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    // Draw lines between particles
    const drawLines = (p1: Particle, p2: Particle) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 200;

      if (distance < maxDistance) {
        ctx.beginPath();
        // Gradient opacity based on distance
        const opacity = 0.2 * (1 - distance / maxDistance);
        ctx.strokeStyle = `rgba(113, 201, 206, ${opacity})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          drawLines(particles[i], particles[j]);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Handle mouse interaction
    const mouseMoveHandler = (e: MouseEvent) => {
      // Create a temporary particle at mouse position for visual effect
      const mouseParticle = new Particle(e.x, e.y);
      mouseParticle.size = 0; // Make it invisible
      
      // Connect to nearby particles
      particles.forEach(particle => {
        drawLines(mouseParticle, particle);
      });
    };

    canvas.addEventListener('mousemove', mouseMoveHandler);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      canvas.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
