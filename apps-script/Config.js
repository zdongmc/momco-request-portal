/**
 * Configuration for MomCo Portal Backend
 *
 * IMPORTANT: Update the folder IDs after creating folders in Google Drive
 */

const CONFIG = {
  // Spreadsheet ID from the URL
  spreadsheetId: '1dDJM46C6qRKNHcydvDp76kwHWXYqT9ks-3InxN7Cjb0',

  // Google Drive folder IDs
  folders: {
    eventRequests: '1dp-dvB_QXR44uRZ7vsFDpscnwYcB8ml1',
    postEventReports: '1Zw9A7YbPC21pTBIQ0fi8WwUcGTMxPOxD',
    transferReceipts: '1GXYLA8rx2akv9X0YWBoLHwAFNG-L2lji'
  },

  // Sheet names (must match your spreadsheet tabs)
  sheets: {
    allEvents: 'All Events',
    fundTransfers: 'Fund Transfers',
    eventReports: 'Event Reports',
    dashboard: 'Dashboard'
  }
};
