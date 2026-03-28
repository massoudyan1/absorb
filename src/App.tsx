import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { CartDrawer } from "./components/CartDrawer";
import { PRODUCTS } from "./constants";
import { Product, CartItem } from "./types";
import { motion } from "motion/react";
import { Specs } from "./pages/Specs";
import { Archive } from "./pages/Archive";
import { Sessions } from "./pages/Sessions";
import { P5Background } from "./components/P5Background";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }),
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-transparent flex flex-col relative">
        <P5Background />
        <Navbar
          cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="catalogue" replace />} />
            <Route
              path="catalogue"
              element={<Shop onAddToCart={addToCart} />}
            />
            <Route path="specs" element={<Specs />} />
            <Route path="archive" element={<Archive />} />
            <Route path="sessions" element={<Sessions />} />
          </Routes>
        </main>

        <Footer />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      </div>
    </Router>
  );
}

function Shop({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  const [filter, setFilter] = useState<"ALL" | "ARCH" | "EXP" | "ESS">("ALL");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === "ALL") return true;
    return p.seriesId.includes(filter);
  });

  return (
    <div className="pt-32 pb-24 px-8">
      {/* Sub-Navigation Header */}
      <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h1 className="font-headline text-5xl md:text-4xl font-black tracking-[-0.05em] uppercase mb-4">
            in silence we hear
          </h1>
          <p className="font-label text-xs uppercase tracking-widest text-outline">
            Collections of Winter-Spring 2026
          </p>
        </div>
        <div className="flex gap-8 border-b border-outline-variant pb-2 w-full md:w-auto overflow-x-auto">
          <button
            onClick={() => setFilter("ALL")}
            className={`font-headline text-sm font-bold uppercase tracking-tighter transition-none whitespace-nowrap ${filter === "ALL" ? "text-primary" : "text-outline hover:text-primary"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("ARCH")}
            className={`font-headline text-sm font-bold uppercase tracking-tighter transition-none whitespace-nowrap ${filter === "ARCH" ? "text-primary" : "text-outline hover:text-primary"}`}
          >
            Architectural
          </button>
          <button
            onClick={() => setFilter("EXP")}
            className={`font-headline text-sm font-bold uppercase tracking-tighter transition-none whitespace-nowrap ${filter === "EXP" ? "text-primary" : "text-outline hover:text-primary"}`}
          >
            Experimental
          </button>
          <button
            onClick={() => setFilter("ESS")}
            className={`font-headline text-sm font-bold uppercase tracking-tighter transition-none whitespace-nowrap ${filter === "ESS" ? "text-primary" : "text-outline hover:text-primary"}`}
          >
            Essentials
          </button>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Spec Grid Footer Detail */}
      <section className="mt-32 pt-16 border-t-4 border-outline">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-outline-variant">
          <SpecItem label="Technical Standard" value="ASTM C423" />
          <SpecItem label="Material Core" value="Poly-Carbon" />
          <SpecItem label="Grid Layout" value="1:1.7 VERS" />
          <SpecItem label="Latent Delay" value="0.02ms" />
        </div>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-transparent flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 border-t-4 border-[#919191]">
      <div className="text-sm font-bold text-white mb-8 md:mb-0 uppercase">
        ©2026 absorb
      </div>
      <div className="flex gap-12">
        <a
          className="font-body uppercase text-[0.6875rem] tracking-widest text-[#474747] hover:text-white transition-none"
          href="#"
        >
          PRIVACY
        </a>
        <a
          className="font-body uppercase text-[0.6875rem] tracking-widest text-[#474747] hover:text-white transition-none"
          href="#"
        >
          TERMS
        </a>
        <a
          className="font-body uppercase text-[0.6875rem] tracking-widest text-[#474747] hover:text-white transition-none"
          href="#"
        >
          COORDINATES
        </a>
        <a
          className="font-body uppercase text-[0.6875rem] tracking-widest text-[#474747] hover:text-white transition-none"
          href="#"
        >
          DISCLAIMER
        </a>
      </div>
      <div className="mt-8 md:mt-0 font-body uppercase text-[0.6875rem] tracking-widest text-[#919191]">
        EST. 40.7128° N, 74.0060° W
      </div>
    </footer>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-8 border-r border-b border-outline-variant last:border-r-0">
      <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-2">
        {label}
      </p>
      <p className="font-headline text-xl font-bold uppercase">{value}</p>
    </div>
  );
}
