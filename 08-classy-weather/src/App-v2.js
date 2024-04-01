import React, { useEffect, useState } from "react";

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

function App() {
  const [location, setLocation] = useState("london");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (location.length <= 2) {
      return;
    }

    async function fetchWeather() {
      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const geoData = await geoRes.json();

        if (!geoData.results) throw new Error("Location not found");

        const { latitude, longitude, timezone, name, country_code } =
          geoData.results.at(0);
        this.setState({
          displayLocation: `${name} ${convertToFlag(country_code)}`,
        });

        // 2) Getting actual weather
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
        );
        const weatherData = await weatherRes.json();
        setWeatherData({ weather: weatherData.daily });
      } catch (err) {
        console.error(err);
      }
    }

    fetchWeather();
  }, [location]);

  return (
    <div>
      <div className="app">
        <h1>Classy Weather</h1>
        <Input location={location} setLocation={setLocation} />
        {weatherData && (
          <Weather location={location} weatherData={weatherData} />
        )}
        <button>Get weather</button>
      </div>
    </div>
  );
}

function Input({ location, setLocation }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for loccation..."
        value={location}
        onChange={(e) => setLocation(e.target.location)}
      />
    </div>
  );
}

function Weather({ location, weatherData }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weatherData;

  return (
    <div>
      <h2>{location}</h2>
      <ul className="weather">
        {dates.map((date, i) => (
          <Day
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={codes.at(i)}
            key={i}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  );
}

function Day({ date, max, min, code, isToday }) {
  return (
    <li className="day">
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : formatDay(date)}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
      </p>
    </li>
  );
}

export default App;
