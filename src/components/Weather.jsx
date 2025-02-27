import React, { useEffect, useRef, useState } from 'react'
import '../assets/css/Weather.css'
import search_icon from '../assets/images/search.png'
import clear_icon from '../assets/images/clear.png'
import cloud_icon from '../assets/images/cloud.png'
import drizzle_icon from '../assets/images/drizzle.png'
import humidity_icon from '../assets/images/humidity.png'
import rain_icon from '../assets/images/rain.png'
import snow_icon from '../assets/images/snow.png'
import wind_icon from '../assets/images/wind.png'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(false)
    const inputRef = useRef()

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon
    }
    const search = async (city) => {
        if (city === "") {
            setWeatherData(false)
            return
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`
            const response = await fetch(url)
            if (!response.ok) {
                setWeatherData(false)
                return
            }
            const data = await response.json()
            const icon = allIcons[data.weather[0].icon] || clear_icon
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
        } catch (error) {
            setWeatherData(false)
        }
    }

    useEffect(() => {
        search("London")
    },[])

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            search(inputRef.current.value)
        }
    }

  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} type='text' onKeyDown={handleKeyDown} placeholder='Search'/>
            <img src={search_icon} alt='' onClick={() => search(inputRef.current.value)} />
        </div>
        {weatherData?<>
        <img src={weatherData.icon} alt='' className='weather-icon' />
        <p className='temperature'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt='' />
                <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt='' />
                <div>
                    <p>{weatherData.windSpeed} Km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
        </>:<>
            <p className='city-not-found'>City not found</p>
        </>}
    </div>
  )
}

export default Weather