import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Chef from "@/components/Chef";
import SignatureDishes from "@/components/SignatureDishes";
import MenuCategories from "@/components/MenuCategories";
import ReservationCTA from "@/components/ReservationCTA";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Chef />
        <SignatureDishes />
        <MenuCategories />
        <ReservationCTA />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
