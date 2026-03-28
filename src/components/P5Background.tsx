import { useEffect, useRef } from 'react';
import p5 from 'p5';

export function P5Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let hexagons: Hexagon[] = [];
      let hexMap = new Map<string, Hexagon>();
      let lastSpawnAxial: { q: number, r: number } = { q: -1000, r: -1000 };

      const HEX_SIZE = 50; // Radius
      const TARGET_FPS = 60;
      const LIFETIME_SECONDS = 9;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.frameRate(TARGET_FPS);
      };

      p.draw = () => {
        p.background(0);

        // 1. AXIAL SPAWNING
        let mouseAxial = pixelToAxial(p.mouseX, p.mouseY, HEX_SIZE);
        
        if (lastSpawnAxial.q === -1000) {
          addHex(mouseAxial.q, mouseAxial.r);
          lastSpawnAxial = mouseAxial;
        } else if (mouseAxial.q !== lastSpawnAxial.q || mouseAxial.r !== lastSpawnAxial.r) {
          const dist = hexDistance(lastSpawnAxial, mouseAxial);
          // Fill gaps if mouse moves fast, but cap it to prevent performance spikes
          if (dist < 50) {
            for (let i = 1; i <= dist; i++) {
              const t = i / dist;
              const interpolated = hexLerp(lastSpawnAxial, mouseAxial, t);
              const rounded = roundToHex(interpolated.q, interpolated.r);
              addHex(rounded.q, rounded.r);
            }
          } else {
             addHex(mouseAxial.q, mouseAxial.r);
          }
          lastSpawnAxial = mouseAxial;
        }

        // 2. Lifecycle & Cleanup
        for (let i = hexagons.length - 1; i >= 0; i--) {
          const h = hexagons[i];
          h.update();
          if (h.lifespan <= 0) {
            hexMap.delete(`${h.q},${h.r}`);
            hexagons.splice(i, 1);
          }
        }

        // 3. Render
        for (const h of hexagons) {
          h.display();
        }
      };

      function addHex(q: number, r: number) {
        const key = `${q},${r}`;
        if (hexMap.has(key)) {
          // Refresh lifespan if already exists
          hexMap.get(key)!.lifespan = LIFETIME_SECONDS * TARGET_FPS;
        } else {
          const hex = new Hexagon(p, q, r, HEX_SIZE, LIFETIME_SECONDS * TARGET_FPS);
          hexagons.push(hex);
          hexMap.set(key, hex);
        }
      }

      function pixelToAxial(x: number, y: number, size: number) {
        const q = (2/3 * x) / size;
        const r = (-1/3 * x + Math.sqrt(3)/3 * y) / size;
        return roundToHex(q, r);
      }

      function roundToHex(q: number, r: number) {
        let s = -q - r;
        let rq = Math.round(q);
        let rr = Math.round(r);
        let rs = Math.round(s);

        const qDiff = Math.abs(rq - q);
        const rDiff = Math.abs(rr - r);
        const sDiff = Math.abs(rs - s);

        if (qDiff > rDiff && qDiff > sDiff) {
          rq = -rr - rs;
        } else if (rDiff > sDiff) {
          rr = -rq - rs;
        }
        return { q: rq, r: rr };
      }

      function hexDistance(a: {q: number, r: number}, b: {q: number, r: number}) {
        return (Math.abs(a.q - b.q) + Math.abs(a.q + a.r - b.q - b.r) + Math.abs(a.r - b.r)) / 2;
      }

      function hexLerp(a: {q: number, r: number}, b: {q: number, r: number}, t: number) {
        return {
          q: a.q + (b.q - a.q) * t,
          r: a.r + (b.r - a.r) * t
        };
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      class Hexagon {
        p: p5;
        q: number;
        r: number;
        pos: p5.Vector;
        size: number;
        lifespan: number;
        maxLifespan: number;

        constructor(p: p5, q: number, r: number, size: number, maxLifespan: number) {
          this.p = p;
          this.q = q;
          this.r = r;
          this.size = size;
          this.maxLifespan = maxLifespan;
          this.lifespan = maxLifespan;
          
          // Flat-topped axial to pixel conversion
          const x = size * 3/2 * q;
          const y = size * Math.sqrt(3) * (r + q/2);
          this.pos = p.createVector(x, y);
        }

        update() {
          this.lifespan--;
        }

        display() {
          const alpha = this.p.map(this.lifespan, 0, this.maxLifespan, 0, 20);
          this.p.push();
          this.p.translate(this.pos.x, this.pos.y);
          
          // "Filt" effect - solid but translucent body
          this.p.fill(120, 120, 160, alpha);
          this.p.noStroke();
          this.drawHex(this.size);
          
          // Subtle border
          this.p.noFill();
          this.p.stroke(120, 120, 160, alpha * 2);
          this.p.strokeWeight(1);
          this.drawHex(this.size);
          
          this.p.pop();
        }

        drawHex(r: number) {
          this.p.beginShape();
          for (let a = 0; a < this.p.TWO_PI; a += this.p.TWO_PI / 6) {
            let sx = Math.cos(a) * r;
            let sy = Math.sin(a) * r;
            this.p.vertex(sx, sy);
          }
          this.p.endShape(this.p.CLOSE);
        }
      }
    };

    const p5Instance = new p5(sketch, containerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'black' }}
    />
  );
}
