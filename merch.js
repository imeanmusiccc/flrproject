document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('merchPopup');
  const popupImg = document.getElementById('popupPhoto');
  const popupName = document.getElementById('popupName');
  const popupPrice = document.getElementById('popupPrice');
  const popupDesc = document.getElementById('popupDesc');

  let popupImages  = [];
  let popupCurrent = 0;

  const merchData = {
    'img/jacket1.png': { desc: 'Практичная ветровка для прогулок, путешествий и новых встреч. Продуманный комфорт на каждый день в фирменной эстетике FLARE. Для тех, кто выбирает свой путь осознанно.' },
    'img/cap1.png': { desc: 'Минималистичная кепка для повседневных маршрутов и новых встреч. Небольшой акцент, который делает образ завершённым.' },
    'img/shirt1.png': { desc: 'Лёгкая рубашка для тех, кто выбирает быть собой. Создана с вниманием к деталям и напоминает, что лучшие знакомства начинаются с уверенности в себе.' },
    'img/bag1.png': { desc: 'Шоппер для всего, что сопровождает вас на пути к новым впечатлениям. Вместительный, практичный и созданный с заботой о деталях.' },
    'img/tshirt1.png': { desc: 'Базовая футболка, созданная для лёгкости и свободы. Универсальная вещь на каждый день и каждую новую историю.' },
    'img/hoodie1.png': { desc: 'Мягкое худи, в которое хочется возвращаться снова и снова. Комфорт, тепло и ощущение, что вы находитесь именно там, где должны быть.' }
  };

  document.querySelectorAll('.merch-card').forEach(card => {
    const img = card.querySelector('.merch-card_photo');
    const images = img.dataset.images.split(',');

    card.querySelector('.arrow-left').onclick = (e) => {
      e.stopPropagation();
      img.dataset.current = (parseInt(img.dataset.current) - 1 + images.length) % images.length;
      img.src = images[img.dataset.current];
    };

    card.querySelector('.arrow-right').onclick = (e) => {
      e.stopPropagation();
      img.dataset.current = (parseInt(img.dataset.current) + 1) % images.length;
      img.src = images[img.dataset.current];
    };

    card.querySelector('.merch-card_image-wrap').addEventListener('click', () => {
      openPopup(card);
    });
  });

  function openPopup(card) {
    const cardImg = card.querySelector('.merch-card_photo');
    const images = cardImg.dataset.images.split(',');
    const data = merchData[images[0]] || {};

    popupImages = images;
    popupCurrent = parseInt(cardImg.dataset.current);

    popupImg.src = cardImg.src;
    popupName.textContent = card.querySelector('.merch-card_name').textContent;
    popupPrice.textContent = card.querySelector('.merch-card_price').textContent;
    popupDesc.textContent = data.desc || '';

    overlay.classList.add('active');
  }

  function closePopup() {
    overlay.classList.remove('active');
  }

  function popupGo(dir) {
    popupCurrent = (popupCurrent + dir + popupImages.length) % popupImages.length;
    popupImg.src = popupImages[popupCurrent];
  }

  document.getElementById('popupArrowLeft').onclick  = () => popupGo(-1);
  document.getElementById('popupArrowRight').onclick = () => popupGo(1);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePopup();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
  });
});