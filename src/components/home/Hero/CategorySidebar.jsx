import {
  ChevronRight,
} from 'react-bootstrap-icons'

const categories = [
  'Computer & Laptop',
  'SmartPhone',
  'Headphones',
  'Accessories',
  'Camera & Photo',
  'TV & Homes',
  'Gaming',
]

export default function CategorySidebar() {
  return (
    <div className="category-sidebar">
      {categories.map((item, index) => (
        <div
          className="category-item"
          key={index}
        >
          <span>{item}</span>

          <ChevronRight />
        </div>
      ))}
    </div>
  )
}