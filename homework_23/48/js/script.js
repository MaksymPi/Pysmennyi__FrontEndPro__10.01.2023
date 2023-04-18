const searchInput = document.getElementById("search__input");
const btnSearch = document.getElementById("btn__search");
const postList = document.getElementById("post__list");
const btnComments = document.getElementById("btn__comments");
const commentsList = document.getElementById("comments__list");


//-------------------Posts


const renderPosts = (posts) => {
  postList.innerHTML = "";
  posts.forEach((post) => {
    const divList = document.createElement("div.list");
    divList.innerHTML = `
      <h2 class="post__title">${post.title}</h2>
      <p>${post.body}</p>
    `;
    btnComments.style.display = 'block'
    postList.appendChild(divList);
  });
};

const fetchPost = async (idPost) => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${idPost}`;
    const response = await fetch(apiUrl)
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}

btnSearch.addEventListener("click", () => {
  const idPost = searchInput.value;
  if (idPost >= 1 && idPost <= 100) {
    fetchPost(idPost)
      .then((posts) => {
        renderPosts([posts]);
      })
      .catch((error) => {
        console.log(error);
      });
  }else {
    alert(`Please enter post ID (from 1 to 100)!`);
  }
  commentsList.innerHTML = ''
});




//-------------------Comments

const renderComments = (comments) => {
  commentsList.innerHTML = "";
  comments.forEach((comment) => {
    const divListComments = document.createElement("div.list__comments");
    divListComments.innerHTML = `
      <h2 > ${comment.email}</h2>
      <p>${comment.body}</p>
    `;
    commentsList.appendChild(divListComments);
  });
};


const fetchComments = async (idComments) => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/comments/${idComments}`;
    const response = await fetch(apiUrl)
    const comment = await response.json();
    return comment;
  } catch (error) {
    console.error(error);
  }
}

btnComments.addEventListener("click", () => {
  const idComments = searchInput.value;
    fetchComments(idComments)
      .then((comment) => [comment])
      .then((comments) => {
        renderComments(comments);
      })
      .catch((error) => {
        console.log(error);
      });

});



