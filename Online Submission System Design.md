# MomCo Africa Event Request & Report Portal - Online Submission System

## Overview
A GitHub Pages-hosted web application that allows MomCo Africa leaders to submit event requests and post-event reports online through standardized forms. The system handles both pre-event funding requests and post-event reporting, automating formatting, validation, and integration with the existing budget tracking workflow.

## Purpose
- Standardize event request and report submissions across all African regions
- Reduce manual reformatting and data entry
- Validate requests before submission (budget, timing, completeness)
- Streamline the approval, tracking, and reporting process
- Enable complete event lifecycle tracking (request → approval → payment → event → report)
- Provide mobile-friendly access for leaders in the field
- Monitor ongoing group health and status

## Four Main Event Types

### 1. Group Launch / Outreach Request & Report Forms
For events focused on launching new MomCo groups, presenting MomCo mission and vision to potential leaders, and recruiting new groups.

### 2. Leadership Training Request & Report Forms
For events focused on training existing leaders, team building, encouragement, and regional goal setting.

### 3. Group Care Request & Report Forms
For ongoing monitoring and support of existing groups, tracking group health status (Red/Yellow/Green), and identifying groups that need assistance. Can include funding requests for group support activities (curriculum materials, leader training, meeting supplies, etc.).

### 4. Other Request Form
For operational and administrative expenses that count against budget but are not specific events (curriculum printing, regional coordination costs, bundled operational funding, emergency expenses).

---

## Form Structure

### EVENT REQUEST FORMS

Request forms are submitted **before** events to request funding. They create entries in the "All Events" tab of the tracking spreadsheet.

#### Common Fields (All Event Request Types)

##### Requester Information
- **Name**: First name only (auto-validated against naming standards)
- **Country**: Dropdown (all African countries in system)
- **Region**: Auto-populated based on country selection
- **Contact Information**: Email, WhatsApp number

##### Event Details
- **Event Type**: Dropdown selection (determines form template and required fields)
  - Group Launch / Outreach
  - Leadership Training
  - Other
- **Date of Event**: Date picker (validates against timeline requirements)
- **Date Funds Needed**: Date picker with validation
  - Must be at least 2 weeks before event for Group Launch
  - Must be at least 3 weeks before event for Leadership Training
- **Location/Venue**: Text field (city/church name)
- **Number of Participants Expected**: Number field
- **Send Funds To**: Name of person who will receive the transfer (may differ from requester)

##### Event Agenda

**Implementation Option A: Simple (Phase 1 - MVP)**
- **Event Agenda**: Long text area
- Users can type or paste their agenda in free-form
- Provides sample templates they can copy/edit

**Implementation Option B: Structured (Phase 2 - Advanced)**
- **Agenda Builder**: Dynamic table with time slots and activities
- Add/remove rows functionality
- Pre-populated templates based on sample agendas:
  - **Group Launch template**: Worship, mission presentation, curriculum overview, Q&A, registration
  - **Leadership Training template**: Worship, team building, training, goal setting, Q&A
- Time field + Activity description for each row

##### Budget Request

**Implementation Option A: Simple (Phase 1 - MVP)**
- **Event Budget**: Text area (short paragraph)
- Users can type or paste their itemized budget
- Example format provided: "Curriculum: 5,000 KSH, Snacks: 3,000 KSH, Transportation: 2,000 KSH"
- **Amount Requested**: Number field (currency auto-selected based on country)
- **Currency**: Auto-selected based on country (KSH, GHS, USD, XOF, UGX, RWF, etc.)

**Implementation Option B: Structured (Phase 2 - Advanced)**
- **Line Item Builder**: Dynamic table with add/remove rows
  - Item name (e.g., "Curriculum printing", "Snacks", "Transportation")
  - Quantity
  - Unit cost
  - Total (auto-calculated)
- **Currency**: Auto-selected based on country (KSH, GHS, USD, XOF, UGX, RWF, etc.)
- **Total Requested**: Auto-calculated sum of all line items
- Pre-populated common budget items as dropdown suggestions:
  - Curriculum printing
  - Ministry Agreement printing
  - Snacks/Food
  - Meals (breakfast, lunch, dinner)
  - Transportation
  - Lodging
  - Communication charges

**Recommendation**: Start with **Option A** (simple text-based) for faster implementation and easier user adoption, then upgrade to **Option B** (structured tables) in Phase 2 based on user feedback.

#### Group Launch / Outreach Specific Fields (Request Form)
- **Number of Potential New Groups/Leaders**: Number field
- **Curriculum Copies Needed**: Number field
- **Ministry Agreement Copies Needed**: Number field
- **Special Requests**: Text area (optional)
  - Video message from GMD?
  - Call-in participation?
  - Letter from leadership?

#### Leadership Training Specific Fields (Request Form)
- **Attending Leaders**: Text area (list of leader names and groups they represent)
- **Training Topics**: Checkboxes
  - ☐ Leadership Handbook, Mission & Vision
  - ☐ Global Curriculum resources
  - ☐ Key aspects of a meetup
  - ☐ MomCo online resources
  - ☐ General leadership training
  - ☐ Leadership certification
  - ☐ Other (specify)
- **Transportation Needs**: Text area (optional)
- **Lodging Needs**: Text area (optional)
- **Meal Plans**: Text area (optional)

#### Other Request Specific Fields
- **Purpose/Description**: Text area explaining what the funds will be used for
  - Examples: Curriculum printing for multiple groups, Regional coordinator support for Q1, Translation services, Emergency operational needs
- **Time Period Covered**: Text field (if applicable)
  - Examples: "Q1 2025", "Annual 2025", "Half Year 2025"
- **Groups/Activities Supported**: Text area listing what groups or activities these funds support

