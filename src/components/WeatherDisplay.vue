<template>
  <div class="weather-display">
    <div class="date-picker-container">
      <span>Select a date</span>

      <VueDatePicker
        class="date-picker"
        v-model="selectedDate"
        :format="formatDate"
        :disabled-dates="isDisabledDate"
        @update:modelValue="updateSelectedDate"
      />
    </div>

    <div class="temperature-container">
      <div>
        <h2>
          {{
            calculateAverageTemperature(weatherData?.hourly.temperature_2m)
          }}°C
        </h2>
        <span>{{ weatherIcons[todaysWeatherCode]?.description }}</span>
      </div>
      <div>
        <img :src="weatherIcons[todaysWeatherCode]?.path" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from "../stores/useWeatherStore";
import { storeToRefs } from "pinia";
import { calculateAverageTemperature } from "../utils/weatherUtils";
import { weatherIcons } from "../constants/weatherIcons";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import moment from "moment";

const weatherStore = useWeatherStore();

const { weatherData, todaysWeatherCode } = storeToRefs(weatherStore);
const selectedDate = ref(new Date(weatherData.value?.daily.time[0]));

const formatDate = (date: Date) => {
  return moment(date).format("YYYY-MM-DD");
};

const isDisabledDate = (date: Date) => {
  const today = moment().startOf("day");
  const sevenDaysFromToday = moment().add(6, "days").endOf("day");
  return (
    moment(date).isBefore(today) || moment(date).isAfter(sevenDaysFromToday)
  );
};

const updateSelectedDate = (date: Date) => {
  if (!date) return;
  weatherStore.loadWeather(
    40.6,
    22.9,
    moment(date).format("YYYY-MM-DD"),
    moment(date).add(6, "days").format("YYYY-MM-DD")
  );
};
</script>

<style scoped lang="scss">
.weather-display {
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 35px 25px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    text-align: start;
  }

  .date-picker-container {
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    @media (max-width: 590px) {
      .date-picker {
        width: 100%;
      }
    }
  }

  .temperature-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;

    img {
      width: 80px;
    }
  }
}
</style>
