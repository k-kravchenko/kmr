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

// JS for an accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const summary = item.querySelector('summary');
  const arrow = summary.querySelector('.arrow'); 

  summary.addEventListener('click', () => {
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.removeAttribute('open');
        otherItem.querySelector('.arrow').style.transform = 'rotate(0deg)';
      }
    });

    if (item.hasAttribute('open')) {
      arrow.style.transform = 'rotate(0deg)';
    } else {
      arrow.style.transform = 'rotate(180deg)';
    }
  });
});