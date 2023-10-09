<?php

namespace Flynt\Components\BlockProjects;

use Timber\Timber;
use Flynt\FieldVariables;

add_filter('Flynt/addComponentData?name=BlockProjects', function ($data) {

    $args = [
        'post_type'   => 'projects',
        'order'       => 'ASC',
        'orderby'     => 'title',
    ];
    $projects =  Timber::get_posts($args);

    $found_projects = [];

    if (!empty($projects)) {
        foreach ($projects as $post) {
            $id = $post->ID;
            $found_projects[] = [
                'title' => $post->post_title,
                'permalink' => get_the_permalink($id),
                'image' => wp_get_attachment_image(get_post_thumbnail_id($id), 'full', false),
            ];
        }
    }

    $data['projects'] = $found_projects;
    return $data;
});

function getACFLayout() {
    return [
        'name' => 'blockProjects',
        'label' => __('Block: Projects', 'flynt'),
        'sub_fields' => [
            [
                'label' => __('Content', 'flynt'),
                'name' => 'contentTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0,
            ],
            [
                'label' => __('Text', 'flynt'),
                'name' => 'contentHtml',
                'type' => 'wysiwyg',
                'delay' => 0,
                'media_upload' => 0,
                'required' => 1,
            ],
            [
                'label' => __('Options', 'flynt'),
                'name' => 'optionsTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0
            ],
            [
                'label' => '',
                'name' => 'options',
                'type' => 'group',
                'layout' => 'row',
                'sub_fields' => [
                    FieldVariables\getTheme(),
                    FieldVariables\getSize(),
                    FieldVariables\getAlignment(),
                    FieldVariables\getTextAlignment()
                ]
            ]
        ]
    ];
}