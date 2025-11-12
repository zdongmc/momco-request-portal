/**
 * MomCo Africa Event Request Portal - JavaScript
 * Handles form validation, dynamic fields, and user interactions
 */

// Current language (default: English)
let currentLanguage = 'en';

// Language switching functionality
function initLanguage() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('momco-language') || 'en';
    currentLanguage = savedLang;

    // Update button states
    updateLanguageButtons();

    // Add click listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Apply initial language
    applyLanguage(currentLanguage);
}

function switchLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not found`);
        return;
    }

    currentLanguage = lang;
    localStorage.setItem('momco-language', lang);
    document.documentElement.setAttribute('lang', lang);

    updateLanguageButtons();
    applyLanguage(lang);
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Translate elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    // Update footer
    const footer = document.querySelector('footer p');
    if (footer && t.footerText) {
        footer.textContent = t.footerText;
    }
}

function getTranslation(key) {
    return translations[currentLanguage]?.[key] || key;
}

function getAgendaTemplate(type) {
    return agendaTemplates[currentLanguage]?.[type] || '';
}

// Currency mapping by country
const CURRENCY_MAP = {
    'Benin': 'XOF',
    'Burkina Faso': 'XOF',
    'Côte d\'Ivoire': 'XOF',
    'DRC': 'USD',
    'East Uganda': 'UGX',
    'Ghana': 'GHS',
    'Kenya': 'KSH',
    'Libya': 'USD',
    'Mali': 'XOF',
    'Nigeria': 'NGN',
    'Rwanda': 'RWF',
    'South Africa': 'ZAR',
    'Tanzania': 'TZS',
    'Togo': 'XOF',
    'West Uganda': 'UGX',
    'Zambia': 'ZMW',
    'French Africa': 'XOF',
    'English Africa': 'USD',
    'Portuguese Africa': 'USD'
};

// DOM Elements
let eventTypeRadios;
let countrySelect;
let currencySelect;
let eventDetailsSection;
let agendaSection;
let budgetSection;
let groupLaunchFields;
let leadershipTrainingFields;
let groupCareFields;
let otherFields;
let requestForm;
let loadGroupLaunchTemplate;
let loadLeadershipTemplate;
let agendaTextarea;
let formMessage;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initializeElements();
    attachEventListeners();
    initializeFormState();
});

/**
 * Initialize DOM element references
 */
function initializeElements() {
    eventTypeRadios = document.querySelectorAll('input[name="eventType"]');
    countrySelect = document.getElementById('country');
    currencySelect = document.getElementById('currency');
    eventDetailsSection = document.getElementById('eventDetailsSection');
    agendaSection = document.getElementById('agendaSection');
    budgetSection = document.getElementById('budgetSection');
    groupLaunchFields = document.getElementById('groupLaunchFields');
    leadershipTrainingFields = document.getElementById('leadershipTrainingFields');
    groupCareFields = document.getElementById('groupCareFields');
    otherFields = document.getElementById('otherFields');
    requestForm = document.getElementById('requestForm');
    loadGroupLaunchTemplate = document.getElementById('loadGroupLaunchTemplate');
    loadLeadershipTemplate = document.getElementById('loadLeadershipTemplate');
    agendaTextarea = document.getElementById('agenda');
    formMessage = document.getElementById('formMessage');
}

/**
 * Attach event listeners
 */
function attachEventListeners() {
    // Event type change
    eventTypeRadios.forEach(radio => {
        radio.addEventListener('change', handleEventTypeChange);
    });

    // Country change
    countrySelect.addEventListener('change', handleCountryChange);

    // Template buttons
    loadGroupLaunchTemplate.addEventListener('click', function() {
        agendaTextarea.value = getAgendaTemplate('groupLaunch');
    });

    loadLeadershipTemplate.addEventListener('click', function() {
        agendaTextarea.value = getAgendaTemplate('leadershipTraining');
    });

    // Form submission
    requestForm.addEventListener('submit', handleFormSubmit);

    // Date validation
    const eventDateInput = document.getElementById('eventDate');
    const fundsNeededDateInput = document.getElementById('fundsNeededDate');

    eventDateInput.addEventListener('change', validateDates);
    fundsNeededDateInput.addEventListener('change', validateDates);

    // Name validation (first names only)
    const requesterNameInput = document.getElementById('requesterName');
    requesterNameInput.addEventListener('blur', validateRequesterName);
}

/**
 * Initialize form state
 */
function initializeFormState() {
    // Hide all event-specific sections initially
    hideAllEventSpecificSections();

    // Set today's date as minimum for date inputs
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('eventDate').setAttribute('min', today);
    document.getElementById('fundsNeededDate').setAttribute('min', today);
}

/**
 * Handle event type selection
 */
function handleEventTypeChange(e) {
    const selectedType = e.target.value;

    // Hide all event-specific sections first
    hideAllEventSpecificSections();

    // Show appropriate section based on selection
    switch(selectedType) {
        case 'group-launch':
            groupLaunchFields.style.display = 'block';
            showCommonSections();
            setFieldsRequired(groupLaunchFields, false); // Optional fields
            break;

        case 'leadership-training':
            leadershipTrainingFields.style.display = 'block';
            showCommonSections();
            setFieldsRequired(leadershipTrainingFields, false); // Optional fields
            break;

        case 'group-care':
            groupCareFields.style.display = 'block';
            showCommonSections();
            setGroupCareFieldsRequired();
            makeGroupCareBudgetOptional();
            break;

        case 'other':
            otherFields.style.display = 'block';
            showCommonSections();
            setFieldsRequired(otherFields, true);
            makeOtherFieldsAdjustments();
            break;
    }
}

/**
 * Show common sections (event details, agenda, budget)
 */
function showCommonSections() {
    eventDetailsSection.style.display = 'block';
    agendaSection.style.display = 'block';
    budgetSection.style.display = 'block';
}

/**
 * Hide all event-specific sections
 */
function hideAllEventSpecificSections() {
    groupLaunchFields.style.display = 'none';
    leadershipTrainingFields.style.display = 'none';
    groupCareFields.style.display = 'none';
    otherFields.style.display = 'none';
}

/**
 * Set required attribute for fields in a section
 */
function setFieldsRequired(section, isRequired) {
    const inputs = section.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        if (isRequired) {
            input.setAttribute('required', '');
        } else {
            input.removeAttribute('required');
        }
    });
}

/**
 * Set Group Care specific required fields
 */
function setGroupCareFieldsRequired() {
    const requiredFields = ['groupName', 'groupLeader', 'momsInGroup', 'statusExplanation'];
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) field.setAttribute('required', '');
    });

    // Status radio buttons
    const statusRadios = document.querySelectorAll('input[name="groupStatus"]');
    statusRadios.forEach(radio => radio.setAttribute('required', ''));
}

/**
 * Make Group Care budget fields optional
 */
function makeGroupCareBudgetOptional() {
    // Budget can be empty for monitoring-only Group Care
    document.getElementById('budget').removeAttribute('required');
    document.getElementById('amountRequested').removeAttribute('required');

    // Event date can be blank for monitoring
    document.getElementById('eventDate').removeAttribute('required');
    document.getElementById('fundsNeededDate').removeAttribute('required');
}

/**
 * Make adjustments for "Other" event type
 */
function makeOtherFieldsAdjustments() {
    // Event date is optional for operational expenses
    document.getElementById('eventDate').removeAttribute('required');
    document.getElementById('participantsExpected').removeAttribute('required');

    // Agenda is optional for operational requests
    document.getElementById('agenda').removeAttribute('required');
}

/**
 * Handle country selection
 */
function handleCountryChange(e) {
    const selectedCountry = e.target.value;

    if (selectedCountry && CURRENCY_MAP[selectedCountry]) {
        const currency = CURRENCY_MAP[selectedCountry];
        currencySelect.value = currency;

        // Visual feedback
        currencySelect.style.backgroundColor = '#f0f9ff';
        setTimeout(() => {
            currencySelect.style.backgroundColor = '';
        }, 1000);
    }
}

/**
 * Validate dates (funds needed date should be before event date)
 */
function validateDates() {
    const eventDate = document.getElementById('eventDate').value;
    const fundsNeededDate = document.getElementById('fundsNeededDate').value;

    if (eventDate && fundsNeededDate) {
        const eventDateTime = new Date(eventDate);
        const fundsNeededDateTime = new Date(fundsNeededDate);
        const daysDifference = Math.floor((eventDateTime - fundsNeededDateTime) / (1000 * 60 * 60 * 24));

        if (fundsNeededDateTime >= eventDateTime) {
            showValidationError('fundsNeededDate', 'Funds needed date must be before the event date');
            return false;
        } else if (daysDifference < 14) {
            showValidationWarning('fundsNeededDate',
                `Warning: Only ${daysDifference} days between funding and event. Recommended: 2-3 weeks minimum.`);
        } else {
            clearValidationMessage('fundsNeededDate');
        }
    }

    return true;
}

/**
 * Validate requester name (first names only)
 */
function validateRequesterName() {
    const nameInput = document.getElementById('requesterName');
    const name = nameInput.value.trim();

    // Allow compound names like "Faith Rose" but warn about full names
    const words = name.split(/\s+/);

    if (words.length > 2) {
        showValidationWarning('requesterName',
            'Typically only first name is needed (compound names like "Faith Rose" are OK)');
    } else {
        clearValidationMessage('requesterName');
    }
}

/**
 * Show validation error
 */
function showValidationError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const existingError = field.parentElement.querySelector('.validation-error');

    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'validation-error';
    errorDiv.style.color = 'var(--danger-color)';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;

    field.parentElement.appendChild(errorDiv);
    field.style.borderColor = 'var(--danger-color)';
}

/**
 * Show validation warning
 */
function showValidationWarning(fieldId, message) {
    const field = document.getElementById(fieldId);
    const existingWarning = field.parentElement.querySelector('.validation-warning');

    if (existingWarning) {
        existingWarning.remove();
    }

    const warningDiv = document.createElement('div');
    warningDiv.className = 'validation-warning';
    warningDiv.style.color = 'var(--warning-color)';
    warningDiv.style.fontSize = '0.85rem';
    warningDiv.style.marginTop = '4px';
    warningDiv.textContent = message;

    field.parentElement.appendChild(warningDiv);
    field.style.borderColor = 'var(--warning-color)';
}

/**
 * Clear validation message
 */
function clearValidationMessage(fieldId) {
    const field = document.getElementById(fieldId);
    const error = field.parentElement.querySelector('.validation-error');
    const warning = field.parentElement.querySelector('.validation-warning');

    if (error) error.remove();
    if (warning) warning.remove();
    field.style.borderColor = '';
}

/**
 * Handle form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();

    // Validate dates
    if (!validateDates()) {
        showFormMessage('error', 'Please fix the date validation errors before submitting.');
        return;
    }

    // Get form data
    const formData = new FormData(requestForm);
    const data = {};

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        if (key === 'trainingTopics') {
            // Handle multiple checkboxes
            if (!data[key]) data[key] = [];
            data[key].push(value);
        } else {
            data[key] = value;
        }
    }

    // Add metadata
    data.submittedAt = new Date().toISOString();
    data.requestMonth = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });

    // Log form data (in production, this would send to backend)
    console.log('Form Data:', data);

    // Generate mock filename
    const filename = generateFilename(data);
    console.log('Generated Filename:', filename);

    // Show success message
    showFormMessage('success',
        `✓ Request submitted successfully!\n\nGenerated filename: ${filename}\n\nIn production, this would:\n• Generate a PDF with your request details\n• Save to Google Drive\n• Update the tracking spreadsheet\n• Send email notifications to GMD and you\n\nFor now, check the browser console to see your submitted data.`);

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Generate standardized filename
 */
function generateFilename(data) {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    const country = data.country || 'Unknown';
    const name = data.requesterName || 'Unknown';

    let eventType = '';
    switch(data.eventType) {
        case 'group-launch':
            eventType = 'Group Launch';
            break;
        case 'leadership-training':
            eventType = 'Leadership Training';
            break;
        case 'group-care':
            eventType = data.groupName ? `Group Care - ${data.groupName}` : 'Group Care';
            break;
        case 'other':
            const purpose = data.purposeDescription ?
                data.purposeDescription.split('\n')[0].substring(0, 30) : 'Other';
            eventType = `Other - ${purpose}`;
            break;
    }

    return `${month}. ${monthName} ${year} - ${country} - ${name} - ${eventType}.pdf`;
}

/**
 * Show form message
 */
function showFormMessage(type, message) {
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    formMessage.innerHTML = message.replace(/\n/g, '<br>');
}

/**
 * Utility: Format currency
 */
function formatCurrency(amount, currency) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount) + ' ' + currency;
}

/**
 * Utility: Calculate days until event
 */
function calculateDaysUntil(dateString) {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
