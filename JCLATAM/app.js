// Asegúrate de que este código esté enlazado y se ejecute correctamente
document.addEventListener('DOMContentLoaded', function() {
    const changeLanguageButton = document.getElementById('changeLanguageButton');
    const currentLanguage = document.getElementById('currentLanguage');
    
    // Definimos un estado inicial
    let isEnglish = true;
    
    changeLanguageButton.addEventListener('click', function() {
        const elementsToTranslate = document.querySelectorAll('[data-translation]');
        elementsToTranslate.forEach(element => {
            const text = element.getAttribute('data-translation');
            element.innerText = isEnglish ? text : translations[text];
        });
        
        currentLanguage.innerText = isEnglish ? 'Idioma: Inglés' : 'Idioma: Español';
        isEnglish = !isEnglish;
    });
});

document.getElementById('titulo').textContent = languageData[id][elementId];


// Definimos las traducciones
const translations = {
    'Are you looking to optimize processes in your company?': '¿Estás buscando optimizar procesos en tu empresa?',
    // ... Añade todas las traducciones aquí
};
