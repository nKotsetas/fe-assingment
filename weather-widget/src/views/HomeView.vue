<template>
  <div class="widget-home-container">
    <div v-if="!loading" class="card-container">
      <WeatherDisplay />
      <WeatherDetails />
      <WeatherStatistics />
    </div>
    <div v-else class="skeleton-container">
      <SkeletonLoader type="temperature" />
      <SkeletonLoader type="cards" />
      <SkeletonLoader fullHeight type="chart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import WeatherDisplay from "../components/WeatherDisplay.vue";
import WeatherDetails from "../components/WeatherDetails.vue";
import WeatherStatistics from "../components/WeatherStatistics.vue";
import SkeletonLoader from "../components/SkeletonLoader.vue";
import { useWeatherStore } from "../stores/useWeatherStore";
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();
const { loading } = storeToRefs(weatherStore);
</script>

<style scoped lang="scss">
.widget-home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;

  .skeleton-container {
    overflow: scroll;
    max-width: 60vw;
    width: fit-content;
    background-color: #f1f1f1;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 1024px;
  }
  .card-container {
    overflow: scroll;
    max-width: 60vw;
    height: fit-content;
    background-color: #f1f1f1;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 875px) {
    .card-container {
      max-width: 100%;
    }

    .skeleton-container {
      max-width: 100%;
    }
  }
}
</style>
