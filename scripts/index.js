const apiUsers = "https://dummyjson.com/users?limit=5&skip=10&select=firstName";
const apiPosts = "https://dummyjson.com/posts?limit=10&skip=10&select=title,body";

const boxUser = document.querySelector(".item-user");
const errorUser = document.querySelector(".error-user");
const inputUser = document.querySelector(".input-user");
const searchUserBtn = document.querySelector(".icon-user");
// let newBoxUser = "";

const boxPosts = document.querySelector(".item-post");
const errorPost = document.querySelector(".error-post");
const inputPost = document.querySelector(".input-post");
const searchPostBtn = document.querySelector(".icon-post");
let newBoxPost = "";

function getUsers() {
    fetch(apiUsers)
        .then((res) => res.json())
        .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
            const newBoxUser = data
            .map((user) => {
                return `<div class="item-user">${user.firstName}</div>`;
            })
            .join("");
            boxUser.innerHTML = newBoxUser;
            errorUser.style.display = "none";
        } else {
            errorUser.style.display = "block";
        }
        console.log(data);
        })
        .catch((error) => {
        console.log(error);
        errorUser.style.display = "block";
    });
}

function searchUsers() {
    const searchTerm = inputUser.value.trim();

    if (searchTerm === "") {
        getUsers();
        return;
    }

    const searchUrl = `https://dummyjson.com/users?limit=5&skip=10&select=firstName&firstName=${encodeURIComponent(
        searchTerm
    )}`;

    fetch(searchUrl)
        .then((res) => res.json())
        .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
            const newBoxUser = data
            .map((user) => {
                return `<div class="item-user">${user.firstName}</div>`;
            })
            .join("");
            boxUser.innerHTML = newBoxUser;
            errorUser.style.display = "none";
        } else {
            errorUser.style.display = "block";
        }
        console.log(data);
        })
        .catch((error) => {
        console.log(error);
        errorUser.style.display = "block";
    });
}

searchUserBtn.addEventListener("click", searchUsers);

getUsers();

function getPosts() {
    fetch(apiPosts)
        .then((res) => res.json())
        .then((posts) => {
            if (Array.isArray(posts)) {
            newBoxPost = posts
                .map((post) => {
                return `<div class="item-post">${post.body}</div>`;
                })
                .join("");
                boxPosts.innerHTML = newBoxPost;
            } else {
                errorPost.style.display = "block";
            }
            console.log(posts);
        })
        .catch((error) => {
            console.log(error);
            errorPost.style.display = "block";
        });
}

function searchPosts() {
    const searchTerm = inputPost.value.trim();

    if (searchTerm === "") {
        getPosts();
        return;
    }

    const searchUrl = `https://dummyjson.com/posts?limit=10&skip=10&select=title,body&title=${encodeURIComponent(
        searchTerm
    )}`;

    fetch(searchUrl)
        .then((res) => res.json())
        .then((posts) => {
        if (Array.isArray(posts)) {
            newBoxPost = posts
            .map((post) => {
                return `<div class="item-post">${post.body}</div>`;
            })
            .join("");
            boxPosts.innerHTML = newBoxPost;
            errorPost.style.display = "none";
        } else {
            errorPost.style.display = "block";
        }
        console.log(posts);
        })
        .catch((error) => {
        console.log(error);
        errorPost.style.display = "block";
    });
}

searchPostBtn.addEventListener("click", searchPosts);

getPosts();

