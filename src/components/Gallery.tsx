'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const categories = [
    { title: 'Studio Photo & Audiovisuel', class: 'col-span-2 row-span-2 bg-gradient-to-br from-[#9B59B6] to-[#FF6B35]' },
    { title: 'Couverture Événementielle', class: 'col-span-1 row-span-2 bg-gradient-to-br from-[#9B59B6] to-[#FF6B35]' },
    { title: 'Événement', class: 'col-span-1 row-span-1 bg-gradient-to-br from-[#9B59B6] to-[#FF6B35]' },
    { title: 'Graphisme', class: 'col-span-1 row-span-1 bg-gradient-to-br from-[#9B59B6] to-[#FF6B35]' },
    { title: 'Boutique', class: 'col-span-3 row-span-1 bg-gradient-to-r from-[#9B59B6] to-[#FF6B35]' },
  ];

  return (
    <section id="galerie" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">Notre Galerie</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Un aperçu de notre travail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[800px] mb-12">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${cat.class} rounded-2xl relative group cursor-pointer overflow-hidden flex items-center justify-center`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <h3 className="text-white text-xl font-bold z-10">{cat.title}</h3>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Maximize2 size={20} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/galerie">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-full flex items-center space-x-2 shadow-lg shadow-[#FF6B35]/20 cursor-pointer"
            >
              <Maximize2 size={20} />
              <span>Voir toute la galerie</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
