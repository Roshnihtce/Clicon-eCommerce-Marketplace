export default function CategoryCard({
  item,
}) {
  return (
    <div className="category-card">
      <div className="category-image">
        <img
          src={item.image}
          alt={item.title}
        />
      </div>

      <h4>{item.title}</h4>
    </div>
  )
}