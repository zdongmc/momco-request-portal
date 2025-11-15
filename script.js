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
            // Special handling for elements that contain HTML like <strong>
            if (el.innerHTML.includes('<strong>') || el.innerHTML.includes('<')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    // Translate all section headings (h3)
    const headingMap = {
        'Select Event Type': 'selectEventType',
        'Sélectionner le Type d\'Événement': 'selectEventType',
        'Selecionar Tipo de Evento': 'selectEventType',
        'Requester Information': 'requesterInfo',
        'Informations sur le Demandeur': 'requesterInfo',
        'Informações do Solicitante': 'requesterInfo',
        'Event Details': 'eventDetails',
        'Détails de l\'Événement': 'eventDetails',
        'Detalhes do Evento': 'eventDetails',
        'Event Agenda': 'eventAgenda',
        'Programme de l\'Événement': 'eventAgenda',
        'Agenda do Evento': 'eventAgenda',
        'Budget Request': 'budgetRequest',
        'Demande de Budget': 'budgetRequest',
        'Solicitação de Orçamento': 'budgetRequest',
        'Group Launch Details': 'groupLaunchDetails',
        'Détails du Lancement de Groupe': 'groupLaunchDetails',
        'Detalhes do Lançamento de Grupo': 'groupLaunchDetails',
        'Leadership Training Details': 'leadershipTrainingDetails',
        'Détails de la Formation de Leadership': 'leadershipTrainingDetails',
        'Detalhes do Treinamento de Liderança': 'leadershipTrainingDetails',
        'Group Care Details': 'groupCareDetails',
        'Détails des Soins aux Groupes': 'groupCareDetails',
        'Detalhes do Cuidado de Grupo': 'groupCareDetails',
        'Other Request Details': 'otherDetails',
        'Détails de la Demande Autre': 'otherDetails',
        'Detalhes de Outra Solicitação': 'otherDetails',
        'Additional Information': 'additionalInfo',
        'Informations Supplémentaires': 'additionalInfo',
        'Informações Adicionais': 'additionalInfo'
    };

    // Translate all h3 headings
    document.querySelectorAll('h3').forEach(h3 => {
        if (!h3.hasAttribute('data-i18n')) {
            const key = headingMap[h3.textContent.trim()];
            if (key && t[key]) {
                h3.textContent = t[key];
            }
        }
    });

    // Translate all labels
    translateLabel('First Name', 'firstName', t);
    translateLabel('Prénom', 'firstName', t);
    translateLabel('Primeiro Nome', 'firstName', t);
    translateLabel('Last Name', 'lastName', t);
    translateLabel('Nom de Famille', 'lastName', t);
    translateLabel('Sobrenome', 'lastName', t);
    translateLabel('Country', 'country', t);
    translateLabel('Pays', 'country', t);
    translateLabel('País', 'country', t);
    translateLabel('Email', 'email', t);
    translateLabel('E-mail', 'email', t);
    translateLabel('WhatsApp Number', 'whatsapp', t);
    translateLabel('Numéro WhatsApp', 'whatsapp', t);
    translateLabel('Número do WhatsApp', 'whatsapp', t);
    translateLabel('Location / Venue', 'location', t);
    translateLabel('Lieu / Salle', 'location', t);
    translateLabel('Local / Espaço', 'location', t);
    translateLabel('Date of Event', 'eventDate', t);
    translateLabel('Date de l\'Événement', 'eventDate', t);
    translateLabel('Data do Evento', 'eventDate', t);
    translateLabel('Date Funds Needed By', 'fundsNeededDate', t);
    translateLabel('Date Limite pour les Fonds', 'fundsNeededDate', t);
    translateLabel('Data Limite para Fundos', 'fundsNeededDate', t);
    translateLabel('Number of Participants Expected', 'participantsExpected', t);
    translateLabel('Nombre de Participants Attendus', 'participantsExpected', t);
    translateLabel('Número de Participantes Esperados', 'participantsExpected', t);
    translateLabel('Send Funds To', 'sendFundsTo', t);
    translateLabel('Envoyer les Fonds à', 'sendFundsTo', t);
    translateLabel('Enviar Fundos Para', 'sendFundsTo', t);
    translateLabel('Event Agenda', 'agendaLabel', t);
    translateLabel('Programme de l\'Événement', 'agendaLabel', t);
    translateLabel('Agenda do Evento', 'agendaLabel', t);
    translateLabel('Itemized Budget', 'itemizedBudget', t);
    translateLabel('Budget Détaillé', 'itemizedBudget', t);
    translateLabel('Orçamento Detalhado', 'itemizedBudget', t);
    translateLabel('Total Amount Requested', 'totalAmountRequested', t);
    translateLabel('Montant Total Demandé', 'totalAmountRequested', t);
    translateLabel('Valor Total Solicitado', 'totalAmountRequested', t);
    translateLabel('Currency', 'currency', t);
    translateLabel('Devise', 'currency', t);
    translateLabel('Moeda', 'currency', t);
    translateLabel('Notes or Comments', 'notes', t);
    translateLabel('Notes ou Commentaires', 'notes', t);
    translateLabel('Notas ou Comentários', 'notes', t);

    // Group Launch specific labels
    translateLabel('Number of Potential New Groups/Leaders', 'potentialGroups', t);
    translateLabel('Nombre de Nouveaux Groupes/Leaders Potentiels', 'potentialGroups', t);
    translateLabel('Número de Novos Grupos/Líderes Potenciais', 'potentialGroups', t);
    translateLabel('Curriculum Copies Needed', 'curriculumCopies', t);
    translateLabel('Copies de Curriculum Nécessaires', 'curriculumCopies', t);
    translateLabel('Cópias de Currículo Necessárias', 'curriculumCopies', t);
    translateLabel('Ministry Agreement Copies Needed', 'ministryAgreementCopies', t);
    translateLabel('Copies d\'Accords de Ministère Nécessaires', 'ministryAgreementCopies', t);
    translateLabel('Cópias de Acordos de Ministério Necessárias', 'ministryAgreementCopies', t);
    translateLabel('Special Requests', 'specialRequests', t);
    translateLabel('Demandes Spéciales', 'specialRequests', t);
    translateLabel('Solicitações Especiais', 'specialRequests', t);

    // Leadership Training specific labels
    translateLabel('Attending Leaders', 'attendingLeaders', t);
    translateLabel('Leaders Participants', 'attendingLeaders', t);
    translateLabel('Líderes Participantes', 'attendingLeaders', t);
    translateLabel('Training Topics', 'trainingTopics', t);
    translateLabel('Sujets de Formation', 'trainingTopics', t);
    translateLabel('Tópicos de Treinamento', 'trainingTopics', t);
    translateLabel('Other Training Topics', 'otherTrainingTopics', t);
    translateLabel('Autres Sujets de Formation', 'otherTrainingTopics', t);
    translateLabel('Outros Tópicos de Treinamento', 'otherTrainingTopics', t);
    translateLabel('Transportation, Lodging, or Meal Plans', 'logisticsNeeds', t);
    translateLabel('Transport, Hébergement ou Plans de Repas', 'logisticsNeeds', t);
    translateLabel('Transporte, Hospedagem ou Refeições', 'logisticsNeeds', t);

    // Group Care specific labels
    translateLabel('Group Name / Location', 'groupName', t);
    translateLabel('Nom du Groupe / Lieu', 'groupName', t);
    translateLabel('Nome do Grupo / Local', 'groupName', t);
    translateLabel('Group Leader', 'groupLeader', t);
    translateLabel('Leader du Groupe', 'groupLeader', t);
    translateLabel('Líder do Grupo', 'groupLeader', t);
    translateLabel('Number of Moms in Group', 'momsInGroup', t);
    translateLabel('Nombre de Mamans dans le Groupe', 'momsInGroup', t);
    translateLabel('Número de Mães no Grupo', 'momsInGroup', t);
    translateLabel('Group Status', 'groupStatus', t);
    translateLabel('Statut du Groupe', 'groupStatus', t);
    translateLabel('Status do Grupo', 'groupStatus', t);
    translateLabel('Explain Reason for This Status', 'statusExplanation', t);
    translateLabel('Expliquer la Raison de ce Statut', 'statusExplanation', t);
    translateLabel('Explicar o Motivo Deste Status', 'statusExplanation', t);
    translateLabel('Support Needed', 'supportNeeded', t);
    translateLabel('Soutien Nécessaire', 'supportNeeded', t);
    translateLabel('Apoio Necessário', 'supportNeeded', t);
    translateLabel('Purpose of Funding Request (if requesting funds)', 'fundingPurpose', t);
    translateLabel('Objectif de la Demande de Financement (si demande de fonds)', 'fundingPurpose', t);
    translateLabel('Objetivo da Solicitação de Financiamento (se solicitando fundos)', 'fundingPurpose', t);

    // Other Request specific labels
    translateLabel('Purpose / Description', 'purposeDescription', t);
    translateLabel('Objectif / Description', 'purposeDescription', t);
    translateLabel('Objetivo / Descrição', 'purposeDescription', t);
    translateLabel('Time Period Covered', 'timePeriod', t);
    translateLabel('Période Couverte', 'timePeriod', t);
    translateLabel('Período Coberto', 'timePeriod', t);
    translateLabel('Groups or Activities Supported', 'groupsSupported', t);
    translateLabel('Groupes ou Activités Soutenus', 'groupsSupported', t);
    translateLabel('Grupos ou Atividades Apoiados', 'groupsSupported', t);

    // Translate training topic checkboxes
    translateCheckboxLabel('Leadership Handbook, Mission & Vision', 'trainingHandbook', t);
    translateCheckboxLabel('Manuel de Leadership, Mission et Vision', 'trainingHandbook', t);
    translateCheckboxLabel('Manual de Liderança, Missão e Visão', 'trainingHandbook', t);
    translateCheckboxLabel('Global Curriculum Resources', 'trainingCurriculum', t);
    translateCheckboxLabel('Ressources Curriculaires Mondiales', 'trainingCurriculum', t);
    translateCheckboxLabel('Recursos Curriculares Globais', 'trainingCurriculum', t);
    translateCheckboxLabel('Key Aspects of a Meetup', 'trainingMeetup', t);
    translateCheckboxLabel('Aspects Clés d\'une Rencontre', 'trainingMeetup', t);
    translateCheckboxLabel('Aspectos Principais de um Encontro', 'trainingMeetup', t);
    translateCheckboxLabel('MomCo Online Resources', 'trainingOnline', t);
    translateCheckboxLabel('Ressources en Ligne MomCo', 'trainingOnline', t);
    translateCheckboxLabel('Recursos Online MomCo', 'trainingOnline', t);
    translateCheckboxLabel('General Leadership Training', 'trainingGeneral', t);
    translateCheckboxLabel('Formation Générale de Leadership', 'trainingGeneral', t);
    translateCheckboxLabel('Treinamento Geral de Liderança', 'trainingGeneral', t);
    translateCheckboxLabel('Leadership Certification', 'trainingCertification', t);
    translateCheckboxLabel('Certification de Leadership', 'trainingCertification', t);
    translateCheckboxLabel('Certificação de Liderança', 'trainingCertification', t);
    translateCheckboxLabel('Other (specify below)', 'trainingOtherOption', t);
    translateCheckboxLabel('Autre (préciser ci-dessous)', 'trainingOtherOption', t);
    translateCheckboxLabel('Outro (especificar abaixo)', 'trainingOtherOption', t);

    // Translate status option labels
    document.querySelectorAll('.status-option strong').forEach(strong => {
        const text = strong.textContent.trim();
        if (text === 'Green - Healthy' && t.statusGreen) strong.textContent = t.statusGreen;
        if (text === 'Vert - En Bonne Santé' && t.statusGreen) strong.textContent = t.statusGreen;
        if (text === 'Verde - Saudável' && t.statusGreen) strong.textContent = t.statusGreen;
        if (text === 'Yellow - Struggling' && t.statusYellow) strong.textContent = t.statusYellow;
        if (text === 'Jaune - En Difficulté' && t.statusYellow) strong.textContent = t.statusYellow;
        if (text === 'Amarelo - Com Dificuldades' && t.statusYellow) strong.textContent = t.statusYellow;
        if (text === 'Red - At Risk' && t.statusRed) strong.textContent = t.statusRed;
        if (text === 'Rouge - À Risque' && t.statusRed) strong.textContent = t.statusRed;
        if (text === 'Vermelho - Em Risco' && t.statusRed) strong.textContent = t.statusRed;
    });

    // Translate status descriptions
    document.querySelectorAll('.status-option p').forEach(p => {
        const text = p.textContent.trim();
        if (text === 'Meeting regularly, using curriculum, leaders trained, thriving' && t.statusGreenDesc) p.textContent = t.statusGreenDesc;
        if (text === 'Se réunit régulièrement, utilise le curriculum, leaders formés, prospère' && t.statusGreenDesc) p.textContent = t.statusGreenDesc;
        if (text === 'Reunindo-se regularmente, usando currículo, líderes treinados, prosperando' && t.statusGreenDesc) p.textContent = t.statusGreenDesc;
        if (text === 'Leadership issues, not using curriculum, irregular meetings' && t.statusYellowDesc) p.textContent = t.statusYellowDesc;
        if (text === 'Problèmes de leadership, n\'utilise pas le curriculum, réunions irrégulières' && t.statusYellowDesc) p.textContent = t.statusYellowDesc;
        if (text === 'Problemas de liderança, não usando currículo, reuniões irregulares' && t.statusYellowDesc) p.textContent = t.statusYellowDesc;
        if (text === 'Not meeting, unresponsive for 4+ months, likely to close' && t.statusRedDesc) p.textContent = t.statusRedDesc;
        if (text === 'Ne se réunit pas, sans réponse depuis 4+ mois, risque de fermeture' && t.statusRedDesc) p.textContent = t.statusRedDesc;
        if (text === 'Não se reunindo, sem resposta há 4+ meses, provavelmente fechará' && t.statusRedDesc) p.textContent = t.statusRedDesc;
    });

    // Translate buttons
    translateButton('Submit Request', 'submitRequest', t);
    translateButton('Soumettre la Demande', 'submitRequest', t);
    translateButton('Enviar Solicitação', 'submitRequest', t);
    translateButton('Clear Form', 'clearForm', t);
    translateButton('Effacer le Formulaire', 'clearForm', t);
    translateButton('Limpar Formulário', 'clearForm', t);
    translateButton('Load Group Launch Template', 'loadGroupLaunchTemplate', t);
    translateButton('Charger le Modèle de Lancement de Groupe', 'loadGroupLaunchTemplate', t);
    translateButton('Carregar Modelo de Lançamento de Grupo', 'loadGroupLaunchTemplate', t);
    translateButton('Load Leadership Training Template', 'loadLeadershipTemplate', t);
    translateButton('Charger le Modèle de Formation de Leadership', 'loadLeadershipTemplate', t);
    translateButton('Carregar Modelo de Treinamento de Liderança', 'loadLeadershipTemplate', t);

    // Translate small help text
    document.querySelectorAll('small.help-text').forEach(small => {
        const text = small.textContent.trim();
        const helpMap = {
            'Compound names like "Faith Rose" are OK': 'firstNameHelp',
            'Les prénoms composés comme "Faith Rose" sont OK': 'firstNameHelp',
            'Nomes compostos como "Faith Rose" são OK': 'firstNameHelp',
            'When will the event take place?': 'eventDateHelp',
            'Quand l\'événement aura-t-il lieu?': 'eventDateHelp',
            'Quando o evento ocorrerá?': 'eventDateHelp',
            'At least 2-3 weeks before event': 'fundsNeededHelp',
            'Au moins 2-3 semaines avant l\'événement': 'fundsNeededHelp',
            'Pelo menos 2-3 semanas antes do evento': 'fundsNeededHelp',
            'May be different from requester': 'sendFundsToHelp',
            'Peut être différent du demandeur': 'sendFundsToHelp',
            'Pode ser diferente do solicitante': 'sendFundsToHelp',
            'List your event schedule with times and activities': 'agendaHelp',
            'Listez le programme de votre événement avec les heures et activités': 'agendaHelp',
            'Liste a programação do evento com horários e atividades': 'agendaHelp',
            'List each budget item with amounts': 'budgetHelp',
            'Listez chaque poste budgétaire avec les montants': 'budgetHelp',
            'Liste cada item do orçamento com valores': 'budgetHelp',
            'Auto-selected based on country': 'currencyAutoSelected',
            'Sélectionné automatiquement selon le pays': 'currencyAutoSelected',
            'Selecionado automaticamente com base no país': 'currencyAutoSelected',
            'If your country is not listed, please contact your GMD (Global Ministry Developer).': 'countryNotListedHelp',
            'Si votre pays n\'est pas répertorié, veuillez contacter votre GMD (Développeur de Ministère Global).': 'countryNotListedHelp',
            'Se o seu país não estiver listado, entre em contato com seu GMD (Desenvolvedor de Ministério Global).': 'countryNotListedHelp'
        };
        const key = helpMap[text];
        if (key && t[key]) {
            small.textContent = t[key];
        }
    });

    // Translate select options
    const selectCountry = document.querySelector('#country option[value=""]');
    if (selectCountry && t.selectCountry) {
        selectCountry.textContent = t.selectCountry;
    }

    // Translate country options
    document.querySelectorAll('#country option[data-i18n-option]').forEach(option => {
        const key = option.getAttribute('data-i18n-option');
        if (t[key]) {
            option.textContent = t[key];
        }
    });

    const selectCurrency = document.querySelector('#currency option[value=""]');
    if (selectCurrency && t.currencySelectDefault) {
        selectCurrency.textContent = t.currencySelectDefault;
    }

    // Translate currency options
    document.querySelectorAll('#currency option[data-i18n-option]').forEach(option => {
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

function translateLabel(originalText, key, t) {
    document.querySelectorAll('label').forEach(label => {
        const text = label.textContent.trim();
        if (text.startsWith(originalText) && t[key]) {
            // Keep the asterisk if present
            const hasAsterisk = text.includes('*');
            label.textContent = t[key] + (hasAsterisk ? ' *' : '');
        }
    });
}

function translateButton(originalText, key, t) {
    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.trim() === originalText && t[key]) {
            btn.textContent = t[key];
        }
    });
}

