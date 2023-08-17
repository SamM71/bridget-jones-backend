document.getElementById("search-form").addEventListener("search", async (e) => {
  e.preventDefault();

  const searchedId = new FormData(e.target);

  const options = {
    
  }
// create variable with the data from the search bar
// Fetch entry with matching ID to search bar
// display the matching post



  const result = await fetch("http://localhost:3000/entries/:id", options);

  if (result.status == 201) {
      window.location.reload();
  }
})

