import bannerImage from '../../../assets/images/xbox.webp'

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="banner-content">
        <span>THE BEST PLACE TO PLAY</span>

        <h1>Xbox Consoles</h1>

        <p>
          Save up to 50% on select Xbox games.
        </p>

        <button>SHOP NOW</button>
      </div>

      <div className="banner-image">
        <img
        src={bannerImage}
          alt="xbox"
        />
      </div>
    </div>
  )
}