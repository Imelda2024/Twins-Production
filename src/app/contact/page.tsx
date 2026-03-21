'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import CTA from '../../components/CTA';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'message' | 'devis'>('message');

  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <PageHeader
        title="Nous"
        highlightedWord="Contacter"
        subtitle="On est là pour répondre à toutes vos questions"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-[#1A1A2E] mb-6 tracking-tight">Parlons de votre projet</h2>
              <p className="text-gray-500 mb-12 text-lg">
                Que ce soit pour une séance photo, un projet graphique ou une commande personnalisée — contactez-nous !
              </p>

              <div className="space-y-6">
                <ContactCard
                  icon={<Mail className="text-[#FF6B35]" />}
                  title="Email"
                  content="twinsproductions20@gmail.com"
                />
                <ContactCard
                  icon={<Phone className="text-[#FF6B35]" />}
                  title="Téléphone"
                  content="+229 01 61 17 84 64"
                  subContent="+229 01 62 87 82 91"
                />
                <ContactCard
                  icon={<MessageCircle className="text-[#FF6B35]" />}
                  title="WhatsApp"
                  content="+229 01 61 17 84 64"
                  subContent="+229 01 62 87 82 91"
                />
                <ContactCard
                  icon={<MapPin className="text-[#FF6B35]" />}
                  title="Adresse"
                  content="Calavi-Zogbadjè, fin von en face du Marquis BK"
                />
                <ContactCard
                  icon={<Clock className="text-[#FF6B35]" />}
                  title="Horaires"
                  content="Lun–Sam : 8h00 – 18h00"
                />
              </div>

              <div className="mt-12">
                <h3 className="text-sm font-bold text-[#1A1A2E] uppercase tracking-widest mb-6">Suivez-nous</h3>
                <div className="flex flex-wrap gap-4">
                  <SocialButton
                    icon={<Instagram size={20} />}
                    label="Instagram"
                    color="bg-[#E4405F]"
                    href="https://instagram.com"
                  />
                  <SocialButton
                    icon={<Facebook size={20} />}
                    label="Facebook"
                    color="bg-[#1877F2]"
                    href="https://facebook.com"
                  />
                  <SocialButton
                    icon={<MessageCircle size={20} />}
                    label="WhatsApp 1"
                    color="bg-[#25D366]"
                    href="https://wa.me/2290161178464"
                  />
                  <SocialButton
                    icon={<MessageCircle size={20} />}
                    label="WhatsApp 2"
                    color="bg-[#25D366]"
                    href="https://wa.me/2290162878291"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 border border-gray-100">
              <div className="flex space-x-4 mb-10 border-b border-gray-100 pb-4">
                <button
                  onClick={() => setActiveTab('message')}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    activeTab === 'message'
                      ? 'bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/20'
                      : 'text-gray-400 hover:text-[#1A1A2E]'
                  }`}
                >
                  <MessageCircle size={20} />
                  <span>Message</span>
                </button>
                <button
                  onClick={() => setActiveTab('devis')}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    activeTab === 'devis'
                      ? 'bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/20'
                      : 'text-gray-400 hover:text-[#1A1A2E]'
                  }`}
                >
                  <Mail size={20} />
                  <span>Devis</span>
                </button>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A2E]">Nom complet *</label>
                  <input
                    type="text"
                    placeholder="Votre nom complet"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 focus:border-[#FF6B35] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A2E]">Email *</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 focus:border-[#FF6B35] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A2E]">Sujet *</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 focus:border-[#FF6B35] transition-all appearance-none">
                    <option>Choisir un sujet...</option>
                    <option>Séance Photo</option>
                    <option>Design Graphique</option>
                    <option>Sérigraphie</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A2E]">Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Votre message..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 focus:border-[#FF6B35] transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-[#FF6B35] text-white font-black py-5 rounded-2xl shadow-xl shadow-[#FF6B35]/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Envoyer le message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

function ContactCard({ icon, title, content, subContent }: { icon: React.ReactNode; title: string; content: string; subContent?: string }) {
  return (
    <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="w-12 h-12 bg-[#FF6B35]/5 rounded-xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</h3>
        <p className="text-[#1A1A2E] font-bold">{content}</p>
        {subContent && <p className="text-[#1A1A2E] font-bold">{subContent}</p>}
      </div>
    </div>
  );
}

function SocialButton({ icon, label, color, href }: { icon: React.ReactNode; label: string; color: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-white font-bold transition-all hover:scale-105 active:scale-95 ${color}`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
