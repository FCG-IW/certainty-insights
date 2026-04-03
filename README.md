# Certainty Insights

Quick start

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

This project uses Vite, React and Tailwind CSS.

For deployment, use your preferred hosting provider (Vercel, Netlify, Azure, etc.).

## Headless WordPress CMS Integration

The frontend now supports page content from WordPress (via WP REST API + ACF).

### Environment

Create a local env file and set your WordPress base URL:

```sh
VITE_WORDPRESS_URL=https://your-wordpress-site.com
```

The app also accepts `VITE_WP_API_BASE` as an alternative.

### WordPress Requirements

1. Install and activate `Advanced Custom Fields`.
2. Install and activate `ACF to REST API` (or equivalent) so `acf` is available in `/wp-json/wp/v2/pages`.
3. Create WordPress pages with these slugs:
	 - `home`
	 - `history`
	 - `founder`
	 - `financial-institutions`
	 - `government`

### ACF Field Schema

#### Home (`home`)

- `statement_label` (text)
- `statement_content` (textarea)
- `values_items` (repeater)
	- `number` (text)
	- `title` (text)
	- `description` (textarea)

#### History (`history`)

- `milestones` (repeater)
	- `value` (text, e.g. `1000+`)
	- `suffix` (text, optional)
	- `label` (text)
- `story_heading` (text)
- `story_logo_url` (url, optional)
- `story_paragraphs` (repeater)
	- `value` (textarea) or plain string rows

#### Founder (`founder`)

- `hero_kicker` (text)
- `hero_name` (text)
- `hero_tagline` (textarea)
- `hero_email` (email or text)
- `hero_email_label` (text)
- `hero_linkedin_url` (url)
- `hero_linkedin_label` (text)
- `main_image_url` (url)
- `main_image_alt` (text)
- `bio_lead` (textarea)
- `bio_paragraphs` (repeater)
	- `value` (textarea) or plain string rows
- `education_items` (repeater)
	- `value` (text) or plain string rows

#### Financial Institutions (`financial-institutions`)

- `statement_label` (text)
- `statement_content` (textarea)
- `services` (repeater)
	- `number` (text)
	- `name` (text)
- `situations_intro` (textarea)
- `situations_items` (repeater)
	- `value` (textarea) or plain string rows

#### Government (`government`)

- `statement_label` (text)
- `statement_content` (textarea)
- `services` (repeater)
	- `number` (text)
	- `name` (text)
- `credentials_kicker` (text)
- `credentials_heading` (text)
- `uei_label` (text)
- `uei_value` (text)
- `cage_label` (text)
- `cage_value` (text)
- `naics_heading` (text)
- `naics_codes` (repeater)
	- `code` (text)
	- `description` (text)
- `nigp_heading` (text)
- `nigp_codes` (repeater)
	- `code` (text)
	- `description` (text)
- `socioeconomic_heading` (text)
- `socioeconomic_certifications` (repeater)
	- `number` (text)
	- `title` (text)
	- `description` (text)

If WordPress data is unavailable or fields are empty, the app falls back to existing hardcoded content.
