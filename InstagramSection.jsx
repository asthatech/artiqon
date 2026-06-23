import "./InstagramSection.css";

function InstagramSection() {
  return (
    <section className="instagram-section">

      <div className="instagram-heading">
        <span>Follow Our Journey</span>

        <h2>Meet us on Instagram</h2>

        <p>
          Behind every handcrafted piece is a story, a memory,
          and a little bit of magic.
        </p>
      </div>

      <div className="insta-grid">

        <div className="insta-card">
          <img
            src="https://placehold.co/600x600/F8F2EB/8B6B61?text=Instagram+Post+1"
            alt=""
          />
        </div>

        <div className="insta-card">
          <img
            src="https://placehold.co/600x600/F8F2EB/8B6B61?text=Instagram+Post+2"
            alt=""
          />
        </div>

        <div className="insta-card">
          <img
            src="https://placehold.co/600x600/F8F2EB/8B6B61?text=Instagram+Post+3"
            alt=""
          />
        </div>

        <div className="insta-card">
          <img
            src="https://placehold.co/600x600/F8F2EB/8B6B61?text=Instagram+Post+4"
            alt=""
          />
        </div>

      </div>

      <a
        className="instagram-btn"
        href="https://www.instagram.com/artiqon.in/"
        target="_blank"
        rel="noreferrer"
      >
        Follow @artiqon.in
      </a>

    </section>
  );
}

export default InstagramSection;