import popularTags from '../../../data/popularTags'

export default function TagFilter() {
  return (
    <div className="tag-filter">
      <h4 className="filter-title">
        POPULAR TAG
      </h4>

      <div className="tag-list">
        {popularTags.map((tag) => (
          <button key={tag}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}