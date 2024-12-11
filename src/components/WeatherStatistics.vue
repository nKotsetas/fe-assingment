<template>
  <div class="weather-statistics">
    <h4>Weekly Variation</h4>
    <WeatherChart
      :dailyTemperatures="chartData?.daily.temperature_2m_max"
      :dailyLabels="formattedDates(chartData?.daily.time)"
    />
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from "../stores/useWeatherStore";
import { storeToRefs } from "pinia";
import WeatherChart from "../components/WeatherChart.vue";
import moment from "moment";

const weatherStore = useWeatherStore();
const { chartData } = storeToRefs(weatherStore);

const formattedDates = (dates: string[]) => {
  return dates?.map((date) => moment(date).format("dddd"));
};
</script>

<style scoped lang="scss">
.weather-statistics {
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  align-items: start;
  height: 400px;
  border-radius: 10px;
}
</style>