#### Group Care Request Specific Fields
- **Group Name/Location**: Text field
- **Group Leader**: Text field (name of current leader)
- **# of Moms in Group**: Number field (current active participants)
- **Group Status**: Radio buttons with color-coded system
  - 🟢 **Green**: This group has healthy leaders and meets regularly. They are using MomCo curriculum, leaders are completing recommended training, and they are thriving.
  - 🟡 **Yellow**: This group is struggling. They may not be following the mission of MomCo, are not using our curriculum, may be having leadership issues, or they are not able to meet regularly (due to security issues, no meeting location, etc.).
  - 🔴 **Red**: This group is likely to close. They have not been meeting or have been unresponsive for four or more months.
- **Explain reason for this status**: Text area
- **Support Needed**: Text area explaining what assistance or resources the group needs
- **Purpose of Funding Request**: Text area (if requesting funds)
  - Examples: Curriculum materials for existing moms, Leader encouragement event, Meeting space rental, Transportation assistance, Emergency support
- **Event Budget**: Text area (if requesting funds) - optional, leave blank if just reporting status
- **Amount Requested**: Number field (if requesting funds) - optional
- **Date Funds Needed**: Date picker (if requesting funds) - optional

---

### EVENT REPORT FORMS

Report forms are submitted **after** events to document outcomes and accountability. They update entries in the "All Events" tab and may populate the future "Event Reports" tab.

#### Common Report Fields (All Event Types)

##### Reporter Information
- **Name**: First name only (pre-filled from request if linked)
- **Country**: Dropdown (pre-filled from request if linked)
- **Contact Information**: Email, WhatsApp number

##### Event Outcome
- **Actual Date of Event**: Date picker (when event actually occurred)
- **Location**: Text field (city/church name) - pre-filled from request if linked
- **Event Type**: Auto-filled from request or selected if standalone report
- **File Uploads**: Photo/PDF upload capability
  - "Please share at least 2 photos, PDFs, or documents from the event"
  - Maximum 5 files, 10MB each

#### Group Launch / Outreach Report Specific Fields
- **Actual # Participants**: Number field
- **# Ministry Agreements Received**: Number field (signed at the event)
- **# Ministry Agreements Expected (1-2 months)**: Number field (leaders who expressed interest)
- **Launch Documents & Curriculum Used**: Text area
  - Which materials were distributed?
  - What curriculum was presented?
- **What went well?**: Text area
- **What could be improved?**: Text area

#### Leadership Training Report Specific Fields
- **Actual # Participants**: Number field
- **Names of Participants**: Text area (long paragraph - list all attending leaders)
- **What went well?**: Text area
- **What could be improved?**: Text area
- **Training Topics Covered**: Checkboxes (same as request form)
- **Goals Set**: Text area (optional - regional goals or action items decided)

#### Group Care Report Specific Fields

**NOTE**: Group Care reports can be submitted with or without a linked funding request. They're used for ongoing monitoring and documenting how support funds were used.

- **Group Name/Location**: Text field (pre-filled from request if linked)
- **Group Leader**: Text field (pre-filled from request if linked)
- **# of Moms in Group**: Number field (current active participants)
- **Group Status**: Radio buttons with color-coded system
  - 🟢 **Green**: This group has healthy leaders and meets regularly. They are using MomCo curriculum, leaders are completing recommended training, and they are thriving.
  - 🟡 **Yellow**: This group is struggling. They may not be following the mission of MomCo, are not using our curriculum, may be having leadership issues, or they are not able to meet regularly (due to security issues, no meeting location, etc.).
  - 🔴 **Red**: This group is likely to close. They have not been meeting or have been unresponsive for four or more months.
- **Explain reason for this status**: Text area
- **What is going well?**: Text area
- **Any specific concerns?**: Text area
- **How were support funds used?**: Text area (if linked to a funding request)
  - Detail what was purchased/accomplished with the funds
  - Impact on the group
- **Photos/Documentation**: File upload (at least 2 photos if possible)

#### Other Report Specific Fields
- **How were the funds used?**: Text area
  - Detailed description of expenses
  - Impact achieved
- **Supporting Documentation**: File upload (receipts, photos, etc.)

---

## Storage Architecture

### Google Drive Folder Structure

All submissions will be stored in Google Drive using the following folder structure (mirrors the existing local file structure):

```
MomCo Africa Budget Tracking/
├── MomCoAfricaBudgetTracking (Google Sheet)
│   ├── All Events (tab)
│   ├── Fund Transfers (tab)
│   ├── Event Reports (tab - future)
│   ├── Group Care Tracking (tab - for monitoring-only reports)
│   └── Dashboard (tab)
│
├── Event Requests/
│   ├── Group Launch/
│   │   ├── 01. January 2025 - Country - Name - Group Launch.pdf
│   │   ├── 02. February 2025 - Country - Name - Group Launch.pdf
│   │   └── ...
│   ├── Leadership Training/
│   │   ├── 01. January 2025 - Country - Name - Leadership Training.pdf
│   │   └── ...
│   ├── Group Care/
│   │   ├── 01. January 2025 - Country - Name - Group Care.pdf
│   │   ├── 01. January 2025 - Country - Name - Group Care - Group Name.pdf
│   │   └── ...
│   ├── Other/
│   │   ├── 01. January 2025 - Country - Name - Other - Description.pdf
│   │   └── ...
│   └── Archive/
│       └── [Older requests organized by year]
│
├── Post-Event Reports/
│   ├── Group Launch Reports/
│   │   ├── 01. January 2025 - Country - Name - Group Launch Report.pdf
│   │   └── ...
│   ├── Leadership Training Reports/
│   │   ├── 01. January 2025 - Country - Name - Leadership Training Report.pdf
│   │   └── ...
│   ├── Group Care Reports/
│   │   ├── 01. January 2025 - Country - Name - Group Care Report.pdf
│   │   └── ...
│   ├── Other Reports/
│   │   └── ...
│   └── Report Photos & Documents/
│       ├── [Event ID or Date-Country-Name]/
│       │   ├── photo1.jpg
│       │   ├── photo2.jpg
│       │   └── document.pdf
│       └── ...
│
├── Transfer Receipts/
│   ├── 01. January 2025 - Country - Name - Amount Currency - Payment Method.pdf
│   └── ...
│
├── Annual Regional Budgets.pdf
└── Documentation/
    └── [System guides, user manuals]
```

