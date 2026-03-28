import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-surface-container-highest border-l-4 border-outline z-[70] flex flex-col"
          >
            <div className="p-8 border-b-2 border-outline flex justify-between items-center bg-background">
              <h2 className="text-2xl font-black font-headline uppercase tracking-tighter">CART_SYSTEM</h2>
              <button onClick={onClose} className="text-outline hover:text-primary transition-none">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-8 bg-surface-container-lowest">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={48} className="text-outline-variant" />
                  <p className="font-label uppercase tracking-widest text-outline">EMPTY_INVENTORY</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 border-b border-outline-variant pb-8">
                    <div className="w-24 h-24 bg-surface-container overflow-hidden border-2 border-outline-variant">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-grow space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-headline font-bold text-sm uppercase">{item.name}</h3>
                        <button onClick={() => onRemove(item.id)} className="text-outline hover:text-white transition-none">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-[0.625rem] font-label text-outline uppercase tracking-widest">{item.seriesId}</p>
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center border-2 border-outline-variant">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-white hover:text-black transition-none"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 font-label text-xs">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-white hover:text-black transition-none"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-label text-sm font-bold">{(item.price * item.quantity).toLocaleString()} kr.</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-8 border-t-4 border-outline bg-background space-y-6">
              <div className="flex justify-between items-end">
                <span className="font-label text-xs text-outline uppercase tracking-widest">SUBTOTAL</span>
                <span className="text-3xl font-black font-headline tracking-tighter">{total.toLocaleString()} kr.</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full bg-transparent border-2 border-primary text-primary px-6 py-4 font-headline text-sm font-black uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                INITIATE_CHECKOUT
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
