#!/usr/bin/env bash
set -euo pipefail

# Run this from your WordPress root where wp-config.php exists.
# Example:
#   cd /var/www/html/cms
#   bash /path/to/repo/scripts/wordpress/setup-cms.sh

if ! command -v wp >/dev/null 2>&1; then
  echo "wp-cli is not installed or not in PATH"
  exit 1
fi

# Pretty permalinks required by the frontend and normal WP routing
wp option update permalink_structure '/%postname%/'
wp rewrite flush --hard

# Create required pages if missing
create_page() {
  local title="$1"
  local slug="$2"

  local page_id
  page_id="$(wp post list --post_type=page --name="$slug" --field=ID --format=ids)"
  if [[ -n "$page_id" ]]; then
    echo "Page exists: $slug (ID: $page_id)"
    return 0
  fi

  page_id="$(wp post create --post_type=page --post_status=publish --post_title="$title" --post_name="$slug" --porcelain)"
  echo "Created page: $slug (ID: $page_id)"
}

create_page "Home" "home"
create_page "History" "history"
create_page "Founder" "founder"
create_page "Financial Institutions" "financial-institutions"
create_page "Government" "government"

echo "CMS page setup complete."
