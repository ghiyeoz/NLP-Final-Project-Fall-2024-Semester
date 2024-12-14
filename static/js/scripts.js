document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  const recommendationsDiv = document.getElementById("recommendations");

  // Clear previous results
  resultsDiv.innerHTML = "";
  recommendationsDiv.innerHTML = "";

  // Initially hide recommendations
  recommendationsDiv.style.display = "none";

  if (!query) return;

  // Search in the dataset
  const results = dataset.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  if (results.length > 0) {
    resultsDiv.innerHTML = `<h3>Search Results</h3>`;
    results.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("search-result-item");
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Genres:</strong> ${item.genre}</p>
        <p><strong>Type:</strong> ${item.type}</p>
        <p><strong>Rating:</strong> ${item.rating}</p>
        <p><strong>Episodes:</strong> ${item.episodes}</p>
      `;

      // Add event listener to show recommendations for the same genre
      div.addEventListener("click", () => {
        showRecommendationsByGenre(item.genre);
      });

      resultsDiv.appendChild(div);
    });
  } else {
    resultsDiv.textContent = "No results found.";
  }
});

// Function to show recommendations based on genre
function showRecommendationsByGenre(genre) {
  const resultsDiv = document.getElementById("results");
  const recommendationsDiv = document.getElementById("recommendations");

  // Hide search results
  resultsDiv.style.display = "none";

  // Show recommendations
  recommendationsDiv.style.display = "grid";

  recommendationsDiv.innerHTML = `<h3>Recommendations for Genre: ${genre}</h3>`;

  // Filter the dataset by the selected genre
  const recommendations = dataset.filter(
    (item) => item.genre.includes(genre)
  );

  recommendations.forEach((item) => {
    const recDiv = document.createElement("div");
    recDiv.classList.add("recommendations-item");
    recDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Genres:</strong> ${item.genre}</p>
      <p><strong>Type:</strong> ${item.type}</p>
      <p><strong>Rating:</strong> ${item.rating}</p>
      <p><strong>Episodes:</strong> ${item.episodes}</p>
    `;
    recommendationsDiv.appendChild(recDiv);
  });
}