### Storage Details by Component

#### 1. **Request PDFs**
- **Location**: `Event Requests/[Event Type]/`
- **Format**: Auto-generated PDF from form submission
- **Naming**: Standardized as per file naming conventions
- **Organization**: Subfolders by event type for easier navigation
- **Access**: GMD (full access), Requester (view own submissions)

#### 2. **Report PDFs**
- **Location**: `Post-Event Reports/[Event Type] Reports/`
- **Format**: Auto-generated PDF from report submission
- **Naming**: Standardized with "Report" suffix
- **Organization**: Subfolders by event type
- **Access**: GMD (full access), Reporter (view own submissions)

#### 3. **Report Photos & Documents** (Uploaded Files)
- **Location**: `Post-Event Reports/Report Photos & Documents/[Event ID]/`
- **Format**: Original uploaded files (JPG, PNG, PDF)
- **Organization**: Each report gets its own subfolder named by event identifier
- **Identifier format**: `YYYY-MM-Country-Name-EventType`
  - Example: `2025-07-Ghana-Harriet-Leadership Training/`
- **Access**: GMD (full access), Reporter (view own uploads)

#### 4. **Transfer Receipts**
- **Location**: `Transfer Receipts/`
- **Format**: Original receipt files from payment services
- **Naming**: Standardized by transfer date and details
- **Access**: GMD only

#### 5. **Spreadsheet Data**
- **Location**: `MomCoAfricaBudgetTracking` (Google Sheet)
- **Tabs**:
  - **All Events**: All funding requests (Group Launch, Leadership Training, Group Care with funding, Other)
  - **Fund Transfers**: Payment tracking details
  - **Dashboard**: Budget summary and metrics
  - **Group Care Tracking**: Monitoring-only reports (no funding)
  - **Event Reports** (future): Post-event outcomes
- **Access**: GMD (edit access), System (automated write access via Apps Script)

### Data Flow

#### Request Submission Flow:
```
1. User submits form on portal (GitHub Pages)
   ↓
2. Form data sent to Google Apps Script endpoint
   ↓
3. Apps Script processes submission:
   a. Validates data
   b. Generates PDF from form data
   c. Determines subfolder based on event type
   d. Saves PDF to Google Drive: Event Requests/[Event Type]/[filename].pdf
   e. Creates row in Google Sheets: All Events tab
   f. Stores filename reference in spreadsheet (column J)
   g. Sends email notifications
   ↓
4. GMD receives email with link to PDF and spreadsheet entry
```

#### Report Submission Flow:
```
1. User submits report form with file uploads
   ↓
2. Form data sent to Google Apps Script endpoint
   ↓
3. Apps Script processes submission:
   a. Validates data and files
   b. Creates folder: Report Photos & Documents/[Event ID]/
   c. Saves uploaded files to folder
   d. Generates report PDF
   e. Saves PDF to: Post-Event Reports/[Event Type] Reports/[filename].pdf
   f. Finds matching request in All Events tab (by country, name, type, date)
   g. Updates spreadsheet row with report data (columns M, N, O, P)
   h. Stores report filename in column P
   i. If Group Care monitoring-only: creates row in Group Care Tracking tab
   j. Sends email notifications
   ↓
4. GMD receives email with link to report PDF and updated spreadsheet
```

### Storage Quotas & Limits

**Google Drive (Free Tier):**
- **Total storage**: 15 GB (shared across Gmail, Drive, Photos)
- **File upload limit**: 5 TB per file (far exceeds needs)
- **Estimated usage for MomCo**:
  - PDFs: ~100-200 KB each × ~200 events/year = ~40 MB/year
  - Photos: ~2 MB each × 2-5 photos × ~200 reports = ~800 MB - 2 GB/year
  - **Total estimate**: ~1-2 GB per year
  - **Capacity**: 7-15 years within free tier

**Google Sheets:**
- **Cells per spreadsheet**: 10 million cells
- **Rows per sheet**: Up to cell limit
- **Estimated usage**:
  - 18 columns × ~200 events/year = 3,600 cells/year
  - **Capacity**: Thousands of events without issue

### Backup Strategy

**Automated Backups:**
- Google Drive native version history (30 days for free accounts, unlimited for workspace)
- Google Sheets automatic revision history

**Manual Backups (Recommended):**
- **Quarterly**: Export spreadsheet as Excel (.xlsx)
- **Yearly**: Download full Google Drive folder as zip
- **Storage**: Local backup drive + secondary cloud storage (Dropbox, OneDrive)

### Migration from Current System

**Initial Setup:**
1. Create Google Drive folder structure
2. Set up Google Sheet template (based on existing Excel file)
3. Configure Google Apps Script with folder IDs
4. Test with dummy submissions

**Data Migration (Optional):**
- Existing requests can remain in current local folders
- New portal submissions start fresh in Google Drive
- Historical data stays in current Excel spreadsheet
- Alternative: One-time import of 2025 data to Google Sheets

