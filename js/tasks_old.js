// Экранирование спецсимволов HTML для безопасного отображения C++ кода
function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  
  // Генерация разметки из JS-объекта
  function renderLesson() {
    document.getElementById('page-title').textContent = lessonData.title;
    document.getElementById('page-topic').textContent = `Тема: ${lessonData.topic}`;
    document.getElementById('page-footer').textContent = lessonData.footer;
  
    const container = document.getElementById('tasks-container');
    
    // Очищаем контейнер перед добавлением
    container.innerHTML = '';
  
    lessonData.tasks.forEach(task => {
      // Формируем список пунктов условия
      const listItems = task.conditions.map(item => `<li>${item}</li>`).join('');
  
      // Создаем карточку задачи
      const card = document.createElement('section');
      card.className = 'card';
      card.id = task.id;
  
      card.innerHTML = `
        <h2 class="task-header">
          <span>${task.title}</span>
          <span class="toggle-icon">▼</span>
        </h2>
        <div class="task-body">
          <div class="condition">
            <strong>Условие:</strong>
            <ol>${listItems}</ol>
          </div>
          <button type="button" class="btn-toggle-sol">Показать решение</button>
          <div class="solution" style="display: none;">
            <pre><code>${escapeHtml(task.solution)}</code></pre>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Обработка кликов (делегирование)
  document.addEventListener('click', function(e) {
    // Клик по заголовку задачи (раскрыть/свернуть)
    const header = e.target.closest('.task-header');
    if (header) {
      const card = header.closest('.card');
      const body = card.querySelector('.task-body');
      
      if (body.style.display === 'block') {
        body.style.display = 'none';
        card.classList.remove('active');
      } else {
        body.style.display = 'block';
        card.classList.add('active');
      }
      return;
    }
  
    // Клик по кнопке "Показать/Скрыть решение"
    if (e.target.classList.contains('btn-toggle-sol')) {
      const btn = e.target;
      const sol = btn.nextElementSibling;
      
      if (sol.style.display === 'block') {
        sol.style.display = 'none';
        btn.textContent = 'Показать решение';
      } else {
        sol.style.display = 'block';
        btn.textContent = 'Скрыть решение';
      }
    }
  });
  
  // Запуск при загрузке страницы
  document.addEventListener('DOMContentLoaded', renderLesson);