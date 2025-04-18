

window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('weather-toggle');
  const overlay = document.getElementById('weather-overlay');
  const closeBtn = document.getElementById('close-weather-overlay');

  if (toggleBtn && overlay) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.toggle('hidden');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
      });
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.add('hidden');
      }
    });
  }
});