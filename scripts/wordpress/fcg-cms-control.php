<?php
/*
Plugin Name: FCG CMS Control
Description: Custom page CMS for FCG with repeatable editor sections, REST exposure, and seed data. No ACF required.
Version: 1.0.0
Author: FCG
*/

if (!defined('ABSPATH')) {
    exit;
}

function fcg_cms_control_schema(): array
{
    return [
        'home' => [
            'title' => 'FCG Home Content',
            'fields' => [
                ['name' => 'statement_label', 'label' => 'Statement Label', 'type' => 'text'],
                ['name' => 'statement_content', 'label' => 'Statement Content', 'type' => 'textarea'],
            ],
            'repeaters' => [
                [
                    'name' => 'values_items',
                    'label' => 'Values Items',
                    'rows' => 3,
                    'columns' => [
                        ['name' => 'number', 'label' => 'Number', 'type' => 'text'],
                        ['name' => 'title', 'label' => 'Title', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ],
                ],
            ],
        ],
        'history' => [
            'title' => 'FCG History Content',
            'fields' => [
                ['name' => 'story_heading', 'label' => 'Story Heading', 'type' => 'text'],
                ['name' => 'story_logo_url', 'label' => 'Story Logo URL', 'type' => 'url'],
            ],
            'repeaters' => [
                [
                    'name' => 'milestones',
                    'label' => 'Milestones',
                    'rows' => 3,
                    'columns' => [
                        ['name' => 'value', 'label' => 'Value', 'type' => 'text'],
                        ['name' => 'label', 'label' => 'Label', 'type' => 'text'],
                        ['name' => 'suffix', 'label' => 'Suffix', 'type' => 'text'],
                    ],
                ],
                [
                    'name' => 'story_paragraphs',
                    'label' => 'Story Paragraphs',
                    'rows' => 2,
                    'columns' => [
                        ['name' => 'value', 'label' => 'Paragraph', 'type' => 'textarea'],
                    ],
                ],
            ],
        ],
        'founder' => [
            'title' => 'FCG Founder Content',
            'fields' => [
                ['name' => 'hero_kicker', 'label' => 'Hero Kicker', 'type' => 'text'],
                ['name' => 'hero_name', 'label' => 'Hero Name', 'type' => 'text'],
                ['name' => 'hero_tagline', 'label' => 'Hero Tagline', 'type' => 'textarea'],
                ['name' => 'hero_email', 'label' => 'Hero Email', 'type' => 'email'],
                ['name' => 'hero_email_label', 'label' => 'Hero Email Label', 'type' => 'text'],
                ['name' => 'hero_linkedin_url', 'label' => 'Hero LinkedIn URL', 'type' => 'url'],
                ['name' => 'hero_linkedin_label', 'label' => 'Hero LinkedIn Label', 'type' => 'text'],
                ['name' => 'main_image_url', 'label' => 'Main Image', 'type' => 'image'],
                ['name' => 'main_image_alt', 'label' => 'Main Image Alt', 'type' => 'text'],
                ['name' => 'bio_lead', 'label' => 'Bio Lead', 'type' => 'textarea'],
            ],
            'repeaters' => [
                [
                    'name' => 'bio_paragraphs',
                    'label' => 'Bio Paragraphs',
                    'rows' => 3,
                    'columns' => [
                        ['name' => 'value', 'label' => 'Paragraph', 'type' => 'textarea'],
                    ],
                ],
                [
                    'name' => 'education_items',
                    'label' => 'Education Items',
                    'rows' => 3,
                    'columns' => [
                        ['name' => 'value', 'label' => 'Education Item', 'type' => 'text'],
                    ],
                ],
            ],
        ],
        'approach' => [
            'title' => 'FCG Approach Content',
            'fields' => [
                ['name' => 'hero_kicker', 'label' => 'Hero Kicker', 'type' => 'text'],
                ['name' => 'hero_title', 'label' => 'Hero Title', 'type' => 'text'],
                ['name' => 'hero_tagline', 'label' => 'Hero Tagline', 'type' => 'textarea'],
                ['name' => 'statement_label', 'label' => 'Statement Label', 'type' => 'text'],
                ['name' => 'statement_content', 'label' => 'Statement Content', 'type' => 'textarea'],
                ['name' => 'values_kicker', 'label' => 'Values Kicker', 'type' => 'text'],
                ['name' => 'values_heading', 'label' => 'Values Heading', 'type' => 'text'],
            ],
            'repeaters' => [
                [
                    'name' => 'values_items',
                    'label' => 'Values Items',
                    'rows' => 3,
                    'columns' => [
                        ['name' => 'number', 'label' => 'Number', 'type' => 'text'],
                        ['name' => 'title', 'label' => 'Title', 'type' => 'text'],
                        ['name' => 'image', 'label' => 'Image', 'type' => 'image'],
                        ['name' => 'image_alt', 'label' => 'Image Alt', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ],
                ],
            ],
        ],
        'financial-institutions' => [
            'title' => 'FCG Financial Institutions Content',
            'fields' => [
                ['name' => 'statement_label', 'label' => 'Statement Label', 'type' => 'text'],
                ['name' => 'statement_content', 'label' => 'Statement Content', 'type' => 'textarea'],
                ['name' => 'situations_intro', 'label' => 'Situations Intro', 'type' => 'textarea'],
            ],
            'repeaters' => [
                [
                    'name' => 'services',
                    'label' => 'Services',
                    'rows' => 6,
                    'columns' => [
                        ['name' => 'number', 'label' => 'Number', 'type' => 'text'],
                        ['name' => 'name', 'label' => 'Name', 'type' => 'text'],
                    ],
                ],
                [
                    'name' => 'situations_items',
                    'label' => 'Situations',
                    'rows' => 8,
                    'columns' => [
                        ['name' => 'value', 'label' => 'Situation', 'type' => 'textarea'],
                    ],
                ],
            ],
        ],
        'government' => [
            'title' => 'FCG Government Content',
            'fields' => [
                ['name' => 'statement_label', 'label' => 'Statement Label', 'type' => 'text'],
                ['name' => 'statement_content', 'label' => 'Statement Content', 'type' => 'textarea'],
                ['name' => 'credentials_kicker', 'label' => 'Credentials Kicker', 'type' => 'text'],
                ['name' => 'credentials_heading', 'label' => 'Credentials Heading', 'type' => 'text'],
                ['name' => 'uei_label', 'label' => 'UEI Label', 'type' => 'text'],
                ['name' => 'uei_value', 'label' => 'UEI Value', 'type' => 'text'],
                ['name' => 'cage_label', 'label' => 'CAGE Label', 'type' => 'text'],
                ['name' => 'cage_value', 'label' => 'CAGE Value', 'type' => 'text'],
                ['name' => 'naics_heading', 'label' => 'NAICS Heading', 'type' => 'text'],
                ['name' => 'nigp_heading', 'label' => 'NIGP Heading', 'type' => 'text'],
                ['name' => 'socioeconomic_heading', 'label' => 'Socioeconomic Heading', 'type' => 'text'],
            ],
            'repeaters' => [
                [
                    'name' => 'services',
                    'label' => 'Services',
                    'rows' => 6,
                    'columns' => [
                        ['name' => 'number', 'label' => 'Number', 'type' => 'text'],
                        ['name' => 'name', 'label' => 'Name', 'type' => 'text'],
                    ],
                ],
                [
                    'name' => 'naics_codes',
                    'label' => 'NAICS Codes',
                    'rows' => 5,
                    'columns' => [
                        ['name' => 'code', 'label' => 'Code', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'text'],
                    ],
                ],
                [
                    'name' => 'nigp_codes',
                    'label' => 'NIGP Codes',
                    'rows' => 8,
                    'columns' => [
                        ['name' => 'code', 'label' => 'Code', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'text'],
                    ],
                ],
                [
                    'name' => 'socioeconomic_certifications',
                    'label' => 'Socioeconomic Certifications',
                    'rows' => 9,
                    'columns' => [
                        ['name' => 'number', 'label' => 'Number', 'type' => 'text'],
                        ['name' => 'title', 'label' => 'Title', 'type' => 'text'],
                        ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ],
                ],
            ],
        ],
    ];
}

function fcg_cms_control_page_exists(string $slug): ?WP_Post
{
    $post = get_page_by_path($slug, OBJECT, 'page');
    return $post instanceof WP_Post ? $post : null;
}

function fcg_cms_control_find_or_create_page(string $title, string $slug): int
{
    $existing = fcg_cms_control_page_exists($slug);
    if ($existing instanceof WP_Post) {
        return (int) $existing->ID;
    }

    $id = wp_insert_post([
        'post_type' => 'page',
        'post_status' => 'publish',
        'post_title' => $title,
        'post_name' => $slug,
    ]);

    return is_wp_error($id) ? 0 : (int) $id;
}

function fcg_cms_control_sanitize_field_value(array $field, $value)
{
    $type = $field['type'] ?? 'text';

    if ($type === 'textarea') {
        return sanitize_textarea_field((string) $value);
    }

    if ($type === 'url') {
        return esc_url_raw((string) $value);
    }

    if ($type === 'email') {
        return sanitize_email((string) $value);
    }

    if ($type === 'image') {
        return esc_url_raw((string) $value);
    }

    return sanitize_text_field((string) $value);
}

function fcg_cms_control_get_schema_for_post(int $post_id): ?array
{
    $slug = (string) get_post_field('post_name', $post_id);
    $schema = fcg_cms_control_schema();
    return $schema[$slug] ?? null;
}

function fcg_cms_control_register_lead_post_type(): void
{
    register_post_type('fcg_lead', [
        'labels' => [
            'name' => 'Leads',
            'singular_name' => 'Lead',
            'add_new_item' => 'Add New Lead',
            'edit_item' => 'Edit Lead',
            'view_item' => 'View Lead',
            'search_items' => 'Search Leads',
            'not_found' => 'No leads found',
            'not_found_in_trash' => 'No leads found in trash',
            'menu_name' => 'Leads',
        ],
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_rest' => true,
        'supports' => ['title'],
        'capability_type' => 'post',
        'map_meta_cap' => true,
        'has_archive' => false,
        'rewrite' => false,
        'exclude_from_search' => true,
        'menu_icon' => 'dashicons-email-alt2',
    ]);
}
add_action('init', 'fcg_cms_control_register_lead_post_type');

function fcg_cms_control_lead_admin_columns(array $columns): array
{
    return [
        'cb' => $columns['cb'],
        'title' => 'Name',
        'lead_email' => 'Email',
        'lead_phone' => 'Phone',
        'lead_source' => 'Source',
        'date' => 'Submitted',
    ];
}
add_filter('manage_edit-fcg_lead_columns', 'fcg_cms_control_lead_admin_columns');

function fcg_cms_control_lead_admin_column_content(string $column, int $post_id): void
{
    if ($column === 'lead_email') {
        echo esc_html((string) get_post_meta($post_id, 'lead_email', true));
        return;
    }

    if ($column === 'lead_phone') {
        echo esc_html((string) get_post_meta($post_id, 'lead_phone', true));
        return;
    }

    if ($column === 'lead_source') {
        echo esc_html((string) get_post_meta($post_id, 'lead_source', true));
    }
}
add_action('manage_fcg_lead_posts_custom_column', 'fcg_cms_control_lead_admin_column_content', 10, 2);

function fcg_cms_control_render_lead_metabox(WP_Post $post): void
{
    $fields = [
        'lead_name' => 'Name',
        'lead_email' => 'Email',
        'lead_phone' => 'Phone',
        'lead_message' => 'Message',
        'lead_source' => 'Source',
        'lead_page_url' => 'Page URL',
        'lead_referrer' => 'Referrer',
        'lead_ip_address' => 'IP Address',
        'lead_user_agent' => 'User Agent',
    ];

    echo '<div style="display:grid; gap:12px;">';
    foreach ($fields as $meta_key => $label) {
        $value = (string) get_post_meta($post->ID, $meta_key, true);
        if ($meta_key === 'lead_message') {
            echo '<div><strong>' . esc_html($label) . ':</strong><div style="margin-top:6px; white-space:pre-wrap;">' . esc_html($value) . '</div></div>';
            continue;
        }

        echo '<div><strong>' . esc_html($label) . ':</strong><div style="margin-top:4px;">' . esc_html($value) . '</div></div>';
    }
    echo '</div>';
}

add_action('add_meta_boxes_fcg_lead', function (): void {
    add_meta_box(
        'fcg_lead_details',
        'Lead Details',
        function (WP_Post $post): void {
            fcg_cms_control_render_lead_metabox($post);
        },
        'fcg_lead',
        'normal',
        'default'
    );
});

function fcg_cms_control_create_lead(WP_REST_Request $request)
{
    $params = $request->get_json_params();
    if (!is_array($params)) {
        $params = $request->get_params();
    }

    $honeypot = isset($params['website']) ? trim((string) $params['website']) : '';
    if ($honeypot !== '') {
        return new WP_REST_Response(['message' => 'Spam detected.'], 400);
    }

    $name = sanitize_text_field((string) ($params['name'] ?? ''));
    $email = sanitize_email((string) ($params['email'] ?? ''));
    $phone = sanitize_text_field((string) ($params['phone'] ?? ''));
    $message = sanitize_textarea_field((string) ($params['message'] ?? ''));

    if ($name === '' || $email === '' || !is_email($email) || $message === '') {
        return new WP_REST_Response(['message' => 'Please complete all required fields.'], 400);
    }

    $source = sanitize_text_field((string) ($params['source'] ?? 'contact-form'));
    $page_url = esc_url_raw((string) ($params['page_url'] ?? ''));
    $referrer = esc_url_raw((string) ($params['referrer'] ?? ''));
    $ip_address = sanitize_text_field((string) ($_SERVER['REMOTE_ADDR'] ?? ''));
    $user_agent = sanitize_text_field((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''));

    $post_id = wp_insert_post([
        'post_type' => 'fcg_lead',
        'post_status' => 'private',
        'post_title' => $name,
        'post_content' => $message,
    ], true);

    if (is_wp_error($post_id)) {
        return new WP_REST_Response(['message' => $post_id->get_error_message()], 500);
    }

    update_post_meta($post_id, 'lead_name', $name);
    update_post_meta($post_id, 'lead_email', $email);
    update_post_meta($post_id, 'lead_phone', $phone);
    update_post_meta($post_id, 'lead_message', $message);
    update_post_meta($post_id, 'lead_source', $source);
    update_post_meta($post_id, 'lead_page_url', $page_url);
    update_post_meta($post_id, 'lead_referrer', $referrer);
    update_post_meta($post_id, 'lead_ip_address', $ip_address);
    update_post_meta($post_id, 'lead_user_agent', $user_agent);

    return new WP_REST_Response([
        'id' => (int) $post_id,
        'message' => 'Lead captured successfully.',
    ], 201);
}

function fcg_cms_control_register_rest_routes(): void
{
    register_rest_route('fcg/v1', '/leads', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'fcg_cms_control_create_lead',
        'permission_callback' => '__return_true',
    ]);
}
add_action('rest_api_init', 'fcg_cms_control_register_rest_routes');

function fcg_cms_control_seed_defaults(): void
{
    $seed_pages = [
        'home' => fcg_cms_control_find_or_create_page('Home', 'home'),
        'history' => fcg_cms_control_find_or_create_page('History', 'history'),
        'founder' => fcg_cms_control_find_or_create_page('Founder', 'founder'),
            'approach' => fcg_cms_control_find_or_create_page('Approach', 'approach'),
        'financial-institutions' => fcg_cms_control_find_or_create_page('Financial Institutions', 'financial-institutions'),
        'government' => fcg_cms_control_find_or_create_page('Government', 'government'),
    ];

    $defaults = [
        'home' => [
            'statement_label' => 'About',
            'statement_content' => 'Over the course of more than two decades of deep analytical and accounting expertise, diplomatic and consultative approach, and relentless work ethic. We are committed to building trust through transparency and strong communication processes, helping our clients and their customers navigate complex commercial lending, investing and government contracting transactions successfully.',
            'values_items' => [
                ['number' => '01', 'title' => 'Discipline', 'description' => 'Seasoned professionals bringing accountability to reduce risk and promote consistency.'],
                ['number' => '02', 'title' => 'Discovery', 'description' => 'Identify potential risks, analyze impact, and offer practical guidance for confident decisions.'],
                ['number' => '03', 'title' => 'Diplomacy', 'description' => 'White-glove service balancing firmness with empathy in high-stakes environments.'],
            ],
        ],
        'history' => [
            'story_heading' => 'Our Story',
            'story_logo_url' => '',
            'milestones' => [
                ['value' => '2002', 'label' => 'Founded', 'suffix' => ''],
                ['value' => '1000+', 'label' => 'Engagements', 'suffix' => ''],
                ['value' => '20+', 'label' => 'Years of Service', 'suffix' => ''],
            ],
            'story_paragraphs' => [
                ['value' => 'Financial Compliance Group was founded in 2002 to provide banks and independent financial services organizations with trusted experts in field examinations, collateral reviews, and forensic investigations, helping them manage risk, protect their investments, and maintain the integrity of their loan portfolios.'],
                ['value' => "Over a thousand engagements since then, the firm's services have expanded to help government agencies mitigate risk when analyzing vendors, grantees, and awardees."],
            ],
        ],
        'founder' => [
            'hero_kicker' => 'Leadership',
            'hero_name' => 'Dana Campbell Latimer, CFE',
            'hero_tagline' => 'Founder and President with over three decades of industry experience.',
            'hero_email' => 'dana@fcgllc.net',
            'hero_email_label' => 'Connect via Email',
            'hero_linkedin_url' => 'https://www.linkedin.com/in/dana-campbell-latimer-cfe-6310b45/',
            'hero_linkedin_label' => 'LinkedIn',
            'main_image_url' => '',
            'main_image_alt' => 'Dana Campbell Latimer',
            'bio_lead' => 'Dana Campbell Latimer is widely recognized for her expertise in fraud investigation, lending due diligence, forensic financial analysis and compliance consulting.',
            'bio_paragraphs' => [
                ['value' => 'Her analytical approach emphasizes both quantitative evaluation and qualitative insight, enabling stakeholders to make informed credit decisions.'],
                ['value' => 'Beyond examinations, Dana is known for translating complex findings into clear, actionable recommendations.'],
                ['value' => 'Before founding FCG in 2002, Dana served as an examiner with a national field examination firm, performing field exams and audits as well as monitoring loan portfolios. Previously, she worked as an independent contractor through MSM Securities as a Fraud Prevention Inspector nationwide to perform site verifications and inspection of Medicare/Medicaid Provider Facilities to combat fraud, waste and abuse for the U.S. Government.'],
            ],
            'education_items' => [
                ['value' => "Master's Degree in Accounting and Financial Management, University of Maryland Global Campus"],
                ['value' => "Bachelor's Degree in Business Administration, Johnson C. Smith University"],
                ['value' => 'Certified Fraud Examiner (CFE)'],
            ],
        ],
        'approach' => [
            'hero_kicker' => 'About FCG',
            'hero_title' => 'Our Approach',
            'hero_tagline' => 'Partnership, shared expertise, and client-focused success at every step.',
            'statement_label' => 'Philosophy',
            'statement_content' => 'Our core business values are centered on partnership, shared expertise, and client-focused success. We operate as collaborative team players, communicating with clients at every step while upholding the highest standards of integrity and transparency in all our interactions. We share knowledge with lenders investing across the capital structure to help connect the dots.',
            'values_kicker' => 'What Drives Us',
            'values_heading' => 'Our Values',
            'values_items' => [
                ['number' => '01', 'title' => 'Discipline', 'image' => '', 'image_alt' => 'Discipline value visual', 'description' => 'Having performed thousands of field examinations, our seasoned, insight-driven professionals bring discipline and accountability to reduce risk and variability while promoting consistency.'],
                ['number' => '02', 'title' => 'Discovery', 'image' => '', 'image_alt' => 'Discovery value visual', 'description' => 'Through agreed-upon procedures, we help our clients identify potential risks, analyze their impact, and offer practical guidance to make confident, well-supported credit decisions.'],
                ['number' => '03', 'title' => 'Diplomacy', 'image' => '', 'image_alt' => 'Diplomacy value visual', 'description' => 'Our deep people skills and white-glove service builds trust as we balance firmness with empathy, especially in sensitive, high-stakes, or relationship-driven environments. We understand how to work across roles, cultures and personalities.'],
            ],
        ],
        'financial-institutions' => [
            'statement_label' => 'Expertise',
            'statement_content' => 'We have demonstrated success in asset-based lending and collateral field examinations, corporate loan fraud investigations, workout support, and other agreed-upon procedures to help lenders and funders protect their investments.',
            'situations_intro' => "FCG conducts a vital analysis of a borrower's assets, financial information, and operations to support lending decisions for a wide range of industries.",
            'services' => [
                ['number' => '01', 'name' => 'COLLATERAL FIELD EXAMINATIONS'],
                ['number' => '02', 'name' => 'FORENSIC ACCOUNTING AND FRAUD INVESTIGATIONS'],
                ['number' => '03', 'name' => 'INVENTORY AND FIXED ASSET VERIFICATIONS'],
                ['number' => '04', 'name' => 'SPECIALTY FIELD EXAMINATIONS'],
                ['number' => '05', 'name' => 'WORKOUT SUPPORT'],
                ['number' => '06', 'name' => 'OTHER AGREED UPON PROCEDURES'],
            ],
            'situations_items' => [
                ['value' => 'Financial or operational challenges, such as those in restructuring or bankruptcy proceedings'],
                ['value' => 'Rapid growth and needing capital to fund expansion, acquire inventory, or meet rising demand, which often outpaces their immediate cash flow'],
                ['value' => 'Large payrolls and receivables, such as those in staffing and professional services sectors'],
                ['value' => 'Significant raw materials, work-in-progress, and finished goods, such as those in manufacturing and distribution sectors'],
                ['value' => 'Fluctuating or inconsistent cash flows, such as retailers, manufacturers, distributors, or commodity-based businesses'],
                ['value' => 'Seasonal inventory needs or fluctuating sales, such as those in apparel and electronics sectors'],
                ['value' => 'Significant CAPEX investments, such as those in transportation, oilfield services, energy, technology and telecommunications sectors'],
                ['value' => 'Cyclical market volatility, such as those in the metals, mining, oil and gas sectors'],
                ['value' => 'Loan portfolios, such as auto finance companies, mortgage lenders, hard money real estate lenders, equipment finance companies, consumer lenders and litigation finance firms'],
            ],
        ],
        'government' => [
            'statement_label' => 'Our Mission',
            'statement_content' => 'Government agencies operate under heightened expectations for transparency, accountability, and stewardship of public resources, and FCG is built to support those mandates.',
            'credentials_kicker' => 'Credentials',
            'credentials_heading' => 'Government Firm Certifications',
            'uei_label' => 'Unique Entity Identifier',
            'uei_value' => 'NCVRRRUH2MQB6',
            'cage_label' => 'CAGE Code',
            'cage_value' => '8VS15',
            'naics_heading' => 'NAICS Codes',
            'nigp_heading' => 'NIGP Codes',
            'socioeconomic_heading' => 'Social Economic Certifications',
            'services' => [
                ['number' => '01', 'name' => 'Contract Audit & Assurance'],
                ['number' => '02', 'name' => 'Contract Investigations'],
                ['number' => '03', 'name' => 'Forensic Accounting'],
                ['number' => '04', 'name' => 'Fraud Prevention'],
            ],
            'naics_codes' => [
                ['code' => '541611', 'description' => 'Administrative management and General Management Consulting Services'],
                ['code' => '541614', 'description' => 'Process, Physical Distribution and Logistics Consulting Services'],
                ['code' => '541219', 'description' => 'Other Accounting Services'],
                ['code' => '541618', 'description' => 'Other Management Consulting Services'],
                ['code' => '541211', 'description' => 'Offices of Certified Public Accountants'],
            ],
            'nigp_codes' => [
                ['code' => '91804', 'description' => 'Accounting, Auditing, Budget Consulting'],
                ['code' => '91821', 'description' => 'Business Consulting'],
                ['code' => '91838', 'description' => 'Education & Training Consulting'],
                ['code' => '91858', 'description' => 'Governmental Consulting'],
                ['code' => '91875', 'description' => 'Management Consulting'],
                ['code' => '94649', 'description' => 'Financial Services (Not Otherwise Classified)'],
                ['code' => '95839', 'description' => 'Financial Management Services'],
                ['code' => '91806', 'description' => 'Administrative Consulting'],
                ['code' => '91832', 'description' => 'Consulting Services (Not Otherwise Classified)'],
                ['code' => '91849', 'description' => 'Finance & Economics Consulting'],
                ['code' => '91870', 'description' => 'Inventory Consulting'],
                ['code' => '91888', 'description' => 'Quality Assurance & Control Consulting'],
                ['code' => '95816', 'description' => 'Business Management Services'],
            ],
            'socioeconomic_certifications' => [
                ['number' => '01', 'title' => 'Women-Owned Small Business (WOSB) Federal Contracting Program', 'description' => ''],
                ['number' => '02', 'title' => 'Disadvantaged Business Enterprise Program (DBE), Historically Underutilized Business, N.C. Department of Transportation', 'description' => ''],
                ['number' => '03', 'title' => 'Airport Concession Disadvantaged Business Enterprise (ACDBE) Historically Underutilized Business, N.C. Department of Transportation', 'description' => ''],
                ['number' => '04', 'title' => 'Minority Business Enterprise (MBE), Historically Underutilized Business (HUB), State of North Carolina', 'description' => ''],
                ['number' => '05', 'title' => 'Small Business Enterprise (SBE) Historically Underutilized Business (HUB), State of North Carolina', 'description' => ''],
                ['number' => '06', 'title' => 'Minority Business Enterprise (MBE) Charlotte Business INClusion, City of Charlotte', 'description' => ''],
                ['number' => '07', 'title' => 'Small Business Enterprise (SBE) Charlotte Business INClusion, City of Charlotte', 'description' => ''],
                ['number' => '08', 'title' => 'Small Professional Services Firm (SPSF), N.C. Department of Transportation', 'description' => ''],
                ['number' => '09', 'title' => 'Registered Vendor, MWSBE Program, Mecklenburg County, NC', 'description' => ''],
            ],
        ],
    ];

    foreach ($defaults as $slug => $data) {
        $post_id = $seed_pages[$slug] ?? 0;
        if ($post_id <= 0) {
            continue;
        }

        foreach ($data as $key => $value) {
            update_post_meta($post_id, $key, $value);
        }
    }
}

function fcg_cms_control_activate(): void
{
    update_option('permalink_structure', '/%postname%/');
    fcg_cms_control_seed_defaults();
    flush_rewrite_rules(false);
}
register_activation_hook(__FILE__, 'fcg_cms_control_activate');

add_action('admin_menu', function (): void {
    add_management_page(
        'FCG CMS Control',
        'FCG CMS Control',
        'manage_options',
        'fcg-cms-control',
        function (): void {
            if (!current_user_can('manage_options')) {
                return;
            }

            $run_url = wp_nonce_url(
                add_query_arg('fcg_cms_control_run', '1', admin_url()),
                'fcg_cms_control_run'
            );
            ?>
            <div class="wrap">
                <h1>FCG CMS Control</h1>
                <p>This custom plugin manages FCG page content without ACF. It creates repeatable editor sections, seeds starter content, and exposes data in the REST API.</p>
                <p><strong>Safe to run multiple times.</strong> Existing page meta is updated.</p>
                <p><a href="<?php echo esc_url($run_url); ?>" class="button button-primary">Run Bootstrap Again</a></p>
                <?php if (!empty($_GET['seeded'])) : ?>
                    <div class="notice notice-success"><p>Content bootstrapped successfully.</p></div>
                <?php endif; ?>
            </div>
            <?php
        }
    );
});

add_action('admin_init', function (): void {
    if (!is_admin() || !current_user_can('manage_options') || !isset($_GET['fcg_cms_control_run'])) {
        return;
    }

    $nonce = isset($_GET['_wpnonce']) ? sanitize_text_field(wp_unslash($_GET['_wpnonce'])) : '';
    if (!wp_verify_nonce($nonce, 'fcg_cms_control_run')) {
        wp_die('Invalid nonce.');
    }

    fcg_cms_control_activate();

    wp_safe_redirect(add_query_arg(['page' => 'fcg-cms-control', 'seeded' => '1'], admin_url('tools.php')));
    exit;
});

add_action('admin_enqueue_scripts', function (string $hook_suffix): void {
    if (!in_array($hook_suffix, ['post.php', 'post-new.php'], true)) {
        return;
    }

    $screen = function_exists('get_current_screen') ? get_current_screen() : null;
    if (!$screen || $screen->post_type !== 'page') {
        return;
    }

    wp_enqueue_media();
});

function fcg_cms_control_render_image_field(string $field_name, string $label, string $value, string $media_key): string
{
    ob_start();
    ?>
    <div data-fcg-media-field="<?php echo esc_attr($media_key); ?>">
        <label style="display:block; font-weight:600; margin-bottom:6px;"><?php echo esc_html($label); ?></label>
        <input type="hidden" id="<?php echo esc_attr($field_name); ?>" name="<?php echo esc_attr($field_name); ?>" value="<?php echo esc_attr($value); ?>" data-fcg-image-input />
        <div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap;">
            <div data-fcg-image-preview style="width:160px; min-height:120px; border:1px solid #dcdcde; background:#fafafa; display:flex; align-items:center; justify-content:center; overflow:hidden;">
                <?php if ($value !== '') : ?>
                    <img src="<?php echo esc_url($value); ?>" alt="" style="max-width:100%; height:auto; display:block;" />
                <?php else : ?>
                    <span style="color:#646970; font-size:12px;">No image selected</span>
                <?php endif; ?>
            </div>
            <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                <button type="button" class="button" data-fcg-media-select>Select Image</button>
                <button type="button" class="button button-link-delete" data-fcg-media-clear>Remove</button>
            </div>
        </div>
    </div>
    <?php
    return (string) ob_get_clean();
}

function fcg_cms_control_render_input(array $field, $value): string
{
    $name = (string) $field['name'];
    $input_name = 'fcg_control[' . $name . ']';
    $label = (string) $field['label'];
    $type = $field['type'] ?? 'text';
    $value = is_scalar($value) ? (string) $value : '';

    if ($type === 'image') {
        return fcg_cms_control_render_image_field($input_name, $label, $value, $name);
    }

    ob_start();
    ?>
    <p style="margin: 0 0 12px;">
        <label style="display:block; font-weight:600; margin-bottom:6px;" for="<?php echo esc_attr($name); ?>"><?php echo esc_html($label); ?></label>
        <?php if ($type === 'textarea') : ?>
            <textarea class="widefat" rows="4" id="<?php echo esc_attr($name); ?>" name="<?php echo esc_attr($input_name); ?>"><?php echo esc_textarea($value); ?></textarea>
        <?php else : ?>
            <input class="widefat" type="<?php echo esc_attr($type); ?>" id="<?php echo esc_attr($name); ?>" name="<?php echo esc_attr($input_name); ?>" value="<?php echo esc_attr($value); ?>" />
        <?php endif; ?>
    </p>
    <?php
    return (string) ob_get_clean();
}

function fcg_cms_control_render_repeater(array $field, array $rows): string
{
    $name = (string) $field['name'];
    $label = (string) $field['label'];
    $columns = $field['columns'];
    $min_rows = max(1, (int) ($field['rows'] ?? 1));
    $rows = array_values($rows);
    $count = max($min_rows, count($rows));

    ob_start();
    ?>
    <div class="fcg-repeater" data-fcg-repeater="<?php echo esc_attr($name); ?>" style="margin: 18px 0 24px; border: 1px solid #dcdcde; padding: 16px; background: #fff;">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom: 12px;">
            <h3 style="margin:0; font-size: 16px;"><?php echo esc_html($label); ?></h3>
            <button type="button" class="button button-secondary" data-fcg-add-row="<?php echo esc_attr($name); ?>">Add row</button>
        </div>
        <div data-fcg-rows="<?php echo esc_attr($name); ?>">
            <?php for ($index = 0; $index < $count; $index++) :
                $row = $rows[$index] ?? [];
                ?>
                <div class="fcg-row" data-fcg-row style="border:1px solid #e2e4e7; padding: 12px; margin-bottom: 12px; background: #fafafa;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px;">
                        <strong>Row <?php echo (int) $index + 1; ?></strong>
                        <button type="button" class="button-link-delete" data-fcg-remove-row>Remove</button>
                    </div>
                    <div style="display:grid; gap:12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
                        <?php foreach ($columns as $column) :
                            $column_name = (string) $column['name'];
                            $column_label = (string) $column['label'];
                            $column_type = $column['type'] ?? 'text';
                            $column_value = is_array($row) && isset($row[$column_name]) ? (string) $row[$column_name] : '';
                            $field_name = 'fcg_control[' . $name . '][' . $index . '][' . $column_name . ']';
                            $media_key = $name . '_' . $index . '_' . $column_name;
                            ?>
                            <div>
                                <?php if ($column_type === 'image') : ?>
                                    <?php echo fcg_cms_control_render_image_field($field_name, $column_label, $column_value, $media_key); ?>
                                <?php else : ?>
                                    <label style="display:block; font-weight:600; margin-bottom:6px;"><?php echo esc_html($column_label); ?></label>
                                    <?php if ($column_type === 'textarea') : ?>
                                        <textarea class="widefat" rows="4" name="<?php echo esc_attr($field_name); ?>"><?php echo esc_textarea($column_value); ?></textarea>
                                    <?php else : ?>
                                        <input class="widefat" type="<?php echo esc_attr($column_type); ?>" name="<?php echo esc_attr($field_name); ?>" value="<?php echo esc_attr($column_value); ?>" />
                                    <?php endif; ?>
                                <?php endif; ?>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endfor; ?>
        </div>
        <template data-fcg-template="<?php echo esc_attr($name); ?>">
            <div class="fcg-row" data-fcg-row style="border:1px solid #e2e4e7; padding: 12px; margin-bottom: 12px; background: #fafafa;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px;">
                    <strong>Row __INDEX__</strong>
                    <button type="button" class="button-link-delete" data-fcg-remove-row>Remove</button>
                </div>
                <div style="display:grid; gap:12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
                    <?php foreach ($columns as $column) :
                        $column_name = (string) $column['name'];
                        $column_label = (string) $column['label'];
                        $column_type = $column['type'] ?? 'text';
                        $field_name = 'fcg_control[' . $name . '][__INDEX__][' . $column_name . ']';
                        $media_key = $name . '___INDEX___' . $column_name;
                        ?>
                        <div>
                            <?php if ($column_type === 'image') : ?>
                                <?php echo fcg_cms_control_render_image_field($field_name, $column_label, '', $media_key); ?>
                            <?php else : ?>
                                <label style="display:block; font-weight:600; margin-bottom:6px;"><?php echo esc_html($column_label); ?></label>
                                <?php if ($column_type === 'textarea') : ?>
                                    <textarea class="widefat" rows="4" name="<?php echo esc_attr($field_name); ?>"></textarea>
                                <?php else : ?>
                                    <input class="widefat" type="<?php echo esc_attr($column_type); ?>" name="<?php echo esc_attr($field_name); ?>" value="" />
                                <?php endif; ?>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </template>
    </div>
    <?php
    return (string) ob_get_clean();
}

function fcg_cms_control_render_metabox(WP_Post $post): void
{
    $schema = fcg_cms_control_get_schema_for_post((int) $post->ID);
    if (!$schema) {
        echo '<p>No FCG CMS fields are configured for this page.</p>';
        return;
    }

    wp_nonce_field('fcg_cms_control_save', 'fcg_cms_control_nonce');
    $fields = $schema['fields'] ?? [];
    $repeaters = $schema['repeaters'] ?? [];

    echo '<p style="margin-top:0;">Edit the FCG content blocks below. Repeatable sections let you add or remove rows as needed.</p>';

    foreach ($fields as $field) {
        $value = get_post_meta($post->ID, $field['name'], true);
        echo fcg_cms_control_render_input($field, $value);
    }

    foreach ($repeaters as $field) {
        $rows = get_post_meta($post->ID, $field['name'], true);
        $rows = is_array($rows) ? $rows : [];
        echo fcg_cms_control_render_repeater($field, $rows);
    }
}

add_action('add_meta_boxes_page', function (): void {
    add_meta_box(
        'fcg_cms_control_metabox',
        'FCG CMS Content',
        function (WP_Post $post): void {
            fcg_cms_control_render_metabox($post);
        },
        'page',
        'normal',
        'default'
    );
});

add_action('save_post_page', function (int $post_id, WP_Post $post, bool $update): void {
    if (!isset($_POST['fcg_cms_control_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['fcg_cms_control_nonce'])), 'fcg_cms_control_save')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $schema = fcg_cms_control_get_schema_for_post($post_id);
    if (!$schema) {
        return;
    }

    $payload = isset($_POST['fcg_control']) && is_array($_POST['fcg_control']) ? wp_unslash($_POST['fcg_control']) : [];

    foreach (($schema['fields'] ?? []) as $field) {
        $name = $field['name'];
        $value = $payload[$name] ?? '';
        update_post_meta($post_id, $name, fcg_cms_control_sanitize_field_value($field, $value));
    }

    foreach (($schema['repeaters'] ?? []) as $field) {
        $name = $field['name'];
        $columns = $field['columns'] ?? [];
        $rows = isset($payload[$name]) && is_array($payload[$name]) ? $payload[$name] : [];
        $sanitized_rows = [];

        foreach ($rows as $row) {
            if (!is_array($row)) {
                continue;
            }

            $sanitized_row = [];
            foreach ($columns as $column) {
                $column_name = $column['name'];
                $sanitized_row[$column_name] = fcg_cms_control_sanitize_field_value($column, $row[$column_name] ?? '');
            }

            $has_content = false;
            foreach ($sanitized_row as $item) {
                if (is_string($item) && trim($item) !== '') {
                    $has_content = true;
                    break;
                }
            }

            if ($has_content) {
                $sanitized_rows[] = $sanitized_row;
            }
        }

        if ($sanitized_rows) {
            update_post_meta($post_id, $name, $sanitized_rows);
        } else {
            delete_post_meta($post_id, $name);
        }
    }
}, 10, 3);

add_action('admin_footer-post.php', 'fcg_cms_control_admin_footer_script');
add_action('admin_footer-post-new.php', 'fcg_cms_control_admin_footer_script');

function fcg_cms_control_admin_footer_script(): void
{
    $screen = function_exists('get_current_screen') ? get_current_screen() : null;
    if (!$screen || $screen->post_type !== 'page') {
        return;
    }
    ?>
    <script>
      (function() {
                var mediaFrames = {};

                function initMediaField(root) {
                    var key = root.getAttribute('data-fcg-media-field');
                    var button = root.querySelector('[data-fcg-media-select]');
                    var clearButton = root.querySelector('[data-fcg-media-clear]');
                    var input = root.querySelector('[data-fcg-image-input]');
                    var preview = root.querySelector('[data-fcg-image-preview]');

                    if (!key || !button || !clearButton || !input || !preview) {
                        return;
                    }

                    function updatePreview(url) {
                        if (url) {
                            preview.innerHTML = '<img src="' + url + '" alt="" style="max-width:100%; height:auto; display:block;" />';
                        } else {
                            preview.innerHTML = '<span style="color:#646970; font-size:12px;">No image selected</span>';
                        }
                    }

                    button.addEventListener('click', function() {
                        if (!window.wp || !wp.media) {
                            return;
                        }

                        if (!mediaFrames[key]) {
                            mediaFrames[key] = wp.media({
                                title: 'Select Image',
                                button: { text: 'Use this image' },
                                multiple: false,
                                library: { type: 'image' }
                            });

                            mediaFrames[key].on('select', function() {
                                var attachment = mediaFrames[key].state().get('selection').first().toJSON();
                                var url = attachment.url || '';
                                input.value = url;
                                updatePreview(url);
                            });
                        }

                        mediaFrames[key].open();
                    });

                    clearButton.addEventListener('click', function() {
                        input.value = '';
                        updatePreview('');
                    });
                }

        function initRepeater(wrapper) {
          var repeaterName = wrapper.getAttribute('data-fcg-repeater');
          var rowsContainer = wrapper.querySelector('[data-fcg-rows="' + repeaterName + '"]');
          var template = wrapper.querySelector('[data-fcg-template="' + repeaterName + '"]');
          var addButton = wrapper.querySelector('[data-fcg-add-row="' + repeaterName + '"]');

          function bindRemoveButtons(root) {
            root.querySelectorAll('[data-fcg-remove-row]').forEach(function(button) {
              button.addEventListener('click', function() {
                var row = button.closest('[data-fcg-row]');
                if (row) {
                  row.remove();
                }
              });
            });
          }

          function addRow() {
            var index = rowsContainer.querySelectorAll('[data-fcg-row]').length;
                        var html = template.innerHTML.replaceAll('__INDEX__', String(index));
            var temp = document.createElement('div');
            temp.innerHTML = html.trim();
            var row = temp.firstElementChild;
            rowsContainer.appendChild(row);
            bindRemoveButtons(row);
                        row.querySelectorAll('[data-fcg-media-field]').forEach(initMediaField);
          }

          bindRemoveButtons(rowsContainer);
                    rowsContainer.querySelectorAll('[data-fcg-media-field]').forEach(initMediaField);

          if (addButton) {
            addButton.addEventListener('click', function() {
              addRow();
            });
          }
        }

                document.querySelectorAll('[data-fcg-media-field]').forEach(initMediaField);
        document.querySelectorAll('.fcg-repeater').forEach(initRepeater);
      })();
    </script>
    <style>
      .fcg-repeater textarea,
      .fcg-repeater input {
        box-sizing: border-box;
      }
      .fcg-repeater .button-link-delete {
        color: #b32d2e;
        text-decoration: none;
        border: 0;
        background: none;
        cursor: pointer;
      }
    </style>
    <?php
}

function fcg_cms_control_register_rest_field(): void
{
    register_rest_field('page', 'acf', [
        'get_callback' => function (array $object): array {
            $post_id = isset($object['id']) ? (int) $object['id'] : 0;
            $schema = fcg_cms_control_get_schema_for_post($post_id);
            if (!$schema) {
                return [];
            }

            $response = [];
            foreach (($schema['fields'] ?? []) as $field) {
                $response[$field['name']] = get_post_meta($post_id, $field['name'], true);
            }
            foreach (($schema['repeaters'] ?? []) as $field) {
                $rows = get_post_meta($post_id, $field['name'], true);
                $response[$field['name']] = is_array($rows) ? array_values($rows) : [];
            }

            return $response;
        },
        'schema' => null,
    ]);
}
add_action('rest_api_init', 'fcg_cms_control_register_rest_field');
