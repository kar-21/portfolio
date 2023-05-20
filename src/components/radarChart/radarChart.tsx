import { Box } from "@mui/system";
import "react-svg-radar-chart/build/css/index.css";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const RadarChartComponent = () => {
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

  return (
    <Box sx={{ width: "100%" }}>
      {/* <Box> */}
      <Radar
        data={{
          labels: [
            "JavaScript",
            "Angular",
            "React.js",
            "Redux",
            "Git",
            "NgRx",
            "Node.js",
            "TypeScript",
          ],
          datasets: [
            {
              data: [0.93, 0.85, 0.85, 0.7, 0.78, 0.7, 0.8, 0.88],
              borderColor: "#CA3E47",
              backgroundColor: "rgba(202, 62, 71, 0.65)",
              borderWidth: 4,
            },
          ],
        }}
        plugins={[ChartDataLabels]}
        options={{
          plugins: {
            datalabels: {
              formatter: (value, context: any) => {
                return `${value * 100}%`;
              },
              color: "#F4EEE0",
              font: {
                size: 16,
                family: "Roboto",
              },
              anchor: "center",
              clamp: true,
            },
          },
          scales: {
            RadialLinearScale: {
              beginAtZero: true,
              min: 0,
              ticks: {
                display: false,
                stepSize: 0.05,
              },
              angleLines: {
                color: "rgba(255, 255, 255, 0.12)",
                lineWidth: 4,
              },
              grid: {
                color: "rgba(255, 255, 255, 0.12)",
                // circular: true,
              },
              pointLabels: {
                color: "#F4EEE0",
                font: {
                  size: 16,
                  family: "Roboto",
                },
                callback: (label: string, index: number) => label,
              },
            },
            r: {
              min: 0,
              max: 1,
              ticks: {
                display: false,
                stepSize: 0.1,
              },
              grid: {
                color: [
                  "rgba(255, 255, 255, 0.12)",
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0.12)",
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0.12)",
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0.12)",
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0.12)",
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0)",
                ],
                // circular: true,
                lineWidth: 3,
              },
              pointLabels: {
                display: false,
              },
              angleLines: {
                display: false,
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default RadarChartComponent;