**Hybrid Period:**
- Portal handles all new submissions
- GMD can still accept manual WhatsApp submissions if needed
- Both systems populate same Google Sheet

### Security & Access Control

**Google Drive Permissions:**
- **GMD Account**: Owner (full access to all folders and sheets)
- **Apps Script Service Account**: Editor (automated write access)
- **Individual Requesters** (Phase 3+): View access to their own submissions only

**Spreadsheet Permissions:**
- GMD: Full edit access
- System (Apps Script): Automated write access to specific tabs
- Requesters (future): View-only access via filtered views

**Privacy Considerations:**
- HTTPS encryption for all form submissions
- Google Drive encryption at rest
- No publicly shared links
- Access logs available in Google Drive Activity

---

## Technical Implementation Options

### Option 1: Static Site + Form Submission Service (Simplest)
**Technology Stack:**
- Static HTML/CSS/JavaScript hosted on GitHub Pages
- Form submission via Formspree, Netlify Forms, or Google Forms API
- Client-side validation with JavaScript

**Workflow:**
1. User fills out form on GitHub Pages
2. Form validates client-side (required fields, date logic, budget calculations)
3. Submit button sends data to form service
4. Form service emails formatted request to GMD (Christy)
5. GMD manually saves to appropriate folders and spreadsheet

**Pros:**
- Simple to implement
- No backend server needed
- Free hosting on GitHub Pages

**Cons:**
- Limited automation
- Manual file naming and organization
- No direct spreadsheet integration

### Option 2: GitHub Pages + Google Apps Script Backend (Recommended)
**Technology Stack:**
- Frontend: HTML/CSS/JavaScript on GitHub Pages
- Backend: Google Apps Script web app
- Storage: Google Sheets + Google Drive

**Workflow:**
1. User fills out form on GitHub Pages
2. Client-side validation
3. Form submits JSON data to Google Apps Script endpoint
4. Apps Script:
   - Validates submission
   - Saves to Google Sheets (matches All Events tab structure)
   - Generates PDF with standardized filename
   - Saves PDF to "Event Requests" folder in Google Drive
   - Sends email notification to GMD with PDF attached
   - Sends confirmation email to requester
5. GMD reviews in tracking spreadsheet, approves/requests changes

**Pros:**
- Direct integration with existing Google Sheets tracking system
- Automated file naming and organization
- Email notifications
- Free to implement and run
- Familiar tools (Google ecosystem)

**Cons:**
- Requires Apps Script development
- Google Apps Script has some limitations on execution time

### Option 3: Full Integration with Status Tracking (Most Sophisticated)
**Technology Stack:**
- Frontend: React or Vue.js on GitHub Pages (or Netlify/Vercel)
- Backend: Serverless functions (Netlify Functions, Vercel Functions, or Google Apps Script)
- Database: Google Sheets or Airtable
- Storage: Google Drive
- Authentication: Google Sign-In or simple email-based auth

**Workflow:**
1. User logs in (optional - tracks who submitted)
2. User fills out form with smart features:
   - Auto-saves draft
   - Currency auto-selected by country
   - Budget validation against country allocation
   - Duplicate request detection
3. Form submits to serverless function
4. Backend:
   - Saves to database with status "Pending Review"
   - Generates PDF
   - Saves to Google Drive with standardized naming
   - Emails GMD and requester
   - Creates calendar entry (optional)
5. GMD dashboard shows all requests with status:
   - Pending Review
   - Approved - Awaiting Payment
   - Paid
   - Event Completed
   - Report Submitted
6. Status updates trigger notifications
7. After event, system prompts for post-event report

**Pros:**
- Complete automation
- Real-time status tracking
- Dashboard for GMD and requesters
- Budget validation and tracking
- Draft saving
- Historical data and analytics

**Cons:**
- More complex to build
- Requires ongoing maintenance
- May need paid hosting (though Netlify/Vercel free tiers may suffice)

---

## Key Features

### 1. Dual Form System (Requests + Reports)
- **Request Forms**: Submitted before events/activities to request funding
  - Group Launch / Outreach
  - Leadership Training
  - Group Care (monitoring and supporting existing groups)
  - Other (operational expenses)
- **Report Forms**: Submitted after events/activities to document outcomes
  - Group Launch / Outreach Report
  - Leadership Training Report
  - Group Care Report (can be standalone monitoring or linked to funding request)
  - Other Report (accountability for operational expenses)
- **Automatic Linking**: Reports can auto-link to their corresponding requests
- **Complete Lifecycle**: Track from request → approval → payment → completion → report
- **Flexible Group Care**: Group Care reports can be submitted with or without funding requests
  - With funding: Request support → Receive funds → Report on usage and group status
  - Without funding: Regular monitoring reports on group health

### 2. Smart Validations
- **Date Validation**:
  - Event date must be in the future (for requests)
  - Funds needed date must be 2-3 weeks before event date
  - Warning if request is submitted less than required lead time
- **Budget Validation** (Phase 2+):
  - All line items must have valid amounts
  - Total auto-calculates
  - Warning if total exceeds typical country allocation
- **Required Field Checking**:
  - Prevents submission if required fields are empty
  - Event-type specific required fields
  - Clear error messages
- **Currency Auto-Selection**:
  - Based on country selection
  - Uses standardized currency codes (KSH not KES, etc.)
- **Name Standardization**:
  - First names only (with exception for compound names like "Faith Rose")
  - Validation against naming standards
- **File Upload Validation**:
  - Required for reports (minimum 2 photos/documents)
  - File size limits (10MB per file)
  - Accepted formats: JPG, PNG, PDF

### 3. Pre-Populated Templates & Helpers
- **Sample Agendas**:
  - Group Launch default agenda (worship, mission, curriculum, Q&A)
  - Leadership Training default agenda (worship, team building, training, goals)
  - User can customize/modify templates
