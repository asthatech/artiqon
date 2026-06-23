import "./TrustStrip.css";

function TrustStrip() {
  const features = [
    "❤️ Handmade with Love",
    "🎁 Premium Packaging",
    "🚚 Pan India Delivery",
    "✨ Personalized for You"
  ];

  return (
    <section className="trust-strip">
      {features.map((item, index) => (
        <div className="trust-item" key={index}>
          {item}
        </div>
      ))}
    </section>
  );
}

export default TrustStrip;