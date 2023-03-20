async function renderArticle(articles) {
  const content = document.createElement("article");
  content.classList.add(`articles-${articles.id}`);

  const title = document.createElement("h2");
  title.classList.add(`article-title-${articles.id}`);
  title.innerText = articles.title;

  const author = document.createElement("h4");
  author.classList.add(`articles-author-${articles.id}`);
  author.innerText = articles.author;

  const conteudo = document.createElement("p");
  conteudo.classList.add(`articles-conteudo-${articles.id}`);
  conteudo.innerText = articles.content;

  content.append(title, author, conteudo);
  document.querySelector("#article").appendChild(content);
}

async function fatchArticle() {
  const request = await fetch("http://localhost:3000/articles").then((resp) =>
    resp.json()
  );
  request.forEach(renderArticle);
}
const form = document.querySelector("form");

addEventListener("DOMContentLoaded", () => {
  fatchArticle();
});

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const articleData = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#autor").value,
    content: document.querySelector("#content").value
  };

  const request = await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(articleData)
  });
  const saveArticles = await request.json();
  form.reset();
  renderArticle(saveArticles);
  console.log(articleData);
});
