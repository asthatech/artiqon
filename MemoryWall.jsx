import "./MemoryWall.css";

const memories = [
  {
    id: 1,
    image:
      "https://placehold.co/500x700/F8F2EB/8B6B61?text=Customer+Photo+1",
  },

  {
    id: 2,
    image:
      "https://placehold.co/500x500/F8F2EB/8B6B61?text=Review+Screenshot",
  },

  {
    id: 3,
    image:
      "https://placehold.co/500x650/F8F2EB/8B6B61?text=Unboxing+Moment",
  },

  {
    id: 4,
    image:
      "https://placehold.co/500x450/F8F2EB/8B6B61?text=Happy+Customer",
  },

  {
    id: 5,
    image:
      "https://placehold.co/500x700/F8F2EB/8B6B61?text=Gift+Received",
  },

  {
    id: 6,
    image:
      "https://placehold.co/500x500/F8F2EB/8B6B61?text=WhatsApp+Review",
  },
];

function MemoryWall() {
  return (
    <section className="memory-wall">

      <div className="memory-heading">

        <span>Customer Love</span>

        <h2>Memories Shared By You</h2>

        <p>
          Every smile, every unboxing, and every heartfelt review
          becomes a part of the Artiqon story.
        </p>

      </div>

      <div className="masonry">

        {memories.map((memory) => (
          <div className="memory-card" key={memory.id}>

            <img
              src={memory.image}
              alt="customer memory"
            />

          </div>
        ))}

      </div>

    </section>
  );
}

export default MemoryWall;