
// create instance of BandApi class
const bandSiteApi = new BandSiteApi();
console.log(bandSiteApi);

async function fetchComments() {
  const commentsEl = document.querySelector(".comment-area");
//   commentsEl.innerHTML = "";

  const comments = await bandSiteApi.getComments();
  console.log("comments", comments);

  // commentsEl.innerHTML = "";
  // Initial display of comments
  for (const comment of comments) {
    display(comment);
  }
}

function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function createElement(tag, classes, content) {
    const el = document.createElement(tag);
    el.className = classes.join(" ");
    if (content) el.textContent = content;
    return el;
  }
  
  // function display(comment) {
  //   const commentsEl = document.querySelector(".comment-area");
    
  //   const commentEl = createElement("li", ["comment-area__item"]);
  //   const flexWrapper = createElement("div", ["comment-area__flex-wrapper"]);
  //   const nameEl = createElement("h3", ["comment-area__title"], comment.name);
  //   const timeEl = createElement("small", ["comment-area__timestamp"], formatDate(comment.timestamp));
  //   const comEl = createElement("p", ["comment-area__description"], comment.comment);
  
  //   flexWrapper.appendChild(nameEl);
  //   flexWrapper.appendChild(timeEl);
  //   commentEl.appendChild(flexWrapper);
  //   commentEl.appendChild(comEl);
    
  //   commentsEl.insertBefore(commentEl, commentsEl.firstChild);
  // }
  

  function display(comment) {
    const commentsEl = document.querySelector(".comment-area");
    
    // Assuming createElement is a custom function you've defined
    const commentEl = createElement("li", ["comment-area__item"]);
    const flexWrapper = createElement("div", ["comment-area__flex-wrapper"]);
    
    // Create the avatar image container
    const avatarImageEl = createElement("div", ["avatar-image"]);

    const nameEl = createElement("h3", ["comment-area__title"], comment.name);
    const timeEl = createElement("small", ["comment-area__timestamp"], formatDate(comment.timestamp));
    const comEl = createElement("p", ["comment-area__description"], comment.comment);

    // Append the avatar image container to the flex wrapper or the desired parent element
    flexWrapper.appendChild(avatarImageEl);

    flexWrapper.appendChild(nameEl);
    flexWrapper.appendChild(timeEl);
    commentEl.appendChild(flexWrapper);
    commentEl.appendChild(comEl);
    
    commentsEl.insertBefore(commentEl, commentsEl.firstChild);
}



const commentFormEl = document.getElementById("commentForm");

commentFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();



  const newComment = {
    name: e.target.name.value,
    comment: e.target.comment.value,
    // timestamp: new Date().toISOString()
  };

  // Wait for the new comment to be posted
  await bandSiteApi.postComment(newComment);

  display(newComment);

  e.target.name.value = "";
  e.target.comment.value = "";

  await fetchComments();
});

fetchComments();



/* <form>
‹label for="mail"›Please provide an e-mail address:‹/label› «input type="email" id="mail" name="mail")
‹button›Submit‹/button> ‹p id="message"></p>
< form>
‹script>
const email = document. getElementById('mail');
const message = document.getElementById('message');
email.addEventListener ('input', function (event) {
if (lemail.value.includes '@')) {
message.innerText = 'Please enter valid email address';
}
});
‹ script></form> */


