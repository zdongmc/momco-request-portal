# MomCo Portal - Backend Setup Complete! ✅

## What's Been Set Up

### 1. Google Drive Structure
- **Event Requests** folder: `1dp-dvB_QXR44uRZ7vsFDpscnwYcB8ml1`
- **Post-Event Reports** folder: `1Zw9A7YbPC21pTBIQ0fi8WwUcGTMxPOxD`
- **Transfer Receipts** folder: `1GXYLA8rx2akv9X0YWBoLHwAFNG-L2lji`

### 2. Google Sheets Tracking Spreadsheet
- Spreadsheet ID: `1dDJM46C6qRKNHcydvDp76kwHWXYqT9ks-3InxN7Cjb0`
- URL: https://docs.google.com/spreadsheets/d/1dDJM46C6qRKNHcydvDp76kwHWXYqT9ks-3InxN7Cjb0/edit

### 3. Google Apps Script Backend
- Project URL: https://script.google.com/d/1wbHk7Clm-HJeGFHXmjwHrV8J7eiEygGYDfeza9ldDBABpsRCZzuuBadp/edit
- **Web App URL**: https://script.google.com/macros/s/AKfycbx8GlRD6ST__7HbizetVN7m3GN30eIqEdWfbkEP6HqSj3kOfuLtvid4b3q-73PbiPgY6A/exec

### 4. Frontend Integration
- ✅ API configuration added (`api-config.js`)
- ✅ Request form connected to backend
- ✅ Report form connected to backend
- ✅ Real-time fetching of open requests from Google Sheets

## How It Works Now

### Request Form Flow:
1. User fills out event request form
2. On submit → Data sent to Google Apps Script
3. Apps Script creates new row in "All Events" spreadsheet
4. Files uploaded to "Event Requests" Drive folder
5. User receives confirmation

### Report Form Flow:
1. User selects Country
2. User selects Requester → **Fetches requesters from spreadsheet**
3. User selects Event → **Fetches open requests from spreadsheet**
4. Form pre-populates with request data (date, location, participants, amount, currency)
5. User updates with actual outcomes
6. On submit → Apps Script updates the request row with report data
7. Files uploaded to "Post-Event Reports" Drive folder

## Testing the Backend

### Test the API directly:

**Get Open Requests:**
```bash
curl "https://script.google.com/macros/s/AKfycbx8GlRD6ST__7HbizetVN7m3GN30eIqEdWfbkEP6HqSj3kOfuLtvid4b3q-73PbiPgY6A/exec?action=getOpenRequests&country=Kenya&requester=Julie"
```

**Get Requesters by Country:**
```bash
curl "https://script.google.com/macros/s/AKfycbx8GlRD6ST__7HbizetVN7m3GN30eIqEdWfbkEP6HqSj3kOfuLtvid4b3q-73PbiPgY6A/exec?action=getRequesters&country=Kenya"
```

## Next Steps

### To Add Test Data:
1. Open the spreadsheet
2. Add a few test rows to "All Events" sheet:
   - Add requester name, country, event type, date, etc.
   - Add a "Date funds sent" (column K) but leave "Post-event report" (column P) empty
   - These will show up as "open requests" in the report form

### To Test the Full Flow:
1. Open `request-form.html` in browser
2. Fill out a request and submit
3. Check the spreadsheet - new row should appear
4. Open `post-event-report.html`
5. Select country and requester
6. You should see the request in the dropdown!
7. Select it and the form should pre-populate

## Files Structure

```
request-portal/
├── index.html                  # Landing page
├── request-form.html           # Event request form
├── post-event-report.html      # Post-event report form
├── api-config.js               # Backend API configuration ⭐ NEW
├── script.js                   # Request form JavaScript
├── script-report.js            # Report form JavaScript (updated with API calls)
├── translations.js             # English/French/Portuguese translations
├── translations-report.js      # Report form translations
├── country-requester-data.js   # Country/requester mappings
├── styles.css                  # Styles with MomCo branding
└── apps-script/                # Backend code
    ├── Code.gs                 # Main backend logic
    ├── Config.gs               # Configuration
    ├── appsscript.json         # Project manifest
    └── README.md               # Deployment instructions
```

## Account Info
- Google Account: momcoafrica@gmail.com
- Logged in with clasp: ✅

## Backend Features

✅ **Request Submission**: Save requests to spreadsheet
✅ **Report Submission**: Update requests with report data
✅ **Get Open Requests**: Fetch requests that need reports
✅ **Get Requesters**: Fetch requesters by country
✅ **File Upload**: Upload files to Google Drive
✅ **Filename Generation**: Standardized naming convention
✅ **Data Pre-population**: Auto-fill report forms from requests

## What's Working

- Frontend forms are styled with MomCo branding
- Multi-language support (English, French, Portuguese)
- Backend is deployed and accessible
- API is connected to frontend
- Mock data fallback for testing

## Status: READY FOR TESTING! 🎉
