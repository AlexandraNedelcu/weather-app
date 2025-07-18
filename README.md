# 🌤️ Weather App
A sleek and responsive weather application built with React that allows users to search for real-time weather information in any city around the world. Powered by the OpenWeather API.
Live demo: https://weather-app-react-an.netlify.app/

## Features
- Search weather by city name
- Displays current temperature, humidity, pressure, and wind speed
- Weather conditions with dynamic icons
- Real-time data with current date and time
- Fully responsive design for mobile and desktop

## Built With
- React – Frontend framework
- OpenWeatherMap API – Weather data provider
- Axios – For HTTP requests
- CSS Modules – For scoped styling
- React Hooks – State and side effects management

## Installation
To run the project locally:
```
git clone https://github.com/AlexandraNedelcu/weather-app.git
cd weather-app
npm install
npm start
```
The app will run on http://localhost:3000.

## Environment Variables
To use the app with your own OpenWeather API key, create a .env file in the root directory and add:
```
REACT_APP_API_KEY=your_openweather_api_key
```
⚠️ Do not share your API key publicly.

## Folder Structure
```
weather-app/
│
├── index.html
│
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── README.md
```

## Future Improvements
- Geolocation-based weather lookup
- Dark mode toggle
- 7-day weather forecast
- Multi-language support

## License
This project is open source and available under the MIT License.
