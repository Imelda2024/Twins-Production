'use client';

import Link from 'next/link';
import { Instagram, Facebook, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0F0F1E] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-white leading-none">TWINS</span>
              <span className="text-[10px] tracking-[0.3em] text-[#FF6B35] font-medium uppercase">PRODUCTION</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Studio créatif spécialisé en photographie, graphisme et produits personnalisés.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/#galerie" className="hover:text-[#FF6B35] transition-colors">Galerie</Link></li>
              <li><Link href="/#services" className="hover:text-[#FF6B35] transition-colors">Services</Link></li>
              <li><Link href="/#boutique" className="hover:text-[#FF6B35] transition-colors">Boutique</Link></li>
              <li><Link href="/#rendez-vous" className="hover:text-[#FF6B35] transition-colors">Rendez-vous</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Studio Photo & Audiovisuel</li>
              <li>Couverture Événementielle</li>
              <li>Design Graphique</li>
              <li>Sérigraphie & Impression</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>twinsproductions20@gmail.com</li>
              <li>+229 01 61 17 84 64</li>
              <li>+229 01 62 87 82 91</li>
              <li>Calavi-Zogbadjè, en face du Marquis BK</li>
            </ul>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#FF6B35] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#FF6B35] hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#FF6B35] hover:text-white transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#FF6B35] hover:text-white transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center">
            © 2026 Twins Productions. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-6 text-gray-500 text-xs">
            <Link href="/admin" className="hover:text-white transition-colors">Espace Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
