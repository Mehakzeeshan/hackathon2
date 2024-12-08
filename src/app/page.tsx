import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Panel from "./components/panel";
import ProductSection from "./components/productsSection";
import Explore from "./components/explore";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Panel />
    <ProductSection />
    <Explore />
    <Footer />
    </>
  )
}