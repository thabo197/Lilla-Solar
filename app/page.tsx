import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GridVsSolar } from "@/components/GridVsSolar";
import { TrustedBrands } from "@/components/TrustedBrands";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GridVsSolar />
      <TrustedBrands />
      <Products />
      <Services />
      <WhyChooseUs />
      <ProcessTimeline />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
