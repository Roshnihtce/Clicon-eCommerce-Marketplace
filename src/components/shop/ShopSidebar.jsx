import CategoryFilter from './filters/CategoryFilter'

import PriceFilter from './filters/PriceFilter'

import BrandFilter from './filters/BrandFilter'

import TagFilter from './filters/TagFilter'

import SidebarPromo from './promo/sidebarPromo'

export default function ShopSidebar() {
  return (
    <aside className="shop-sidebar">
      <CategoryFilter />

      <PriceFilter />

      <BrandFilter />

      <TagFilter />

      <SidebarPromo />
      
      
    </aside>
  )
}