- **Common Budget Items** (Phase 2+):
  - Dropdown suggestions for budget line items
  - Unit costs pre-filled based on country averages (optional)
- **FAQ Section**:
  - Inline help and frequently asked questions
  - Expandable info boxes throughout form
- **Training Topics Checklists**:
  - Pre-populated checkboxes for leadership training topics
  - Consistent tracking across requests and reports

### 4. Auto-Generated Outputs
- **PDF Request Document**:
  - Professionally formatted
  - Matches current manual submission format
  - Includes all agenda and budget details
- **PDF Report Document**:
  - Formatted post-event report
  - Includes uploaded photos/documents
  - What went well, improvements, outcomes
- **Standardized Filenames**:
  - Requests: `MM. Month YYYY - Country - Requester - Event Type.pdf`
  - Reports: `MM. Month YYYY - Country - Requester - Event Type Report.pdf`
  - Example: `10. October 2025 - Ghana - Harriet - Leadership Training.pdf`
  - Example: `07. July 2025 - Ghana - Harriet - Leadership Training Report.pdf`
- **Email Notifications**:
  - To GMD: New request/report submitted with PDF attached
  - To Requester: Confirmation with submission details
- **Spreadsheet Entry**:
  - Requests auto-populate All Events tab
  - Reports update existing entries or create new ones (Group Care)
  - Automatic linking between requests and reports

### 5. Group Care Monitoring & Support (Red/Yellow/Green System)
- **Status Tracking**: Color-coded health indicators for existing groups
  - 🟢 **Green**: Healthy, meeting regularly, using curriculum, thriving
  - 🟡 **Yellow**: Struggling, leadership issues, irregular meetings
  - 🔴 **Red**: Likely to close, inactive 4+ months
- **Funding Support**: Group Care requests can include funding for:
  - Curriculum materials for existing moms
  - Leader encouragement events
  - Meeting space rental
  - Transportation assistance
  - Emergency support for struggling groups
- **Dual Purpose**:
  - **Monitoring**: Regular status reports (no funding)
  - **Support Requests**: Request funds to help struggling groups (with funding)
- **Dashboard Visualization** (Phase 4):
  - Quick view of all groups by status
  - Filter groups needing attention
  - Track group trends over time
  - Link support requests to status improvements
- **Proactive Support**: Identify struggling groups early and provide targeted assistance

### 6. Progress Tracking Dashboard (Optional - Phase 3+)
- **Requester View**:
  - See all submitted requests and reports
  - Status of each request (Pending → Approved → Paid → Complete → Report Submitted)
  - Ability to edit draft requests
  - Upload reports for completed events
  - Notification when status changes
- **GMD Admin View**:
  - All requests and reports from all countries
  - Filter by country, status, date, event type
  - Approve/request changes
  - Track against country budgets
  - Link to transfer receipt upload
  - Match reports to requests
  - Identify missing reports
  - Group Care dashboard with status overview

### 7. File Upload & Storage
- **Photo/Document Upload**: Reports require at least 2 files
- **Accepted Formats**: JPG, PNG, PDF
- **Storage**: Google Drive integration
- **Organization**: Auto-organized by country and event type
- **Access Control**: Only GMD and submitter can view files

### 8. Mobile-Friendly Design
- **Responsive Layout**:
  - Works on phones, tablets, and desktop
  - Touch-friendly form elements
  - Optimized for limited bandwidth
- **Progressive Form**:
  - Multi-step wizard (optional)
  - Save and continue later
  - Progress indicator
- **Offline Capability** (Phase 4):
  - Save draft offline
  - Submit when connection restored

### 9. Multi-Language Support (Future Enhancement - Phase 4)
- English (primary)
- French
- Portuguese
- Form language selector
- Translated email notifications

---

## Workflow Integration

### Current Manual Workflow
```
1. Leader creates request document (handwritten or typed)
2. Takes photo or creates PDF
3. Sends via WhatsApp to GMD
4. GMD receives, manually renames file
5. GMD saves to Event Requests folder
6. GMD manually enters data into spreadsheet
7. GMD reviews and approves
8. GMD sends funds via Western Union/World Remit
9. GMD creates transfer receipt entry
10. Leader submits post-event report via WhatsApp
11. GMD processes report
```

### Proposed Automated Workflow
```
1. Leader visits online portal (GitHub Pages URL)
2. Fills out structured form (with templates and validation)
3. Clicks Submit
   ↓
4. System auto-generates PDF with standardized filename
5. System saves PDF to "Event Requests" folder in Google Drive
6. System creates entry in All Events spreadsheet tab
7. System emails GMD with notification and PDF attached
8. System emails requester with confirmation
   ↓
9. GMD reviews request in spreadsheet dashboard
10. GMD marks as Approved (or requests changes)
11. System sends approval notification to requester
   ↓
12. GMD sends funds via Western Union/World Remit
13. GMD uploads transfer receipt OR enters transfer details in system
14. System creates entry in Fund Transfers tab
15. System links receipt to event request
16. System sends payment notification to requester
   ↓
17. Event happens
   ↓
18. System prompts requester for post-event report (auto-email after event date)
19. Leader submits post-event report via portal
20. System saves report and links to original request
```

### Benefits of Automated Workflow
- **Reduces GMD time**: No manual file renaming or spreadsheet data entry
- **Reduces errors**: Validation catches issues before submission
- **Faster processing**: Immediate notification and routing
- **Better tracking**: All requests in centralized system with status
- **Transparency**: Requesters can see status of their submissions
- **Historical data**: Easy to analyze patterns and trends

---

## File Naming Standards (Automated)

