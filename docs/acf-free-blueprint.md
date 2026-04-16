# ACF Free Blueprint (No Repeater)

This blueprint is aligned with the frontend fallback support in this repository.

Use fixed indexed fields so empty slots behave like repeater rows:
- Keep many slots in WordPress
- Fill only the slots you need
- Frontend auto-hides empty rows

## Required Pages and Slugs

- Home -> `home`
- History -> `history`
- Founder -> `founder`
- Financial Institutions -> `financial-institutions`
- Government -> `government`

## Home (slug: home)

- statement_label (Text)
- statement_content (Textarea)
- values_1_number (Text)
- values_1_title (Text)
- values_1_description (Textarea)
- values_2_number (Text)
- values_2_title (Text)
- values_2_description (Textarea)
- values_3_number (Text)
- values_3_title (Text)
- values_3_description (Textarea)
- values_4_number ... values_12_description (optional extra slots)

## History (slug: history)

- story_heading (Text)
- story_logo_url (URL)
- milestone_1_value (Text, example: 1000+)
- milestone_1_label (Text)
- milestone_1_suffix (Text, optional)
- milestone_2_value ... milestone_8_suffix (optional extra slots)
- story_paragraph_1 (Textarea)
- story_paragraph_2 (Textarea)
- story_paragraph_3 ... story_paragraph_12 (optional extra slots)

## Founder (slug: founder)

- hero_kicker (Text)
- hero_name (Text)
- hero_tagline (Textarea)
- hero_email (Email or Text)
- hero_email_label (Text)
- hero_linkedin_url (URL)
- hero_linkedin_label (Text)
- main_image_url (URL)
- main_image_alt (Text)
- bio_lead (Textarea)
- bio_paragraph_1 (Textarea)
- bio_paragraph_2 (Textarea)
- bio_paragraph_3 ... bio_paragraph_12 (optional extra slots)
- education_item_1 (Text)
- education_item_2 (Text)
- education_item_3 ... education_item_12 (optional extra slots)

## Financial Institutions (slug: financial-institutions)

- statement_label (Text)
- statement_content (Textarea)
- situations_intro (Textarea)
- service_1_number (Text)
- service_1_name (Text)
- service_2_number ... service_12_name (optional extra slots)
- situation_1 (Textarea)
- situation_2 (Textarea)
- situation_3 ... situation_20 (optional extra slots)

## Government (slug: government)

- statement_label (Text)
- statement_content (Textarea)
- service_1_number (Text)
- service_1_name (Text)
- service_2_number ... service_12_name (optional extra slots)

Credentials:
- credentials_kicker (Text)
- credentials_heading (Text)
- uei_label (Text)
- uei_value (Text)
- cage_label (Text)
- cage_value (Text)
- naics_heading (Text)
- nigp_heading (Text)
- socioeconomic_heading (Text)

NAICS list:
- naics_1_code (Text)
- naics_1_description (Text)
- naics_2_code ... naics_20_description (optional extra slots)

NIGP list:
- nigp_1_code (Text)
- nigp_1_description (Text)
- nigp_2_code ... nigp_30_description (optional extra slots)

Socioeconomic certifications list:
- socioeconomic_1_number (Text)
- socioeconomic_1_title (Text)
- socioeconomic_1_description (Text)
- socioeconomic_2_number ... socioeconomic_20_description (optional extra slots)

## Notes

- If ACF Pro is added later, repeater fields can be introduced without breaking the frontend.
- Always keep page slugs exact.
- Keep WordPress permalink format on Post name.
