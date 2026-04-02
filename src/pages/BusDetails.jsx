import { useParams } from "react-router-dom";
import { buses } from "../data/buses";

function BusDetails() {
  const { id } = useParams();
  console.log("Bus ID from URL:", id); // Debugging line

  const bus = buses.find((b) => b.id == id);

  if (!bus) return <h2 className="p-6">Bus not found</h2>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{bus.name}</h1>

      <p><strong>From:</strong> {bus.from}</p>
      <p><strong>To:</strong> {bus.to}</p>
      <p><strong>Time:</strong> {bus.time}</p>
      <p><strong>Price:</strong> ₹{bus.price}</p>
    </div>
  );
}

export default BusDetails;