import Navbar from "./ui/shared/navbar/navbar.component.jsx";
import Header from "./ui/shared/hero/hero.component.jsx";
import OurCollectionSection from "./ui/home/our-collection-section/our-collection.section.jsx";
import backgroundImage from '@/public/images/home/desktop/image-hero-coffeepress.jpg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header backgroundImage={backgroundImage}/>
      <main className="container">
          <OurCollectionSection />
      </main>
    </>
  );
}
