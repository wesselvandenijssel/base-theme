<?php

namespace Flynt\CustomPostTypes;

add_action('init', function () {
	$labels = [
		'name'                  => _x('Projects', 'Post Type General Name', 'flynt'),
		'singular_name'         => _x('Project', 'Post Type Singular Name', 'flynt'),
		'menu_name'             => __('Project', 'flynt'),
		'name_admin_bar'        => __('Project', 'flynt'),
	];
	$args = [
		'label'                 => __('Project', 'flynt'),
		'labels'                => $labels,
		'supports'              => ['title', 'editor', 'revisions', 'thumbnail'],
		'taxonomies'            => ['category', 'post_tag'],
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	];
	register_post_type('projects', $args);
});