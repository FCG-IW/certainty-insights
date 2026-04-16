<?php
/*
Plugin Name: FCG ACF Field Groups
Description: Registers the FCG page field groups for headless WordPress content editing.
Version: 1.0.0
Author: FCG
*/

if (!defined('ABSPATH')) {
    exit;
}

add_action('admin_notices', function (): void {
    if (current_user_can('activate_plugins') && !function_exists('acf_add_local_field_group')) {
        echo '<div class="notice notice-warning"><p><strong>FCG ACF Field Groups</strong> requires Advanced Custom Fields to be installed and active.</p></div>';
    }
});

/**
 * Register ACF field groups for FCG headless pages using ACF Free compatible fields.
 *
 * Install as a normal plugin in wp-content/plugins and activate it.
 * ACF must be installed and active.
 */
add_action('acf/init', function (): void {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    $make_text = function (string $label, string $name): array {
        return [
            'key' => 'field_' . sanitize_key($name),
            'label' => $label,
            'name' => $name,
            'type' => 'text',
        ];
    };

    $make_textarea = function (string $label, string $name): array {
        return [
            'key' => 'field_' . sanitize_key($name),
            'label' => $label,
            'name' => $name,
            'type' => 'textarea',
            'rows' => 4,
        ];
    };

    $make_url = function (string $label, string $name): array {
        return [
            'key' => 'field_' . sanitize_key($name),
            'label' => $label,
            'name' => $name,
            'type' => 'url',
        ];
    };

    $location_for_slug = function (string $slug): array {
        $page = get_page_by_path($slug, OBJECT, 'page');
        if ($page instanceof WP_Post) {
            return [[[
                'param' => 'page',
                'operator' => '==',
                'value' => (string) $page->ID,
            ]]];
        }

        return [[[
            'param' => 'post_type',
            'operator' => '==',
            'value' => 'page',
        ]]];
    };

    // Home
    $home_fields = [
        $make_text('Statement Label', 'statement_label'),
        $make_textarea('Statement Content', 'statement_content'),
    ];
    for ($i = 1; $i <= 12; $i++) {
        $home_fields[] = $make_text("Value {$i} Number", "values_{$i}_number");
        $home_fields[] = $make_text("Value {$i} Title", "values_{$i}_title");
        $home_fields[] = $make_textarea("Value {$i} Description", "values_{$i}_description");
    }

    acf_add_local_field_group([
        'key' => 'group_fcg_home_content',
        'title' => 'FCG Home Content',
        'fields' => $home_fields,
        'location' => $location_for_slug('home'),
        'show_in_rest' => 1,
    ]);

    // History
    $history_fields = [
        $make_text('Story Heading', 'story_heading'),
        $make_url('Story Logo URL', 'story_logo_url'),
    ];
    for ($i = 1; $i <= 8; $i++) {
        $history_fields[] = $make_text("Milestone {$i} Value", "milestone_{$i}_value");
        $history_fields[] = $make_text("Milestone {$i} Label", "milestone_{$i}_label");
        $history_fields[] = $make_text("Milestone {$i} Suffix", "milestone_{$i}_suffix");
    }
    for ($i = 1; $i <= 12; $i++) {
        $history_fields[] = $make_textarea("Story Paragraph {$i}", "story_paragraph_{$i}");
    }

    acf_add_local_field_group([
        'key' => 'group_fcg_history_content',
        'title' => 'FCG History Content',
        'fields' => $history_fields,
        'location' => $location_for_slug('history'),
        'show_in_rest' => 1,
    ]);

    // Founder
    $founder_fields = [
        $make_text('Hero Kicker', 'hero_kicker'),
        $make_text('Hero Name', 'hero_name'),
        $make_textarea('Hero Tagline', 'hero_tagline'),
        [
            'key' => 'field_hero_email',
            'label' => 'Hero Email',
            'name' => 'hero_email',
            'type' => 'email',
        ],
        $make_text('Hero Email Label', 'hero_email_label'),
        $make_url('Hero LinkedIn URL', 'hero_linkedin_url'),
        $make_text('Hero LinkedIn Label', 'hero_linkedin_label'),
        $make_url('Main Image URL', 'main_image_url'),
        $make_text('Main Image Alt', 'main_image_alt'),
        $make_textarea('Bio Lead', 'bio_lead'),
    ];
    for ($i = 1; $i <= 12; $i++) {
        $founder_fields[] = $make_textarea("Bio Paragraph {$i}", "bio_paragraph_{$i}");
    }
    for ($i = 1; $i <= 12; $i++) {
        $founder_fields[] = $make_text("Education Item {$i}", "education_item_{$i}");
    }

    acf_add_local_field_group([
        'key' => 'group_fcg_founder_content',
        'title' => 'FCG Founder Content',
        'fields' => $founder_fields,
        'location' => $location_for_slug('founder'),
        'show_in_rest' => 1,
    ]);

    // Financial Institutions
    $financial_fields = [
        $make_text('Statement Label', 'statement_label'),
        $make_textarea('Statement Content', 'statement_content'),
        $make_textarea('Situations Intro', 'situations_intro'),
    ];
    for ($i = 1; $i <= 12; $i++) {
        $financial_fields[] = $make_text("Service {$i} Number", "service_{$i}_number");
        $financial_fields[] = $make_text("Service {$i} Name", "service_{$i}_name");
    }
    for ($i = 1; $i <= 20; $i++) {
        $financial_fields[] = $make_textarea("Situation {$i}", "situation_{$i}");
    }

    acf_add_local_field_group([
        'key' => 'group_fcg_financial_content',
        'title' => 'FCG Financial Institutions Content',
        'fields' => $financial_fields,
        'location' => $location_for_slug('financial-institutions'),
        'show_in_rest' => 1,
    ]);

    // Government
    $government_fields = [
        $make_text('Statement Label', 'statement_label'),
        $make_textarea('Statement Content', 'statement_content'),
        $make_text('Credentials Kicker', 'credentials_kicker'),
        $make_text('Credentials Heading', 'credentials_heading'),
        $make_text('UEI Label', 'uei_label'),
        $make_text('UEI Value', 'uei_value'),
        $make_text('CAGE Label', 'cage_label'),
        $make_text('CAGE Value', 'cage_value'),
        $make_text('NAICS Heading', 'naics_heading'),
        $make_text('NIGP Heading', 'nigp_heading'),
        $make_text('Socioeconomic Heading', 'socioeconomic_heading'),
    ];

    for ($i = 1; $i <= 12; $i++) {
        $government_fields[] = $make_text("Service {$i} Number", "service_{$i}_number");
        $government_fields[] = $make_text("Service {$i} Name", "service_{$i}_name");
    }

    for ($i = 1; $i <= 20; $i++) {
        $government_fields[] = $make_text("NAICS {$i} Code", "naics_{$i}_code");
        $government_fields[] = $make_text("NAICS {$i} Description", "naics_{$i}_description");
    }

    for ($i = 1; $i <= 30; $i++) {
        $government_fields[] = $make_text("NIGP {$i} Code", "nigp_{$i}_code");
        $government_fields[] = $make_text("NIGP {$i} Description", "nigp_{$i}_description");
    }

    for ($i = 1; $i <= 20; $i++) {
        $government_fields[] = $make_text("Socioeconomic {$i} Number", "socioeconomic_{$i}_number");
        $government_fields[] = $make_text("Socioeconomic {$i} Title", "socioeconomic_{$i}_title");
        $government_fields[] = $make_text("Socioeconomic {$i} Description", "socioeconomic_{$i}_description");
    }

    acf_add_local_field_group([
        'key' => 'group_fcg_government_content',
        'title' => 'FCG Government Content',
        'fields' => $government_fields,
        'location' => $location_for_slug('government'),
        'show_in_rest' => 1,
    ]);
});
