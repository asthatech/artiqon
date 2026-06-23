import "./WhyChoose.css";

function WhyChoose() {

  const cards = [
    {
      title: "Handmade with Love",
      desc: "Every creation is handcrafted with attention to every little detail."
    },

    {
      title: "Personalized for You",
      desc: "Create gifts that feel deeply personal and meaningful."
    },

    {
      title: "Premium Packaging",
      desc: "Beautifully wrapped and ready to gift straight out of the box."
    },

    {
      title: "Crafted in India",
      desc: "Proudly handmade with love, creativity, and passion."
    }
  ];

  return (
    <section className="why">

      <span>Why Artiqon</span>

      <h2>More Than Gifts.<br/>Memories Wrapped Beautifully.</h2>

      <div className="why-grid">

        {cards.map((card,index)=>(
          <div className="why-card" key={index}>

            <div className="number">
              0{index+1}
            </div>

            <h3>{card.title}</h3>

            <p>{card.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChoose;