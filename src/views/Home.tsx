'use client';

import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Boutique from '../components/Boutique';
import Promotions from '../components/Promotions';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="bg-[#1A1A2E]">
      <Hero />
      <Services />
      <Gallery />
      <Boutique />
      <Promotions />
      <CTA />
    </div>
  );
}

