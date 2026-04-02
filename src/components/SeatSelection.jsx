import { useParams } from "react-router-dom";
import { buses } from "../data/buses";
import SeatLayout from "../components/SeatLayout";
import Navbar from "../components/Navbar"; // ✅ FIX

const SeatSelection = () => {
  const { id } = useParams();

  const bus = buses.find((b) => b.id === Number(id));

  return (
    <div>
   
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-5">
          {bus?.name} - Select Seats
        </h1>

        <SeatLayout price={bus?.price} />


      </div>
    </div>
  );
};

export default SeatSelection;