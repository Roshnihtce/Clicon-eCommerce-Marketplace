import ProductDetails from '../../components/shop/details/ProductDetails'
import ShopBreadcrumb from '../../components/shop/ShopBreadcrumb'
import MainLayout from '../../layout/MainLayout'

export default function ProductDetailsPage() {
    return (
        <MainLayout>
            <ShopBreadcrumb />
            <ProductDetails />
        </MainLayout>

    )
}