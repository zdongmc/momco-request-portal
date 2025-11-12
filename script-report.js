/**
 * MomCo Africa Post-Event Report Portal - JavaScript
 * Handles form validation, dynamic fields, and user interactions
 */

// Current language (default: English)
let currentLanguage = 'en';

// DOM elements
let reportForm;
let eventTypeSelect;
let groupLaunchResults;
let leadershipTrainingResults;
let groupCareResults;
let countrySelect;
let currencySelect;
let formMessage;
let photoUploadInput;
let documentUploadInput;
let photoPreviewContainer;
let documentPreviewContainer;

// File upload storage
let uploadedPhotos = [];
let uploadedDocuments = [];

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
    reportForm = document.getElementById('reportForm');
    eventTypeSelect = document.getElementById('eventType');
    groupLaunchResults = document.getElementById('groupLaunchResults');
    leadershipTrainingResults = document.getElementById('leadershipTrainingResults');
    groupCareResults = document.getElementById('groupCareResults');
    countrySelect = document.getElementById('country');
    currencySelect = document.getElementById('currency');
    formMessage = document.getElementById('formMessage');
    photoUploadInput = document.getElementById('photoUpload');
    documentUploadInput = document.getElementById('documentUpload');
    photoPreviewContainer = document.getElementById('photoPreview');
    documentPreviewContainer = document.getElementById('documentPreview');
}

/**
 * Attach event listeners
 */
function attachEventListeners() {
    // Event type change
    eventTypeSelect.addEventListener('change', handleEventTypeChange);

    // Country change (auto-select currency)
    countrySelect.addEventListener('change', handleCountryChange);

    // File upload handlers
    photoUploadInput.addEventListener('change', handlePhotoUpload);
    documentUploadInput.addEventListener('change', handleDocumentUpload);

    // Form submission
    reportForm.addEventListener('submit', handleFormSubmit);
}

/**
 * Initialize form state
 */
function initializeFormState() {
    // Hide all event-specific sections initially
    hideAllEventSpecificSections();
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
            groupLaunchResults.style.display = 'block';
            setFieldsRequired(groupLaunchResults, true);
            // Ministry agreements signed is required for group launch
            document.getElementById('ministryAgreementsSigned').setAttribute('required', '');
            break;

        case 'leadership-training':
            leadershipTrainingResults.style.display = 'block';
            setFieldsRequired(leadershipTrainingResults, true);
            break;

        case 'group-care':
            groupCareResults.style.display = 'block';
            setFieldsRequired(groupCareResults, true);
            break;

        case 'other':
            // No specific results section for "other"
            break;
    }
}

/**
 * Hide all event-specific sections
 */
