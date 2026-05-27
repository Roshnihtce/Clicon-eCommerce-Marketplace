import {
  PersonCircle,
  Calendar3,
  ChatDots,
  ArrowRight,
} from 'react-bootstrap-icons'

export default function LatestNewsCard({
  news,
}) {
  return (
    <div className="latest-news-card">
      {/* IMAGE */}

      <div className="news-image">
        <img
          src={news.image}
          alt={news.title}
        />
      </div>

      {/* META */}

      <div className="news-meta">
        <span>
          <PersonCircle />
          {news.author}
        </span>

        <span>
          <Calendar3 />
          {news.date}
        </span>

        <span>
          <ChatDots />
          {news.comments}
        </span>
      </div>

      {/* CONTENT */}

      <div className="news-content">
        <h4>{news.title}</h4>

        <p>{news.description}</p>

        <button>
          READ MORE

          <ArrowRight />
        </button>
      </div>
    </div>
  )
}