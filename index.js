const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postsSection = document.querySelector(".posts-section");

posts.forEach((post) => {
  // console.log(post);
  const postTemplate = `
    <article id="post">
			<!-- user info | top -->
			<div class="post-header">
				<img class="avatar" src="${post.avatar}" />
				<div class="post-info">
					<h3 class="username">${post.name}</h3>
					<p class="location">${post.location}</p>
				</div>
			</div>
			<!-- image | middle -->
			<img class="post-image" src="${post.post}" />
			<!-- footer | bottom -->
			<div class="post-footer">
				<div class="post-actions">
					<img class="action-icon" src="images/icon-heart.png" />
					<img class="action-icon" src="images/icon-comment.png" />
					<img class="action-icon" src="images/icon-dm.png" />
				</div>
				<div class="post-stats">
					<p class="likes"><span>${post.likes}</span> likes</p>
					<p class="comments">
						<span class="user">${post.username}</span>
						<span class="message">${post.comment}</span>
					</p>
				</div>
			</div>
    </article>
  `;
  postsSection.innerHTML += postTemplate;
});
