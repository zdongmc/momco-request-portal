# MomCo Africa - Leader Data Reference

This document contains the complete list of MomCo Africa leaders organized by country. This data is used to populate the requester dropdown in both the event request form and post-event report form.

## How It Works

1. **User selects country** in the form
2. **Requester dropdown automatically populates** with leaders from that country
3. **User selects their name** from the dropdown
4. **"Send Funds To" field auto-fills** with the selected name (can be overridden if needed)

## Data Source

The leader data is maintained in `country-requester-data.js` as the `COUNTRY_REQUESTERS` object.

## Complete Leader List by Country

### Angola (1 leader)
- Alexandrina Futi Mavungo → **Alexandrina**

### Benin (3 leaders)
- Marceline Zehou → **Marceline**
- Roseline Sessi Loko → **Roseline**
- Stephanie Lavagnon → **Stephanie**

### Burkina Faso (1 leader)
- Gina Kere Ouedraogo → **Gina**

### Côte d'Ivoire (9 leaders)
- Angele Seu → **Angele**
- Bab Moise → **Bab**
- Eleonore Doubi → **Eleonore**
- Elise Djaha → **Elise**
- James Wheagar → **James**
- Kamagaté Abiba → **Kamagaté**
- Koné Bertine → **Koné**
- Maman Viviane → **Maman**
- Toh Angeline → **Toh**

### DRC (Democratic Republic of Congo) (3 leaders)
- Julie Pembele → **Julie**
- Mamie Ngoma → **Mamie**
- Silvie Kitiko → **Silvie**

### Ghana (9 leaders)
- Dorcas Attitsogbui → **Dorcas**
- Fosua Asare → **Fosua**
- Gladys Asante → **Gladys**
- Harriet Livingstone → **Harriet**
- Janet Owusu → **Janet**
- Miriam Balica → **Miriam**
- Philomina Baah → **Philomina**
- Rosemary Oppong → **Rosemary**
- Selina Botchway → **Selina**

### Kenya (9 leaders)
- Anne Njeri Ndegwa → **Anne**
- Emily Opyio → **Emily**
- Grace Kala → **Grace**
- Janet Kimitios → **Janet**
- Leah Njeri Kariuki → **Leah**
- Rose Faith Onyango → **Rose Faith** (compound first name)
- Sammy Kimitios → **Sammy**
- Sarah Kala → **Sarah**
- Sylvia Nyameche → **Sylvia**

### Libya (1 leader)
- Esther Adjei → **Esther**

### Madagascar (1 leader)
- Felana Rajoelison → **Felana**

### Mali (3 leaders)
- Elizabeth Thera → **Elizabeth**
- Ezechiel Tina → **Ezechiel**
- Marina Mounkoro → **Marina**

### Nigeria (5 leaders)
- Bukola Mordi → **Bukola**
- Chioma Obasi → **Chioma**
- Emmanuela Udemba → **Emmanuela**
- Rifkatu Maduekwe → **Rifkatu**
- Veronica Kagaru → **Veronica**

### North Africa (1 leader)
- Persida Sossa-Minou → **Persida**

### Rwanda (2 leaders)
- Claire Mporanyisenga → **Claire**
- Stephanie Birungi → **Stephanie**

### South Africa (1 leader)
- Santie Nortje → **Santie**

### Tanzania (1 leader)
- Joyce Urio → **Joyce**

### Togo (2 leaders)
- Folly Mawupemon → **Folly**
- Josephine Avla → **Josephine**

### Uganda (East) (8 leaders)
- Immaculate Kyobula → **Immaculate**
- Jasper Bwambale → **Jasper**
- Jenipher Masika → **Jenipher**
- Joshua Lule → **Joshua**
- Mirika Kithondo → **Mirika**
- Moses Bwambale → **Moses**
- Penlope Muhindo → **Penlope**
- Sylvia Nantongo → **Sylvia**

### Uganda (West) (8 leaders)
- Immaculate Kyobula → **Immaculate**
- Jasper Bwambale → **Jasper**
- Jenipher Masika → **Jenipher**
- Joshua Lule → **Joshua**
- Mirika Kithondo → **Mirika**
- Moses Bwambale → **Moses**
- Penlope Muhindo → **Penlope**
- Sylvia Nantongo → **Sylvia**

