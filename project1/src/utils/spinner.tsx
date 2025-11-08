import { PacmanLoader } from "react-spinners";
import { Card } from "../components/ui/card";

function Spinner() {
  return (
    <div className="space-y-6 flex flex-col justify-center items-center h-80">
      <PacmanLoader color="yellow" margin={4} size={50} speedMultiplier={2} />
    </div>
  );
}

export default Spinner;
