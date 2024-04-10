import Navbar from "./ui/shared/navbar/navbar.component.jsx";
import Header from "./ui/shared/hero/hero.component.jsx";
import OurCollectionSection from "./ui/home/our-collection-section/our-collection.section.jsx";
import WhyChooseUsSection from "./ui/home/why-choose-us-section/why-choose-us.section.jsx";
import HowItWorksSection from "./ui/home/how-it-works-section/how-it-works-section.jsx";
import Footer from "./ui/shared/footer/footer.component.jsx";
import backgroundImage from '@/public/images/home/desktop/image-hero-coffeepress.jpg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header backgroundImage={backgroundImage}/>
      <main className="container">
          <OurCollectionSection />
          <WhyChooseUsSection />
          <HowItWorksSection />
      </main>
      <Footer />
    </>
  );
}