### Zambia (7 leaders)
- Chilufya Siamwiza → **Chilufya**
- Emelda Phiri → **Emelda**
- Fagness Banda → **Fagness**
- Favour Mwaba → **Favour**
- Hellen Machayi → **Hellen**
- Margaret Nyirenda → **Margaret**
- Maureen Banda → **Maureen**

## Naming Conventions

### General Rule: First Names Only
Use only the first name in the dropdown (e.g., "Leah" not "Leah Njeri Kariuki")

**Rationale:**
- Matches spreadsheet naming conventions in `MomCoAfricaBudgetTracking.xlsx`
- Simplifies data entry and matching
- Respects naming conventions established in budget tracking documentation

### Exception: Compound First Names
Keep compound first names complete (e.g., "Rose Faith" not "Rose")

**Examples:**
- ✅ Rose Faith Onyango → **Rose Faith**
- ✅ Faith Rose (if encountered) → **Faith Rose**

## Updating the Leader List

### Adding a New Leader

1. Open `country-requester-data.js`
2. Locate the `COUNTRY_REQUESTERS` object
3. Find the country array
4. Add the first name to the array (alphabetically if possible):

```javascript
'Kenya': ['Anne', 'Emily', 'Grace', 'Janet', 'Leah', 'NewLeader', 'Rose Faith', 'Sammy', 'Sarah', 'Sylvia'],
```

5. Update this `LEADERS.md` file with the full name and first name mapping

### Removing a Leader

1. Open `country-requester-data.js`
2. Remove the name from the country array
3. Update this `LEADERS.md` file

### Adding a New Country

1. Open `country-requester-data.js`
2. Add a new country entry:

```javascript
'NewCountry': ['Leader1', 'Leader2'],
```

3. Ensure the country is also added to:
   - `request-form.html` country dropdown
   - `post-event-report.html` country dropdown
   - `script.js` CURRENCY_MAP (if using a different currency)
4. Update this `LEADERS.md` file

## Countries Not Yet in Portal

The following countries appear in the Annual Regional Budgets but do not yet have dedicated country entries in the portal. Leaders from these countries should use the regional groupings (French Africa, English Africa, Portuguese Africa) or contact their GMD:

**French-speaking countries (use "French Africa" or "North Africa"):**
- Senegal, Mauritania, Guinea Conakry, Burundi, Madagascar (also has dedicated entry), Congo, Gabon, CAR, Morocco, Tunisia, Niger, Chad, Guinea Bissau, Equatorial Guinea

**English-speaking countries (use "English Africa"):**
- Botswana, Cameroon, Eswatini, Lesotho, Malawi, South Sudan, Gambia, Liberia, Egypt, Sierra Leone

**Portuguese-speaking countries (use "Portuguese Africa"):**
- Mozambique

**Note:** Madagascar and Libya have dedicated entries despite being in regional groupings.

## Statistics

- **Total Countries with Dedicated Entries:** 19
- **Total Leaders:** 67
- **Largest Teams:**
  - Côte d'Ivoire: 9 leaders
  - Ghana: 9 leaders
  - Kenya: 9 leaders
- **Countries with Single Leaders:** Angola, Burkina Faso, Libya, Madagascar, South Africa, Tanzania

## Integration with Forms

Both forms (`request-form.html` and `post-event-report.html`) use the shared function from `country-requester-data.js`:

```javascript
populateRequesterDropdown(country, requesterSelect, translations)
```

This ensures:
- **Consistency** - Same leader lists across both forms
- **Maintainability** - Update once, applies everywhere
- **Translation support** - Works with English/French/Portuguese interfaces

## See Also

- `country-requester-data.js` - JavaScript implementation of leader data
- `README.md` - Portal overview and usage documentation
- `../CLAUDE.md` - MomCo Africa budget tracking system documentation
- `../Annual Regional Budgets.pdf` - 2025 budget allocations by region
