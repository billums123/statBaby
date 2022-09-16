import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import theme from "../../theme";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'top',
    // },
    title: {
      display: true,
      text: "Longest Time Between Feedings",
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const formatData = (feedingsData) => {
    const dateCache = {};
    const dateLabels = [];
    feedingsData.forEach((feeding) => {
        if(!dateCache[feeding.feeding_start]){
            console.log('cache',dateCache)
            dateCache[feeding.feeding_start] = feeding.feeding_start;
            console.log('start', feeding.feeding_start)
            const dateObj = new Date(feeding.feeding_start);
            dateLabels.push(dateObj.toLocaleDateString());
        }
    })
    console.log('dateLabelsYo', dateLabels)
  return {
    labels: dateLabels,
    datasets: [
      {
        //   label: 'Dataset 1',
        data: [1, 2, 3, 4, 5],
        backgroundColor: theme.palette.primary.main,
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => 2),
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };
};

export const TotalFeedTimeChart = ({ feedingsData }) => {
    console.log('feedPROPS', feedingsData)
  const data = formatData(feedingsData);
  return <Bar options={options} data={data} />;
}

