// create instance of BandApi class
const bandSiteApi = new BandSiteApi();

async function fetchComments() {
  const commentsEl = document.querySelector(".comment-area");

  const comments = await bandSiteApi.getComments();

  // Initial display of comments
  for (const comment of comments) {
    display(comment);
  }
}

function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = seconds / 31536000; // years
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000; // months
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400; // days
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600; // hours
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60; // minutes
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

function createElement(tag, classes, content) {
  const el = document.createElement(tag);
  el.className = classes.join(" ");
  if (content) el.textContent = content;
  return el;
}

function display(comment) {
  const commentsEl = document.querySelector(".comment-area");
  const commentEl = createElement("li", ["comment-area__item"]);
  const flexWrapper = createElement("div", ["comment-area__flex-wrapper"]);
  const avatarImageEl = createElement("div", ["comment-area__avatar-image"]);
  const nameEl = createElement("h3", ["comment-area__title"], comment.name);

  const timeEl = createElement(
    "small",
    ["comment-area__timestamp"],
    timeSince(comment.timestamp)
  );

  const comEl = createElement(
    "p",
    ["comment-area__description"],
    comment.comment
  );

  flexWrapper.appendChild(avatarImageEl);
  flexWrapper.appendChild(nameEl);
  flexWrapper.appendChild(timeEl);
  commentEl.appendChild(flexWrapper);
  commentEl.appendChild(comEl);

  commentsEl.insertBefore(commentEl, commentsEl.firstChild);
}

const commentFormEl = document.getElementById("commentForm");
const commentInput = document.getElementById("commentArea");
const errorsListEl = document.getElementById("error-messages");

commentFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const errorsListEl = document.getElementById("error-messages");
  errorsListEl.innerHTML = "";
  const errorMessages = [];

  if (e.target.comment.value.length < 10) {
    errorMessages.push("Please enter more information about your comment");
  }

  if (errorMessages.length > 0) {
    // Form is invalid.
    for (const error of errorMessages) {
      const errorEl = document.createElement("li");
      errorEl.innerText = error;

      errorsListEl.appendChild(errorEl);
    }

    return; // immediately ends the function!
  }

  const newComment = {
    name: e.target.name.value,
    comment: e.target.comment.value,
  };

  // Wait for the new comment to be posted
  await bandSiteApi.postComment(newComment);

  display(newComment);

  e.target.name.value = "";
  e.target.comment.value = "";

  await fetchComments();
});

fetchComments();
