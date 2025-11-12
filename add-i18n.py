#!/usr/bin/env python3
"""
Quick script to add data-i18n attributes to HTML elements for translation
"""

import re

# Mapping of text to i18n keys
mappings = {
    # Headings
    "Select Event Type": "selectEventType",
    "Requester Information": "requesterInfo",
    "Event Details": "eventDetails",
    "Event Agenda": "eventAgenda",
    "Budget Request": "budgetRequest",
    "Group Launch Details": "groupLaunchDetails",
    "Leadership Training Details": "leadershipTrainingDetails",
    "Group Care Details": "groupCareDetails",
    "Other Request Details": "otherDetails",
    "Additional Information": "additionalInfo",

    # Labels
    "Your First Name": "yourFirstName",
    "Country": "country",
    "Email": "email",
    "WhatsApp Number": "whatsapp",
    "Location / Venue": "location",
    "Date of Event": "eventDate",
    "Date Funds Needed By": "fundsNeededDate",
    "Number of Participants Expected": "participantsExpected",
    "Send Funds To": "sendFundsTo",
    "Itemized Budget": "itemizedBudget",
    "Total Amount Requested": "totalAmountRequested",
    "Currency": "currency",

    # Buttons
    "Submit Request": "submitRequest",
    "Clear Form": "clearForm",
    "Load Group Launch Template": "loadGroupLaunchTemplate",
    "Load Leadership Training Template": "loadLeadershipTemplate",
}

# Read the HTML file
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add data-i18n attributes
for text, key in mappings.items():
    # For <h3> tags
    html = re.sub(
        f'<h3>({re.escape(text)})</h3>',
        f'<h3 data-i18n="{key}">\\1</h3>',
        html
    )

    # For labels
    html = re.sub(
        f'<label[^>]*>({re.escape(text)})',
        f'<label data-i18n="{key}">\\1',
        html
    )

    # For buttons
    html = re.sub(
        f'<button([^>]*)>({re.escape(text)})</button>',
        f'<button\\1 data-i18n="{key}">\\2</button>',
        html
    )

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✓ Added i18n attributes to index.html")
