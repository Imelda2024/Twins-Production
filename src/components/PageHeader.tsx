'use client';

import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  highlightedWord: string;
  subtitle: string;
}

export default function PageHeader({ title, highlightedWord, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-20 bg-[#1A1A2E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF6B35] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#9B59B6] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
        >
          {title} <span className="text-[#FF6B35]">{highlightedWord}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/70 max-w-2xl mx-auto font-medium"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
