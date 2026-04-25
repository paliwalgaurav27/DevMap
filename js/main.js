/*
  File: js/main.js
  Purpose: Global interactions and popup modal behavior for DevMap.
  Author: Placeholder
*/

// Execute immediately to reduce FOUC since script is loaded at the end of body
const currentTheme = localStorage.getItem('devmap-theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Setup
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('devmap-theme', 'dark');
        themeToggle.textContent = '☀️';
      } else {
        localStorage.setItem('devmap-theme', 'light');
        themeToggle.textContent = '🌙';
      }
    });
  }

  const popupOverlay = document.getElementById('popup-overlay');
  const popupModal = document.getElementById('popup-modal');
  const popupClose = document.getElementById('popup-close');
  const popupContent = document.getElementById('popup-content');

  // Check if we are on a page with a popup
  if (!popupOverlay || !popupModal || !popupClose || !popupContent) return;

  function openPopup(contentHTML) {
    popupContent.innerHTML = contentHTML;
    popupOverlay.classList.add('active');
    popupModal.classList.add('active');
    // Basic accessibility focus
    popupClose.focus();
  }

  function closePopup() {
    popupOverlay.classList.remove('active');
    popupModal.classList.remove('active');
  }

  popupClose.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', closePopup);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupModal.classList.contains('active')) {
      closePopup();
    }
  });

  // Expose to global scope for roadmap.js to use
  window.DevMap = window.DevMap || {};
  window.DevMap.openPopup = openPopup;
});
