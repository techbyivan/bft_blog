const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
	getPosts();
};

const getPosts = () => {
	fetch(API_URL, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			buildPosts(data);
		});
};

const buildPosts = (blogPosts) => {
    let blogPostsContent = "";
    for (blogPosts of blogPosts) {
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
        const postImage = `${API_BASE_URL}${blogPost.post_image}`;
        blogPostsContent += ` 
        <div class="post">
					<div class="post-image" style="background-image: url(${postImage})"></div>
					<div class="post-content">
						<div class="post-date">${postDate}</div>
						<div class="post-title"><h4>${blogpost.title}</h4></div>
						<div class="post-text">
							${blogpost.content}
						</div>
					</div>
                </div>
        `
    }
    document.querySelector('.blog-post').innerHTML= 
};
