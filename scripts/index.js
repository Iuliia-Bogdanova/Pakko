const apiUsers = "https://dummyjson.com/users?limit=5&skip=10&select=firstName";
const apiPosts ="https://dummyjson.com/posts?limit=10&skip=10&select=body";

const boxUser = document.querySelector(".item-user");
const errorUser = document.querySelector(".error-user");
let newBoxUser = "";

const boxPosts = document.querySelector(".item-post");
const errorPost = document.querySelector(".error-post");
let newBoxPost = "";

function getUsers() {
    const response = fetch(apiUsers)
        .then((res) => res.json())
        .then((data) => {
            if (Array.isArray(data)) {
                newBoxUser = data.map((user) => {
                        return `<div class="item-user">${user.firstName}</div>`;
                    })
                    .join("");
            }
            boxUser.innerHTML = newBoxUser;
        
        if (data.length === 0) {
            errorUser.style.display = "block";
            }
            console.log(data);
            })
        .catch((error) => {
        console.log(error);
        errorUser.style.display = "block";
    });
    return response; 
}

function getPosts() {
    const response = fetch(apiPosts)
        .then((res) => res.json())
        .then((posts) => {
            if (Array.isArray(posts)) {
            newBoxPost = posts
                .map((post) => {
                return `<div class="item-post">${post.body}</div>`;
                })
                .join("");
            }
            boxPosts.innerHTML = newBoxPost;

            if (posts.length === 0) {
            errorPost.style.display = "block";
            }
            console.log(posts);
        })
        .catch((error) => {
            console.log(error);
            errorPost.style.display = "block";
        });
    return response; 
}

getUsers();
getPosts();

