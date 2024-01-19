document.addEventListener("DOMContentLoaded", function () {
  const citiesWeather = [
    {
      name: "Monday 1st Jan",
      mintemperature: "18°",
      temperature: "21°",
      condition: "sun",
    },
    {
      name: "Tuesday 2nd Jan",
      mintemperature: "18°",
      temperature: "22°",
      condition: "cloud",
    },
    {
      name: "Wednesday 3rd Jan",
      mintemperature: "-4°",
      temperature: "-2°",
      condition: "thunder",
    },
    {
      name: "Thursday 4th Jan",
      mintemperature: "-22°",
      temperature: "-20°",
      condition: "thunder",
    },
    {
      name: "Friday 5th Jan",
      mintemperature: "-12°",
      temperature: "-10°",
      condition: "rain",
    },
  ];

  const weatherContent = document.getElementById("forecast-block");

  citiesWeather.forEach((city) => {
    const cityWeatherElement = document.createElement("div");
    cityWeatherElement.classList.add("city-weather");

    const conditionIcon = getConditionIcon(city.condition);

    cityWeatherElement.innerHTML = `
      <h4>${city.name}</h4>
      <p>${city.mintemperature} / ${city.temperature} ${conditionIcon}</p>
    `;

    weatherContent.appendChild(cityWeatherElement);
  });

  const activityElements = document.querySelectorAll(".activity");
  activityElements.forEach((activity) => {
    activity.addEventListener("click", () => {
      openModal();
    });
  });
});

function openModal() {
  const modal = document.getElementById("activityModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("activityModal");
  modal.style.display = "none";
}

function getConditionIcon(condition) {
  let iconSrc = "";

  switch (condition) {
    case "sun":
      iconSrc = "assets/svg/sun.svg";
      break;
    case "cloud":
      iconSrc = "assets/svg/cloud.svg";
      break;
    case "thunder":
      iconSrc = "assets/svg/thunder.svg";
      break;
    case "rain":
      iconSrc = "assets/svg/rain.svg";
      break;

    default:
      break;
  }

  return `<img src="${iconSrc}" alt="${condition}" class="condition-icon" />`;
}
