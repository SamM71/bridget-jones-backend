function createPostElement (data) {
  const post = document.createElement("div");
  post.className = "post";

  const header = document.createElement("div");
  header.textContent = data["title"];
  post.appendChild(header);

  const content = document.createElement("h2");
  content.textContent = data["content"];
  post.appendChild(content);

  return post;
}
