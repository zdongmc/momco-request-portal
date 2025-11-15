# MomCo Portal - Google Apps Script Backend

## Setup Instructions

### 1. Get Folder IDs from Google Drive

You need to get the Folder IDs for the three folders you created:

1. Open Google Drive (drive.google.com)
2. Navigate to each folder
3. Copy the Folder ID from the URL

**Example URL:** `https://drive.google.com/drive/folders/1ABcDEfGHIjKLmnOPqRsTUvWxYz`

The Folder ID is the long string after `/folders/`: `1ABcDEfGHIjKLmnOPqRsTUvWxYz`

**Update Config.gs with your Folder IDs:**
- Event Requests folder ID
- Post-Event Reports folder ID
- Transfer Receipts folder ID

### 2. Deploy with clasp

From the `apps-script` directory:

```bash
# Login to clasp (if not already logged in)
clasp login

# Create a new Apps Script project
clasp create --title "MomCo Portal Backend" --type standalone

# Push the code to Apps Script
clasp push

# Open the project in the browser
clasp open
```

### 3. Deploy as Web App

After pushing the code:

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click **Select type** → **Web app**
3. Fill in:
   - **Description**: "MomCo Portal API"
   - **Execute as**: Me (your account)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the Web App URL** - you'll need this for the frontend

The URL will look like: `https://script.google.com/macros/s/DEPLOYMENT_ID/exec`

### 4. Update Frontend

Update the frontend JavaScript files to use your Web App URL:

```javascript
const API_URL = 'YOUR_WEB_APP_URL_HERE';
```

## Files

- **Code.gs** - Main backend logic
- **Config.gs** - Configuration (spreadsheet ID, folder IDs)
- **appsscript.json** - Project manifest

## API Endpoints

### POST Endpoints

**Submit Event Request:**
```
POST /exec
{
  "action": "submitRequest",
  "requesterName": "...",
  "country": "...",
  ...
}
```

**Submit Event Report:**
```
POST /exec
{
  "action": "submitReport",
  "requestId": "...",
  "country": "...",
  ...
}
```

### GET Endpoints

**Get Open Requests:**
```
GET /exec?action=getOpenRequests&country=Kenya&requester=Julie
```

**Get Requesters by Country:**
```
GET /exec?action=getRequesters&country=Kenya
```

## Next Steps

1. Update folder IDs in Config.gs
2. Deploy using clasp
3. Test endpoints
4. Update frontend with Web App URL