function translateCheckboxLabel(originalText, key, t) {
    document.querySelectorAll('.checkbox-label').forEach(label => {
        // Get text content excluding the input element
        const textNode = Array.from(label.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode && textNode.textContent.trim() === originalText && t[key]) {
            textNode.textContent = ' ' + t[key];
        }
    });
}

function getTranslation(key) {
    return translations[currentLanguage]?.[key] || key;
}

function getAgendaTemplate(type) {
    return agendaTemplates[currentLanguage]?.[type] || '';
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
    'Madagascar': 'MGA',
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

// DOM Elements
let eventTypeRadios;
let countrySelect;
let currencySelect;
let eventDetailsSection;
let agendaSection;
let budgetSection;
let additionalInfoSection;
let submitSection;
let groupCareFields;
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
    additionalInfoSection = document.getElementById('additionalInfoSection');
    submitSection = document.getElementById('submitSection');
    groupCareFields = document.getElementById('groupCareFields');
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

    // Requester name change - autopopulate Send Funds To
    const requesterNameSelect = document.getElementById('requesterName');
    if (requesterNameSelect) {
        requesterNameSelect.addEventListener('change', handleRequesterNameChange);
    }

    // Send Funds To manual change - mark as manually edited
    const sendFundsToInput = document.getElementById('sendFundsTo');
    if (sendFundsToInput) {
        sendFundsToInput.addEventListener('input', function() {
            // If user manually types, remove the auto-populated flag
            if (this.dataset.autoPopulated === 'true') {
                delete this.dataset.autoPopulated;
            }
        });
    }

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

    // Name validation - removed as we now have separate first/last name fields
    // No special validation needed for name fields
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
            showCommonSections();
            restoreCommonFieldsRequired(); // Restore required fields
            break;

        case 'leadership-training':
            showCommonSections();
            restoreCommonFieldsRequired(); // Restore required fields
            break;

        case 'group-care':
            groupCareFields.style.display = 'block';
            showCommonSections();
            setGroupCareFieldsRequired();
            makeGroupCareBudgetOptional();
            break;
    }
}

