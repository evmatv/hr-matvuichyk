const articlesData = [
    {
        title: "Заголовок статьи 1",
        date: "2024-01-26",
        excerpt: "Краткое описание статьи 1...",
        content: "Полный текст статьи 1.  Здесь может быть много текста, изображений и т.д.", // для детальной страницы
        // возможно, ссылка на изображение
    },
    {
        title: "Заголовок статьи 2",
        date: "2024-01-25",
        excerpt: "Краткое описание статьи 2...",
        content: "Полный текст статьи 2.",
    },
    // ... другие статьи
];
// Функция для создания элемента статьи
function createArticleElement(article) {
const articleElement = document.createElement("article");
articleElement.classList.add("article");


<span class="hljs-keyword">const</span> title = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&quot;h3&quot;</span>);
title.<span class="hljs-property">textContent</span> = article.<span class="hljs-property">title</span>;
articleElement.<span class="hljs-title function_">appendChild</span>(title);

<span class="hljs-keyword">const</span> meta = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&quot;p&quot;</span>);
meta.<span class="hljs-property">classList</span>.<span class="hljs-title function_">add</span>(<span class="hljs-string">&quot;article-meta&quot;</span>);
meta.<span class="hljs-property">textContent</span> = <span class="hljs-string">`Опубликовано: <span class="hljs-subst">${article.date}</span>`</span>;
articleElement.<span class="hljs-title function_">appendChild</span>(meta);

<span class="hljs-keyword">const</span> excerpt = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&quot;p&quot;</span>);
excerpt.<span class="hljs-property">textContent</span> = article.<span class="hljs-property">excerpt</span>;
articleElement.<span class="hljs-title function_">appendChild</span>(excerpt);

<span class="hljs-keyword">const</span> readMoreLink = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&quot;a&quot;</span>);
readMoreLink.<span class="hljs-property">href</span> = <span class="hljs-string">&quot;#&quot;</span>; <span class="hljs-comment">//  В реальном проекте будет ссылка на детальную страницу статьи</span>
readMoreLink.<span class="hljs-property">classList</span>.<span class="hljs-title function_">add</span>(<span class="hljs-string">&quot;read-more&quot;</span>);
readMoreLink.<span class="hljs-property">textContent</span> = <span class="hljs-string">&quot;Читать далее&quot;</span>;
articleElement.<span class="hljs-title function_">appendChild</span>(readMoreLink);

<span class="hljs-keyword">return</span> articleElement;

}


//  Заполняем секцию статей
const articlesContainer = document.querySelector("#articles .article-container");


if (articlesContainer) {  // Проверка, что элемент существует
articlesData.forEach(article => {
const articleElement = createArticleElement(article);
articlesContainer.appendChild(articleElement);
});
}

