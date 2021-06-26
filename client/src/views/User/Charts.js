import { Line } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import moment from "moment";

defaults.font.family = "Montserrat";

const LineChart = ({ name, labels, data, fromFilter = "", toFilter = "" }) => {
  let filteredLabels = labels;

  if (fromFilter !== "")
    filteredLabels = labels.filter((item) => item >= fromFilter);

  if (toFilter !== "")
    filteredLabels = labels.filter((item) => item <= toFilter);

  if (fromFilter !== "" && toFilter !== "")
    filteredLabels = labels.filter(
      (item) => item >= fromFilter && item <= toFilter
    );

  if (fromFilter === "" && toFilter === "")
    filteredLabels = labels.slice(Math.max(labels.length - 7, 1));

  const chartData = {
    labels: filteredLabels.map((label) =>
      moment(label).format("MMMM Do, YYYY")
    ),
    datasets: [
      {
        label: name,
        fill: false,
        borderColor: "#3a80ba",
        borderWidth: 4,
        pointBorderColor: "#3a80ba",
        pointBackgroundColor: "#3a80ba",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#3a80ba",
        pointHoverBorderColor: "#3a80ba",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontSize: 16,
            padding: 24,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontSize: 16,
            padding: 36,
          },
          gridLines: {
            drawBorder: false,
          },
        },
      ],
    },
    tooltips: {
      displayColors: false,
      fontFamily: "Montserrat",
      titleFontSize: 14,
      bodyFontSize: 12,
      xPadding: 10,
      yPadding: 10,
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;
