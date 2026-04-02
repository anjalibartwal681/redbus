// pages/SeatSelection.jsx
import { useParams, useNavigate } from "react-router-dom";
import { buses } from "../data/buses";
import SeatLayout from "../components/SeatLayout";
import ViewBusesCard from "../components/viewBusCard";

const SeatSelection = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bus = buses.find((b) => b.id === Number(id));

  return (
    <div>


      <div className="p-10">
        <h1 className="text-2xl font-bold mb-5">
          {bus?.name} - Select Seats
        </h1>

<ViewBusesCard/>


        <SeatLayout price={bus?.price} />

       
      </div>
    </div>
  );
};

export default SeatSelection;