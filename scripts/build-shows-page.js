function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options).replace(/,/g, " ");
}

function createElement(type, className, textContent, style = {}) {
  const element = document.createElement(type);
  element.className = className;
  element.textContent = textContent;
  Object.assign(element.style, style);
  return element;
}

const showListEl = document.querySelector(".shows__list");
const bandSiteApi = new BandSiteApi();

const showsContainer = createElement("div", "shows__titles-container", "");

const title = createElement("h2", "shows__main-title", "Shows");
const titlesWrap = createElement("div", "shows__title--wrap", "");
["DATE", "VENUE", "LOCATION"].forEach((text) => {
  titlesWrap.appendChild(
    createElement("p", "shows__list-title", text, {
      textTransform: "uppercase",
    })
  );
});

showsContainer.appendChild(title);
showsContainer.appendChild(titlesWrap);

showListEl.parentElement.insertBefore(showsContainer, showListEl);

async function fetchShows() {
  const showList = await bandSiteApi.getShows();
  showList.forEach((show) => {
    const showItem = createElement("li", "shows__item", "");
    ["DATE", "VENUE", "LOCATION"].forEach((title) => {
      showItem.appendChild(
        createElement("p", "shows__title", title, {
          textTransform: "uppercase",
        })
      );
    });

    showItem.appendChild(
      createElement("p", "shows__details", formatDate(show.date))
    );
    showItem.appendChild(
      createElement("p", "shows__venue", show.place || "Venue not available")
    );
    showItem.appendChild(createElement("p", "shows__location", show.location));

    const colorButton = createElement("button", "shows__btn", "BUY TICKETS");
    colorButton.addEventListener("click", () => {
      document
        .querySelectorAll(".shows__item")
        .forEach((item) => item.classList.remove("shows__item--highlighted"));
      showItem.classList.add("shows__item--highlighted");
    });
    showItem.appendChild(colorButton);

    showListEl.appendChild(showItem);
  });
}

fetchShows();
