import MainLayout from '../../layout/MainLayout'

import HeroSection from '../../components/home/Hero/HeroSection'

import ServiceFeatures from '../../components/home/Services/ServiceFeatures'

import BestDeals from '../../components/home/Products/BestDeals'

import ShopCategories from '../../components/home/Categories/ShopCategories'
import FeaturedProducts from '../../components/home/Featured/FeaturedProducts'
import PromoSection from '../../components/home/promo/PromoSection'
import CategoryShowcase from '../../components/home/CategoryShowcase/CategoryShowcase'
import MacbookBanner from '../../components/home/Banner/MacbookBanner'
import TopProducts from '../../components/home/Products/TopProducts'
import LatestNews from '../../components/home/News/LatestNews'
import Newsletter from '../../components/home/Newsletter/Newsletter'
// import ShopBreadcrumb from '../../components/shop/ShopBreadcrumb'
import TopBanner from '../../components/layout/TopBanner'


export default function Dashboard() {
  return (
    <>
      <TopBanner />
      <MainLayout>
        {/* <ShopBreadcrumb /> */}
        <HeroSection />



        <ServiceFeatures />

        <BestDeals />

        <ShopCategories />


        <FeaturedProducts />

        <PromoSection />

        <CategoryShowcase />

        <MacbookBanner />

        <TopProducts />

        <LatestNews />

        <Newsletter />
      </MainLayout>
    </>
  )
}