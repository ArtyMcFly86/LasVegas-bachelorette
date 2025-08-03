import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const hotelOptions = [
  {
    name: "The LINQ",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/75/ce/ba/linq-hotel-exterior.jpg?w=700&h=-1&s=1",
    tier: "Budget",
    room: "Double Queens, Adjoining Rooms",
    price: "$150–$250/room",
    pros: "Modern, central, walkable to nightlife",
    cons: "Smaller rooms, no luxury feel",
    link: "https://www.caesars.com/linq"
  },
  {
    name: "The Venetian",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c3/c2/e6/the-venetian-resort.jpg?w=700&h=-1&s=1",
    tier: "Mid-Range",
    room: "2-Queen Suites (650+ sqft)",
    price: "$400–$550/suite",
    pros: "Huge suites, upscale, good for 4 per room",
    cons: "Long walks to Strip entrance",
    link: "https://www.venetianlasvegas.com"
  },
  {
    name: "The Cosmopolitan",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/7f/e3/18/the-cosmopolitan-of-las.jpg?w=700&h=-1&s=1",
    tier: "Luxury",
    room: "Wraparound Terrace Suite, 2-Bedroom",
    price: "$450–$1500/room",
    pros: "Iconic views, amazing location, balconies",
    cons: "Pricey",
    link: "https://www.cosmopolitanlasvegas.com"
  }
];

export default function VegasBacheloretteSite() {
  const [votes, setVotes] = useState(hotelOptions.map(() => 0));

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const totalVotes = votes.reduce((acc, val) => acc + val, 0);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Vegas Bachelorette 2025</h1>
      <p className="text-center text-lg text-gray-600">
        Explore the top hotel picks and vote for your favorite!
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hotelOptions.map((hotel, index) => (
          <Card key={hotel.name}>
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover rounded-t-2xl" />
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-sm text-gray-500">{hotel.tier} - {hotel.price}</p>
              <p><strong>Room Type:</strong> {hotel.room}</p>
              <p><strong>Pros:</strong> {hotel.pros}</p>
              <p><strong>Cons:</strong> {hotel.cons}</p>
              <a href={hotel.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Booking Info
              </a>
              <div className="pt-4">
                <Button onClick={() => handleVote(index)}>Vote for {hotel.name}</Button>
                <Progress value={totalVotes ? (votes[index] / totalVotes) * 100 : 0} className="mt-2" />
                <p className="text-sm text-gray-600">Votes: {votes[index]}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}"`
}
