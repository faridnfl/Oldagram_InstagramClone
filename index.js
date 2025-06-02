const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainContainer = document.querySelector("#main-container")
const like = document.querySelector("like-btn")

for(let i = 0; i < posts.length; i += 1) {
    mainContainer.innerHTML += `
        <section class="userProfile-container">
            <img  src="./${posts[i].avatar}" alt="Oldagram user profile"/>
            <div>
                <p class="user-name">${posts[i].name}</p>
                <p>${posts[i].location}</p>
            </div>
        </section>
        <section class="userPost-container">
            <img src="./${posts[i].post}" alt="User post on oldagram"/>
        </section>
        <section class="bottom-container">
            <div class="interaction-container">
                <img class="like-btn" data-index="${i}" src="./images/icon-heart.png" alt="">
                <img src="./images/icon-comment.png" alt="">
                <img src="./images/icon-dm.png" alt="">
            </div>
            <p class="bold" id="likes-${i}">${posts[i].likes} likes</p>
            <p><span class="bold">${posts[i].username}</span>${posts[i].comment}</p>
        </section>
    `
}

mainContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("like-btn")) {
        const idx = e.target.getAttribute("data-index")
        posts[idx].likes += 1
        document.getElementById(`likes-${idx}`).textContent = `${posts[idx].likes} likes`
    }
})