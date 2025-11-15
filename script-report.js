/**
 * MomCo Africa Post-Event Report Portal - JavaScript
 * Handles form validation, dynamic fields, and user interactions
 */

// Current language (default: English)
let currentLanguage = 'en';

// DOM elements
let reportForm;
let eventTypeSelect;
let requesterSelect;
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

// Mock data for open event requests (in production, this would come from backend/Google Sheets)
// Organized by requester name for easy lookup
const MOCK_EVENT_REQUESTS = {
    'DRC Requester 1': [
        {
            id: 'req_001',
            eventType: 'group-launch',
            location: 'Kinshasa',
            venue: 'Community Center',
            eventDate: '2025-03-15',
            participantsExpected: 50,
            amountRequested: 220,
            currency: 'USD',
            country: 'DRC',
            requester: 'DRC Requester 1'
        }
    ],
    'Kenya Requester 1': [
        {
            id: 'req_002',
            eventType: 'leadership-training',
            location: 'Nairobi',
            venue: 'Faith Community Church',
            eventDate: '2025-04-10',
            participantsExpected: 30,
            amountRequested: 25000,
            currency: 'KSH',
            country: 'Kenya',
            requester: 'Kenya Requester 1'
        },
        {
            id: 'req_003',
            eventType: 'group-launch',
            location: 'Kisumu',
            venue: 'Regional Conference Hall',
            eventDate: '2025-04-20',
            participantsExpected: 45,
            amountRequested: 30000,
            currency: 'KSH',
            country: 'Kenya',
            requester: 'Kenya Requester 1'
        }
    ]
};

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
    requesterSelect = document.getElementById('requesterName');
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
    // Event selection change (pre-populate form)
    eventTypeSelect.addEventListener('change', handleEventSelectionChange);

    // Requester change (populate event dropdown)
    requesterSelect.addEventListener('change', handleRequesterChange);

    // Country change (auto-select currency and populate requesters)
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
 * Handle requester selection - populate event dropdown with their open requests
 */
async function handleRequesterChange(e) {
    const selectedRequester = e.target.value;
    const selectedCountry = countrySelect.value;
    const t = reportTranslations[currentLanguage];

    // Clear event dropdown
    eventTypeSelect.innerHTML = '';

    if (!selectedRequester) {
        // No requester selected
        eventTypeSelect.disabled = true;
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = t.selectRequesterFirst || '-- Select Requester First --';
        eventTypeSelect.appendChild(defaultOption);
        return;
    }

    // Show loading state
    eventTypeSelect.disabled = true;
    const loadingOption = document.createElement('option');
    loadingOption.value = '';
    loadingOption.textContent = 'Loading requests...';
    eventTypeSelect.appendChild(loadingOption);

    try {
        // Fetch open requests from backend
        const url = `${API_CONFIG.baseURL}?action=${API_CONFIG.endpoints.getOpenRequests}&country=${encodeURIComponent(selectedCountry)}&requester=${encodeURIComponent(selectedRequester)}`;
        const response = await fetch(url);
        const result = await response.json();

        // Clear loading state
        eventTypeSelect.innerHTML = '';

        if (!result.success) {
            throw new Error(result.message);
        }

        // Enable event dropdown
        eventTypeSelect.disabled = false;

        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = t.selectEvent || '-- Select Event --';
        eventTypeSelect.appendChild(defaultOption);

        const openRequests = result.data || [];

        if (openRequests.length === 0) {
            const noRequestsOption = document.createElement('option');
            noRequestsOption.value = '';
            noRequestsOption.textContent = 'No open requests found';
            noRequestsOption.disabled = true;
            eventTypeSelect.appendChild(noRequestsOption);
            return;
        }

        // Populate dropdown with open requests
        openRequests.forEach(request => {
            const option = document.createElement('option');
            option.value = request.id;

            // Format: Event Type - Location - Date
            const eventTypeLabel = request.eventType === 'group-launch' ? 'Group Launch' :
                                   request.eventType === 'leadership-training' ? 'Leadership Training' :
                                   'Group Care';
            const dateFormatted = request.eventDate ? new Date(request.eventDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }) : 'Date TBD';

            const location = request.location || 'Location TBD';
            option.textContent = `${eventTypeLabel} - ${location} - ${dateFormatted}`;
            option.dataset.requestData = JSON.stringify(request);

            eventTypeSelect.appendChild(option);
        });

    } catch (error) {
        console.error('Error fetching open requests:', error);
        eventTypeSelect.innerHTML = '';
        eventTypeSelect.disabled = false;

        const errorOption = document.createElement('option');
        errorOption.value = '';
        errorOption.textContent = 'Error loading requests';
        errorOption.disabled = true;
        eventTypeSelect.appendChild(errorOption);

        // Fallback to mock data for development
        console.log('Falling back to mock data');
        useMockData(selectedRequester, t);
    }
}

/**
 * Fallback to mock data (for development/testing)
 */
function useMockData(selectedRequester, t) {
    const openRequests = MOCK_EVENT_REQUESTS[selectedRequester] || [];

    eventTypeSelect.disabled = false;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = t.selectEvent || '-- Select Event --';
    eventTypeSelect.appendChild(defaultOption);

    openRequests.forEach(request => {
        const option = document.createElement('option');
        option.value = request.id;

        const eventTypeLabel = request.eventType === 'group-launch' ? 'Group Launch' :
                               request.eventType === 'leadership-training' ? 'Leadership Training' :
                               'Group Care';
        const dateFormatted = new Date(request.eventDate).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        option.textContent = `${eventTypeLabel} - ${request.location} - ${dateFormatted}`;
        option.dataset.requestData = JSON.stringify(request);

        eventTypeSelect.appendChild(option);
    });
}

