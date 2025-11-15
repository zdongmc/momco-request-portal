# MomCo Africa Event Request Portal

A trilingual (English/French/Portuguese) web portal for submitting event funding requests for MomCo Africa ministry.

## Features

### 🌍 Trilingual Support
- **English** - For Anglophone Africa (Kenya, Nigeria, Ghana, South Africa, etc.)
- **Français** - For Francophone Africa (Côte d'Ivoire, Benin, Mali, Burkina Faso, etc.)
- **Português** - For Lusophone Africa (Mozambique, Angola, etc.)

### 📋 Four Event Types
1. **Group Launch / Outreach** - Launch new MomCo groups
2. **Leadership Training** - Train existing leaders
3. **Group Care** - Monitor and support existing groups (with Red/Yellow/Green status system)
4. **Other** - Operational expenses

### ✨ Key Features
- Mobile-responsive design
- Smart form validation (dates, budgets, required fields)
- Currency auto-selection based on country
- Pre-populated agenda templates in all three languages
- Red/Yellow/Green group health monitoring system
- Language preference saved locally
- Professional, accessible design

## Files

- `index.html` - Landing page with links to forms
- `request-form.html` - Event funding request form
- `post-event-report.html` - Post-event report form
- `styles.css` - Responsive styling
- `script.js` - Request form validation and interactions
- `script-report.js` - Report form validation and interactions
- `translations.js` - Request form translations and templates
- `translations-report.js` - Report form translations
- `country-requester-data.js` - Shared country-to-leader mapping data
- `api-config.js` - API configuration for backend integration

## Usage

### For Leaders (End Users)

1. Open `index.html` in your web browser
2. Select your preferred language (English/Français/Português)
3. Choose your event type
4. Fill out the form
5. Submit your request

### For Developers

**Local Testing:**
```bash
# Simply open in browser
open index.html

# Or use a local server
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

**Deployment to GitHub Pages:**
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Portal will be live at: `https://username.github.io/repo-name/`

## Form Fields

### Common to All Event Types
- Country (auto-selects currency and populates requester dropdown)
- Requester name (dropdown populated based on country selection)
- Contact information (email, WhatsApp)
- Event location and date
- Budget details
- Funds needed by date
- Event agenda

### Country-Based Leader Dropdown

The portal includes a smart requester name dropdown that automatically populates based on the selected country:

1. **User selects country** → Currency auto-selected
2. **Requester dropdown auto-populates** with leaders for that country
3. **User selects their name** from the dropdown
4. **"Send Funds To" field auto-fills** with selected name (can be overridden)

**Leader Data Source:** The leader list is maintained in `country-requester-data.js` and includes all active MomCo Africa leaders organized by country. This ensures:
- Standardized name entry (first names only, matching spreadsheet conventions)
- Easy addition/removal of leaders as the organization grows
- Consistent data across request forms and post-event reports

### Event-Specific Fields

**Group Launch:**
- Potential new groups/leaders
- Curriculum copies needed
- Ministry agreement copies
- Special requests

**Leadership Training:**
- Attending leaders list
- Training topics (checkboxes)
- Logistics needs

**Group Care:**
- Group name and leader
- Number of moms in group
- Group status (Red/Yellow/Green)
- Support needed
- Optional funding request

**Other:**
- Purpose/description
- Time period covered
- Groups/activities supported

## Language Support

### Adding/Updating Leader Names

To add or update leader names in the requester dropdown:

1. Edit `country-requester-data.js`
2. Find the `COUNTRY_REQUESTERS` object
3. Update the array for the relevant country:

```javascript
const COUNTRY_REQUESTERS = {
    'Kenya': ['Anne', 'Emily', 'Grace', 'Janet', 'Leah', 'Rose Faith', 'Sammy', 'Sarah', 'Sylvia'],
    'Ghana': ['Dorcas', 'Fosua', 'Gladys', 'Harriet', 'Janet', 'Miriam', 'Philomina', 'Rosemary', 'Selina'],
    // ... other countries
};
```

**Naming conventions:**
- Use first names only (e.g., "Leah" not "Leah Njeri Kariuki")
- Exception: Keep compound first names complete (e.g., "Rose Faith")
- Names should match the spreadsheet naming conventions in `MomCoAfricaBudgetTracking.xlsx`

### Adding New Translations

To add a new language:

1. Add language object to `translations.js`:
```javascript
es: {
    title: "MomCo África",
    subtitle: "Portal de Solicitud de Eventos",
    // ... all translation keys
}
```

2. Add agenda templates:
```javascript
agendaTemplates: {
    es: {
        groupLaunch: `...`,
        leadershipTraining: `...`
    }
}
```

3. Add language button to `index.html`:
```html
<button type="button" class="lang-btn" data-lang="es">Español</button>
```

## Email System

### Configuration

The portal uses a **free Gmail account** for sending email notifications.

**Email Service:** Free Gmail account
**Implementation:** Google Apps Script with MailApp service
**Daily Sending Limit:** 100 emails per day (Gmail free tier)
**Sender:** Configured Gmail account (e.g., `momcoportal@gmail.com`)

### Email Flow

**When a funding request is submitted:**
1. Form data collected from portal
2. Google Apps Script processes submission
3. Email notification sent to GMD team
4. Confirmation email sent to requester
5. Data saved to Google Drive/Sheets

**When a post-event report is submitted:**
1. Form data and attachments collected
2. Google Apps Script processes submission
3. Email notification sent to GMD
4. Report linked to original request

### Email Content

**Request Notification includes:**
- Requester name and country
- Event type and date
- Amount requested and currency
- Link to generated request document
- All form field data

**Report Notification includes:**
- Reporter name and country
- Actual event date and outcomes
- Actual participants
- Links to uploaded photos/documents
- All form field data

### Limitations

- **100 emails/day limit** (suitable for current volume < 50 submissions/day)
- Emails may occasionally land in spam (recipients should whitelist sender)
- Can upgrade to Google Workspace for higher limits and professional email address

### Future Upgrade Path

Upgrade to Google Workspace ($6-12/month) for:
- Higher daily limit (1,500-2,000 emails/day)
- Professional email address (e.g., `portal@momcoafrica.org`)
- Better deliverability
- No code changes required

## Integration (Future Phase 2)

The portal is designed to integrate with:
- **Google Apps Script** - Backend processing
- **Google Sheets** - MomCoAfricaBudgetTracking.xlsx
- **Google Drive** - PDF storage and organization
- **Email notifications** - Via free Gmail account (see Email System above)

### Planned Features (Phase 2+)
- Auto-generate PDFs from submissions
- Save to Google Drive with standardized naming
- Update tracking spreadsheet automatically
- Send email notifications
- Link to post-event report forms
- Status tracking dashboard
- Budget validation against country allocations

## Browser Support

- Chrome/Edge (recommended)
- Safari
- Firefox
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Naming Convention

Generated request documents follow this format:
```
MM. Month YYYY - Country - Requester - Event Type.pdf

Examples:
11. November 2025 - Kenya - Leah - Group Launch.pdf
11. November 2025 - Rwanda - Claire - Group Care.pdf
```

## Red/Yellow/Green Group Status System

**🟢 Green - Healthy**
- Meeting regularly
- Using MomCo curriculum
- Leaders are trained
- Group is thriving

**🟡 Yellow - Struggling**
- Leadership issues
- Not using curriculum
- Irregular meetings
- Security or location problems

**🔴 Red - At Risk**
- Not meeting
- Unresponsive for 4+ months
- Likely to close

## License

© 2025 MomCo Africa. All rights reserved.

## Support

For questions or issues:
- Email: [GMD contact]
- Documentation: See `CLAUDE.md` in parent directory
- Design specs: See `Online Submission System Design.md`

## Development Status

**Phase 1 (Current):** ✅ Complete
- Trilingual request forms
- Client-side validation
- Mock submission (console output)

**Phase 2 (Planned):**
- Google Apps Script backend
- Google Drive integration
- Spreadsheet automation
- Email notifications
- Post-event report forms

**Phase 3 (Future):**
- Status tracking dashboard
- User authentication
- Budget validation
- Analytics and reporting

## Credits

Built with vanilla HTML, CSS, and JavaScript for maximum compatibility and ease of deployment.
