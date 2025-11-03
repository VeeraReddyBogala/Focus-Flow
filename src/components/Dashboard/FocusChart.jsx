import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Focus Hours",
      data: [2, 3, 4, 6, 5],
      borderColor: "#4F46E5",
      backgroundColor: "rgba(79,70,229,0.2)",
      tension: 0.3,
    },
  ],
};

export default function FocusChart() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Line data={data} />
    </div>
  );
}
