window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('weather-toggle');
  const overlay = document.getElementById('weather-overlay');
  const closeBtn = document.getElementById('close-weather-overlay');

  console.log('Toggle Button found:', !!toggleBtn);
  console.log('Overlay found:', !!overlay);
  console.log('Close Button found:', !!closeBtn);

  if (toggleBtn && overlay) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.toggle('hidden');
    });
  }

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevents bubbling to outside click
      overlay.classList.add('hidden');
    });
  }

  document.addEventListener('click', (e) => {
    if (
      overlay &&
      !overlay.classList.contains('hidden') &&
      !overlay.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      overlay.classList.add('hidden');
    }
  });
});