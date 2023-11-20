function formatDate(dateString) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

const showListEl = document.querySelector(".shows__list");
const bandSiteApi = new BandSiteApi("e3c51b65-ac15-4f73-8918-5b420bcb4b1");

// const title = document.createElement("h2");
// title.textContent = "Shows";
// title.classList.add("shows__main-title");
// showListEl.parentElement.insertBefore(title, showListEl);

// const titlesWrap = document.createElement("div");
// titlesWrap.classList.add("shows__title--wrap");

// const dateListTitle = document.createElement("p");
// dateListTitle.classList.add("shows__list-title");
// dateListTitle.textContent = "DATE";
// dateListTitle.style.textTransform = "uppercase";
// titlesWrap.appendChild(dateListTitle);

// const venueListTitle = document.createElement("p");
// venueListTitle.classList.add("shows__list-title");
// venueListTitle.textContent = "VENUE";
// venueListTitle.style.textTransform = "uppercase";
// titlesWrap.appendChild(venueListTitle);

// const locationListTitle = document.createElement("p");
// locationListTitle.classList.add("shows__list-title");
// locationListTitle.textContent = "LOCATION";
// locationListTitle.style.textTransform = "uppercase";
// titlesWrap.appendChild(locationListTitle);

// showListEl.parentElement.insertBefore(titlesWrap, showListEl);

// Create a wrapper container for the entire shows section
const showsContainer = document.createElement("div");
showsContainer.classList.add("shows__titles-container");

// Create and add the h2 title
const title = document.createElement("h2");
title.textContent = "Shows";
title.classList.add("shows__main-title");
showsContainer.appendChild(title); // Add title to the container

// Create the titlesWrap container
const titlesWrap = document.createElement("div");
titlesWrap.classList.add("shows__title--wrap");

// Function to create and append a title
function createAndAppendTitle(parent, textContent) {
    const titleElement = document.createElement("p");
    titleElement.classList.add("shows__list-title");
    titleElement.textContent = textContent;
    titleElement.style.textTransform = "uppercase";
    parent.appendChild(titleElement);
}

// Adding titles to the titlesWrap container
createAndAppendTitle(titlesWrap, "DATE");
createAndAppendTitle(titlesWrap, "VENUE");
createAndAppendTitle(titlesWrap, "LOCATION");

// Append titlesWrap to the showsContainer
showsContainer.appendChild(titlesWrap);

// Insert the showsContainer into the DOM before the showListEl
showListEl.parentElement.insertBefore(showsContainer, showListEl);





async function fetchShows() {
  const showList = await bandSiteApi.getShows();

  for (let i = 0; i < showList.length; i++) {
    const showItem = document.createElement("li");
    showItem.classList.add("shows__item");

    const dateTitle = document.createElement("p");
    dateTitle.classList.add("shows__title");
    dateTitle.textContent = "DATE";
    dateTitle.style.textTransform = "uppercase";
    showItem.appendChild(dateTitle);

    const showDate = document.createElement("p");
    showDate.classList.add("shows__details");
    showDate.textContent = formatDate(showList[i].date);
    showItem.appendChild(showDate);

    const venueTitle = document.createElement("p");
    venueTitle.classList.add("shows__title");
    venueTitle.textContent = "VENUE";
    venueTitle.style.textTransform = "uppercase";
    showItem.appendChild(venueTitle);

    const showVenue = document.createElement("p");
    showVenue.classList.add("shows__venue");
    showVenue.textContent = showList[i].place
      ? showList[i].place
      : "Venue not available";
    showItem.appendChild(showVenue);

    const locationTitle = document.createElement("p");
    locationTitle.classList.add("shows__title");
    locationTitle.textContent = "LOCATION";
    locationTitle.style.textTransform = "uppercase";
    showItem.appendChild(locationTitle);

    const showLocation = document.createElement("p");
    showLocation.classList.add("shows__location");
    showLocation.textContent = showList[i].location;
    showItem.appendChild(showLocation);

    const colorButton = document.createElement("button");
    colorButton.textContent = "BUY TICKETS";
    colorButton.classList.add("shows__btn");

    colorButton.addEventListener("click", function (event) {
      const allItems = showListEl.getElementsByClassName("shows__item");
      for (let item of allItems) {
        item.classList.remove("shows__item--highlighted");
      }
      showItem.classList.add("shows__item--highlighted");
    });
    showItem.appendChild(colorButton);

    showListEl.appendChild(showItem);
  }
}

fetchShows();
