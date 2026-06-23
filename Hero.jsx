import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="tag">
          Handmade • Personalized • Heartfelt
        </span>

        <h1>
          Handcrafted gifts
          <br />
          made to hold
          <br />
          memories.
        </h1>

        <p>
          From personalized keepsakes to seasonal hampers,
          every Artiqon creation is thoughtfully designed to
          preserve emotions and celebrate meaningful moments.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Shop Collection
          </button>

          <button className="secondary-btn">
            Explore Rakhi Gifts
          </button>
        </div>

        <div className="note">
          ✨ every gift tells a story
        </div>

      </div>

      <div className="hero-right">

        <div className="main-image">
          <img
            src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1000&q=80"
            alt="gift"
          />
        </div>

        <div className="polaroid">
          <img
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0ff?auto=format&fit=crop&w=500&q=80"
            alt="handmade"
          />

          <p>made with love ♡</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;