### Event Requests
**Format**: `MM. Month YYYY - Country - Requester - Event Type.pdf`

**Examples**:
- `10. October 2025 - Ghana - Harriet - Leadership Training.pdf`
- `04. April 2025 - Kenya - Leah - Group Launch.pdf`
- `08. August 2025 - Rwanda - Claire - Group Care.pdf`
- `09. September 2025 - Kenya - Sylvia - Group Care - Kisumu Leaders.pdf` (specific group)
- `06. June 2025 - Ghana - Other - Curriculum Printing.pdf`
- `03. March 2025 - Kenya - Anne - Other - Q1 Operational Funding.pdf`
- `06. June 2025 - Ghana - Multi Request Summary - 4010 GHS.pdf` (if multiple events in one request)

**Rules**:
- MM: Two-digit month number (01-12)
- Month: Full month name
- YYYY: Four-digit year
- Date represents: When the request was submitted
- Country: Full country name
- Requester: First name only (compound names kept complete, e.g., "Faith Rose")
- Event Type: "Group Launch" or "Leadership Training" or "Group Care" or "Other" or "Multi Request Summary"
- For "Group Care" and "Other" requests, can optionally include brief description/group name after event type

### Event Reports
**Format**: `MM. Month YYYY - Country - Requester - Event Type Report.pdf`

**Examples**:
- `07. July 2025 - Ghana - Harriet - Leadership Training Report.pdf`
- `05. May 2025 - Kenya - Leah - Group Launch Report.pdf`
- `08. August 2025 - Rwanda - Claire - Group Care Report.pdf`
- `09. September 2025 - DRC - Julie - Other Report.pdf`

**Rules**:
- MM: Two-digit month number (01-12)
- Month: Full month name
- YYYY: Four-digit year
- Date represents: When the **event actually occurred** (or report date for Group Care)
- Country: Full country name
- Requester/Reporter: First name only
- Event Type: "Group Launch" or "Leadership Training" or "Group Care" or "Other"
- Must include word "Report" to distinguish from request documents

### Transfer Receipts (Linked)
**Format**: `MM. Month YYYY - Country - Requester - Amount Currency - Payment Method.pdf`

**Examples**:
- `10. October 2025 - Ghana - Harriet - 3819 GHS - World Remit.jpeg`
- `10. October 2025 - Kenya - Leah - 25000 KSH - World Remit.jpeg`

---

## Data Structure

### All Events Spreadsheet Tab Fields (Auto-Populated)

#### From Request Form Submission:
The following columns are auto-filled when a request is submitted:

1. **A: Requester** - Name from form
2. **B: Country** - Country selection
3. **C: Type of event** - "Group launch" or "Leader summit" or "Other" or "non-budget"
4. **D: Date of request** - Submission timestamp
5. **E: Proposed date of event** - Date of event from form (blank for "Other" operational requests)
6. **F: Participants expected** - Participants number from form (blank for "Other")
7. **G: Amount requested** - Total from budget section
8. **H: Currency requested** - Currency from budget section
9. **I: Date funds needed by** - Date funds needed from form
10. **J: Request document** - Auto-generated filename
11. **K: Date funds sent** - (filled later when payment made)
12. **L: Amount sent-local currency** - (filled later)
13. **M: Date of actual event** - (filled later from post-event report)
14. **N: Actual participants** - (filled later from post-event report)
15. **O: Group launch Ministry Agreements** - (filled later, Group Launch only)
16. **P: Post-event report** - (filled later when report submitted)
17. **Q: Notes** - Any special requests, operational purpose, or notes from form
18. **R: Red flags** - (GMD fills as needed)

#### From Report Form Submission:
When a report is submitted, the system updates the corresponding request entry (or creates a new entry for Group Care reports):

- **M: Date of actual event** - Updated with actual date
- **N: Actual participants** - Updated with actual count
- **O: Group launch Ministry Agreements** - Updated with actual count (Group Launch only)
- **P: Post-event report** - Auto-generated report filename
- **Q: Notes** - Appended with any report notes (what went well, concerns, etc.)

#### Group Care Entries:

**With Funding Request:**
Group Care requests that include funding are tracked in "All Events" tab like other events:
- **C: Type of event** - "Group Care"
- **E: Proposed date of event** - Date support is needed
- **F: Participants expected** - Number of moms in group
- **G: Amount requested** - Funding amount
- **Q: Notes** - Group name, status (Red/Yellow/Green), support needed

**Without Funding (Monitoring Only):**
Group Care reports submitted without funding requests populate a separate "Group Care Tracking" sheet:
- Country
- Group Name/Location
- Group Leader
- # of Moms
- Status (Green/Yellow/Red)
- Status Explanation
- What's going well
- Concerns
- Report Date
- Reporter Name
- Photos/Documentation
- Linked to funding request (if previously supported)

### Fund Transfers Tab (Linked Entry)
Created when GMD records payment:

1. **A: Date** - Date funds transferred
2. **B: Country** - Linked from request
3. **C: Requester** - Linked from request
4. **D: Currency** - Linked from request
5. **E: Amount-Local Currency** - Amount sent
6. **F: Amount-USD** - USD equivalent
7. **G: Payment Method** - Western Union, World Remit, etc.
8. **H: Notes** - Payment notes
9. **I: Transfer Receipt** - Receipt filename (linked)

---

## Security & Access

### User Access Levels

**Option 1: Public Access (No Login)**
- Anyone can submit requests
- Relies on email verification
- Simple but less secure

**Option 2: Email-Based Authentication**
- User enters email to receive magic link
- Click link to access form
- Tracks submissions by email
- Simple and secure enough

**Option 3: Google Sign-In**
- Users authenticate with Google account
- Tracks submissions by Google account
- Can limit to specific domains/emails
- More secure

