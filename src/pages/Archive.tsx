import { motion } from "motion/react";

const ARCHIVE_ITEMS = [
  {
    id: "A01",
    year: "2022",
    name: "PROTOTYPE_ALPHA",
    description:
      "Initial exploration into high-density poly-carbon structures. Discontinued due to excessive weight.",
    image: "https://picsum.photos/seed/proto1/800/1200",
  },
  {
    id: "A02",
    year: "2023",
    name: "VOID_WALKER_V1",
    description:
      "Early iteration of the V-VOID series. Featured a more aggressive ridge pattern.",
    image: "https://picsum.photos/seed/proto2/800/1200",
  },
  {
    id: "A03",
    year: "2023",
    name: "SILENCE_GEN_0",
    description:
      "The foundation of the Essentials line. Pure foam core with minimal treatment.",
    image: "https://picsum.photos/seed/proto3/800/1200",
  },
  {
    id: "A04",
    year: "2024",
    name: "ARCH_BETA_TEST",
    description:
      "Limited run architectural panels with experimental matte finishes.",
    image: "https://picsum.photos/seed/proto4/800/1200",
  },
];

export function Archive() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 pb-24 px-8"
    >
      <header className="mb-20">
        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-[-0.05em] uppercase mb-4">
          Archive
        </h1>
        <p className="font-label text-xs uppercase tracking-widest text-outline">
          Historical Records / Discontinued Units
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ARCHIVE_ITEMS.map((item) => (
          <div key={item.id} className="flex flex-col group">
            <div className="relative aspect-versace border-2 border-outline-variant overflow-hidden mb-6 bg-transparent">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-outline text-white px-2 py-1 font-label text-[10px] uppercase tracking-widest">
                {item.year}
              </div>
            </div>
            <h3 className="font-headline text-xl font-black uppercase mb-2">
              {item.name}
            </h3>
            <p className="font-body text-xs text-outline-variant leading-relaxed uppercase tracking-tight">
              {item.description}
            </p>
            <div className="mt-4 pt-4 border-t border-outline-variant">
              <span className="font-label text-[10px] text-outline uppercase tracking-widest">
                Status: Decommissioned
              </span>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-32 p-12 border-4 border-outline-variant bg-transparent text-center">
        <h2 className="font-headline text-3xl font-black uppercase mb-4">
          Accessing Legacy Data
        </h2>
        <p className="font-body text-sm text-outline max-w-2xl mx-auto uppercase tracking-wide">
          The archive contains units that have been superseded by the current
          2026 collection. These items are no longer available for procurement
          but remain part of the absorb technical history.
        </p>
      </section>
    </motion.div>
  );
}
