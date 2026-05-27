import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import TopBanner from "../components/layout/TopBanner";

export default function MainLayout({ children }) {
  return (
    <>
      {/* <TopBanner /> */}
      <Header /> 
      <main>{children}</main>
      <Footer /> 
    </>
  )
}