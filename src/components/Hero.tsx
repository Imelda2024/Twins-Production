import { motion } from 'motion/react';
import { THEME } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#9B59B6]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF6B35]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#FF6B35] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            STUDIO • ÉVÉNEMENTS • GRAPHISME • BOUTIQUE
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
            Donnez vie à vos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#9B59B6]">
              idées créatives
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Twins Productions capture vos moments, crée vos visuels et personnalise vos produits. 
            Une équipe passionnée à votre service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#galerie"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-full shadow-lg shadow-[#FF6B35]/20 transition-all hover:bg-[#FF6B35]/90 w-full sm:w-auto"
            >
              Voir notre galerie
            </motion.a>
            <motion.a
              href="#rendez-vous"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all hover:bg-white/10 w-full sm:w-auto"
            >
              Prendre RDV
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-[#FF6B35] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
