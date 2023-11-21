
function createElement(tag, classes, content) {
  const el = document.createElement(tag);
  el.className = classes.join(" ");
  if (content) el.textContent = content;
  return el;
}

function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
}

function display(comment) {
  const commentsEl = document.querySelector(".comment-area");
  const commentEl = createElement("li", ["comment-area__item"]);
  const flexWrapper = createElement("div", ["comment-area__flex-wrapper"]);
  const avatarImageEl = createElement("div", ["comment-area__avatar-image"]);
  const nameEl = createElement("h3", ["comment-area__title"], comment.name);
  const timeEl = createElement("small", ["comment-area__timestamp"], timeSince(comment.timestamp));
  const comEl = createElement("p", ["comment-area__description"], comment.comment);
  const likeButton = createElement('button', ['like-button'], 'Like');
  const likesCount = createElement('span', ['likes-count'], `Likes: ${comment.likes || 0}`);

  likeButton.addEventListener('click', async () => {
    const updatedComment = await bandSiteApi.likeComment(comment.id);
    likesCount.textContent = `Likes: ${updatedComment.likes}`;
  });

  flexWrapper.appendChild(avatarImageEl);
  flexWrapper.appendChild(nameEl);
  flexWrapper.appendChild(timeEl);
  commentEl.appendChild(flexWrapper);
  commentEl.appendChild(comEl);
  commentEl.appendChild(likeButton);
  commentEl.appendChild(likesCount);
  commentsEl.insertBefore(commentEl, commentsEl.firstChild);
}

const bandSiteApi = new BandSiteApi();
const commentFormEl = document.getElementById("commentForm");
const commentInput = document.getElementById("commentArea");
const errorsListEl = document.getElementById("error-messages");

async function fetchComments() {
  const comments = await bandSiteApi.getComments();
  document.querySelector(".comment-area").innerHTML = '';
  comments.forEach(display);
}

commentFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorsListEl.innerHTML = "";

  if (commentInput.value.length < 10) {
    errorsListEl.textContent = "Please enter more information about your comment";
    return;
  }

  const newComment = {
    name: e.target.name.value,
    comment: e.target.comment.value,
  };

  await bandSiteApi.postComment(newComment);
  e.target.reset();
  fetchComments();
});

fetchComments();
