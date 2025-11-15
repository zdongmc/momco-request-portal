/**
 * MomCo Africa Portal - Google Apps Script Backend
 * Handles form submissions, data storage, and API endpoints
 *
 * Configuration is loaded from Config.gs
 */

/**
 * Web app entry point - handles GET and POST requests
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;

    switch(action) {
      case 'submitRequest':
        return handleRequestSubmission(data);

      case 'submitReport':
        return handleReportSubmission(data);

      case 'getOpenRequests':
        return getOpenRequestsForRequester(data.country, data.requester);

      default:
        return createResponse(false, 'Unknown action');
    }
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return createResponse(false, 'Server error: ' + error.toString());
  }
}

function doGet(e) {
  const action = e.parameter.action;

  try {
    switch(action) {
      case 'getOpenRequests':
        return getOpenRequestsForRequester(e.parameter.country, e.parameter.requester);

      case 'getRequesters':
        return getRequestersByCountry(e.parameter.country);

      default:
        return createResponse(false, 'Unknown action');
    }
  } catch (error) {
    Logger.log('Error in doGet: ' + error.toString());
    return createResponse(false, 'Server error: ' + error.toString());
  }
}

/**
 * Create JSON response
 */
function createResponse(success, message, data = null) {
  const response = {
    success: success,
    message: message,
    data: data
  };

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle event request form submission
 */
function handleRequestSubmission(data) {
  try {
    const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
    const sheet = ss.getSheetByName('All Events');

    if (!sheet) {
      throw new Error('All Events sheet not found');
    }

    // Generate filename for request document
    const filename = generateRequestFilename(data);

    // Prepare row data for All Events sheet
    const rowData = [
      data.requesterName || '',                    // A: Requester
      data.country || '',                          // B: Country
      data.eventType || '',                        // C: Type of event
      new Date(),                                  // D: Date of request
      data.eventDate || '',                        // E: Proposed date of event
      data.participantsExpected || '',             // F: Participants expected
      data.amountRequested || '',                  // G: Amount requested
      data.currency || '',                         // H: Currency requested
      data.fundsNeededDate || '',                  // I: Date funds needed by
      filename,                                    // J: Request document
      '',                                          // K: Date funds sent
      '',                                          // L: Amount sent-local currency
      '',                                          // M: Date of actual event
      '',                                          // N: Actual participants
      '',                                          // O: Group launch Ministry Agreements
      '',                                          // P: Post-event report
      '',                                          // Q: Notes
      ''                                           // R: Red flags
    ];

    // Append to sheet
    sheet.appendRow(rowData);

    // Upload any files to Google Drive
    if (data.files && data.files.length > 0) {
      uploadFilesToDrive(data.files, CONFIG.folders.eventRequests, filename);
    }

    return createResponse(true, 'Request submitted successfully', {
      filename: filename,
      rowNumber: sheet.getLastRow()
    });

  } catch (error) {
    Logger.log('Error in handleRequestSubmission: ' + error.toString());
    return createResponse(false, 'Failed to submit request: ' + error.toString());
  }
}

/**
 * Handle post-event report form submission
 */
function handleReportSubmission(data) {
  try {
    const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
    const allEventsSheet = ss.getSheetByName('All Events');

    if (!allEventsSheet) {
      throw new Error('All Events sheet not found');
    }

    // Find the matching request row
    const requestRow = findRequestRow(data.requestId, data.country, data.requesterName);

    if (!requestRow) {
      return createResponse(false, 'Could not find matching request');
    }

    // Generate filename for report
    const filename = generateReportFilename(data);

    // Update the All Events row with report data
    updateRequestWithReport(allEventsSheet, requestRow, data, filename);

    // Add to Event Reports sheet
    addToEventReportsSheet(ss, data, filename);

    // Upload files to Google Drive
    if (data.files && data.files.length > 0) {
      uploadFilesToDrive(data.files, CONFIG.folders.postEventReports, filename);
    }

    return createResponse(true, 'Report submitted successfully', {
      filename: filename,
      rowNumber: requestRow
    });

  } catch (error) {
    Logger.log('Error in handleReportSubmission: ' + error.toString());
    return createResponse(false, 'Failed to submit report: ' + error.toString());
  }
}

/**
 * Get open requests for a specific requester
 */
function getOpenRequestsForRequester(country, requester) {
  try {
    const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
    const sheet = ss.getSheetByName('All Events');

    if (!sheet) {
      throw new Error('All Events sheet not found');
    }

    const data = sheet.getDataRange().getValues();
    const openRequests = [];

    // Skip header row, iterate through data
    for (let i = 1; i < data.length; i++) {
      const row = data[i];

      // Check if this row matches the requester and country
      // and has funds sent (column K) but no report (column P)
      if (row[0] === requester &&
          row[1] === country &&
          row[10] !== '' &&  // Has date funds sent
          row[15] === '') {  // No post-event report

        openRequests.push({
          id: 'row_' + (i + 1),
          eventType: row[2],
          location: extractLocation(row[16]), // Extract from notes if available
          venue: '',
          eventDate: row[4],
          participantsExpected: row[5],
          amountRequested: row[6],
          currency: row[7],
          country: row[1],
          requester: row[0]
        });
      }
    }

    return createResponse(true, 'Open requests retrieved', openRequests);

  } catch (error) {
    Logger.log('Error in getOpenRequestsForRequester: ' + error.toString());
    return createResponse(false, 'Failed to get open requests: ' + error.toString());
  }
}

/**
 * Get list of requesters for a specific country
 */
function getRequestersByCountry(country) {
  try {
    const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
    const sheet = ss.getSheetByName('All Events');

    if (!sheet) {
      throw new Error('All Events sheet not found');
    }

    const data = sheet.getDataRange().getValues();
    const requesters = new Set();

    // Skip header row
    for (let i = 1; i < data.length; i++) {
      if (data[i][1] === country) {
        requesters.add(data[i][0]);
      }
    }

    return createResponse(true, 'Requesters retrieved', Array.from(requesters));

  } catch (error) {
    Logger.log('Error in getRequestersByCountry: ' + error.toString());
    return createResponse(false, 'Failed to get requesters: ' + error.toString());
  }
}

/**
 * Find request row by ID or by matching country/requester
 */
function findRequestRow(requestId, country, requester) {
  if (requestId && requestId.startsWith('row_')) {
    return parseInt(requestId.replace('row_', ''));
  }

  // Fallback: search by country and requester
  const ss = SpreadsheetApp.openById(CONFIG.spreadsheetId);
  const sheet = ss.getSheetByName('All Events');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === requester && data[i][1] === country && data[i][15] === '') {
      return i + 1;
    }
  }

  return null;
}

