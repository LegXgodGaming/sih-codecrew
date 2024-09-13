import express from 'express';
import axios from 'axios';

// Use your OpenWeatherMap API key
const API_KEY = process.env.WEATHER_API_KEY;

const weatherController = express.Router();

weatherController.get('/weather', async (req, res) => {
  try {
    const { location } = req.query;

    if (!location) {
      return res.status(400).json({ error: 'Location query parameter is required' });
    }

    // Fetch weather data from OpenWeatherMap API
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric'  // or 'imperial' for Fahrenheit
      }
    });

    const weatherData = response.data;

    // Send weather data as JSON
    return res.status(200).json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

export default weatherController;
