'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Mountain, Calendar, PenTool, ShoppingBag, Printer, ChevronDown, Plus } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import CTA from '../../components/CTA';

const SERVICES_DETAILED = [
  {
    id: 'photo',
    category: 'Photographie & Vidéo',
    title: 'Studio Photo & Audiovisuel',
    description: 'Studio professionnel équipé pour tous vos besoins en photographie et production audiovisuelle. De la photo portrait aux vidéos publicitaires, nous capturons chaque moment avec excellence.',
    features: [
      'Photo Portrait & Photo d\'Identité',
      'Photo Professionnelle (CV, LinkedIn)',
      'Photo Shoot (Nature & Studio)',
      'Cadrage & Montages Vidéos',
      'Voix Off',
      'Vidéo Clips & Documentaires',
      'Vidéos Publicitaires',
      'Reportages d\'images & vidéos'
    ],
    buttonText: 'Réserver une séance',
    color: 'from-[#FF6B35] to-[#9B59B6]'
  },
  {
    id: 'events',
    category: 'Événements',
    title: 'Couverture Événementielle',
    description: 'Nous immortalisons vos événements les plus précieux avec professionnalisme et créativité. Photos et vidéos de haute qualité pour garder des souvenirs inoubliables.',
    features: [
      'Mariages & Cérémonies',
      'Anniversaires & Fêtes',
      'Communions & Baptêmes',
      'Événements d\'entreprise',
      'Conférences & Séminaires',
      'Remises de diplômes'
    ],
    buttonText: 'Nous contacter',
    color: 'from-[#9B59B6] to-[#3498DB]'
  },
  {
    id: 'design',
    category: 'Graphisme',
    title: 'Design Graphique',
    description: 'Conceptions et réalisations graphiques professionnelles pour donner vie à votre image de marque. Logiciels professionnels : Photoshop, Illustrator, Premiere, After Effects, Lightroom, InDesign.',
    features: [
      'Flyers & Affiches publicitaires',
      'Bâches & Kakémono',
      'Brochures & Dépliants (2, 3 volets)',
      'Logo (personnel & entreprise)',
      'Cartes (Invitations, Visites, Scolaire)',
      'Tableaux personnalisés (bâches, toile, plexiglas, plaque, vynil)'
    ],
    buttonText: 'Demander un devis',
    color: 'from-[#3498DB] to-[#2ECC71]'
  },
  {
    id: 'print',
    category: 'Impression',
    title: 'Sérigraphie & Impression Grand Format',
    description: 'Impressions de haute qualité sur tous supports. Du petit format aux bâches grand format, nous réalisons vos projets d\'impression avec précision et rapidité.',
    features: [
      'Bâches (brillant, simple)',
      'Maillots (flocage, encre)',
      'T-Shirts, Lacoste, Pagne personnalisé',
      'Toile, Plexiglas, Vynil',
      'Formats A1 -> Grand format',
      'Tasses, Casquettes, Foulards',
      'Publicités (Facebook, Instagram, TikTok)'
    ],
    buttonText: 'Demander un devis',
    color: 'from-[#E67E22] to-[#E74C3C]'
  }
];

const FAQS = [
  {
    question: "Comment se déroule une séance photo ?",
    answer: "Une séance photo commence par une discussion sur vos besoins. Nous vous guidons pour les poses et l'ambiance. Après la séance, nous sélectionnons et retouchons les meilleures photos pour vous les livrer dans les délais convenus."
  },
  {
    question: "Comment recevoir mes photos après la séance ?",
    answer: "Vos photos vous sont envoyées via un lien de téléchargement sécurisé (Google Drive ou WeTransfer) ou remises sur clé USB selon votre préférence. Le délai de livraison varie entre 48h et 7 jours selon le type de prestation."
  },
  {
    question: "Peut-on annuler ou reporter un rendez-vous ?",
    answer: "Oui, vous pouvez reporter votre rendez-vous jusqu'à 24h à l'avance sans frais. Pour les annulations de dernière minute, des frais peuvent s'appliquer selon les conditions de réservation."
  },
  {
    question: "Proposez-vous des devis personnalisés ?",
    answer: "Absolument ! Chaque projet est unique. Contactez-nous via notre formulaire de contact ou par WhatsApp pour obtenir un devis gratuit et personnalisé adapté à votre budget et vos besoins."
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <PageHeader
        title="Nos"
        highlightedWord="Services"
        subtitle="Des prestations professionnelles adaptées à chaque besoin"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES_DETAILED.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <span className="inline-block px-4 py-1 bg-[#FF6B35] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                    {service.category}
                  </span>
                  <h2 className="text-4xl font-black text-[#1A1A2E] mb-6 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-gray-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-[#FF6B35] text-white font-black px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B35]/20 hover:scale-105 active:scale-95 transition-all">
                    {service.buttonText}
                  </button>
                </div>

                {/* Visual Placeholder */}
                <div className="flex-1 w-full aspect-square lg:aspect-video rounded-[2rem] overflow-hidden relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:scale-110 transition-transform duration-700`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30">
                      <Plus className="text-white" size={40} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1A1A2E] mb-4 tracking-tight">Questions fréquentes</h2>
            <p className="text-gray-500 font-medium">Tout ce que vous devez savoir avant de réserver</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-[#1A1A2E]">{question}</span>
        <ChevronDown
          className={`text-[#FF6B35] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-500 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
