document.addEventListener("DOMContentLoaded", function () {
  const citiesWeather = [
    {
      name: "Monday 1st Jan",
      mintemperature: "18°",
      temperature: "21°",
      condition: "☀️",
    },
    {
      name: "Tuesday 2nd Jan",
      mintemperature: "18°",
      temperature: "22°",
      condition: "☁️",
    },
    {
      name: "Wednesday 3rd Jan",
      mintemperature: "-4°",
      temperature: "-2°",
      condition: "🌨️",
    },
    {
      name: "Thursday 4th Jan",
      mintemperature: "-22°",
      temperature: "-20°",
      condition: "🌨️",
    },
  ];

  const weatherContent = document.getElementById("forecast-block");

  citiesWeather.forEach((city) => {
    const cityWeatherElement = document.createElement("div");
    cityWeatherElement.classList.add("city-weather");

    cityWeatherElement.innerHTML = `
      <h3>${city.name}</h3> <p>${city.mintemperature} / ${city.temperature} ${city.condition}</p>
    `;

    weatherContent.appendChild(cityWeatherElement);
  });
});
