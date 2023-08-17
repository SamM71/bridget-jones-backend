function createPostElement (data) {
  const post = document.createElement("div");
  post.className = "post";

  const header = document.createElement("h2");
  header.textContent = data["title"];
  header.className = "post-header";
  post.appendChild(header);

  const id = document.createElement("h3");
  id.textContent = `ID: ${data["id"]}`
  id.className = "post-id"
  post.appendChild(id)

  const category = document.createElement("h3")
  category.className = "post-category"
  category.textContent = `Category: ${data["category"]}`
  post.appendChild(category)




  return post;
}

document.getElementById("post-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const options = {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          title: form.get("title"),
          content: form.get("content"),
          category: form.get("category")
      })
  }

  const result = await fetch("http://localhost:3000/entries", options);

  if (result.status == 201) {
      window.location.reload();
  }
})


async function loadPosts () {
  const response = await fetch("http://localhost:3000/entries");

  if (response.status == 200) {
    const posts = await response.json()

    const container = document.getElementById("posts");

    posts.forEach(p => {
      const elem = createPostElement(p);
      container.appendChild(elem);
    })
  } else {
    window.location.assign("./index.html")
  }

}

loadPosts();

