const showList = [
    { date: "2023", 
    venue:"Thunderbird Stadium", 
    location: "Vancouver"
   },
   { date: "2024", 
   venue:"Laker Stadium", 
   location: "LA"
  },
  { date: "2025", 
  venue:"Mars Canyon", 
  location: "Mars"
  }
  
  ];



const showListEl = document.querySelector(".shows__list");

for (let i = 0; i < showList.length; i++) {
  const showItem = document.createElement('li');
  showItem.classList.add('show__item');

  const showDate = document.createElement('p');
  showDate.classList.add('show__details');
  
  showDate.textContent = `Date: ${showList[i].date}`;
  showItem.appendChild(showDate);

  const showVenue = document.createElement('p');
  showVenue.classList.add('show__venue');
  showVenue.textContent = `Venue: ${showList[i].venue}`;
  showItem.appendChild(showVenue);

  const showLocation = document.createElement('p');
  showLocation.classList.add('show__location');
  showLocation.textContent = `Location: ${showList[i].location}`;
  showItem.appendChild(showLocation);

  // Create a button element
  const colorButton = document.createElement('button');
  colorButton.textContent = 'BUY TICKETS';
  colorButton.classList.add('color-change-btn');

  // Add an event listener to the button
  colorButton.addEventListener('click', function(event) {
    showItem.style.backgroundColor = 'lightblue'; 
  });

  // Append the button to the 'showItem' element
  showItem.appendChild(colorButton);

  // Append the showItem to the showListEl
  showListEl.appendChild(showItem);
}