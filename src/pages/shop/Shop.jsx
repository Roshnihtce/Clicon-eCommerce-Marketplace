import MainLayout from '../../layout/MainLayout'
import ShopPage from '../../components/Shop/ShopPage'
import ShopBreadcrumb from '../../components/shop/ShopBreadcrumb'

export default function Shop() {
  return (
    <MainLayout>
      <ShopBreadcrumb />
      <ShopPage />
    </MainLayout>
  )
}



