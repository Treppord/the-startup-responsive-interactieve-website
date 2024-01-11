document.addEventListener("DOMContentLoaded", function () {
  const citiesWeather = [
    { name: "Monday", temperature: "18°C", condition: "Partly Cloudy" },
    { name: "Tueseday", temperature: "22°C", condition: "Sunny" },
    { name: "Wednesday", temperature: "20°C", condition: "Light Rain" },
    { name: "Thursday", temperature: "-20°C", condition: "Snow" },
  ];

  const weatherContent = document.getElementById("forecast-block");

  citiesWeather.forEach((city) => {
    const cityWeatherElement = document.createElement("div");
    cityWeatherElement.classList.add("city-weather");

    cityWeatherElement.innerHTML = `
            <h3>${city.name}</h3>
            <p>Temperature: ${city.temperature}</p>
            <p>Condition: ${city.condition}</p>
        `;

    weatherContent.appendChild(cityWeatherElement);
  });
});

function toggleDescription() {
  const paragraph1 = document.getElementById("description-paragraph1");
  const paragraph2 = document.getElementById("description-paragraph2");
  const readMoreBtn = document.getElementById("read-more-btn");

  paragraph1.style.display = "none";
  paragraph2.style.display = "block";
  readMoreBtn.style.display = "none";
}

function subscribe() {
  const emailInput = document.getElementById("email");
  const subscriptionMessage = document.getElementById("subscription-message");

  subscriptionMessage.textContent = "Subscription successful!";
}

function openModal(activity) {
  const modal = document.getElementById("activities-modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("activities-modal");
  modal.style.display = "none";
}
