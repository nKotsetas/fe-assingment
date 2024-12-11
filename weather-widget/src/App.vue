<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useWeatherStore } from "./stores/useWeatherStore";
import moment from "moment";
const { loadWeather } = useWeatherStore();

onMounted(async () => {
  await loadWeather(
    40.6,
    22.9,
    moment().format("YYYY-MM-DD"),
    moment().add(6, "days").format("YYYY-MM-DD")
  );
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
