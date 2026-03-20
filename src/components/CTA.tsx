import { motion } from 'motion/react';
import { Calendar, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#9B59B6]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à créer quelque chose d'unique ?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Réservez votre séance ou contactez-nous pour discuter de votre projet
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#FF6B35] font-bold rounded-full shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Calendar size={20} />
              <span>Prendre rendez-vous</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              <span>Nous écrire</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
