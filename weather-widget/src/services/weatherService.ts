import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  BASE_URL,
  TIMEOUT,
  DEFAULT_TIMEZONE,
  HOURLY_FIELDS,
  DAILY_FIELDS,
} from "../constants/weatherApiConstants";
import {
  WeatherRequestParams,
  WeatherResponse,
} from "../interfaces/weatherApiInterfaces";

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

/**
 *
 * @param {WeatherRequestParams} params - The parameters for the API request.
 * @returns {Promise<WeatherResponse>} A promise resolving to the weather data.
 */
export const fetchWeatherData = async (
  params: WeatherRequestParams
): Promise<WeatherResponse> => {
  try {
    const response: AxiosResponse<WeatherResponse> = await apiClient.get("/", {
      params: {
        latitude: params.latitude,
        longitude: params.longitude,
        start_date: params.startDate,
        end_date: params.endDate,
        hourly: HOURLY_FIELDS,
        daily: DAILY_FIELDS,
        timezone: DEFAULT_TIMEZONE,
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
      throw new Error(
        "An unexpected error occurred while fetching weather data."
      );
    }
  }
};
