// Подключаем marked.js из CDN
const markedScript = document.createElement('script');
markedScript.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
markedScript.onload = initializeBlog; // Вызываем функцию инициализации после загрузки marked.js
document.head.appendChild(markedScript);

// Список ваших статей. Это ваш "индекс" статей.
// Добавляйте новые статьи сюда!
const articlesConfig = [
    {
        id: 'hello-world',
        title: 'Привет, Мир! Моя первая статья',
        date: '2025-06-13',
        author: 'Ваше Имя',
        filename: 'hello-world.md' // Файл должен находиться в папке articles/
    },
    {
        id: 'about-this-blog',
        title: 'О моем простом блоге',
        date: '2025-06-14',
        author: 'Ваше Имя',
        filename: 'about-this-blog.md' // Файл должен находиться в папке articles/
    }
    // Добавьте больше статей сюда
];

function initializeBlog() {
    const appContainer = document.getElementById('app');
    const articlesListContainer = document.getElementById('articles-list');

    // Функция для загрузки и отображения списка статей
    function displayArticlesList() {
        if (!articlesListContainer) return; // Убедиться, что элемент существует

        articlesListContainer.innerHTML = ''; // Очищаем список

        // Сортируем статьи по дате (от новой к старой)
        const sortedArticles = [...articlesConfig].sort((a, b) => new Date(b.date) - new Date(a.date));

        sortedArticles.forEach(article => {
            const articlePreview = document.createElement('div');
            articlePreview.className = 'article-preview';
            articlePreview.innerHTML = `
                <h3><a href="#article-${article.id}">${article.title}</a></h3>
                <p class="article-meta">Опубликовано: ${article.date} | Автор: ${article.author}</p>
            `;
            articlesListContainer.appendChild(articlePreview);
        });
    }

    // Функция для загрузки и отображения одной статьи
    async function displayArticle(articleId) {
        const article = articlesConfig.find(a => a.id === articleId);

        if (!article) {
            appContainer.innerHTML = '<h2>Статья не найдена!</h2><p><a href="/">На главную</a></p>';
            return;
        }

        try {
            const response = await fetch(`articles/${article.filename}`);
            if (!response.ok) {
                throw new Error(`Не удалось загрузить статью: ${response.statusText}`);
            }
            const markdownContent = await response.text();

            // Конвертируем Markdown в HTML
            const htmlContent = marked.parse(markdownContent);

            appContainer.innerHTML = `
                <div class="full-article">
                    <h2>${article.title}</h2>
                    <p class="article-meta">Опубликовано: ${article.date} | Автор: ${article.author}</p>
                    <div class="markdown-content">${htmlContent}</div>
                    <p><a href="/">← Назад к списку статей</a></p>
                </div>
            `;
        } catch (error) {
            console.error('Ошибка при загрузке статьи:', error);
            appContainer.innerHTML = '<h2>Ошибка загрузки статьи</h2><p>Пожалуйста, попробуйте позже.</p><p><a href="/">На главную</a></p>';
        }
    }

    // Обработка маршрутизации по хешу
    function handleLocationHash() {
        const hash = window.location.hash;
        if (hash.startsWith('#article-')) {
            const articleId = hash.substring(9); // Удаляем '#article-'
            displayArticle(articleId);
        } else {
            // Если хеша нет или он не относится к статье, показываем список
            appContainer.innerHTML = `
                <h2>Последние статьи</h2>
                <div id="articles-list">
                    <p>Загрузка статей...</p>
                </div>
            `;
            // Пересоздаем ссылку на articlesListContainer, так как DOM мог измениться
            const updatedArticlesListContainer = document.getElementById('articles-list');
            if (updatedArticlesListContainer) {
                displayArticlesList();
            }
        }
    }

    // Слушаем изменения хеша в URL
    window.addEventListener('hashchange', handleLocationHash);

    // Вызываем при первой загрузке страницы
    handleLocationHash();
}
