import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="We are your favourite, online store."
        text="Shoppi is India’s largest fashion retail chain across India. Shoppi offers stylish, high-quality products for Menswear and fashion accessories through a diversified portfolio of own brands."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Over 4 Million Happy Customers"
        text="We, at The Shoppi Store, love what we do- designs, products, marketing, and everything in between."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
