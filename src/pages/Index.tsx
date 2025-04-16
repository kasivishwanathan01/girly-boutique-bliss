
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategoryBanner from "@/components/home/CategoryBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import Features from "@/components/home/Features";
import Newsletter from "@/components/home/Newsletter";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CategoryBanner />
      <FeaturedProducts />
      <Testimonials />
      <Features />
      <Newsletter />
    </Layout>
  );
}
