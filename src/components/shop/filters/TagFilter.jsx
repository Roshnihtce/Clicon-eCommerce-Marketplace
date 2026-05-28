import { useDispatch, useSelector } from 'react-redux'
import { setTag } from '../../../store/slices/filterSlice'
import popularTags from '../../../data/popularTags'

export default function TagFilter() {
  const dispatch = useDispatch()

  const selectedTag = useSelector(
    (state) => state.filters.tag
  )

  return (
    <div className="tag-filter">

      {/* TITLE */}
      <h4 className="filter-title">
        POPULAR TAG
      </h4>

      {/* TAG LIST */}
      <div className="tag-list">

        {popularTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => dispatch(setTag(tag))}
            style={{
              margin: '4px',
              padding: '6px 10px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              background:
                selectedTag === tag
                  ? '#000'
                  : '#fff',
              color:
                selectedTag === tag
                  ? '#fff'
                  : '#000',
              cursor: 'pointer',
            }}
          >
            {tag}
          </button>
        ))}

      </div>
    </div>
  )
}