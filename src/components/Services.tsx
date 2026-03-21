'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Mountain, Calendar, PenTool, ShoppingBag, Printer, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import BookingModal from './BookingModal';
import { Service } from '../types';

const iconMap: Record<string, any> = {
  Camera,
  Mountain,
  Calendar,
  PenTool,
  ShoppingBag,
  Printer,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: any) => {
    if (service.category === 'Boutique') return; // Handled by Link
    if (service.category === 'Design') return; // Handled by Link
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A2E] mb-4">Nos Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Tout ce dont vous avez besoin en un seul endroit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isBoutique = service.category === 'Boutique';
            const isDesign = service.category === 'Design';
            const linkPath = isBoutique ? '/boutique' : isDesign ? '/contact' : null;

            const ButtonContent = (
              <div className="flex items-center space-x-2 text-[#FF6B35] font-bold text-sm hover:space-x-3 transition-all">
                <span>{isBoutique ? 'Voir la boutique' : isDesign ? 'Nous contacter' : 'Réserver'}</span>
                <ArrowRight size={16} />
              </div>
            );

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#FF6B35]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B35] transition-colors duration-300">
                  <Icon className="text-[#FF6B35] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {linkPath ? (
                  <Link href={linkPath}>
                    {ButtonContent}
                  </Link>
                ) : (
                  <button onClick={() => handleServiceClick(service)}>
                    {ButtonContent}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService} 
      />
    </section>
  );
}

