<?php
/*
Plugin Name: FCG CMS Bootstrap
Description: One-click bootstrap for FCG headless CMS on hosts without WP-CLI. Creates required pages, sets permalinks, and seeds starter ACF-free fields.
Version: 1.0.0
Author: FCG
*/

if (!defined('ABSPATH')) {
    exit;
}

function fcg_cms_bootstrap_find_or_create_page(string $title, string $slug): int
{
    $existing = get_page_by_path($slug, OBJECT, 'page');
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

function fcg_cms_bootstrap_seed_post_meta(int $post_id, array $fields): void
{
    if ($post_id <= 0) {
        return;
    }

    foreach ($fields as $key => $value) {
        if (is_scalar($value)) {
            update_post_meta($post_id, (string) $key, (string) $value);
        }
    }
}

function fcg_cms_bootstrap_seed_defaults(array $page_ids): void
{
    // Home
    fcg_cms_bootstrap_seed_post_meta($page_ids['home'] ?? 0, [
        'statement_label' => 'About',
        'statement_content' => "Over the course of more than two decades of deep analytical and accounting expertise, diplomatic and consultative approach, and relentless work ethic. We are committed to building trust through transparency and strong communication processes, helping our clients and their customers navigate complex commercial lending, investing and government contracting transactions successfully.",
        'values_1_number' => '01',
        'values_1_title' => 'Discipline',
        'values_1_description' => 'Seasoned professionals bringing accountability to reduce risk and promote consistency.',
        'values_2_number' => '02',
        'values_2_title' => 'Discovery',
        'values_2_description' => 'Identify potential risks, analyze impact, and offer practical guidance for confident decisions.',
        'values_3_number' => '03',
        'values_3_title' => 'Diplomacy',
        'values_3_description' => 'White-glove service balancing firmness with empathy in high-stakes environments.',
    ]);

    // History
    fcg_cms_bootstrap_seed_post_meta($page_ids['history'] ?? 0, [
        'story_heading' => 'Our Story',
        'milestone_1_value' => '2002',
        'milestone_1_label' => 'Founded',
        'milestone_2_value' => '1000+',
        'milestone_2_label' => 'Engagements',
        'milestone_3_value' => '20+',
        'milestone_3_label' => 'Years of Service',
        'story_paragraph_1' => 'Financial Compliance Group was founded in 2002 to provide banks and independent financial services organizations with trusted experts in field examinations, collateral reviews, and forensic investigations, helping them manage risk, protect their investments, and maintain the integrity of their loan portfolios.',
        'story_paragraph_2' => "Over a thousand engagements since then, the firm's services have expanded to help government agencies mitigate risk when analyzing vendors, grantees, and awardees.",
    ]);

    // Founder
    fcg_cms_bootstrap_seed_post_meta($page_ids['founder'] ?? 0, [
        'hero_kicker' => 'Leadership',
        'hero_name' => 'Dana Campbell Latimer, CFE',
        'hero_tagline' => 'Founder and President with over three decades of industry experience.',
        'hero_email' => 'dana@fcgllc.net',
        'hero_email_label' => 'Connect via Email',
        'hero_linkedin_url' => 'https://www.linkedin.com/in/dana-campbell-latimer-cfe-6310b45/',
        'hero_linkedin_label' => 'LinkedIn',
        'main_image_alt' => 'Dana Campbell Latimer',
        'bio_lead' => 'Dana Campbell Latimer is widely recognized for her expertise in fraud investigation, lending due diligence, forensic financial analysis and compliance consulting.',
        'bio_paragraph_1' => 'Her analytical approach emphasizes both quantitative evaluation and qualitative insight, enabling stakeholders to make informed credit decisions.',
        'bio_paragraph_2' => 'Beyond examinations, Dana is known for translating complex findings into clear, actionable recommendations.',
        'education_item_1' => "Master's Degree in Accounting and Financial Management, University of Maryland Global Campus",
        'education_item_2' => "Bachelor's Degree in Business Administration, Johnson C. Smith University",
        'education_item_3' => 'Certified Fraud Examiner (CFE)',
    ]);

    // Financial Institutions
    fcg_cms_bootstrap_seed_post_meta($page_ids['financial-institutions'] ?? 0, [
        'statement_label' => 'Expertise',
        'statement_content' => 'We have demonstrated success in asset-based lending and collateral field examinations, corporate loan fraud investigations, workout support, and other agreed-upon procedures to help lenders and funders protect their investments.',
        'service_1_number' => '01',
        'service_1_name' => 'COLLATERAL FIELD EXAMINATIONS',
        'service_2_number' => '02',
        'service_2_name' => 'FORENSIC ACCOUNTING AND FRAUD INVESTIGATIONS',
        'service_3_number' => '03',
        'service_3_name' => 'INVENTORY AND FIXED ASSET VERIFICATIONS',
        'situations_intro' => "FCG conducts a vital analysis of a borrower's assets, financial information, and operations to support lending decisions for a wide range of industries.",
        'situation_1' => 'Financial or operational challenges, such as those in restructuring or bankruptcy proceedings',
        'situation_2' => 'Rapid growth and needing capital to fund expansion',
    ]);

    // Government
    fcg_cms_bootstrap_seed_post_meta($page_ids['government'] ?? 0, [
        'statement_label' => 'Our Mission',
        'statement_content' => 'Government agencies operate under heightened expectations for transparency, accountability, and stewardship of public resources, and FCG is built to support those mandates.',
        'service_1_number' => '01',
        'service_1_name' => 'Contract Audit & Assurance',
        'service_2_number' => '02',
        'service_2_name' => 'Contract Investigations',
        'service_3_number' => '03',
        'service_3_name' => 'Forensic Accounting',
        'credentials_kicker' => 'Credentials',
        'credentials_heading' => 'Government Firm Certifications',
        'uei_label' => 'Unique Entity Identifier',
        'uei_value' => 'NCVRRRUH2MQB6',
        'cage_label' => 'CAGE Code',
        'cage_value' => '8VS15',
        'naics_heading' => 'NAICS Codes',
        'nigp_heading' => 'NIGP Codes',
        'socioeconomic_heading' => 'Social Economic Certifications',
        'naics_1_code' => '541611',
        'naics_1_description' => 'Administrative management and General Management Consulting Services',
        'nigp_1_code' => '91804',
        'nigp_1_description' => 'Accounting, Auditing, Budget Consulting',
        'socioeconomic_1_number' => '01',
        'socioeconomic_1_title' => 'Women-Owned Small Business (WOSB) Federal Contracting Program',
    ]);
}

function fcg_cms_bootstrap_run(): void
{
    update_option('permalink_structure', '/%postname%/');
    flush_rewrite_rules(false);

    $page_ids = [
        'home' => fcg_cms_bootstrap_find_or_create_page('Home', 'home'),
        'history' => fcg_cms_bootstrap_find_or_create_page('History', 'history'),
        'founder' => fcg_cms_bootstrap_find_or_create_page('Founder', 'founder'),
        'financial-institutions' => fcg_cms_bootstrap_find_or_create_page('Financial Institutions', 'financial-institutions'),
        'government' => fcg_cms_bootstrap_find_or_create_page('Government', 'government'),
    ];

    fcg_cms_bootstrap_seed_defaults($page_ids);

    update_option('fcg_cms_bootstrap_completed_at', current_time('mysql'));
}

add_action('admin_init', function (): void {
    if (!is_admin() || !current_user_can('manage_options')) {
        return;
    }

    if (!isset($_GET['fcg_bootstrap_cms'])) {
        return;
    }

    $nonce = isset($_GET['_wpnonce']) ? sanitize_text_field(wp_unslash($_GET['_wpnonce'])) : '';
    if (!wp_verify_nonce($nonce, 'fcg_bootstrap_cms')) {
        wp_die('Invalid nonce.');
    }

    fcg_cms_bootstrap_run();

    $redirect = add_query_arg([
        'page' => 'fcg-cms-bootstrap',
        'seeded' => '1',
    ], admin_url('tools.php'));

    wp_safe_redirect($redirect);
    exit;
});

add_action('admin_menu', function (): void {
    add_management_page(
        'FCG CMS Bootstrap',
        'FCG CMS Bootstrap',
        'manage_options',
        'fcg-cms-bootstrap',
        function (): void {
            if (!current_user_can('manage_options')) {
                return;
            }

            $run_url = wp_nonce_url(
                add_query_arg('fcg_bootstrap_cms', '1', admin_url()),
                'fcg_bootstrap_cms'
            );

            $completed_at = get_option('fcg_cms_bootstrap_completed_at');
            ?>
            <div class="wrap">
                <h1>FCG CMS Bootstrap</h1>
                <p>This tool creates required pages, enables post-name permalinks, and seeds starter ACF-free content fields.</p>
                <p><strong>Safe to run multiple times.</strong> Existing pages are reused and values are updated.</p>
                <p>
                    <a href="<?php echo esc_url($run_url); ?>" class="button button-primary">Run Bootstrap Now</a>
                </p>
                <?php if (!empty($_GET['seeded'])) : ?>
                    <div class="notice notice-success"><p>Bootstrap completed successfully.</p></div>
                <?php endif; ?>
                <?php if (!empty($completed_at)) : ?>
                    <p>Last completed: <?php echo esc_html((string) $completed_at); ?></p>
                <?php endif; ?>
            </div>
            <?php
        }
    );
});
