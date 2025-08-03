import { useState } from "react";

const hotelOptions = [
  {
    name: "The LINQ",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/75/ce/ba/linq-hotel-exterior.jpg?w=700&h=-1&s=1",
    tier: "Budget",
    room: "Double Queens, Adjoining Rooms",
    price: "$150–$250/room",
    pros: "Modern, central, walkable to nightlife",
    cons: "Smaller rooms, no luxury feel",
    link: "https://www.caesars.com/linq",
  },
  {
    name: "The Venetian",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c3/c2/e6/the-venetian-resort.jpg?w=700&h=-1&s=1",
    tier: "Mid-Range",
    room: "2-Queen Suites (650+ sqft)",
    price: "$400–$550/suite",
    pros: "Huge suites, upscale, good for 4 per room",
    cons: "Long walks to Strip entrance",
    link: "https://www.venetianlasvegas.com",
  },
  {
    name: "The Cosmopolitan",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/7f/e3/18/the-cosmopolitan-of-las.jpg?w=700&h=-1&s=1",
    tier: "Luxury",
    room: "Wraparound Terrace Suite, 2-Bedroom",
    price: "$450–$1500/room",
    pros: "Iconic views, amazing location, balconies",
    cons: "Pricey",
    link: "https://www.cosmopolitanlasvegas.com",
  },
];

export default function VegasBacheloretteSite() {
  const [votes, setVotes] = useState(hotelOptions.map(() => 0));

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const totalVotes = votes.reduce((sum, val) => sum + val, 0);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>
        Vegas Bachelorette 2025
      </h1>
      <p style={{ textAlign: "center", color: "gray", marginBottom: "2rem" }}>
        Explore hotel picks and vote for your favorite!
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {hotelOptions.map((hotel, index) => (
          <div
            key={hotel.name}
            style={{
              width: "300px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              backgroundColor: "white",
            }}
          >
            <img src={hotel.image} alt={hotel.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{hotel.name}</h2>
              <p style={{ color: "gray" }}>
                {hotel.tier} – {hotel.price}
              </p>
              <p><strong>Room:</strong> {hotel.room}</p>
              <p><strong>Pros:</strong> {hotel.pros}</p>
              <p><strong>Cons:</strong> {hotel.cons}</p>
              <a href={hotel.link} target="_blank" rel="noopener noreferrer" style={{ color: "blue", display: "block", marginTop: "0.5rem" }}>
                Booking Info
              </a>
              <div style={{ marginTop: "1rem" }}>
                <button
                  onClick={() => handleVote(index)}
                  style={{
                    background: "#6200ea",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    cursor: "pointer",
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  Vote for {hotel.name}
                </button>
                <div style={{ marginTop: "0.5rem" }}>
                  <div
                    style={{
                      height: "10px",
                      background: "#ddd",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${totalVotes ? (votes[index] / totalVotes) * 100 : 0}%`,
                        height: "100%",
                        background: "#6200ea",
                        transition: "width 0.3s ease",
                      }}
                    ></div>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "gray" }}>Votes: {votes[index]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
