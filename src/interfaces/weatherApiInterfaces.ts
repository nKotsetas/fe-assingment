export interface WeatherRequestParams {
  latitude: number;
  longitude: number;
  startDate: string;
  endDate: string;
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
  elevation: number;
  generationtime_ms: number;
  daily: DailyData;
  daily_units: DailyUnits;
  hourly: HourlyData;
  hourly_units: HourlyUnits;
}

export interface DailyData {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
}

export interface DailyUnits {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  weathercode: string;
}

export interface HourlyData {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  wind_speed_10m: number[];
  wind_gusts_10m: number[];
  wind_direction_10m: number[];
  relative_humidity_2m: number[];
  pressure_msl: number[];
  weathercode: number[];
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  apparent_temperature: string;
  wind_speed_10m: string;
  wind_gusts_10m: string;
  wind_direction_10m: string;
  relative_humidity_2m: string;
  pressure_msl: string;
  weathercode: string;
}