/**
 * Handle event selection - pre-populate form with request data
 */
function handleEventSelectionChange(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];

    if (!selectedOption.dataset.requestData) {
        // No event selected, hide all sections
        hideAllEventSpecificSections();
        return;
    }

    // Parse the request data
    const requestData = JSON.parse(selectedOption.dataset.requestData);

    // Pre-populate form fields with request data
    prepopulateFormFields(requestData);

    // Show appropriate event-specific section based on event type
    showEventSpecificSection(requestData.eventType);
}

/**
 * Pre-populate form fields with data from the selected request
 */
function prepopulateFormFields(requestData) {
    // Pre-populate Event Outcomes section
    // Note: actualEventDate is initially set to the proposed date, user can update
    if (document.getElementById('actualEventDate')) {
        document.getElementById('actualEventDate').value = requestData.eventDate || '';
    }

    if (document.getElementById('actualLocation')) {
        document.getElementById('actualLocation').value = requestData.location || '';
    }

    // Pre-populate expected participants (user will update with actual)
    if (document.getElementById('actualParticipants')) {
        document.getElementById('actualParticipants').value = requestData.participantsExpected || '';
    }

    // Pre-populate Budget section
    if (document.getElementById('amountReceived')) {
        document.getElementById('amountReceived').value = requestData.amountRequested || '';
    }

    if (document.getElementById('currency')) {
        document.getElementById('currency').value = requestData.currency || '';
    }
}

/**
 * Show the appropriate event-specific section based on event type
 */
function showEventSpecificSection(eventType) {
    // Hide all first
    hideAllEventSpecificSections();

    // Show appropriate section
    switch(eventType) {
        case 'group-launch':
            groupLaunchResults.style.display = 'block';
            setFieldsRequired(groupLaunchResults, true);
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
    }
}

/**
 * Handle event type selection (legacy - kept for compatibility)
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
    'Angola': 'USD',
    'Benin': 'XOF',
    'Burkina Faso': 'XOF',
    'Côte d\'Ivoire': 'XOF',
    'DRC': 'USD',
    'Ghana': 'GHS',
    'Kenya': 'KSH',
    'Libya': 'USD',
    'Mali': 'XOF',
    'Nigeria': 'NGN',
    'North Africa': 'USD',
    'Rwanda': 'RWF',
    'South Africa': 'ZAR',
    'Tanzania': 'TZS',
    'Togo': 'XOF',
    'Uganda (East)': 'UGX',
    'Uganda (West)': 'UGX',
    'Zambia': 'ZMW'
};

/**
 * Handle country selection
 */
function handleCountryChange(e) {
    const selectedCountry = e.target.value;

    // Populate requester dropdown based on country
    // Uses shared function from country-requester-data.js
    const requesterSelect = document.getElementById('requesterName');
    const t = reportTranslations[currentLanguage];
    populateRequesterDropdown(selectedCountry, requesterSelect, t);

    if (selectedCountry && CURRENCY_MAP[selectedCountry]) {
        currencySelect.value = CURRENCY_MAP[selectedCountry];
    }
}

/**
 * Handle form submission
 */
async function handleFormSubmit(e) {
    e.preventDefault();

    // Show loading message
    showFormMessage('info', 'Submitting report... Please wait.');

    // Get form data
    const formData = new FormData(reportForm);
    const data = { action: 'submitReport' };

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

    // Get the selected event's request ID from the dropdown
    const selectedOption = eventTypeSelect.options[eventTypeSelect.selectedIndex];
    if (selectedOption && selectedOption.value) {
        data.requestId = selectedOption.value;
    }

    // Log form data for debugging
    console.log('Submitting report:', data);
    console.log('Uploaded Photos:', uploadedPhotos);
    console.log('Uploaded Documents:', uploadedDocuments);

    try {
        // Send to backend
        const response = await fetch(API_CONFIG.baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            // Generate filename
            const filename = result.data.filename || generateFilename(data);

            // Show success message
            showFormMessage('success',
                `✓ Report submitted successfully!\n\nGenerated filename: ${filename}\n\nYour report has been:\n• Saved to the tracking spreadsheet\n• Linked to your original request\n• Files uploaded to Google Drive\n• GMD has been notified\n\nThank you for completing your report!`);

            // Reset form and file uploads after successful submission
            setTimeout(() => {
                reportForm.reset();
                uploadedPhotos = [];
                uploadedDocuments = [];
                photoPreviewContainer.innerHTML = '';
                documentPreviewContainer.innerHTML = '';
                hideAllEventSpecificSections();
                formMessage.style.display = 'none';
            }, 5000);

        } else {
            throw new Error(result.message || 'Submission failed');
        }

    } catch (error) {
        console.error('Error submitting report:', error);
        showFormMessage('error',
            `Failed to submit report: ${error.message}\n\nPlease try again or contact your GMD if the problem persists.`);
    }

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

    // Translate country options
    document.querySelectorAll('#country option[data-i18n-option]').forEach(option => {
        const key = option.getAttribute('data-i18n-option');
        if (t[key]) {
            option.textContent = t[key];
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
