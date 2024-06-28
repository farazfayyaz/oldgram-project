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

const screen = document.getElementById('main')





for (let i = 0; i < posts.length; i++) {
    screen.innerHTML += `
        <section>
                
                <div class="post-top">
                    <img id="post-avatar" class="avatar" src="${posts[i].avatar}">
                    <span class="user-info">
                        <h3>${posts[i].name}</h3>
                        <p>${posts[i].location}</p>
                    </span>
                </div>
                
                <img class="post" src="${posts[i].post}" alt="${posts[i].name} self portrait">
                
                <div class="post-bottom">
                    <span class="post-icons">
                        <img id="like${i}" class="icon" src="images/icon-heart.png">
                        <img class="icon" src="images/icon-comment.png">
                        <img class="icon" src="images/icon-dm.png">
                    </span>
                    
                    <span class="post-info">
                        <h3><span id="likeDisplay${i}">${posts[i].likes}</span> likes</h3>
                        <p><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
                    </span>
                </div>
                
            </section>
    `
    
    
}

const likeBtn0 = document.getElementById('like0')
const likes0 = document.getElementById('likeDisplay0')

const likeBtn1 = document.getElementById('like1')
const likes1 = document.getElementById('likeDisplay1')

const likeBtn2 = document.getElementById('like2')
const likes2 = document.getElementById('likeDisplay2')


likeBtn0.addEventListener('dblclick', function () {
    likes0.textContent = posts[0].likes + 1
})

likeBtn1.addEventListener('dblclick', function () {
    likes1.textContent = posts[1].likes + 1
})

likeBtn2.addEventListener('dblclick', function () {
    likes2.textContent = posts[2].likes + 1
})