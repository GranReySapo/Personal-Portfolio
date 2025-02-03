document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.getElementById('language-selector');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
  
    function loadLanguage(lang) {
      fetch(`lang/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
          elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[key];
          });
        });
    }
  
    languageSelector.addEventListener('change', function () {
      const selectedLanguage = this.value;
      loadLanguage(selectedLanguage);
    });
  
    loadLanguage('en');
  });