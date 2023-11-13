function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

const comments = [
    {
        name: "show1",
        comment: "That was the best show I have ever seen",
        timestamp: formatDate(new Date().toISOString()),
        imageUrl: "../../Brainstation headshots/h1.png"
    },

    {
        name: "show2",
        comment: "That was the best show I have ever seen",
        timestamp: formatDate(new Date().toISOString()), 
        imageUrl: "../../Brainstation headshots/h1.png"
    },

    {
        name: "show3",
        comment: "That was the best show I have ever seen",
        timestamp: formatDate(new Date().toISOString()),
        imageUrl: "../../Brainstation headshots/h1.png"
    }
  
];


const commentFormEl = document.getElementById('commentForm');
commentFormEl.addEventListener('submit', (e) => {
    e.preventDefault();


const fileInput = document.getElementById('avatar');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        const newComment = {
            name: e.target.personName.value,
            comment: e.target.comment.value,
            timestamp: formatDate(new Date().toISOString()),
            imageUrl: reader.result // This is the base64 encoded image
        };

        comments.unshift(newComment);
        updateCommentsDisplay();
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        updateCommentsDisplay();
    }
});

function updateCommentsDisplay() {
    commentsEl.innerHTML = "";
    for (const comment of comments) {
        display(comment);
    }
}

const commentsEl = document.querySelector(".comment-area");


for (const comment of comments) {
    display(comment);
}

function display(comment) {  
    const commentEl = document.createElement('li');
    commentEl.classList.add('comment__item');

    const imgEl = document.createElement('img');

imgEl.src = comment.imageUrl; 

imgEl.style.width = "45px"; 
imgEl.style.height = "auto"; 

    const nameEl = document.createElement("h3");
    nameEl.classList.add('comment__title');
    nameEl.textContent = comment.name;
    const comEl = document.createElement("p");
    comEl.classList.add('comment__description');
    comEl.textContent = comment.comment;
    const timeEl = document.createElement("small");
    timeEl.classList.add('comment__timestamp');
    timeEl.textContent = comment.timestamp; 

    commentEl.append(imgEl, timeEl,nameEl, comEl); 
    commentsEl.appendChild(commentEl);
}


