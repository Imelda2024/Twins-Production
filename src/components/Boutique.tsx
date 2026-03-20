'use client';

import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Sac Personnalisé', price: '5000 FCFA', image: 'https://images.unsplash.com/photo-1544816153-16ad4614ff28?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, name: 'Tasse Sublimée', price: '3000 FCFA', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, name: 'T-Shirt Sérigraphié', price: '4500 FCFA', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, name: 'Casquette Brodée', price: '3500 FCFA', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, name: 'Cadre Photo', price: '8000 FCFA', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop' },
  { id: 6, name: 'Agenda Personnalisé', price: '6000 FCFA', image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1974&auto=format&fit=crop' },
];

export default function Boutique() {
  return (
    <section id="boutique" className="py-24 bg-[#1A1A2E] bg-grid-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-white mb-4">Notre Boutique</h2>
            <p className="text-gray-400">
              Découvrez nos produits personnalisés. Qualité supérieure et design unique pour vos cadeaux ou votre entreprise.
            </p>
          </div>
          <button className="flex items-center space-x-2 text-[#FF6B35] font-bold hover:space-x-3 transition-all">
            <span>Voir tout le catalogue</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <ShoppingBag size={18} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF6B35] font-black">{product.price}</span>
                  <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                    Détails
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