/**
 * Show common sections (event details, agenda, budget, additional info, submit)
 */
function showCommonSections() {
    eventDetailsSection.style.display = 'block';
    agendaSection.style.display = 'block';
    budgetSection.style.display = 'block';
    additionalInfoSection.style.display = 'block';
    submitSection.style.display = 'block';
}

/**
 * Restore required attributes and asterisks for common fields
 */
function restoreCommonFieldsRequired() {
    // Restore required attributes
    document.getElementById('agenda').setAttribute('required', '');
    document.getElementById('budget').setAttribute('required', '');
    document.getElementById('amountRequested').setAttribute('required', '');
    document.getElementById('currency').setAttribute('required', '');
    document.getElementById('sendFundsTo').setAttribute('required', '');

    // Restore asterisks
    showRequiredAsterisk('agenda');
    showRequiredAsterisk('budget');
    showRequiredAsterisk('amountRequested');
    showRequiredAsterisk('currency');
    showRequiredAsterisk('sendFundsTo');
}

/**
 * Hide all event-specific sections
 */
function hideAllEventSpecificSections() {
    groupCareFields.style.display = 'none';
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
 * Make Group Care budget fields and agenda optional
 */
function makeGroupCareBudgetOptional() {
    // Budget can be empty for monitoring-only Group Care
    document.getElementById('budget').removeAttribute('required');
    document.getElementById('amountRequested').removeAttribute('required');
    document.getElementById('currency').removeAttribute('required');
    document.getElementById('sendFundsTo').removeAttribute('required');

    // Agenda is not needed for group care
    document.getElementById('agenda').removeAttribute('required');

    // Event date can be blank for monitoring
    document.getElementById('eventDate').removeAttribute('required');
    document.getElementById('fundsNeededDate').removeAttribute('required');

    // Hide asterisks for optional fields by replacing label content
    hideRequiredAsterisk('agenda');
    hideRequiredAsterisk('budget');
    hideRequiredAsterisk('amountRequested');
    hideRequiredAsterisk('currency');
    hideRequiredAsterisk('sendFundsTo');
    hideRequiredAsterisk('eventDate');
    hideRequiredAsterisk('fundsNeededDate');
}

/**
 * Hide the required asterisk (*) from a field's label
 */
function hideRequiredAsterisk(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        const label = field.closest('.form-group')?.querySelector('label');
        if (label && label.textContent.includes('*')) {
            // Replace the asterisk with empty string while preserving the rest of the label
            label.innerHTML = label.innerHTML.replace(' *', '');
        }
    }
}

