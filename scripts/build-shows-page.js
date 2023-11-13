function formatDate(dateInMillis) {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateInMillis);
  return date.toLocaleDateString('en-US', options);
}


const showList = [
    { date: Date.now(), 
    venue:"Thunderbird Stadium", 
    location: "Vancouver,B.C"
   },
   { date: Date.now(), 
   venue:"Laker Stadium", 
   location: "LA, Cal"
  },
  { date: Date.now(), 
  venue:"The Gorge", 
  location: "Summerside, P.E.I"
  },
  { date: Date.now(), 
    venue:"Kaslo Jazzfest", 
    location: "Kaslo B.C"
  },
  { date: Date.now(), 
    venue:"Bloom", 
    location: "Nelson B.C"
  },
  { date: Date.now(), 
    venue:"Envision Festival", 
    location: "Costa Rica"
  },

  
  ];

const showListEl = document.querySelector(".shows__list");

// const title = document.createElement('h2');
// title.textContent = 'Shows';
// showListEl.parentElement.insertBefore(title, showListEl);

// // Create and append the Date, Venue, and Location titles
// const dateTitle = document.createElement('p');
// dateTitle.classList.add('show__title');
// dateTitle.textContent = 'DATE';
// dateTitle.style.textTransform = 'uppercase';
// showListEl.appendChild(dateTitle);

// const venueTitle = document.createElement('p');
// venueTitle.classList.add('show__title');
// venueTitle.textContent = 'VENUE';
// venueTitle.style.textTransform = 'uppercase';
// showListEl.appendChild(venueTitle);

// const locationTitle = document.createElement('p');
// locationTitle.classList.add('show__title');
// locationTitle.textContent = 'LOCATION';
// locationTitle.style.textTransform = 'uppercase';
// showListEl.appendChild(locationTitle);

// Create and insert the 'Shows' title
const title = document.createElement('h2');
title.textContent = 'Shows';
showListEl.parentElement.insertBefore(title, showListEl);

// // Create a container for the titles
// const titlesContainer = document.createElement('div');
// titlesContainer.classList.add('titles-container');

// // Create and append the Date, Venue, and Location titles
// const dateTitle = document.createElement('p');
// dateTitle.classList.add('show__title');
// dateTitle.textContent = 'DATE';
// dateTitle.style.textTransform = 'uppercase';
// titlesContainer.appendChild(dateTitle);

// const venueTitle = document.createElement('p');
// venueTitle.classList.add('show__title');
// venueTitle.textContent = 'VENUE';
// venueTitle.style.textTransform = 'uppercase';
// titlesContainer.appendChild(venueTitle);

// const locationTitle = document.createElement('p');
// locationTitle.classList.add('show__title');
// locationTitle.textContent = 'LOCATION';
// locationTitle.style.textTransform = 'uppercase';
// titlesContainer.appendChild(locationTitle);

// // Append the container to the parent of showListEl
// showListEl.parentElement.insertBefore(titlesContainer, showListEl);

for (let i = 0; i < showList.length; i++) {
  const showItem = document.createElement('li');
  showItem.classList.add('show__item');

  // Create and append the Date title
  const dateTitle = document.createElement('p');
  dateTitle .classList.add('show__title');
  dateTitle.textContent = 'DATE';
  dateTitle.style.textTransform = 'uppercase';
  showItem.appendChild(dateTitle);

  const showDate = document.createElement('p');
  showDate.classList.add('show__details');
  showDate.textContent = formatDate(showList[i].date);
  showItem.appendChild(showDate);

  // Create and append the Venue title
  const venueTitle = document.createElement('p');
  venueTitle .classList.add('show__title');
  venueTitle.textContent = 'VENUE';
  venueTitle.style.textTransform = 'uppercase';
  showItem.appendChild(venueTitle);

  const showVenue = document.createElement('p');
  showVenue.classList.add('show__venue');
  showVenue.textContent = showList[i].venue;
  showItem.appendChild(showVenue);

  // Create and append the Location title
  const locationTitle = document.createElement('p');
  locationTitle.classList.add('show__title');
  locationTitle.textContent = 'LOCATION';
  locationTitle.style.textTransform = 'uppercase';
  showItem.appendChild(locationTitle);

  const showLocation = document.createElement('p');
  showLocation.classList.add('show__location');
  showLocation.textContent = showList[i].location;
  showItem.appendChild(showLocation);

  const colorButton = document.createElement('button');
  colorButton.textContent = 'BUY TICKETS';
  colorButton.classList.add('color-change-btn');
  colorButton.addEventListener('click', function(event) {
    showItem.style.backgroundColor = 'lightblue'; 
  });
  showItem.appendChild(colorButton);

  showListEl.appendChild(showItem);
}
