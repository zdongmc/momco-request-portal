/**
 * Language Support Module
 * Handles switching between English and French
 */

let currentLanguage = 'en';

// Initialize language support
function initLanguageSupport() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('momco-language') || 'en';
    setLanguage(savedLang);

    // Add click listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// Set the current language
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not found`);
        return;
    }

    currentLanguage = lang;

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Save preference
    localStorage.setItem('momco-language', lang);

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Translate all elements
    translatePage(lang);
}

// Translate the entire page
function translatePage(lang) {
    const t = translations[lang];

    // Translate elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            element.setAttribute('placeholder', t[key]);
        }
    });

    // Update specific form elements
    updateFormTranslations(t);
}

// Update form-specific translations
function updateFormTranslations(t) {
    // Update footer
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = t.footerText;

    // Update form section headings and specific texts not covered by data-i18n
    // This ensures dynamic content is also translated
}

// Get current translation
function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

// Export for use in other scripts
window.i18n = {
    init: initLanguageSupport,
    setLanguage: setLanguage,
    getTranslation: getTranslation,
    getCurrentLanguage: () => currentLanguage,
    getAgendaTemplate: (type) => agendaTemplates[currentLanguage][type]
};
