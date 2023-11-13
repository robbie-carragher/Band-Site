
// function formatDate(date) {
//     const d = new Date(date);
//     const day = d.getDate().toString().padStart(2, '0');
//     const month = (d.getMonth() + 1).toString().padStart(2, '0');
//     const year = d.getFullYear();
//     return `${day}/${month}/${year}`;
// }

function timeSince(date) {
    const now = new Date();
    const commentDate = new Date(date);
    const secondsPast = (now.getTime() - commentDate.getTime()) / 1000;

    if (secondsPast < 60) { // less than a minute
        return `${Math.round(secondsPast)} seconds ago`;
    }
    if (secondsPast < 3600) { // less than an hour
        return `${Math.round(secondsPast / 60)} minutes ago`;
    }
    if (secondsPast <= 86400) { // less than a day
        return `${Math.round(secondsPast / 3600)} hours ago`;
    }
    if (secondsPast <= 2592000) { // less than a month
        return `${Math.round(secondsPast / 86400)} days ago`;
    }
    if (secondsPast <= 31536000) { // less than a year
        return `${Math.round(secondsPast / 2592000)} months ago`;
    }
    return `${Math.round(secondsPast / 31536000)} years ago`;
}


const comments = [
    {
        name: "show1",
        comment: "That was the best show I have ever seen",
        timestamp: new Date().toISOString(),
        imageUrl: "./assets/Images/placeholder.png"
    },

    {
        name: "show1",
        comment: "That was the best show I have ever seen",
        timestamp: new Date().toISOString(),
        imageUrl: "./assets/Images/placeholder.png"
    },

    {
        name: "show1",
        comment: "That was the best show I have ever seen",
        timestamp: new Date().toISOString(),
        imageUrl: "./assets/Images/placeholder.png"
    },
  
];


const commentFormEl = document.getElementById('commentForm');
commentFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const newComment = {
        name: e.target.name.value,
        comment: e.target.comment.value,
        
        timestamp: new Date().toISOString()
       
    };
    

    comments.unshift(newComment); 
    console.log(comments);

    commentsEl.innerHTML = ""; 

    for (const comment of comments) {
        display(comment);
    }
});

const commentsEl = document.querySelector(".comment-area");

// Initial display of comments
for (const comment of comments) {
    display(comment);
}

// function display(comment) {  
//     const commentEl = document.createElement('li');
//     commentEl.classList.add('comment__item');
//     const imgEl = document.createElement('img');
//     imgEl.classList.add('comment__image');
//     imgEl.src = comment.imageUrl; 
//     imgEl.style.width = "45px"; 
//     imgEl.style.height = "auto"; 
//     const nameEl = document.createElement("h3");
//     nameEl.classList.add('comment__title');
//     nameEl.textContent = comment.name;
//     const comEl = document.createElement("p");
//     comEl.classList.add('comment__description');
//     comEl.textContent = comment.comment;
//     const timeEl = document.createElement("small");
//     timeEl.classList.add('comment__timestamp');
//     timeEl.textContent = timeSince(comment.timestamp);

//     commentEl.append(imgEl, timeEl,nameEl, comEl); 
//     commentsEl.appendChild(commentEl);

// }

function display(comment) {  
    const commentEl = document.createElement('li');
    commentEl.classList.add('comment__item');

    // Only create and append the image element if imageUrl exists
    if (comment.imageUrl) {
        const imgEl = document.createElement('img');
        imgEl.classList.add('comment__image');
        imgEl.src = comment.imageUrl; 
        imgEl.style.width = "45px"; 
        imgEl.style.height = "auto";
        commentEl.appendChild(imgEl); // Append the image only if it exists
    }

    const nameEl = document.createElement("h3");
    nameEl.classList.add('comment__title');
    nameEl.textContent = comment.name;

    const comEl = document.createElement("p");
    comEl.classList.add('comment__description');
    comEl.textContent = comment.comment;

    const timeEl = document.createElement("small");
    timeEl.classList.add('comment__timestamp');
    timeEl.textContent = timeSince(comment.timestamp);

    commentEl.append(timeEl, nameEl, comEl); 
    commentsEl.appendChild(commentEl);
}
