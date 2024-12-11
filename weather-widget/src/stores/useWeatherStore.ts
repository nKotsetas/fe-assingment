import { defineStore } from "pinia";
import { fetchWeatherData } from "../services/weatherService";
import {
  WeatherRequestParams,
  WeatherResponse,
} from "../interfaces/weatherApiInterfaces";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherData: null as WeatherResponse | null,
    loading: false as boolean,
    chartData: null as {
      daily: { temperature_2m_max: number[]; time: string[] };
    } | null,
    error: null as string | null,
    todaysWeatherCode: null as number | null,
  }),

  actions: {
    async loadWeather(
      latitude: number,
      longitude: number,
      startDate: string,
      endDate: string
    ) {
      if (startDate == this.weatherData?.daily.time[0]) return;
      this.loading = true;
      this.error = null;

      try {
        const response = await fetchWeatherData({
          latitude,
          longitude,
          startDate,
          endDate,
        } as WeatherRequestParams);

        this.weatherData = response;
        this.todaysWeatherCode = response.daily.weathercode[0];

        if (!this.chartData) {
          this.chartData = {
            daily: {
              temperature_2m_max: response.daily.temperature_2m_max,
              time: response.daily.time,
            },
          };
        }
      } catch (err: unknown) {
        this.error = (
          err instanceof Error ? err.message : "Failed to fetch weather data"
        ) as string;
      } finally {
        this.loading = false;
      }
    },

    resetWeatherData() {
      this.weatherData = null;
      this.loading = false;
      this.error = null;
    },
  },
});
