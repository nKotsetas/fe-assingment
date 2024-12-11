<template>
  <div class="weather-details">
    <div
      v-for="(item, index) in calculateWeatherMetrics(weatherData?.hourly)"
      :key="index"
      class="details-card"
    >
      <div class="weather-value">
        <h2>{{ item.value }}</h2>
        <h3>{{ item.type }}</h3>
      </div>
      <span class="weather-title">{{ item.title }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWeatherStore } from "../stores/useWeatherStore";
import { storeToRefs } from "pinia";
import { calculateWeatherMetrics } from "../utils/weatherUtils";

const weatherStore = useWeatherStore();
const { weatherData } = storeToRefs(weatherStore);
</script>

<style lang="scss" scoped>
.weather-details {
  background-color: #ffff;
  max-height: 500px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 25px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  .details-card {
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    border-radius: 10px;
    padding: 25px;
    border: 2px solid #f1f1f1;
    width: 100px;
  }

  @media (max-width: 614px) {
    .details-card {
      width: 100%;
      align-items: center;
    }
  }

  .weather-value {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    h2 {
      font-size: 1.5rem;

      margin: 0;
    }
    h3 {
      font-size: 1rem;

      margin: 0;
    }
  }

  .weather-title {
    font-size: 1rem;
    margin-top: 10px;
    color: #898989;
    white-space: nowrap;
  }
}
</style>
