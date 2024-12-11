<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const props = defineProps({
  dailyTemperatures: Array,
  dailyLabels: Array,
});

const chartData = ref({
  labels: props.dailyLabels,
  datasets: [
    {
      label: "Temperature",
      data: props.dailyTemperatures,
      borderColor: "#C2CABD",
      backgroundColor: "transparent",
      pointStyle: false,
      tension: 0.4,
      borderWidth: 2,
      datalabels: {
        display: true,
        font: {
          weight: "bold",
          size: 12,
        },
        align: "top",
        formatter: (value: number) => value.toFixed(1) + "°C",
      },
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      type: "category",
      labels: props.dailyLabels,
    },
    y: {
      beginAtZero: false,
      ticks: {
        stepSize: 5,
      },
    },
  },
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
