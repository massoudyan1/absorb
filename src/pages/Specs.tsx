import { motion } from 'motion/react';

export function Specs() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 pb-24 px-8"
    >
      <header className="mb-20">
        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-[-0.05em] uppercase mb-4">Technical Specs</h1>
        <p className="font-label text-xs uppercase tracking-widest text-outline">Performance Data / System Standards</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section className="space-y-12">
          <div>
            <h2 className="font-headline text-2xl font-black uppercase mb-6 border-b-2 border-outline pb-2">Material Composition</h2>
            <div className="space-y-4">
              <SpecRow label="Core Material" value="High-Density Poly-Carbon Fiber" />
              <SpecRow label="Surface Finish" value="Matte Obsidian / Non-Reflective" />
              <SpecRow label="Density" value="96 kg/m³" />
              <SpecRow label="Fire Rating" value="Class A (ASTM E84)" />
            </div>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-black uppercase mb-6 border-b-2 border-outline pb-2">Acoustic Performance</h2>
            <div className="space-y-4">
              <SpecRow label="NRC Rating" value="0.85 - 1.55 (Variable by Series)" />
              <SpecRow label="Absorption Range" value="125Hz - 4000Hz" />
              <SpecRow label="Diffusion Pattern" value="Non-Linear Quadratic Residue" />
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="bg-transparent p-8 border-2 border-outline-variant">
            <h2 className="font-headline text-xl font-black uppercase mb-6">Installation Protocol</h2>
            <ul className="space-y-4 font-label text-xs uppercase tracking-widest text-outline leading-loose">
              <li>01. Surface must be cleared of all particulate matter.</li>
              <li>02. Apply industrial-grade adhesive to secondary grid.</li>
              <li>03. Align unit with laser precision (0.5mm tolerance).</li>
              <li>04. Maintain pressure for 120 seconds.</li>
              <li>05. Verify acoustic seal.</li>
            </ul>
          </div>

          <div className="border-4 border-primary p-8">
            <h2 className="font-headline text-xl font-black uppercase mb-4 text-primary">Compliance Notice</h2>
            <p className="font-body text-sm text-outline-variant leading-relaxed">
              All absorb units are tested in anechoic environments to ensure maximum suppression. 
              Deviation from standard installation protocols may result in latent delay or 
              spectral leakage.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-end border-b border-outline-variant pb-2">
      <span className="font-label text-[10px] uppercase tracking-widest text-outline">{label}</span>
      <span className="font-headline text-sm font-bold uppercase">{value}</span>
    </div>
  );
}
