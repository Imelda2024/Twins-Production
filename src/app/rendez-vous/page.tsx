'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Mountain, PenTool, Printer, ArrowRight, Check } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import CTA from '../../components/CTA';

const STEPS = [
  { id: 1, name: 'Service' },
  { id: 2, name: 'Date & Heure' },
  { id: 3, name: 'Vos infos' },
  { id: 4, name: 'Confirmation' }
];

const SERVICES_BOOKING = [
  {
    id: 'photo',
    title: 'Studio Photo & Audiovisuel',
    description: 'Portrait, identité, professionnel, vidéo clips',
    price: 'À partir de 5 000 FCFA',
    icon: <Camera size={32} className="text-[#FF6B35]" />
  },
  {
    id: 'events',
    title: 'Couverture Événementielle',
    description: 'Mariage, anniversaire, communion, conférence',
    price: 'À partir de 15 000 FCFA',
    icon: <Mountain size={32} className="text-[#FF6B35]" />
  },
  {
    id: 'design',
    title: 'Design Graphique',
    description: 'Flyers, logos, affiches, brochures, cartes',
    price: 'À partir de 3 000 FCFA',
    icon: <PenTool size={32} className="text-[#FF6B35]" />
  },
  {
    id: 'print',
    title: 'Sérigraphie & Impression',
    description: 'T-shirts, bâches, maillots, tasses, casquettes',
    price: 'À partir de 2 000 FCFA',
    icon: <Printer size={32} className="text-[#FF6B35]" />
  }
];

export default function RendezVousPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <PageHeader
        title="Prendre"
        highlightedWord="Rendez-vous"
        subtitle="Réservez votre séance en quelques étapes simples"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stepper */}
          <div className="flex justify-between items-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            {STEPS.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg transition-all duration-500 ${
                    currentStep >= step.id
                      ? 'bg-[#FF6B35] text-white shadow-xl shadow-[#FF6B35]/30'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {currentStep > step.id ? <Check size={24} /> : step.id}
                </div>
                <span
                  className={`mt-3 text-xs font-black uppercase tracking-widest transition-colors duration-500 ${
                    currentStep >= step.id ? 'text-[#FF6B35]' : 'text-gray-400'
                  }`}
                >
                  {step.name}
                </span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-black/5 border border-gray-100">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-10"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-black text-[#1A1A2E] mb-4 tracking-tight">Quel service vous intéresse ?</h2>
                  <p className="text-gray-400 font-medium">Choisissez le type de prestation que vous souhaitez réserver</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SERVICES_BOOKING.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-8 rounded-3xl border-2 text-center transition-all group ${
                        selectedService === service.id
                          ? 'border-[#FF6B35] bg-[#FF6B35]/5 shadow-xl shadow-[#FF6B35]/10'
                          : 'border-gray-100 bg-white hover:border-[#FF6B35]/30 hover:shadow-lg'
                      }`}
                    >
                      <div className="w-16 h-16 bg-[#FF6B35]/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-black text-[#1A1A2E] mb-2 tracking-tight">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 font-medium">{service.description}</p>
                      <p className="text-[#FF6B35] font-black text-sm">{service.price}</p>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-8 border-t border-gray-50">
                  <button
                    disabled={!selectedService}
                    onClick={() => setCurrentStep(2)}
                    className={`flex items-center space-x-2 px-10 py-4 rounded-2xl font-black transition-all ${
                      selectedService
                        ? 'bg-[#FF6B35] text-white shadow-xl shadow-[#FF6B35]/30 hover:scale-105 active:scale-95'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <span>Continuer</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep > 1 && (
              <div className="text-center py-20">
                <h2 className="text-2xl font-black text-[#1A1A2E] mb-4">Étape en cours de développement</h2>
                <p className="text-gray-400 mb-8">Le système de réservation complet arrive bientôt !</p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-[#FF6B35] font-black hover:underline"
                >
                  Retour au début
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