function hideAllEventSpecificSections() {
    groupLaunchResults.style.display = 'none';
    leadershipTrainingResults.style.display = 'none';
    groupCareResults.style.display = 'none';

    // Clear required attributes
    setFieldsRequired(groupLaunchResults, false);
    setFieldsRequired(leadershipTrainingResults, false);
    setFieldsRequired(groupCareResults, false);
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

/**
 * Handle country selection
 */
function handleCountryChange(e) {
    const selectedCountry = e.target.value;

    if (selectedCountry && CURRENCY_MAP[selectedCountry]) {
        currencySelect.value = CURRENCY_MAP[selectedCountry];
    }
}

/**
 * Handle form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(reportForm);
    const data = {};

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Add metadata
    data.submittedAt = new Date().toISOString();
    data.reportMonth = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });

    // Add file upload information
    data.uploadedPhotos = uploadedPhotos.map(f => ({
        name: f.name,
        size: f.size,
        type: f.type
    }));
    data.uploadedDocuments = uploadedDocuments.map(f => ({
        name: f.name,
        size: f.size,
        type: f.type
    }));
    data.totalPhotoCount = uploadedPhotos.length;
    data.totalDocumentCount = uploadedDocuments.length;

    // Log form data (in production, this would send to backend)
    console.log('Report Data:', data);
    console.log('Uploaded Photos:', uploadedPhotos);
    console.log('Uploaded Documents:', uploadedDocuments);

    // Generate mock filename
    const filename = generateFilename(data);
    console.log('Generated Filename:', filename);

    // Show success message
    showFormMessage('success',
        `✓ Report submitted successfully!\n\nGenerated filename: ${filename}\n\nIn production, this would:\n• Generate a PDF with your report details\n• Save to Google Drive\n• Update the tracking spreadsheet\n• Send email notifications to GMD\n\nFor now, check the browser console to see your submitted data.`);

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Generate standardized filename for report
 */
function generateFilename(data) {
    const date = data.actualEventDate ? new Date(data.actualEventDate) : new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    const country = data.country || 'Unknown';
    // Use only first name in file naming convention
    const name = data.reporterFirstName || 'Unknown';

    let eventType = '';
    switch(data.eventType) {
        case 'group-launch':
            eventType = 'Group Launch Report';
            break;
        case 'leadership-training':
            eventType = 'Leadership Training Report';
            break;
        case 'group-care':
            eventType = data.groupVisited ? `Group Care Report - ${data.groupVisited}` : 'Group Care Report';
            break;
        case 'other':
            eventType = 'Other Report';
            break;
        default:
            eventType = 'Event Report';
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
 * Language switching functionality (simplified version)
 */
function initLanguage() {
    const savedLang = localStorage.getItem('momco-language') || 'en';
    currentLanguage = savedLang;

    updateLanguageButtons();

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    applyLanguage(currentLanguage);
}

function switchLanguage(lang) {
    if (!reportTranslations[lang]) {
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
    const t = reportTranslations[lang];
    if (!t) return;

    // Translate elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update footer
    const footer = document.querySelector('footer p');
    if (footer && t.footerText) {
        footer.textContent = t.footerText;
    }
}

/* ========================================
   File Upload Handlers
   ======================================== */

/**
 * Handle photo upload
 */
function handlePhotoUpload(e) {
    const files = Array.from(e.target.files);
    const maxFiles = 10;
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes

    // Validate number of files
    if (uploadedPhotos.length + files.length > maxFiles) {
        alert(`Maximum ${maxFiles} photos allowed. Currently have ${uploadedPhotos.length} photos.`);
        e.target.value = '';
        return;
    }

    // Process each file
    files.forEach(file => {
        // Validate file size
        if (file.size > maxSize) {
            alert(`${file.name} is too large. Maximum size is 5MB.`);
            return;
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert(`${file.name} is not an image file.`);
            return;
        }

        // Add to uploaded photos array
        uploadedPhotos.push(file);

        // Create preview
        createPhotoPreview(file, uploadedPhotos.length - 1);
    });

    // Clear input to allow re-selecting same file
    e.target.value = '';
}

/**
 * Create photo preview thumbnail
 */
function createPhotoPreview(file, index) {
    const reader = new FileReader();

    reader.onload = function(e) {
        const previewItem = document.createElement('div');
        previewItem.className = 'file-preview-item image';
        previewItem.dataset.index = index;

        const img = document.createElement('img');
        img.src = e.target.result;
        img.className = 'file-preview-thumbnail';
        img.alt = file.name;

        const nameSpan = document.createElement('span');
        nameSpan.className = 'file-preview-name';
        nameSpan.textContent = file.name;

        const sizeSpan = document.createElement('span');
        sizeSpan.className = 'file-preview-size';
        sizeSpan.textContent = formatFileSize(file.size);

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'file-preview-remove';
        removeBtn.innerHTML = '×';
        removeBtn.onclick = () => removePhoto(index);

        previewItem.appendChild(img);
        previewItem.appendChild(nameSpan);
        previewItem.appendChild(sizeSpan);
        previewItem.appendChild(removeBtn);

        photoPreviewContainer.appendChild(previewItem);
    };

    reader.readAsDataURL(file);
}

/**
 * Remove photo from upload list
 */
function removePhoto(index) {
    uploadedPhotos.splice(index, 1);
    renderPhotoPreview();
}

/**
 * Re-render photo preview after removal
 */
function renderPhotoPreview() {
    photoPreviewContainer.innerHTML = '';
    uploadedPhotos.forEach((file, index) => {
        createPhotoPreview(file, index);
    });
}

/**
 * Handle document upload
 */
function handleDocumentUpload(e) {
    const files = Array.from(e.target.files);
    const maxFiles = 5;
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes

    // Validate number of files
    if (uploadedDocuments.length + files.length > maxFiles) {
        alert(`Maximum ${maxFiles} documents allowed. Currently have ${uploadedDocuments.length} documents.`);
        e.target.value = '';
        return;
    }

    // Process each file
    files.forEach(file => {
        // Validate file size
        if (file.size > maxSize) {
            alert(`${file.name} is too large. Maximum size is 10MB.`);
            return;
        }

        // Validate file type
        const validTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];

        if (!validTypes.includes(file.type)) {
            alert(`${file.name} is not a valid document type. Please upload PDF, Word, or Excel files.`);
            return;
        }

        // Add to uploaded documents array
        uploadedDocuments.push(file);

        // Create preview
        createDocumentPreview(file, uploadedDocuments.length - 1);
    });

    // Clear input to allow re-selecting same file
    e.target.value = '';
}

/**
 * Create document preview
 */
function createDocumentPreview(file, index) {
    const previewItem = document.createElement('div');
    previewItem.className = 'file-preview-item';
    previewItem.dataset.index = index;

    const icon = document.createElement('span');
    icon.className = 'file-preview-icon';
    icon.textContent = getFileIcon(file.type);

    const nameSpan = document.createElement('span');
    nameSpan.className = 'file-preview-name';
    nameSpan.textContent = file.name;

    const sizeSpan = document.createElement('span');
    sizeSpan.className = 'file-preview-size';
    sizeSpan.textContent = formatFileSize(file.size);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'file-preview-remove';
    removeBtn.innerHTML = '×';
    removeBtn.onclick = () => removeDocument(index);

    previewItem.appendChild(icon);
    previewItem.appendChild(nameSpan);
    previewItem.appendChild(sizeSpan);
    previewItem.appendChild(removeBtn);

    documentPreviewContainer.appendChild(previewItem);
}

/**
 * Remove document from upload list
 */
function removeDocument(index) {
    uploadedDocuments.splice(index, 1);
    renderDocumentPreview();
}

/**
 * Re-render document preview after removal
 */
function renderDocumentPreview() {
    documentPreviewContainer.innerHTML = '';
    uploadedDocuments.forEach((file, index) => {
        createDocumentPreview(file, index);
    });
}

/**
 * Get file icon based on type
 */
function getFileIcon(fileType) {
    if (fileType === 'application/pdf') return '📄';
    if (fileType.includes('word')) return '📝';
    if (fileType.includes('excel') || fileType.includes('sheet')) return '📊';
    return '📎';
}

/**
 * Format file size for display
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
