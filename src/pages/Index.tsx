import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Separator from '@/components/Separator';
import PricingCards from '@/components/PricingCards';
import FeatureHighlight from '@/components/FeatureHighlight';
import EligibilitySection from '@/components/EligibilitySection';
import CompanyMarquee from '@/components/CompanyMarquee';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import G2Report from '@/components/G2Report';
import FAQ from '@/components/FAQ';
import ResourcesSection from '@/components/ResourcesSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Separator />
        <PricingCards />
        <Separator />
        <FeatureHighlight />
        <Separator />
        <EligibilitySection />
        <Separator />
        <CompanyMarquee />
        <Separator />
        <TestimonialCarousel />
        <Separator />
        <G2Report />
        <Separator />
        <FAQ />
        <Separator />
        <ResourcesSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;