/**
 * MomCo Africa Event Request Portal - Translations
 * English and French translations
 */

const translations = {
    en: {
        // Header
        title: "MomCo Africa",
        subtitle: "Event Request Portal",
        description: "Submit funding requests for events and group support",

        // Language Toggle
        languageLabel: "Language / Langue:",

        // Event Type Selection
        selectEventType: "Select Event Type",
        groupLaunchTitle: "Group Launch / Outreach",
        groupLaunchDesc: "Launch new MomCo groups and present mission to potential leaders",
        leadershipTrainingTitle: "Leadership Training",
        leadershipTrainingDesc: "Training for existing leaders, team building, and goal setting",
        groupCareTitle: "Group Care",
        groupCareDesc: "Support and monitoring for existing groups (optional funding)",
        otherTitle: "Other",
        otherDesc: "Operational expenses (curriculum, coordination, etc.)",

        // Requester Information
        requesterInfo: "Requester Information",
        firstName: "First Name",
        firstNamePlaceholder: "e.g., Julie, Faith Rose",
        firstNameHelp: "Compound names like \"Faith Rose\" are OK",
        lastName: "Last Name",
        lastNamePlaceholder: "e.g., Pemba, Balica",
        country: "Country",
        selectCountry: "-- Select Country --",
        email: "Email",
        whatsapp: "WhatsApp Number",

        // Event Details
        eventDetails: "Event Details",
        location: "Location / Venue",
        locationPlaceholder: "e.g., Nairobi, Kisumu Community Church",
        eventDate: "Date of Event",
        eventDateHelp: "When will the event take place?",
        fundsNeededDate: "Date Funds Needed By",
        fundsNeededHelp: "At least 2-3 weeks before event",
        participantsExpected: "Number of Participants Expected",
        sendFundsTo: "Send Funds To",
        sendFundsToHelp: "May be different from requester",
        sendFundsToPlaceholder: "Name of person who will receive the transfer",

        // Event Agenda
        eventAgenda: "Event Agenda",
        agendaLabel: "Event Agenda",
        agendaPlaceholder: `Example:
9:00 AM - Welcome and worship
10:00 AM - MomCo mission presentation
11:00 AM - Curriculum overview
12:00 PM - Q&A and registration
1:00 PM - Closing`,
        agendaHelp: "List your event schedule with times and activities",
        loadGroupLaunchTemplate: "Load Group Launch Template",
        loadLeadershipTemplate: "Load Leadership Training Template",

        // Budget Request
        budgetRequest: "Budget Request",
        itemizedBudget: "Itemized Budget",
        budgetPlaceholder: `Example:
Curriculum printing: 5,000 KSH
Snacks and refreshments: 3,000 KSH
Transportation for leaders: 2,000 KSH
Venue rental: 1,500 KSH
Total: 11,500 KSH`,
        budgetHelp: "List each budget item with amounts",
        totalAmountRequested: "Total Amount Requested",
        currency: "Currency",
        currencyAutoSelected: "Auto-selected based on country",
        currencySelectDefault: "-- Auto-selected --",

        // Group Launch Details
        groupLaunchDetails: "Group Launch Details",
        potentialGroups: "Number of Potential New Groups/Leaders",
        curriculumCopies: "Curriculum Copies Needed",
        ministryAgreementCopies: "Ministry Agreement Copies Needed",
        specialRequests: "Special Requests",
        specialRequestsPlaceholder: "e.g., Video message from GMD, Call-in participation, Letter from leadership",

        // Leadership Training Details
        leadershipTrainingDetails: "Leadership Training Details",
        attendingLeaders: "Attending Leaders",
        attendingLeadersPlaceholder: `List leader names and the groups they represent:
e.g.,
Sarah - Nairobi Group 1
Mary - Kisumu Leaders
Grace - Machakos Community`,
        trainingTopics: "Training Topics",
        trainingHandbook: "Leadership Handbook, Mission & Vision",
        trainingCurriculum: "Global Curriculum Resources",
        trainingMeetup: "Key Aspects of a Meetup",
        trainingOnline: "MomCo Online Resources",
        trainingGeneral: "General Leadership Training",
        trainingCertification: "Leadership Certification",
        trainingOtherOption: "Other (specify below)",
        otherTrainingTopics: "Other Training Topics",
        otherTrainingPlaceholder: "Specify other topics if selected above",
        logisticsNeeds: "Transportation, Lodging, or Meal Plans",
        logisticsPlaceholder: `Describe any special logistics needs:
e.g., Transportation from rural areas, Overnight lodging for 2 nights, Meals for 20 people`,

        // Group Care Details
        groupCareDetails: "Group Care Details",
        groupName: "Group Name / Location",
        groupNamePlaceholder: "e.g., Kisumu Leaders Group",
        groupLeader: "Group Leader",
        groupLeaderPlaceholder: "e.g., Sarah Mwangi",
        momsInGroup: "Number of Moms in Group",
        groupStatus: "Group Status",
        statusGreen: "Green - Healthy",
        statusGreenDesc: "Meeting regularly, using curriculum, leaders trained, thriving",
        statusYellow: "Yellow - Struggling",
        statusYellowDesc: "Leadership issues, not using curriculum, irregular meetings",
        statusRed: "Red - At Risk",
        statusRedDesc: "Not meeting, unresponsive for 4+ months, likely to close",
        statusExplanation: "Explain Reason for This Status",
        statusExplanationPlaceholder: "Describe the current situation of this group...",
        supportNeeded: "Support Needed",
        supportNeededPlaceholder: "What assistance or resources does this group need?",
        fundingPurpose: "Purpose of Funding Request (if requesting funds)",
        fundingPurposePlaceholder: "Optional - Examples: Curriculum materials, Leader encouragement event, Meeting space rental, Transportation assistance, Emergency support",
        fundingPurposeHelp: "Leave blank if this is monitoring only (no funding needed)",
        groupCareNote: "Note: Group Care requests can be submitted with or without funding. If you're only reporting the group's status without requesting funds, leave the budget section empty.",

        // Other Request Details
        otherDetails: "Other Request Details",
        purposeDescription: "Purpose / Description",
        purposePlaceholder: `Explain what the funds will be used for:
Examples:
- Curriculum printing for multiple groups
- Regional coordinator support for Q1
- Translation services
- Emergency operational needs`,
        timePeriod: "Time Period Covered",
        timePeriodPlaceholder: "e.g., Q1 2025, Annual 2025, Half Year 2025",
        groupsSupported: "Groups or Activities Supported",
        groupsSupportedPlaceholder: "List which groups or activities these funds will support...",

        // Additional Information
        additionalInfo: "Additional Information",
        notes: "Notes or Comments",
        notesPlaceholder: "Any other information you'd like to share...",

        // Buttons
        submitRequest: "Submit Request",
        clearForm: "Clear Form",

        // Footer
        footerText: "© 2025 MomCo Africa. All rights reserved.",

        // Validation Messages
        requiredField: "This field is required",
        invalidEmail: "Please enter a valid email address",
        fundsDateError: "Funds needed date must be before the event date",
        fundsDateWarning: "Warning: Only {days} days between funding and event. Recommended: 2-3 weeks minimum.",
        nameWarning: "Typically only first name is needed (compound names like \"Faith Rose\" are OK)",

        // Success/Error Messages
        submitSuccess: "✓ Request submitted successfully!",
        submitError: "Please fix the validation errors before submitting.",
        generatedFilename: "Generated filename:",
        productionNote: `In production, this would:
• Generate a PDF with your request details
• Save to Google Drive
• Update the tracking spreadsheet
• Send email notifications to GMD and you

For now, check the browser console to see your submitted data.`
    },

    fr: {
        // Header
        title: "MomCo Afrique",
        subtitle: "Portail de Demande d'Événements",
        description: "Soumettre des demandes de financement pour des événements et du soutien aux groupes",

        // Language Toggle
        languageLabel: "Langue / Language:",

        // Event Type Selection
        selectEventType: "Sélectionner le Type d'Événement",
        groupLaunchTitle: "Lancement de Groupe / Sensibilisation",
        groupLaunchDesc: "Lancer de nouveaux groupes MomCo et présenter la mission aux leaders potentiels",
        leadershipTrainingTitle: "Formation de Leadership",
        leadershipTrainingDesc: "Formation pour les leaders existants, team building et définition d'objectifs",
        groupCareTitle: "Soins aux Groupes",
        groupCareDesc: "Soutien et surveillance des groupes existants (financement optionnel)",
        otherTitle: "Autre",
        otherDesc: "Dépenses opérationnelles (curriculum, coordination, etc.)",

        // Requester Information
        requesterInfo: "Informations sur le Demandeur",
        firstName: "Prénom",
        firstNamePlaceholder: "par ex., Julie, Faith Rose",
        firstNameHelp: "Les prénoms composés comme \"Faith Rose\" sont OK",
        lastName: "Nom de Famille",
        lastNamePlaceholder: "par ex., Pemba, Balica",
        country: "Pays",
        selectCountry: "-- Sélectionner un Pays --",
        email: "Email",
        whatsapp: "Numéro WhatsApp",

        // Event Details
        eventDetails: "Détails de l'Événement",
        location: "Lieu / Salle",
        locationPlaceholder: "par ex., Nairobi, Église Communautaire de Kisumu",
        eventDate: "Date de l'Événement",
        eventDateHelp: "Quand l'événement aura-t-il lieu?",
        fundsNeededDate: "Date Limite pour les Fonds",
        fundsNeededHelp: "Au moins 2-3 semaines avant l'événement",
        participantsExpected: "Nombre de Participants Attendus",
        sendFundsTo: "Envoyer les Fonds à",
        sendFundsToHelp: "Peut être différent du demandeur",
        sendFundsToPlaceholder: "Nom de la personne qui recevra le transfert",

        // Event Agenda
        eventAgenda: "Programme de l'Événement",
        agendaLabel: "Programme de l'Événement",
        agendaPlaceholder: `Exemple:
9h00 - Accueil et louange
10h00 - Présentation de la mission MomCo
11h00 - Aperçu du curriculum
12h00 - Questions/réponses et inscription
13h00 - Clôture`,
        agendaHelp: "Listez le programme de votre événement avec les heures et activités",
        loadGroupLaunchTemplate: "Charger le Modèle de Lancement de Groupe",
        loadLeadershipTemplate: "Charger le Modèle de Formation de Leadership",

        // Budget Request
        budgetRequest: "Demande de Budget",
        itemizedBudget: "Budget Détaillé",
        budgetPlaceholder: `Exemple:
Impression de curriculum: 5 000 KSH
Collations et rafraîchissements: 3 000 KSH
Transport pour les leaders: 2 000 KSH
Location de salle: 1 500 KSH
Total: 11 500 KSH`,
        budgetHelp: "Listez chaque poste budgétaire avec les montants",
        totalAmountRequested: "Montant Total Demandé",
        currency: "Devise",
        currencyAutoSelected: "Sélectionné automatiquement selon le pays",
        currencySelectDefault: "-- Auto-sélectionné --",

        // Group Launch Details
        groupLaunchDetails: "Détails du Lancement de Groupe",
        potentialGroups: "Nombre de Nouveaux Groupes/Leaders Potentiels",
        curriculumCopies: "Copies de Curriculum Nécessaires",
        ministryAgreementCopies: "Copies d'Accords de Ministère Nécessaires",
        specialRequests: "Demandes Spéciales",
        specialRequestsPlaceholder: "par ex., Message vidéo du GMD, Participation par appel, Lettre du leadership",

        // Leadership Training Details
        leadershipTrainingDetails: "Détails de la Formation de Leadership",
        attendingLeaders: "Leaders Participants",
        attendingLeadersPlaceholder: `Listez les noms des leaders et les groupes qu'ils représentent:
par ex.,
Sarah - Groupe 1 de Nairobi
Mary - Leaders de Kisumu
Grace - Communauté de Machakos`,
        trainingTopics: "Sujets de Formation",
        trainingHandbook: "Manuel de Leadership, Mission et Vision",
        trainingCurriculum: "Ressources Curriculaires Mondiales",
        trainingMeetup: "Aspects Clés d'une Rencontre",
        trainingOnline: "Ressources en Ligne MomCo",
        trainingGeneral: "Formation Générale de Leadership",
        trainingCertification: "Certification de Leadership",
        trainingOtherOption: "Autre (préciser ci-dessous)",
        otherTrainingTopics: "Autres Sujets de Formation",
        otherTrainingPlaceholder: "Précisez d'autres sujets si sélectionnés ci-dessus",
        logisticsNeeds: "Transport, Hébergement ou Plans de Repas",
        logisticsPlaceholder: `Décrivez les besoins logistiques spéciaux:
par ex., Transport depuis les zones rurales, Hébergement pour 2 nuits, Repas pour 20 personnes`,

        // Group Care Details
        groupCareDetails: "Détails des Soins aux Groupes",
        groupName: "Nom du Groupe / Lieu",
        groupNamePlaceholder: "par ex., Groupe des Leaders de Kisumu",
        groupLeader: "Leader du Groupe",
        groupLeaderPlaceholder: "par ex., Sarah Mwangi",
        momsInGroup: "Nombre de Mamans dans le Groupe",
        groupStatus: "Statut du Groupe",
        statusGreen: "Vert - En Bonne Santé",
        statusGreenDesc: "Se réunit régulièrement, utilise le curriculum, leaders formés, prospère",
        statusYellow: "Jaune - En Difficulté",
        statusYellowDesc: "Problèmes de leadership, n'utilise pas le curriculum, réunions irrégulières",
        statusRed: "Rouge - À Risque",
        statusRedDesc: "Ne se réunit pas, sans réponse depuis 4+ mois, risque de fermeture",
        statusExplanation: "Expliquer la Raison de ce Statut",
        statusExplanationPlaceholder: "Décrivez la situation actuelle de ce groupe...",
        supportNeeded: "Soutien Nécessaire",
        supportNeededPlaceholder: "Quelle assistance ou quelles ressources ce groupe a-t-il besoin?",
        fundingPurpose: "Objectif de la Demande de Financement (si demande de fonds)",
        fundingPurposePlaceholder: "Optionnel - Exemples: Matériels curriculaires, Événement d'encouragement des leaders, Location de salle de réunion, Assistance au transport, Soutien d'urgence",
        fundingPurposeHelp: "Laisser vide s'il s'agit uniquement de surveillance (pas de financement nécessaire)",
        groupCareNote: "Note: Les demandes de soins aux groupes peuvent être soumises avec ou sans financement. Si vous signalez uniquement le statut du groupe sans demander de fonds, laissez la section budget vide.",

        // Other Request Details
        otherDetails: "Détails de la Demande Autre",
        purposeDescription: "Objectif / Description",
        purposePlaceholder: `Expliquez à quoi serviront les fonds:
Exemples:
- Impression de curriculum pour plusieurs groupes
- Soutien du coordinateur régional pour T1
- Services de traduction
- Besoins opérationnels d'urgence`,
        timePeriod: "Période Couverte",
        timePeriodPlaceholder: "par ex., T1 2025, Annuel 2025, Semestre 2025",
        groupsSupported: "Groupes ou Activités Soutenus",
        groupsSupportedPlaceholder: "Listez quels groupes ou activités ces fonds soutiendront...",

        // Additional Information
        additionalInfo: "Informations Supplémentaires",
        notes: "Notes ou Commentaires",
        notesPlaceholder: "Toute autre information que vous souhaitez partager...",

        // Buttons
        submitRequest: "Soumettre la Demande",
        clearForm: "Effacer le Formulaire",

        // Footer
        footerText: "© 2025 MomCo Afrique. Tous droits réservés.",

        // Validation Messages
        requiredField: "Ce champ est obligatoire",
        invalidEmail: "Veuillez entrer une adresse email valide",
        fundsDateError: "La date limite des fonds doit être avant la date de l'événement",
        fundsDateWarning: "Attention: Seulement {days} jours entre le financement et l'événement. Recommandé: 2-3 semaines minimum.",
        nameWarning: "Généralement, seul le prénom est nécessaire (les prénoms composés comme \"Faith Rose\" sont OK)",

        // Success/Error Messages
        submitSuccess: "✓ Demande soumise avec succès!",
        submitError: "Veuillez corriger les erreurs de validation avant de soumettre.",
        generatedFilename: "Nom de fichier généré:",
        productionNote: `En production, cela:
• Générerait un PDF avec les détails de votre demande
• Sauvegarderait sur Google Drive
• Mettrait à jour la feuille de calcul de suivi
• Enverrait des notifications par email au GMD et à vous

Pour l'instant, vérifiez la console du navigateur pour voir vos données soumises.`
    },

    pt: {
        // Header
        title: "MomCo África",
        subtitle: "Portal de Solicitação de Eventos",
        description: "Envie solicitações de financiamento para eventos e apoio a grupos",

        // Language Toggle
        languageLabel: "Idioma / Language / Langue:",

        // Event Type Selection
        selectEventType: "Selecionar Tipo de Evento",
        groupLaunchTitle: "Lançamento de Grupo / Divulgação",
        groupLaunchDesc: "Lançar novos grupos MomCo e apresentar missão a líderes em potencial",
        leadershipTrainingTitle: "Treinamento de Liderança",
        leadershipTrainingDesc: "Treinamento para líderes existentes, construção de equipe e definição de metas",
        groupCareTitle: "Cuidado de Grupo",
        groupCareDesc: "Apoio e monitoramento de grupos existentes (financiamento opcional)",
        otherTitle: "Outro",
        otherDesc: "Despesas operacionais (currículo, coordenação, etc.)",

        // Requester Information
        requesterInfo: "Informações do Solicitante",
        firstName: "Primeiro Nome",
        firstNamePlaceholder: "ex., Julie, Faith Rose",
        firstNameHelp: "Nomes compostos como \"Faith Rose\" são OK",
        lastName: "Sobrenome",
        lastNamePlaceholder: "ex., Pemba, Balica",
        country: "País",
        selectCountry: "-- Selecionar País --",
        email: "E-mail",
        whatsapp: "Número do WhatsApp",

        // Event Details
        eventDetails: "Detalhes do Evento",
        location: "Local / Espaço",
        locationPlaceholder: "ex., Nairobi, Igreja Comunitária de Kisumu",
        eventDate: "Data do Evento",
        eventDateHelp: "Quando o evento ocorrerá?",
        fundsNeededDate: "Data Limite para Fundos",
        fundsNeededHelp: "Pelo menos 2-3 semanas antes do evento",
        participantsExpected: "Número de Participantes Esperados",
        sendFundsTo: "Enviar Fundos Para",
        sendFundsToHelp: "Pode ser diferente do solicitante",
        sendFundsToPlaceholder: "Nome da pessoa que receberá a transferência",

        // Event Agenda
        eventAgenda: "Agenda do Evento",
        agendaLabel: "Agenda do Evento",
        agendaPlaceholder: `Exemplo:
9:00 - Boas-vindas e adoração
10:00 - Apresentação da missão MomCo
11:00 - Visão geral do currículo
12:00 - Perguntas e respostas e inscrição
13:00 - Encerramento`,
        agendaHelp: "Liste a programação do evento com horários e atividades",
        loadGroupLaunchTemplate: "Carregar Modelo de Lançamento de Grupo",
        loadLeadershipTemplate: "Carregar Modelo de Treinamento de Liderança",

        // Budget Request
        budgetRequest: "Solicitação de Orçamento",
        itemizedBudget: "Orçamento Detalhado",
        budgetPlaceholder: `Exemplo:
Impressão de currículo: 5.000 KSH
Lanches e refrescos: 3.000 KSH
Transporte para líderes: 2.000 KSH
Aluguel de espaço: 1.500 KSH
Total: 11.500 KSH`,
        budgetHelp: "Liste cada item do orçamento com valores",
        totalAmountRequested: "Valor Total Solicitado",
        currency: "Moeda",
        currencyAutoSelected: "Selecionado automaticamente com base no país",
        currencySelectDefault: "-- Auto-selecionado --",

        // Group Launch Details
        groupLaunchDetails: "Detalhes do Lançamento de Grupo",
        potentialGroups: "Número de Novos Grupos/Líderes Potenciais",
        curriculumCopies: "Cópias de Currículo Necessárias",
        ministryAgreementCopies: "Cópias de Acordos de Ministério Necessárias",
        specialRequests: "Solicitações Especiais",
        specialRequestsPlaceholder: "ex., Mensagem em vídeo do GMD, Participação por chamada, Carta da liderança",

        // Leadership Training Details
        leadershipTrainingDetails: "Detalhes do Treinamento de Liderança",
        attendingLeaders: "Líderes Participantes",
        attendingLeadersPlaceholder: `Liste os nomes dos líderes e os grupos que representam:
ex.,
Sarah - Grupo 1 de Nairobi
Mary - Líderes de Kisumu
Grace - Comunidade de Machakos`,
        trainingTopics: "Tópicos de Treinamento",
        trainingHandbook: "Manual de Liderança, Missão e Visão",
        trainingCurriculum: "Recursos Curriculares Globais",
        trainingMeetup: "Aspectos Principais de um Encontro",
        trainingOnline: "Recursos Online MomCo",
        trainingGeneral: "Treinamento Geral de Liderança",
        trainingCertification: "Certificação de Liderança",
        trainingOtherOption: "Outro (especificar abaixo)",
        otherTrainingTopics: "Outros Tópicos de Treinamento",
        otherTrainingPlaceholder: "Especifique outros tópicos se selecionados acima",
        logisticsNeeds: "Transporte, Hospedagem ou Refeições",
        logisticsPlaceholder: `Descreva necessidades logísticas especiais:
ex., Transporte de áreas rurais, Hospedagem para 2 noites, Refeições para 20 pessoas`,

        // Group Care Details
        groupCareDetails: "Detalhes do Cuidado de Grupo",
        groupName: "Nome do Grupo / Local",
        groupNamePlaceholder: "ex., Grupo de Líderes de Kisumu",
        groupLeader: "Líder do Grupo",
        groupLeaderPlaceholder: "ex., Sarah Mwangi",
        momsInGroup: "Número de Mães no Grupo",
        groupStatus: "Status do Grupo",
        statusGreen: "Verde - Saudável",
        statusGreenDesc: "Reunindo-se regularmente, usando currículo, líderes treinados, prosperando",
        statusYellow: "Amarelo - Com Dificuldades",
        statusYellowDesc: "Problemas de liderança, não usando currículo, reuniões irregulares",
        statusRed: "Vermelho - Em Risco",
        statusRedDesc: "Não se reunindo, sem resposta há 4+ meses, provavelmente fechará",
        statusExplanation: "Explicar o Motivo Deste Status",
        statusExplanationPlaceholder: "Descreva a situação atual deste grupo...",
        supportNeeded: "Apoio Necessário",
        supportNeededPlaceholder: "Que assistência ou recursos este grupo precisa?",
        fundingPurpose: "Objetivo da Solicitação de Financiamento (se solicitando fundos)",
        fundingPurposePlaceholder: "Opcional - Exemplos: Materiais curriculares, Evento de encorajamento de líderes, Aluguel de espaço, Assistência de transporte, Apoio de emergência",
        fundingPurposeHelp: "Deixe em branco se for apenas monitoramento (sem necessidade de financiamento)",
        groupCareNote: "Nota: Solicitações de cuidado de grupo podem ser enviadas com ou sem financiamento. Se você está apenas relatando o status do grupo sem solicitar fundos, deixe a seção de orçamento vazia.",

        // Other Request Details
        otherDetails: "Detalhes de Outra Solicitação",
        purposeDescription: "Objetivo / Descrição",
        purposePlaceholder: `Explique para que os fundos serão usados:
Exemplos:
- Impressão de currículo para vários grupos
- Apoio ao coordenador regional para T1
- Serviços de tradução
- Necessidades operacionais de emergência`,
        timePeriod: "Período Coberto",
        timePeriodPlaceholder: "ex., T1 2025, Anual 2025, Semestre 2025",
        groupsSupported: "Grupos ou Atividades Apoiados",
        groupsSupportedPlaceholder: "Liste quais grupos ou atividades esses fundos apoiarão...",

        // Additional Information
        additionalInfo: "Informações Adicionais",
        notes: "Notas ou Comentários",
        notesPlaceholder: "Qualquer outra informação que você gostaria de compartilhar...",

        // Buttons
        submitRequest: "Enviar Solicitação",
        clearForm: "Limpar Formulário",

        // Footer
        footerText: "© 2025 MomCo África. Todos os direitos reservados.",

        // Validation Messages
        requiredField: "Este campo é obrigatório",
        invalidEmail: "Por favor, insira um endereço de e-mail válido",
        fundsDateError: "A data limite dos fundos deve ser antes da data do evento",
        fundsDateWarning: "Aviso: Apenas {days} dias entre financiamento e evento. Recomendado: mínimo de 2-3 semanas.",
        nameWarning: "Normalmente apenas o primeiro nome é necessário (nomes compostos como \"Faith Rose\" são OK)",

        // Success/Error Messages
        submitSuccess: "✓ Solicitação enviada com sucesso!",
        submitError: "Por favor, corrija os erros de validação antes de enviar.",
        generatedFilename: "Nome do arquivo gerado:",
        productionNote: `Em produção, isso:
• Geraria um PDF com os detalhes da sua solicitação
• Salvaria no Google Drive
• Atualizaria a planilha de rastreamento
• Enviaria notificações por e-mail para GMD e você

Por enquanto, verifique o console do navegador para ver seus dados enviados.`
    }
};

