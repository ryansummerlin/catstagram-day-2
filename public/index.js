import { createMainContent } from './main.js';
import { fetchImage } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

const createGetNewImageButton = () => {
    // Create a button that will fetch a new cat image
    const newImageButton = document.createElement("button");
    newImageButton.className = "new-image-button";
    newImageButton.innerText = "Get New Image";
    document.body.appendChild(newImageButton);

    newImageButton.addEventListener("click", getNewImage);
}

let popularity = 0;

const createPopularityScore = () => {
    // Create the popularity score box
    const popularityScore = document.createElement("p");
    popularityScore.className = "p-score";
    popularityScore.innerText = `Popularity Score: ${popularity}`;
    document.body.appendChild(popularityScore);
}

const createVotingButtons = () => {
    // Create the upvote and downvote buttons
    const votingButtonContainer = document.createElement("div");
    votingButtonContainer.className = "voting-container";
    document.body.appendChild(votingButtonContainer);

    const upVote = document.createElement("button");
    const downVote = document.createElement("button");
    upVote.className = "upvote";
    downVote.className = "downvote";
    upVote.innerText = "Upvote";
    downVote.innerText = "DownVote";

    votingButtonContainer.appendChild(upVote);
    votingButtonContainer.appendChild(downVote);

    upVote.addEventListener("click", vote);
    downVote.addEventListener("click", vote);
}

const createComments = () => {
    // Create the comment field, submit comment button, and the display for the comments below
    const commentContainer = document.createElement("div");
    commentContainer.className = "comment-container";
    document.body.appendChild(commentContainer);

    const commentLabel = document.createElement("label");
    commentLabel.for = "comment";
    commentLabel.innerText = "Comment:";
    commentLabel.className = "comment";

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.name = "comment";
    commentInput.id = "comment-input";
    commentInput.placeholder = "Add a comment...";
    commentInput.className = "comment";

    const submitCommentButton = document.createElement("input");
    submitCommentButton.type = "button";
    submitCommentButton.value = "Submit";
    submitCommentButton.className = "comment";

    commentContainer.appendChild(commentLabel);
    commentContainer.appendChild(commentInput);
    commentContainer.appendChild(submitCommentButton);

    submitCommentButton.addEventListener("click", postComment);

}

const createPostedComments = () => {
    const postedCommentsContainer = document.createElement("div");
    postedCommentsContainer.className = "posted-comments-container";
    document.body.appendChild(postedCommentsContainer);
}

const vote = (event) => {
    let val = 1;

    if (event.target.className === "downvote") {
        val = -1;
    }

    popularity += val;

    const popularityScore = document.querySelector(".p-score");
    popularityScore.innerText = `Popularity Score: ${popularity}`;
}


const postComment = () => {
    const inputField = document.getElementById("comment-input");
    const inputText = inputField.value;

    const postedCommentsContainer = document.querySelector(".posted-comments-container");

    const postedComment = document.createElement("p");
    postedComment.className = "posted-comment";
    postedComment.innerText = inputText;

    postedCommentsContainer.appendChild(postedComment);
}

const getNewImage = () => {
    // Fetch the new image
    fetchImage();

    // Reset popularity
    popularity = 0;
    const popularityScore = document.querySelector(".p-score");
    popularityScore.innerText = `Popularity Score: ${popularity}`;

    // Clear the comments
    const postedCommentsContainer = document.querySelector(".posted-comments-container");
    postedCommentsContainer.innerHTML = "";
}




window.onload = () => {
    initializePage();
    fetchImage();
    createMainContent();
    createGetNewImageButton();
    createPopularityScore();
    createVotingButtons();
    createComments();
    createPostedComments();
};
