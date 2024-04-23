const items = document.querySelectorAll('.pics');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(element => {
      element.classList.remove('selected');
    });
    item.classList.add('selected');
  });
});

function moveUp() {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement && selectedElement.previousElementSibling) {
    selectedElement.parentNode.insertBefore(selectedElement, selectedElement.previousElementSibling);
  }
}

function moveDown() {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement && selectedElement.nextElementSibling) {
    selectedElement.parentNode.insertBefore(selectedElement.nextElementSibling, selectedElement);
  }
}

function applyChanges() {
  const selectedElement = document.querySelector('.selected');
  const form = document.querySelector('.imageForm');

  const width = form.elements['width'].value;
  const height = form.elements['height'].value;
  const border = form.elements['border'].value;
  const altText = form.elements['altText'].value;

  selectedElement.style.width = width + 'px';
  selectedElement.style.height = height + 'px';
  selectedElement.style.borderWidth = border + 'px';

// Перевіряємо, чи існує зображення в контейнері
  const imgElement = selectedElement.querySelector('img');

  if (imgElement) {
    imgElement.alt = altText; // Змінюємо атрибут alt для зображення
  }
  else {
    selectedElement.setAttribute('data-alt', altText); // Зберігаємо альтернативний текст в атрибуті data-alt, якщо зображення відсутнє
  }
}

// Обробник подій кліку на всю сторінку
document.addEventListener('click', (event) => {
  if (!event.target.closest('.pics') && !event.target.matches('.arrow_up') && !event.target.matches('.arrow_down')) {
    items.forEach(element => {
      element.classList.remove('selected');
    });
  }
});