// Agenda templates in all three languages
const agendaTemplates = {
    en: {
        groupLaunch: `9:00 AM - Welcome and worship
10:00 AM - MomCo mission and vision presentation
11:00 AM - Curriculum overview and sample materials
12:00 PM - Q&A session
1:00 PM - Ministry agreement signing and registration
2:00 PM - Closing prayer and next steps`,

        leadershipTraining: `9:00 AM - Welcome and worship
9:30 AM - Team building activity
10:30 AM - Leadership handbook and mission review
12:00 PM - Lunch break
1:00 PM - Training session: Key aspects of a meetup
2:30 PM - Regional goal setting and action planning
4:00 PM - Q&A and closing`
    },

    fr: {
        groupLaunch: `9h00 - Accueil et louange
10h00 - Présentation de la mission et vision de MomCo
11h00 - Aperçu du curriculum et matériels d'exemple
12h00 - Session de questions/réponses
13h00 - Signature des accords de ministère et inscription
14h00 - Prière de clôture et prochaines étapes`,

        leadershipTraining: `9h00 - Accueil et louange
9h30 - Activité de team building
10h30 - Manuel de leadership et révision de la mission
12h00 - Pause déjeuner
13h00 - Session de formation: Aspects clés d'une rencontre
14h30 - Définition d'objectifs régionaux et planification d'actions
16h00 - Questions/réponses et clôture`
    },

    pt: {
        groupLaunch: `9:00 - Boas-vindas e adoração
10:00 - Apresentação da missão e visão MomCo
11:00 - Visão geral do currículo e materiais de amostra
12:00 - Sessão de perguntas e respostas
13:00 - Assinatura de acordos de ministério e inscrição
14:00 - Oração de encerramento e próximos passos`,

        leadershipTraining: `9:00 - Boas-vindas e adoração
9:30 - Atividade de construção de equipe
10:30 - Manual de liderança e revisão da missão
12:00 - Intervalo para almoço
13:00 - Sessão de treinamento: Aspectos principais de um encontro
14:30 - Definição de metas regionais e planejamento de ações
16:00 - Perguntas e respostas e encerramento`
    }
};
