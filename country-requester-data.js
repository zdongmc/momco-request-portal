/**
 * MomCo Africa - Shared Country and Requester Data
 * Used by both request form and post-event report form
 */

// Country to Requester mapping
// Based on MomCo Africa leadership data
const COUNTRY_REQUESTERS = {
    'Angola': ['Alexandrina'],
    'Benin': ['Marceline', 'Roseline', 'Stephanie'],
    'Burkina Faso': ['Gina'],
    'Côte d\'Ivoire': ['Angele', 'Bab', 'Eleonore', 'Elise', 'James', 'Kamagaté', 'Koné', 'Maman', 'Toh'],
    'DRC': ['Julie', 'Mamie', 'Silvie'],
    'Ghana': ['Dorcas', 'Fosua', 'Gladys', 'Harriet', 'Janet', 'Miriam', 'Philomina', 'Rosemary', 'Selina'],
    'Kenya': ['Anne', 'Emily', 'Grace', 'Janet', 'Leah', 'Rose Faith', 'Sammy', 'Sarah', 'Sylvia'],
    'Libya': ['Esther'],
    'Madagascar': ['Felana'],
    'Mali': ['Elizabeth', 'Ezechiel', 'Marina'],
    'Nigeria': ['Bukola', 'Chioma', 'Emmanuela', 'Rifkatu', 'Veronica'],
    'North Africa': ['Persida'],
    'Rwanda': ['Claire', 'Stephanie'],
    'South Africa': ['Santie'],
    'Tanzania': ['Joyce'],
    'Togo': ['Folly', 'Josephine'],
    'Uganda (East)': ['Immaculate', 'Jasper', 'Jenipher', 'Joshua', 'Mirika', 'Moses', 'Penlope', 'Sylvia'],
    'Uganda (West)': ['Immaculate', 'Jasper', 'Jenipher', 'Joshua', 'Mirika', 'Moses', 'Penlope', 'Sylvia'],
    'Zambia': ['Chilufya', 'Emelda', 'Fagness', 'Favour', 'Hellen', 'Margaret', 'Maureen']
};

/**
 * Get requesters for a specific country
 * @param {string} country - The country name
 * @returns {Array} Array of requester names for that country
 */
function getRequestersForCountry(country) {
    return COUNTRY_REQUESTERS[country] || [];
}

/**
 * Populate a requester dropdown based on selected country
 * @param {string} country - The selected country
 * @param {HTMLSelectElement} requesterSelect - The select element to populate
 * @param {Object} translations - Translation object for the current language
 */
function populateRequesterDropdown(country, requesterSelect, translations) {
    // Clear existing options
    requesterSelect.innerHTML = '';

    if (!country) {
        // No country selected
        requesterSelect.disabled = true;
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = translations.selectRequesterFirst || '-- Select Country First --';
        requesterSelect.appendChild(defaultOption);
        return;
    }

    // Enable the dropdown
    requesterSelect.disabled = false;

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = translations.selectRequester || '-- Select Requester --';
    requesterSelect.appendChild(defaultOption);

    // Get requesters for this country
    const requesters = getRequestersForCountry(country);

    // Add each requester as an option
    requesters.forEach(requesterName => {
        const option = document.createElement('option');
        option.value = requesterName;
        option.textContent = requesterName;
        requesterSelect.appendChild(option);
    });
}