### Data Privacy
- Form data transmitted via HTTPS
- Stored in Google Sheets (GMD's Google account)
- Only GMD has access to backend data
- Requesters can only view their own submissions (if auth implemented)

---

## Implementation Phases

### Phase 1: Basic Request Forms (MVP - Minimum Viable Product)
**Scope**:
- Single HTML page with all event type REQUEST forms:
  - Group Launch / Outreach Request
  - Leadership Training Request
  - Group Care Request (with optional funding)
  - Other Request
- Simple text-based budget and agenda fields (not structured tables)
- Red/Yellow/Green status selector for Group Care
- Client-side validation
- Submits to Formspree or Google Forms
- Emails GMD with form data
- Manual file saving and spreadsheet entry by GMD

**Time to build**: 2-3 days

### Phase 2: Google Sheets Integration + Reports
**Scope**:
- Google Apps Script backend
- Request forms auto-save to "All Events" spreadsheet
- Auto-generates PDF for requests
- Auto-names and saves files to Google Drive
- Email notifications (to GMD and requester)
- Add all four REPORT forms:
  - Group Launch Report
  - Leadership Training Report
  - Group Care Report
  - Other Report
- Reports update existing request entries or create new entries (Group Care)
- File upload capability for photos/documents

**Time to build**: 1-2 weeks

### Phase 3: Structured Data + Status Tracking
**Scope**:
- Upgrade budget and agenda to structured tables (line items, auto-calculations)
- Enhanced UI with framework (React/Vue)
- User authentication
- Status tracking workflow (Pending → Approved → Paid → Event Complete → Report Submitted)
- Admin dashboard for GMD
- Budget validation against country allocations
- Request/Report linking (automatic matching)
- Analytics and reporting

**Time to build**: 2-3 weeks

### Phase 4: Advanced Features
**Scope**:
- Multi-language support (French, Portuguese)
- Mobile app (PWA - Progressive Web App)
- Offline capability with draft saving
- Advanced analytics dashboard
- Group Care dashboard with Red/Yellow/Green visualizations
- Integration with payment tracking
- Automated post-event report prompts (email after event date)
- Duplicate request detection
- Budget forecasting and trends

**Time to build**: 1-2 months

---

## Technology Recommendations

### Recommended Stack (Phase 2)
- **Frontend**: HTML, CSS, JavaScript (Vanilla or lightweight framework)
- **Hosting**: GitHub Pages (free, easy)
- **Backend**: Google Apps Script (free, integrates with Google ecosystem)
- **Storage**: Google Sheets + Google Drive
- **Email**: Gmail via Apps Script
- **Form Library**: Consider Bootstrap or Tailwind CSS for styling

### Why This Stack?
- **Free**: No hosting costs
- **Familiar**: Google tools already in use
- **Easy maintenance**: No complex server management
- **Scalable**: Handles hundreds of requests easily
- **Reliable**: Google infrastructure

---

## Next Steps

### To Build This System

1. **Design Phase**:
   - Create wireframes/mockups of forms
   - Define exact field requirements
   - Map form fields to spreadsheet columns
   - Design email templates

2. **Development Phase**:
   - Build HTML forms with validation
   - Create Google Apps Script backend
   - Set up Google Sheets template
   - Configure Google Drive folder structure
   - Implement email notifications

3. **Testing Phase**:
   - Test with sample data
   - Test on mobile devices
   - Test email delivery
   - Test spreadsheet population
   - Test PDF generation

4. **Deployment Phase**:
   - Deploy to GitHub Pages
   - Share URL with pilot users (1-2 countries)
   - Gather feedback
   - Refine and fix issues
   - Roll out to all countries

5. **Training Phase**:
   - Create user guide
   - Video tutorial for leaders
   - WhatsApp announcement
   - Support for early adopters

### Estimated Timeline
- **Phase 1 (MVP)**: 1 week
- **Phase 2 (Google Integration)**: 2 weeks
- **Testing & Refinement**: 1 week
- **Pilot Launch**: 1 week
- **Full Rollout**: Ongoing

**Total to working system**: ~4-6 weeks

---

## Potential Challenges & Solutions

### Challenge 1: Internet Access
**Problem**: Leaders in remote areas may have limited internet access.

**Solutions**:
- Keep form lightweight (loads quickly even on slow connections)
- Allow saving draft to browser (local storage)
- Keep WhatsApp option as backup
- Offline-capable PWA (progressive web app) in future phase

### Challenge 2: Digital Literacy
**Problem**: Not all leaders are comfortable with online forms.

**Solutions**:
- Make form extremely simple and intuitive
- Provide video tutorial
- Offer WhatsApp support
- Keep manual submission option available initially
- Regional coordinators can help leaders submit

### Challenge 3: Language Barriers
**Problem**: Documents are in English but some leaders prefer French/Portuguese.

**Solutions**:
- Start with English (most common)
- Add French translation in Phase 3
- Add Portuguese translation in Phase 3
- Use simple, clear language
- Visual guides and examples

### Challenge 4: Duplicate Submissions
**Problem**: Leaders might submit same request multiple times.

**Solutions**:
- Show confirmation after successful submission
- Send confirmation email
- Check for duplicates based on country + requester + date
- Dashboard shows previous submissions

### Challenge 5: Data Migration
**Problem**: Existing historical data in current spreadsheet format.

**Solutions**:
- New system starts fresh (doesn't require migration)
- Historical data remains in current spreadsheet
- Or: One-time import of active/pending requests to new system

---

## Success Metrics

### How to measure if this system is working:

1. **Adoption Rate**:
   - % of requests submitted via online form vs. WhatsApp
   - Target: 80%+ after 3 months

2. **Time Savings**:
   - GMD time spent processing requests
   - Target: 50% reduction

3. **Error Reduction**:
   - % of requests requiring revision/clarification
   - Target: 70% reduction

4. **Processing Speed**:
   - Time from request submission to approval
   - Target: 24-48 hours (down from current average)

5. **User Satisfaction**:
   - Feedback from leaders using the system
   - Target: 4/5 stars or higher

---

## Cost Analysis

### Current Manual System Costs
- **GMD Time**: ~2-3 hours per week processing requests
- **Delays**: Requests waiting for manual processing
- **Errors**: Reformatting and data entry mistakes

### Online System Costs
- **Development**: One-time (can be volunteer/donated)
- **Hosting**: $0 (GitHub Pages is free)
- **Backend**: $0 (Google Apps Script is free)
- **Storage**: $0 (Google Drive within free tier)
- **Maintenance**: ~1 hour per month
- **Support**: Ongoing as needed

### ROI (Return on Investment)
- **Time saved**: 80-100 hours per year (GMD time)
- **Error reduction**: Fewer payment delays, corrections
- **Better tracking**: Improved budget oversight
- **Scalability**: Can handle growth without additional cost

---

## Conclusion

An online event request and report portal would significantly streamline MomCo Africa's complete event lifecycle - from initial funding requests through post-event reporting and ongoing group monitoring. By standardizing submissions, automating data entry, and integrating with existing tracking systems, the portal would:

- **Save time** for both leaders and GMD (estimated 80-100 hours/year)
- **Reduce errors** through validation and automation (70% reduction target)
- **Improve transparency** with status tracking and reporting
- **Enable complete accountability** with integrated request-to-report workflow
- **Support better planning** with centralized data and analytics
- **Identify at-risk groups** early through Group Care monitoring system
- **Support growth** without adding administrative burden
- **Provide mobile access** for leaders in the field

### Key Benefits by Form Type:

**Request Forms** (Group Launch, Leadership Training, Other):
- Standardized budget and agenda formatting
- Automatic validation before submission
- Immediate GMD notification
- Direct integration with tracking spreadsheet

**Report Forms** (Group Launch, Leadership Training, Other):
- Accountability and outcome tracking
- Photo/document upload for transparency
- Automatic linking to original requests
- Lessons learned capture (what went well, improvements)

**Group Care Requests**:
- Support funding for existing groups (curriculum, leader events, meeting supplies)
- Red/Yellow/Green status assessment with request
- Targeted assistance for struggling groups
- Flexible: can request funds or just report status

**Group Care Reports**:
- Proactive monitoring of existing groups
- Red/Yellow/Green status system for quick health assessment
- Early identification of struggling groups
- Trend tracking over time
- Accountability for support funds used

### Recommended Implementation Approach:

**Phase 1** (2-3 days): Basic request forms with simple text fields
- Immediate value with minimal complexity
- Test user adoption and gather feedback
- Manual spreadsheet entry by GMD

**Phase 2** (1-2 weeks): Google Sheets integration + all report forms
- Full automation of data entry and file management
- Complete request-to-report workflow
- File upload capability
- Email notifications

**Phase 3** (2-3 weeks): Status tracking and advanced features
- Dashboard for GMD and requesters
- Budget validation against allocations
- Structured budget/agenda tables
- Analytics and reporting

**Phase 4** (1-2 months): Advanced enhancements
- Multi-language support
- Group Care dashboard with visualizations
- Offline capability
- Advanced analytics

**Total to working system**: ~3-4 weeks for Phases 1-2, which provides 80% of the value with relatively simple implementation.

---

## Document Revision History

### Update: Incorporated Request & Report Forms Document
This design document has been updated to incorporate findings from the "Africa Budget Request & Report Forms" document, which expanded the original vision significantly:

**Major Additions:**
1. **Group Care Event Type**: Added as a fourth event type for ongoing monitoring and support of existing groups (can include funding requests or be monitoring-only)
2. **Comprehensive Report Forms**: Expanded from brief mention to full specification of all report forms
3. **Red/Yellow/Green Status System**: Added Group Care monitoring with color-coded health indicators
4. **"Other" Event Type**: Formalized support for operational/bundled funding requests
5. **"Send Funds To" Field**: Added recipient name field for fund transfers
6. **File Upload Capability**: Added photo/document upload requirements for all report forms
7. **Simple vs. Structured Approach**: Documented both text-based (Phase 1) and table-based (Phase 2) implementations for budget/agenda
8. **Dual Form System**: Clarified that portal handles both pre-event requests AND post-event reports

**Second Update: Group Care Funding**
After clarification, Group Care was updated to support **both** funding requests and monitoring reports:
- **With Funding**: Leaders can request support for existing groups (curriculum, leader events, supplies, emergency support)
- **Without Funding**: Regular monitoring reports on group health (Red/Yellow/Green status tracking)
- **Flexibility**: Group Care entries in "All Events" tab if funded, separate "Group Care Tracking" sheet if monitoring-only
- **Proactive Support**: Enables targeted financial assistance for struggling groups identified through monitoring

**Updated Sections:**
- Form Structure: Now includes all 4 event types and comprehensive report form specifications
- File Naming: Added naming conventions for all event types and report documents
- Data Structure: Updated to show how reports update existing entries
- Implementation Phases: Reorganized to show request forms first (Phase 1), then reports (Phase 2)
- Key Features: Added Group Care monitoring, file uploads, dual form system
- Workflow: Updated to show complete lifecycle from request to report

**Implementation Philosophy:**
The updated design maintains a phased approach starting with simpler text-based forms (easier user adoption) before advancing to structured tables and sophisticated dashboards. This ensures quick delivery of value while building toward a comprehensive solution.
