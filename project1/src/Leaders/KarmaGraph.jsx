import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useAllCachedLeaders } from "./CacheLeader";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function KarmaBarChart({dark}) {
    const leaders=useAllCachedLeaders();
  const data = {
    labels: leaders.map((leader) => leader.id),
    datasets: [
      {
        label: "Karma",
        data: leaders.map((leader) => leader.karma),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    x: {
      ticks: {
        font:{
            size:7
        },
        autoSkip: true, 
      },
    },
    y: { beginAtZero: true },
    },
  };

  return <div className={` m-2 w-full h-[400px] md:h-[600px] p-4 rounded shadow-md bg-white`}>
  <Bar data={data} options={options} />
</div>

}