/**
 * Update All Events row with report data
 */
function updateRequestWithReport(sheet, rowNumber, data, filename) {
  // Column M: Date of actual event
  if (data.actualEventDate) {
    sheet.getRange(rowNumber, 13).setValue(data.actualEventDate);
  }

  // Column N: Actual participants
  if (data.actualParticipants) {
    sheet.getRange(rowNumber, 14).setValue(data.actualParticipants);
  }

  // Column O: Ministry Agreements (for group launches)
  if (data.ministryAgreementsSigned) {
    sheet.getRange(rowNumber, 15).setValue(data.ministryAgreementsSigned);
  }

  // Column P: Post-event report filename
  sheet.getRange(rowNumber, 16).setValue(filename);
}

/**
 * Add report to Event Reports sheet
 */
function addToEventReportsSheet(ss, data, filename) {
  let sheet = ss.getSheetByName('Event Reports');

  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet('Event Reports');
    // Add headers
    sheet.appendRow([
      'Country',
      'Requester',
      'Event Type',
      'Actual Event Date',
      'Actual Participants',
      'Location',
      'Ministry Agreements',
      'Report Filename',
      'Submitted Date'
    ]);
  }

  const rowData = [
    data.country || '',
    data.requesterName || '',
    data.eventType || '',
    data.actualEventDate || '',
    data.actualParticipants || '',
    data.actualLocation || '',
    data.ministryAgreementsSigned || '',
    filename,
    new Date()
  ];

  sheet.appendRow(rowData);
}

/**
 * Generate standardized filename for request
 */
function generateRequestFilename(data) {
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
    default:
      eventType = 'Event Request';
  }

  return `${month}. ${monthName} ${year} - ${country} - ${name} - ${eventType}.pdf`;
}

/**
 * Generate standardized filename for report
 */
function generateReportFilename(data) {
  const date = data.actualEventDate ? new Date(data.actualEventDate) : new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const monthName = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  const country = data.country || 'Unknown';
  const name = data.requesterName || 'Unknown';

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
 * Upload files to Google Drive
 */
function uploadFilesToDrive(files, folderId, baseFilename) {
  const folder = DriveApp.getFolderById(folderId);

  files.forEach((file, index) => {
    const blob = Utilities.newBlob(
      Utilities.base64Decode(file.data),
      file.mimeType,
      file.name
    );

    folder.createFile(blob);
  });
}

/**
 * Extract location from notes field (helper function)
 */
function extractLocation(notes) {
  // Simple extraction - can be enhanced based on actual data format
  return '';
}
