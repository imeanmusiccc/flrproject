document.addEventListener('DOMContentLoaded', () => {
  const contactOverlay = document.getElementById('contactPopup');

  document.querySelectorAll('.buy_button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const merchPopup = document.getElementById('merchPopup');
      if (merchPopup) merchPopup.classList.remove('active');
      contactOverlay.classList.add('active');
    });
  });

  contactOverlay.addEventListener('click', (e) => {
    if (e.target === contactOverlay) contactOverlay.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') contactOverlay.classList.remove('active');
  });
});