/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrandGallerySection } from './components/BrandGallerySection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InquirySection } from './components/InquirySection';
import { Navbar } from './components/Navbar';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceZoomStudio } from './components/ServiceZoomStudio';
import { ServiceId } from './data/studioData';

export default function App() {
  const [activeService, setActiveService] = useState<ServiceId>('weddings');
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [preselectedInquiryService, setPreselectedInquiryService] = useState<ServiceId | 'suite'>(
    'weddings'
  );

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleZoomService = (serviceId: ServiceId, openModal = false) => {
    setActiveService(serviceId);
    if (openModal) {
      setIsZoomModalOpen(true);
    } else {
      scrollToSection('zoom-studio');
    }
  };

  const handleRequestService = (serviceId: ServiceId) => {
    setPreselectedInquiryService(serviceId);
    setIsZoomModalOpen(false);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#F3E178] text-[#2E083B]">
      <Navbar onNavigate={scrollToSection} />

      <main>
        <HeroSection onZoomService={(id) => handleZoomService(id, false)} onNavigate={scrollToSection} />
        <ServicesOverview activeService={activeService} onZoomService={handleZoomService} />
        <ServiceZoomStudio
          activeService={activeService}
          onSelectService={setActiveService}
          isFullscreenModal={isZoomModalOpen}
          onToggleFullscreenModal={setIsZoomModalOpen}
          onRequestService={handleRequestService}
        />
        <BrandGallerySection />
        <InquirySection preselectedService={preselectedInquiryService} />
      </main>

      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
