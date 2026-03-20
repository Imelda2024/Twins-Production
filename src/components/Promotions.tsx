import { motion } from 'motion/react';
import { Gift } from 'lucide-react';

export default function Promotions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">Promotions en cours</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Nos offres spéciales du moment
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-12 rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center text-center"
        >
          <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mb-6">
            <Gift className="text-[#FF6B35]" size={32} />
          </div>
          <p className="text-gray-500 text-lg">
            Aucune promotion en ce moment. <br />
            Revenez bientôt !
          </p>
        </motion.div>
      </div>
    </section>
  );
}
