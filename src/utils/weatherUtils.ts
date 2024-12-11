/**
 * Utility function to handle empty array checks and calculate sum.
 * @param values Array of numbers
 * @returns Sum of the numbers or 0 if the array is empty
 */
function calculateSum(values: number[]): number {
  return values?.length ? values.reduce((sum, val) => sum + val, 0) : 0;
}

/**
 * Calculate the average of an array of numbers.
 * @param values Array of numbers
 * @returns Average of the numbers, rounded to the nearest integer
 */
export function calculateAverage(values: number[]): number {
  if (!values?.length) return 0;
  const sum = calculateSum(values);
  return Math.round(sum / values.length);
}

/**
 * Calculate the maximum value in an array of numbers.
 * @param values Array of numbers
 * @returns Maximum value in the array
 */
export function calculateMaximum(values: number[]): number {
  if (!values?.length) return 0;
  return Math.max(...values);
}

/**
 * Calculate the dominant wind direction.
 * The most frequent wind direction is considered dominant.
 * @param directions Array of wind directions in degrees
 * @returns Dominant wind direction (in degrees)
 */
export function calculateDominantDirection(directions: number[]): number {
  if (!directions?.length) return 0;

  const frequencyMap = new Map<number, number>();

  directions.forEach((dir) => {
    frequencyMap.set(dir, (frequencyMap.get(dir) || 0) + 1);
  });

  let dominantDirection = directions[0];
  let maxFrequency = 0;

  frequencyMap.forEach((frequency, dir) => {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      dominantDirection = dir;
    }
  });

  return dominantDirection;
}

/**
 * Calculate the average temperature from the `temperature_2m` array.
 * It calculates the average of the first 24 hours of temperature readings.
 * @param temperature_2m Array of temperatures at 2 meters from the ground
 * @returns Average temperature of the first 24 hours
 */
export function calculateAverageTemperature(temperature_2m: number[]): number {
  if (!temperature_2m?.length) return 0;

  const first24Temps = temperature_2m.slice(0, 24);
  return calculateAverage(first24Temps);
}

/**
 * Calculates various weather metrics based on hourly data.
 * @param hourlyData Hourly weather data object containing arrays for various parameters
 * @returns Array of calculated metrics for the first 24 hours
 */
export function calculateWeatherMetrics(hourlyData: {
  apparent_temperature: number[];
  temperature_2m: number[];
  wind_speed_10m: number[];
  wind_gusts_10m: number[];
  wind_direction_10m: number[];
  relative_humidity_2m: number[];
  pressure_msl: number[];
}) {
  const {
    apparent_temperature,
    wind_speed_10m,
    wind_gusts_10m,
    wind_direction_10m,
    relative_humidity_2m,
    pressure_msl,
  } = hourlyData;

  const first24Data = {
    apparent_temperature: apparent_temperature.slice(0, 24),
    wind_speed_10m: wind_speed_10m.slice(0, 24),
    wind_gusts_10m: wind_gusts_10m.slice(0, 24),
    wind_direction_10m: wind_direction_10m.slice(0, 24),
    relative_humidity_2m: relative_humidity_2m.slice(0, 24),
    pressure_msl: pressure_msl.slice(0, 24),
  };

  return [
    {
      value: calculateAverage(first24Data.apparent_temperature),
      title: "Feels Like",
      type: "°C",
    },
    {
      value: calculateMaximum(first24Data.wind_speed_10m),
      title: "Wind",
      type: "m/s",
    },
    {
      value: calculateMaximum(first24Data.wind_gusts_10m),
      title: "Wind Gust",
      type: "m/s",
    },
    {
      value: calculateDominantDirection(first24Data.wind_direction_10m),
      title: "Wind Direction",
      type: "°",
    },
    {
      value: calculateMaximum(first24Data.relative_humidity_2m),
      title: "Humidity",
      type: "%",
    },
    {
      value: calculateMaximum(first24Data.pressure_msl),
      title: "Pressure",
      type: "hPa",
    },
  ];
}
