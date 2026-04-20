# Certainty Insights

Quick start

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

This project uses Vite, React and Tailwind CSS.

## Deployment

### Netlify

1. Create a new site on Netlify and connect your GitHub repo.
2. Build settings should auto-detect:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Set environment variables in Netlify UI (Site Settings > Build & Deploy > Environment):
   - `VITE_WORDPRESS_URL` = your WordPress URL (e.g., `https://your-turbify-domain.com`)
4. SPA routing is configured via `netlify.toml`.
5. Deploy and verify at your Netlify domain.

### Vercel

1. Create a new project on Vercel and import your GitHub repo.
2. Framework preset should auto-detect as Vite.
3. Override build settings if needed:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add environment variables in Vercel (Settings > Environment Variables):
   - `VITE_WORDPRESS_URL` = your WordPress URL
5. SPA routing works by default on Vercel.
6. Deploy and verify at your Vercel domain.

### Other Hosts (Turbify, etc.)

Static hosting works if you can:
1. Upload `dist/` folder contents to your web root.
2. Configure SPA rewrite rules (fallback to `index.html` for non-file routes).
3. Set environment variables before build or via `.env` file.

## Headless WordPress CMS Integration

The frontend now supports page content from WordPress (via WP REST API + a custom FCG CMS plugin).

### Environment

Create a local env file and set your WordPress base URL:

```sh
VITE_WORDPRESS_URL=https://your-wordpress-site.com
```

The app also accepts `VITE_WP_API_BASE` as an alternative.

### WordPress Requirements

1. Create WordPress pages with these slugs:
	 - `home`
	 - `history`
	 - `founder`
	 - `financial-institutions`
	 - `government`

ACF is no longer required.

### Field Schema

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

### Custom CMS Toolkit

If you want a fully controlled custom WordPress setup, use:

- Blueprint: `docs/acf-free-blueprint.md`
- Custom CMS plugin: `scripts/wordpress/fcg-cms-control.php`
- Bootstrap plugin: `scripts/wordpress/fcg-cms-bootstrap.php`
- Legacy ACF plugin: `scripts/wordpress/register-acf-fields.php` (no longer needed)

### Turbify No-CLI Automation

If SSH/WP-CLI is unavailable on hosting, you can still automate setup:

1. Upload `scripts/wordpress/fcg-cms-control.php` to `wp-content/plugins/fcg-cms-control/fcg-cms-control.php`.
2. Activate "FCG CMS Control" in WordPress Admin > Plugins.
3. Deactivate the old ACF-based FCG plugin if it is still active.
4. Upload `scripts/wordpress/fcg-cms-bootstrap.php` to `wp-content/plugins/fcg-cms-bootstrap/fcg-cms-bootstrap.php` if you want a separate bootstrap tool.
5. Activate "FCG CMS Bootstrap" in WordPress Admin > Plugins if installed.
6. Open Tools > FCG CMS Control and click "Run Bootstrap Again".

This will:

- Set permalink format to `/%postname%/`
- Create required pages with expected slugs
- Seed starter custom fields and repeaters for each page
