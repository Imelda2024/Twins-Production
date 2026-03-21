'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight, Plus, AlertTriangle, Coffee } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import CTA from '../../components/CTA';

const CATEGORIES = [
  'Tous', 'T-Shirts', 'Maillots', 'Pagnes', 'Tasses', 'Casquettes', 'Foulards', 'Sacs', 'Flyers', 'Bâches', 'Cartes', 'Tableaux', 'Tirages photo'
];

const PRODUCTS = [
  {
    id: 1,
    category: 'Sérigraphie',
    title: 'Affiche Sérigraphiée',
    description: 'Affiches artistiques imprimées en sérigraphie. Format A3 ou A2, papier épais 300g.',
    price: 2500,
    currency: 'FCFA',
    image: 'https://picsum.photos/seed/print/800/600',
    isNew: false
  },
  {
    id: 2,
    category: 'Accessoires',
    title: 'Mug Personnalisé',
    description: 'Mug en céramique avec votre photo ou design. Résistant au lave-vaisselle.',
    price: 1200,
    currency: 'FCFA',
    image: 'https://picsum.photos/seed/mug/800/600',
    isNew: true
  }
];

export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <PageHeader
        title="Notre"
        highlightedWord="Boutique"
        subtitle="Produits personnalisés, sacs créatifs et sérigraphie sur mesure"
      />

      {/* Cart Summary Bar */}
      <div className="bg-[#1A1A2E] py-4 border-t border-white/5 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3 text-white/80 text-sm font-medium">
            <ShoppingCart size={18} className="text-[#FF6B35]" />
            <span>Panier : 0 article(s) — 0 FCFA</span>
          </div>
          <button className="bg-[#FF6B35] text-white text-xs font-black px-6 py-2 rounded-full shadow-lg shadow-[#FF6B35]/20 hover:scale-105 active:scale-95 transition-all">
            Voir le panier
          </button>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FF6B35] border-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/20'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-[#FF6B35] hover:text-[#FF6B35]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Error/Empty State Placeholder (as seen in image) */}
          <div className="mb-24 flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-200 rounded-[2rem] bg-white/50">
            <AlertTriangle className="text-gray-300 mb-4" size={48} />
            <p className="text-gray-400 font-medium">Impossible de charger les produits.</p>
          </div>

          {/* Product List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 border border-gray-100 group"
              >
                {/* Image Area */}
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#9B59B6] to-[#FF6B35]">
                  {product.isNew && (
                    <span className="absolute top-6 left-6 z-10 bg-[#3498DB] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Nouveau
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-700">
                    <Coffee size={64} className="text-white" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6B35] mb-4 block">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-black text-[#1A1A2E] mb-4 tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="text-2xl font-black text-[#FF6B35] tracking-tight">
                      {product.price.toLocaleString()} {product.currency}
                    </div>
                    <button className="flex items-center space-x-2 bg-[#1A1A2E] text-white px-6 py-3 rounded-xl font-black text-sm hover:bg-[#FF6B35] transition-all shadow-lg shadow-black/10">
                      <Plus size={18} />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
