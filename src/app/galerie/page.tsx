'use client';

import PageHeader from '../../components/PageHeader';
import Gallery from '../../components/Gallery';
import CTA from '../../components/CTA';

export default function GaleriePage() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen">
      <PageHeader
        title="Notre"
        highlightedWord="Galerie"
        subtitle="Découvrez nos réalisations — studio, nature, événements et graphisme"
      />
      <Gallery />
      <CTA />
    </main>
  );
}
