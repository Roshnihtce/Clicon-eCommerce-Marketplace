import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import TopBanner from "../components/layout/TopBanner";
import ShopBreadcrumb from '../components/shop/ShopBreadcrumb'



export default function MainLayout({ children }) {
  return (
    <>
      {/* <TopBanner /> */}
      <Header /> 
      <ShopBreadcrumb />
      <main>{children}</main>
      <Footer /> 
    </>
  )
}