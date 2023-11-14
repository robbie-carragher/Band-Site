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


const title = document.createElement('h2');
title.textContent = 'Shows';
title.classList.add('shows__main-title');
showListEl.parentElement.insertBefore(title, showListEl);

const titlesWrap = document.createElement('div');
titlesWrap.classList.add('shows__title--wrap');

const dateListTitle = document.createElement('p');
dateListTitle.classList.add('shows__list-title');
dateListTitle.textContent = 'DATE';
dateListTitle.style.textTransform = 'uppercase';
titlesWrap.appendChild(dateListTitle);

const venueListTitle = document.createElement('p');
venueListTitle.classList.add('shows__list-title');
venueListTitle.textContent = 'VENUE';
venueListTitle.style.textTransform = 'uppercase';
titlesWrap.appendChild(venueListTitle);

const locationListTitle = document.createElement('p');
locationListTitle.classList.add('shows__list-title');
locationListTitle.textContent = 'LOCATION';
locationListTitle.style.textTransform = 'uppercase';
titlesWrap.appendChild(locationListTitle);

showListEl.parentElement.insertBefore(titlesWrap, showListEl);


for (let i = 0; i < showList.length; i++) {
  const showItem = document.createElement('li');
  showItem.classList.add('shows__item');

  const dateTitle = document.createElement('p');
  dateTitle .classList.add('shows__title');
  dateTitle.textContent = 'DATE';
  dateTitle.style.textTransform = 'uppercase';
  showItem.appendChild(dateTitle);

  const showDate = document.createElement('p');
  showDate.classList.add('shows__details');
  showDate.textContent = formatDate(showList[i].date);
  showItem.appendChild(showDate);

  const venueTitle = document.createElement('p');
  venueTitle .classList.add('shows__title');
  venueTitle.textContent = 'VENUE';
  venueTitle.style.textTransform = 'uppercase';
  showItem.appendChild(venueTitle);

  const showVenue = document.createElement('p');
  showVenue.classList.add('shows__venue');
  showVenue.textContent = showList[i].venue;
  showItem.appendChild(showVenue);

  const locationTitle = document.createElement('p');
  locationTitle.classList.add('shows__title');
  locationTitle.textContent = 'LOCATION';
  locationTitle.style.textTransform = 'uppercase';
  showItem.appendChild(locationTitle);

  const showLocation = document.createElement('p');
  showLocation.classList.add('shows__location');
  showLocation.textContent = showList[i].location;
  showItem.appendChild(showLocation);

  const colorButton = document.createElement('button');
  colorButton.textContent = 'BUY TICKETS';
  colorButton.classList.add('shows__btn');
  colorButton.addEventListener('click', function(event) {
    showItem.style.backgroundColor = '#E1E1E1'; 
  });
  showItem.appendChild(colorButton);

  showListEl.appendChild(showItem);
}
