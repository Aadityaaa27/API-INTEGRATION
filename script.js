
const apiKey = "1149d175be684cd8939127f817d7964f";


const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;


fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        displayNews(data.articles);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });


function displayNews(articles) {
    const newsContainer = document.getElementById("news-container");

    if (articles.length === 0) {
        newsContainer.innerHTML = "<p>No news articles found.</p>";
        return;
    }

    let newsHTML = "";
    articles.forEach(article => {
        newsHTML += `
            <div class="news-item">
                <h2>${article.title}</h2>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        `;
    });

    newsContainer.innerHTML = newsHTML;
}