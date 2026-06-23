import "./RakhiCollection.css";

const hampers = [
  {
    id: 1,
    name: "Rakhi Hamper 01",
    description: "A thoughtfully curated hamper made to celebrate sibling bonds.",
    price: "₹XX"
  },
  {
    id: 2,
    name: "Rakhi Hamper 02",
    description: "Handcrafted keepsakes and festive surprises wrapped with love.",
    price: "₹XX"
  },
  {
    id: 3,
    name: "Rakhi Hamper 03",
    description: "An elegant Rakhi gift experience designed to create memories.",
    price: "₹XX"
  },
  {
    id: 4,
    name: "Rakhi Hamper 04",
    description: "A premium festive hamper filled with warmth and emotions.",
    price: "₹XX"
  },
  {
    id: 5,
    name: "Rakhi Hamper 05",
    description: "Celebrate Raksha Bandhan with a beautifully handcrafted gift box.",
    price: "₹XX"
  }
];

function RakhiCollection() {
  return (
    <section className="rakhi-section">

      <div className="section-heading">
        <span>Seasonal Collection</span>
        <h2>Rakhi Collection</h2>
        <p>
          Celebrate the bond of love with thoughtfully handcrafted hampers.
        </p>
      </div>

      <div className="hamper-grid">
        {hampers.map((hamper) => (
          <div className="hamper-card" key={hamper.id}>

            <div className="hamper-image">
              <img
                src="https://placehold.co/600x700/F8F2EB/8B6B61?text=Add+Hamper+Image"
                alt={hamper.name}
              />
            </div>

            <div className="hamper-content">
              <h3>{hamper.name}</h3>

              <p>{hamper.description}</p>

              <h4>{hamper.price}</h4>

              <div className="card-buttons">
                <a
  href={`https://wa.me/91YOURNUMBER?text=Hi%20Artiqon!%20I'm%20interested%20in%20${hamper.name}.%20Please%20share%20more%20details.`}
  target="_blank"
  rel="noreferrer"
>
  <button className="order-btn">
    Order Now
  </button>
</a>

                <button className="order-btn">
                  Order Now
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default RakhiCollection;