/**
 * Show the required asterisk (*) on a field's label
 */
function showRequiredAsterisk(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        const label = field.closest('.form-group')?.querySelector('label');
        if (label && !label.textContent.includes('*')) {
            // Add asterisk if not already present
            label.innerHTML = label.innerHTML + ' *';
        }
    }
}

/**
 * Handle country selection
 */
function handleCountryChange(e) {
    const selectedCountry = e.target.value;

    // Populate requester dropdown based on country
    populateRequesterDropdownLocal(selectedCountry);

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
 * Populate requester dropdown based on selected country
 * Uses shared function from country-requester-data.js
 */
function populateRequesterDropdownLocal(country) {
    const requesterSelect = document.getElementById('requesterName');
    const t = translations[currentLanguage];

    // Call the shared function
    populateRequesterDropdown(country, requesterSelect, t);
}

/**
 * Handle requester name selection - autopopulate Send Funds To
 */
function handleRequesterNameChange(e) {
    const selectedRequester = e.target.value;
    const sendFundsToInput = document.getElementById('sendFundsTo');

    if (sendFundsToInput && selectedRequester) {
        // Only autopopulate if the field is empty or unchanged from previous autopopulation
        // This allows users to override the value
        if (!sendFundsToInput.value || sendFundsToInput.dataset.autoPopulated === 'true') {
            sendFundsToInput.value = selectedRequester;
            sendFundsToInput.dataset.autoPopulated = 'true';
        }
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

// validateRequesterName function removed - no longer needed with separate first/last name fields

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
async function handleFormSubmit(e) {
    e.preventDefault();

    // Validate dates
    if (!validateDates()) {
        showFormMessage('error', 'Please fix the date validation errors before submitting.');
        return;
    }

    // Show loading message
    showFormMessage('info', 'Submitting request... Please wait.');

    // Get form data
    const formData = new FormData(requestForm);
    const data = { action: 'submitRequest' };

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

    // Log form data for debugging
    console.log('Submitting request:', data);

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
                `✓ Request submitted successfully!\n\nGenerated filename: ${filename}\n\nYour request has been:\n• Saved to the tracking spreadsheet\n• Assigned a tracking number\n• Ready for GMD review\n\nYou will be notified when funds are sent.`);

            // Reset form after successful submission
            setTimeout(() => {
                requestForm.reset();
                hideAllEventSpecificSections();
                formMessage.style.display = 'none';
            }, 5000);

        } else {
            throw new Error(result.message || 'Submission failed');
        }

    } catch (error) {
        console.error('Error submitting request:', error);
        showFormMessage('error',
            `Failed to submit request: ${error.message}\n\nPlease try again or contact your GMD if the problem persists.`);
    }

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
    // Use requester name from dropdown
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
