import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import ManagementSolutions from '@/components/ManagementSolutions';
import BlogSection from '@/components/BlogSection';
import Pricing from '@/components/Pricing';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="solutions">
        <ManagementSolutions />
      </section>
      <section id="blogs">
        <BlogSection />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <ContactCTA />
      </section>
    </main>
  );
}
