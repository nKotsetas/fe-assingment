# weather-widget

A weather widget built using Vue 3 and TypeScript. This project fetches weather data from an external weather API and provides a user-friendly interface for displaying the current and forecasted weather, including temperature, wind speed, and pressure.

## Project setup

Install the necessary dependencies:

### Compiles and hot-reloads for development

Run the development server:

### Lints and fixes files

Run linting and automatic fixes for code style issues settings set to auto lint on save check .vscode folder for details.

## Features

- **Vue 3**: Utilizes Vue 3 for building the UI and managing state.
- **TypeScript**: Strongly typed components and state management for better code quality and maintainability.
- **Pinia**: Used for state management, including loading and error states for weather data.
- **Weather Data Fetching**: Fetches real-time weather data from the Open-Meteo API.
- **Skeleton Loader**: Displays a skeleton loader while weather data is being fetched.
- **DatePicker Component**: Provides a date picker to select the desired forecast range.

## Components

- **WeatherDisplay**: Displays the current weather.
- **WeatherDetails**: Shows detailed weather metrics like wind speed, humidity, and pressure.
- **WeatherStatistics**: Displays statistical data such as maximum and minimum temperatures.
- **SkeletonLoader**: A reusable component for showing loading states with a skeleton loader.

## State Management

This project uses **Pinia** for state management. The `weatherStore` manages the following state variables:

- `weatherData`: Contains the fetched weather data.
- `loading`: Boolean flag indicating if data is still loading.
- `error`: Holds error messages if the data fetch fails.
- `chartData`: Stores data for rendering weather charts (optional).
- `todaysWeatherCode`: Stores the weather code for today's weather.

## API

The weather data is fetched from the **Open-Meteo API**. The API is called using the `fetchWeatherData` function, which handles fetching weather data based on latitude, longitude, and date range. The weather data includes hourly and daily forecasts, such as temperature, wind speed, humidity, and more.

## API Service

The weather data is fetched using the `fetchWeatherData` function from the `weatherService.ts` file. This function returns the weather data and handles any errors that may occur during the API call.

### Sample API Request:

```typescript
fetchWeatherData({
  latitude,
  longitude,
  startDate,
  endDate,
});
```
