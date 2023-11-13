
// function formatDate(date) {
//     const d = new Date(date);
//     const day = d.getDate().toString().padStart(2, '0');
//     const month = (d.getMonth() + 1).toString().padStart(2, '0');
//     const year = d.getFullYear();
//     return `${day}/${month}/${year}`;
// }

// function timeSince(date) {
//     const now = new Date();
//     const commentDate = new Date(date);
//     const secondsPast = (now.getTime() - commentDate.getTime()) / 1000;

//     if (secondsPast < 60) { // less than a minute
//         return `${Math.round(secondsPast)} seconds ago`;
//     }
//     if (secondsPast < 3600) { // less than an hour
//         return `${Math.round(secondsPast / 60)} minutes ago`;
//     }
//     if (secondsPast <= 86400) { // less than a day
//         return `${Math.round(secondsPast / 3600)} hours ago`;
//     }
//     if (secondsPast <= 2592000) { // less than a month
//         return `${Math.round(secondsPast / 86400)} days ago`;
//     }
//     if (secondsPast <= 31536000) { // less than a year
//         return `${Math.round(secondsPast / 2592000)} months ago`;
//     }
//     return `${Math.round(secondsPast / 31536000)} years ago`;
// }

function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}








const comments = [
    {
        name: "Connor Walton",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        timestamp: new Date().toISOString(),
        // timestamp: "02/17/202",
        imageUrl: "./assets/Images/placeholder.png"
    },

    {
        name: "Emille Beach",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day. ",
        timestamp: new Date().toISOString(),
        // timestamp: "01/09/2021",
        imageUrl: "./assets/Images/placeholder.png"
    },

    {
        name: "Miles Acosta ",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough. ",
        timestamp: new Date().toISOString(),
        // timestamp: "12/20/2020",
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

function display(comment) {  
    const commentEl = document.createElement('li');
    commentEl.classList.add('comment-area__item');

    // Create a wrapper div for flex styling
    const flexWrapper = document.createElement('div');
    flexWrapper.classList.add('comment-area__flex-wrapper');

    if (comment.imageUrl) {
        const imgEl = document.createElement('img');
        imgEl.classList.add('comment-area__image');
        imgEl.src = comment.imageUrl; 
        imgEl.style.width = "45px"; 
        imgEl.style.height = "auto";
        flexWrapper.appendChild(imgEl); // Append the image to the flex wrapper
    }

    const nameEl = document.createElement("h3");
    nameEl.classList.add('comment-area__title');
    nameEl.textContent = comment.name;
    flexWrapper.appendChild(nameEl); // Append the title to the flex wrapper

    // const timeEl = document.createElement("small");
    // timeEl.classList.add('comment-area__timestamp');
    // timeEl.textContent = timeSince(comment.timestamp);
    // flexWrapper.appendChild(timeEl); 


    const timeEl = document.createElement("small");
    timeEl.classList.add('comment-area__timestamp');
    timeEl.textContent = formatDate(comment.timestamp); // Use formatDate here
    flexWrapper.appendChild(timeEl); 

    // Append the flex wrapper to the comment element
    commentEl.appendChild(flexWrapper);

    // Create and append the comment description separately
    const comEl = document.createElement("p");
    comEl.classList.add('comment-area__description');
    comEl.textContent = comment.comment;
    commentEl.appendChild(comEl); 

    commentsEl.appendChild(commentEl);
}
