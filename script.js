const tripForm = document.getElementById("tripForm");
const formMessage = document.getElementById("formMessage");
const continentsSection = document.getElementById("continentsSection");
const zoneCards = document.querySelectorAll(".zone-card");

const countriesData = [
  { name: "Kazakhstan", continent: "Asia", seasons: ["Spring", "Summer", "Autumn"], bestFor: ["Friends", "Family"], cost: "$$" },
  { name: "Mongolia", continent: "Asia", seasons: ["Spring", "Summer", "Autumn"], bestFor: ["Friends"], cost: "$$" },
  { name: "Vietnam", continent: "Asia", seasons: ["Winter", "Spring", "Autumn"], bestFor: ["Family", "Friends"], cost: "$" },
  { name: "Cambodia", continent: "Asia", seasons: ["Winter", "Autumn"], bestFor: ["Friends", "Family"], cost: "$" },
  { name: "Philippines", continent: "Asia", seasons: ["Winter", "Spring", "Summer"], bestFor: ["Friends", "Honeymoon"], cost: "$$" },

  { name: "Namibia", continent: "Africa", seasons: ["Winter", "Autumn"], bestFor: ["Friends", "Honeymoon"], cost: "$$" },
  { name: "Botswana", continent: "Africa", seasons: ["Winter", "Autumn"], bestFor: ["Honeymoon", "Family"], cost: "$$$" },
  { name: "Zambia", continent: "Africa", seasons: ["Spring", "Autumn"], bestFor: ["Friends", "Family"], cost: "$$" },
  { name: "Madagascar", continent: "Africa", seasons: ["Winter", "Spring"], bestFor: ["Friends", "Honeymoon"], cost: "$$" },

  { name: "Slovenia", continent: "Europe", seasons: ["Spring", "Summer", "Autumn"], bestFor: ["Family", "Honeymoon"], cost: "$$" },
  { name: "Croatia", continent: "Europe", seasons: ["Spring", "Summer", "Autumn"], bestFor: ["Family", "Honeymoon", "Friends"], cost: "$$$" },
  { name: "Serbia", continent: "Europe", seasons: ["Spring", "Summer", "Autumn"], bestFor: ["Friends", "Family"], cost: "$" },
  { name: "Moldova", continent: "Europe", seasons: ["Spring", "Autumn"], bestFor: ["Friends"], cost: "$" },
  { name: "Hungary", continent: "Europe", seasons: ["Spring", "Summer", "Autumn"], bestFor: ["Friends", "Family"], cost: "$$" },

  { name: "Peru", continent: "Latin America", seasons: ["Spring", "Summer", "Autumn"], bestFor: ["Friends", "Family"], cost: "$$" },
  { name: "Ecuador", continent: "Latin America", seasons: ["Spring", "Summer", "Autumn"], bestFor: ["Friends", "Family"], cost: "$" },
  { name: "Colombia", continent: "Latin America", seasons: ["Winter", "Autumn"], bestFor: ["Friends", "Family"], cost: "$" },
  { name: "Costa Rica", continent: "Latin America", seasons: ["Winter", "Spring"], bestFor: ["Family", "Honeymoon"], cost: "$$$" },

  { name: "Australia", continent: "Oceania", seasons: ["Winter"], bestFor: ["Family", "Friends"], cost: "$$$" },
  { name: "New Zealand", continent: "Oceania", seasons: ["Winter", "Summer"], bestFor: ["Honeymoon", "Family", "Friends"], cost: "$$$" },
  { name: "Fiji", continent: "Oceania", seasons: ["Winter", "Summer"], bestFor: ["Honeymoon", "Family"], cost: "$$$" }
];

function getSeason(month) {
  if (month === "December" || month === "January" || month === "February") return "Winter";
  if (month === "March" || month === "April" || month === "May") return "Spring";
  if (month === "June" || month === "July" || month === "August") return "Summer";
  return "Autumn";
}

function getBudgetSymbol(budget) {
  if (budget === "Low") return "$";
  if (budget === "Medium") return "$$";
  return "$$$";
}

function displayCountries(filteredCountries) {
  zoneCards.forEach(card => {
    const continent = card.dataset.continent;
    const tagsContainer = card.querySelector(".country-tags");

    tagsContainer.innerHTML = "";

    const continentCountries = filteredCountries.filter(country => country.continent === continent);

    if (continentCountries.length === 0) {
      tagsContainer.innerHTML = `<span>No match</span>`;
      return;
    }

    continentCountries.forEach(country => {
      const countryTag = document.createElement("span");
      countryTag.textContent = country.name;
      countryTag.style.cursor = "pointer";

      countryTag.addEventListener("click", function () {
        window.location.href = `details.html?country=${encodeURIComponent(country.name)}`;
      });

      tagsContainer.appendChild(countryTag);
    });
  });
}

tripForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const travelType = document.getElementById("travelType").value;
  const travelMonth = document.getElementById("travelMonth").value;
  const budget = document.getElementById("budget").value;

  if (travelType === "" || travelMonth === "" || budget === "") {
    formMessage.textContent = "Please complete all fields before continuing.";
    formMessage.className = "form-message error";
    return;
  }

  const selectedSeason = getSeason(travelMonth);
  const selectedBudget = getBudgetSymbol(budget);

  const filteredCountries = countriesData.filter(country =>
    country.seasons.includes(selectedSeason) &&
    country.bestFor.includes(travelType) &&
    (
      selectedBudget === "$$$" ||
      (selectedBudget === "$$" && (country.cost === "$$" || country.cost === "$")) ||
      (selectedBudget === "$" && country.cost === "$")
    )
  );

  if (filteredCountries.length === 0) {
    formMessage.textContent = "No destinations found. Try changing your options.";
    formMessage.className = "form-message error";
  } else {
    formMessage.textContent =
      `Great! Showing ${filteredCountries.length} destinations. Choose a travel zone below.`;
    formMessage.className = "form-message success";
  }

  displayCountries(filteredCountries);
  continentsSection.classList.remove("hidden");

  setTimeout(() => {
    continentsSection.scrollIntoView({ behavior: "smooth" });
  }, 200);
});
document.getElementById("travelMonth").addEventListener("change", function () {
  formMessage.textContent = "Month selected. Complete the other fields to find destinations.";
  formMessage.className = "form-message success";
});