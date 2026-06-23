import "./FounderStory.css";

function FounderStory() {
  return (
    <section className="founder-section">

      <div className="founder-image">

        {/* Replace with founder image later */}
        <img
          src="https://placehold.co/600x750/F8F2EB/8B6B61?text=Founder+Image"
          alt="Founder Astha Bansal"
        />

      </div>

      <div className="founder-content">

        <span className="section-tag">
          The Story Behind Artiqon
        </span>

        <h2>
          Crafted with love,
          <br />
          inspired by emotions.
        </h2>

        <p>
          Artiqon was founded by <strong>Astha Bansal</strong>,
          a passionate artist who believes that handmade gifts
          carry emotions that no ordinary gift ever can.
        </p>

        <p>
          Every creation at Artiqon is thoughtfully handcrafted
          with love, care, and intention because every piece of
          art holds its own story, emotion, and meaning.
        </p>

        <p>
          The greatest reward is not simply creating beautiful
          gifts, but witnessing the priceless smiles they bring
          to our loved ones. Each hamper, keepsake, and creation
          is designed to preserve memories and celebrate the
          beautiful bonds we share.
        </p>

        <div className="signature">
          — Astha Bansal
        </div>

      </div>

    </section>
  );
}

export default FounderStory;