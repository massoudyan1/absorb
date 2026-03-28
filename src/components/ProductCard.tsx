import { Product } from '../types';
import { Lock, Filter } from 'lucide-react';

interface ProductCardProps {
  key?: string;
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const isRestricted = product.status === 'RESTRICTED';

  return (
    <div className="flex flex-col group">
      <div className="relative bg-transparent border-2 border-outline-variant aspect-versace overflow-hidden mb-6">
        {isRestricted ? (
          <div className="w-full h-full flex items-center justify-center p-12 bg-transparent">
            <div className="text-center">
              <div className="text-6xl text-outline-variant block mb-4 flex justify-center">
                <Lock size={64} strokeWidth={1} />
              </div>
              <p className="font-label text-[10px] uppercase tracking-widest text-outline">Access Denied</p>
            </div>
          </div>
        ) : (
          <img 
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 hover:scale-105 transition-none" 
            src={product.image} 
            alt={product.name}
            referrerPolicy="no-referrer"
          />
        )}
        
        <div className="absolute top-4 left-4">
          <span className={`${isRestricted ? 'bg-outline-variant text-white' : 'bg-primary text-on-primary'} px-2 py-1 font-label text-[10px] font-black uppercase tracking-widest`}>
            {product.status}
          </span>
        </div>

        {!isRestricted && (
          <div className="absolute bottom-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-none">
            <Filter size={32} strokeWidth={1} />
          </div>
        )}
      </div>

      <div className="flex justify-between items-start mb-2">
        <h3 className="font-headline text-2xl font-black tracking-tighter uppercase">{product.name}</h3>
        <span className="font-label text-sm font-bold">{isRestricted ? '---' : `${product.price.toLocaleString()} kr.`}</span>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <span className="font-label text-[10px] text-outline uppercase tracking-widest">
          {isRestricted ? 'AUTH_REQUIRED' : `NRC RATING: ${product.nrcRating}`}
        </span>
        <button 
          disabled={isRestricted}
          onClick={() => onAddToCart(product)}
          className={`px-6 py-3 font-headline text-xs font-black uppercase tracking-widest transition-none border-2 ${
            isRestricted 
              ? 'bg-outline-variant border-outline-variant text-[#000000] cursor-not-allowed' 
              : 'bg-transparent border-primary text-primary hover:bg-primary hover:text-on-primary'
          }`}
        >
          {isRestricted ? 'LOCKED' : 'SECURE_UNIT'}
        </button>
      </div>
    </div>
  );
}
