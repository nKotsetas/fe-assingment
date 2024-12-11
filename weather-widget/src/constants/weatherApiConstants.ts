export const BASE_URL = "https://api.open-meteo.com/v1/forecast";
export const TIMEOUT = 10000;
export const DEFAULT_TIMEZONE = "Europe/Athens";

export const HOURLY_FIELDS = [
  "temperature_2m",
  "apparent_temperature",
  "wind_speed_10m",
  "wind_gusts_10m",
  "wind_direction_10m",
  "relative_humidity_2m",
  "pressure_msl",
  "weathercode",
].join(",");

export const DAILY_FIELDS = [
  "temperature_2m_max",
  "temperature_2m_min",
  "weathercode",
].join(",");
