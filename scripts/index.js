const apiPosts = "https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}";

let nextPage = 2;

const infiniteObserver = new IntersectionObserver(
    ([entry], observer) => {
        console.log(entry);
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);

            loadPosts(nextPage++);
        }
    }, {
        root: null, rootMargin: "0px", threshold: 1
    }
);

const loadPosts = (page = 1) => {
    fetch(apiPosts)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let posts = data.results || [];
        data.forEach(post => {
            const card = document.createElement('div');
            card.innerHTML = `
            <h3>${post.title}</h3>
            <h4>${post.tags}</h4>
            <p>${post.body}</p>
            `;
            card.className = 'card';
            document.body.append(card);
            console.log(card);
        });
        const lastCard = document.querySelector('.card:last-child');

        if (lastCard) {
            infiniteObserver.observe(lastCard);
        }
    })
    .catch(console.error)
};

loadPosts();


// const apiPosts =
//   "https://dummyjson.com/posts?limit=150&skip=0&select=title,tags,body";

// const infiniteObserver = new IntersectionObserver(
//   ([entry], observer) => {
//     if (entry.isIntersecting) {
//       loadPosts();
//     }
//   },
//   { root: null, rootMargin: "0px", threshold: 1.0 }
// );

// const loadPosts = (page = 1) => {
//   fetch(apiPosts)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       let posts = data.results || [];
//       posts.forEach((post) => {
//         const card = document.createElement("div");
//         card.innerHTML = `
//           <h3>${post.title}</h3>
//           <h4>${post.tags}</h4>
//           <p>${post.body}</p>
//         `;
//         card.className = "card";
//         document.body.append(card);
//         console.log(card);
//       });
//     })
//     .catch(console.error);
// };

// loadPosts();

// const lastCard = document.querySelector(".card:last-child");
// if (lastCard) {
//   infiniteObserver.observe(lastCard);
// }


// "https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}"