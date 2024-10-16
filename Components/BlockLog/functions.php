<?php

namespace Flynt\Components\BlockLog;

use Timber\Timber;
use Flynt\FieldVariables;

add_filter('Flynt/addComponentData?name=BlockLog', function ($data) {

    $args = [
        'post_type' => 'log',
        'post_status' => 'publish',
        'orderby'     => [
            'date'   => 'DESC',
        ],
        'posts_per_page' => -1,
        'meta_query' => [
            [
                'key' => '_thumbnail_id'
            ]
        ]
    ];
    $log =  Timber::get_posts($args);

    $found_logs = [];

    if (!empty($log)) {
        foreach ($log as $post) {
            $id = $post->ID;
            $found_logs[] = [
                'title' => $post->post_title,
                'permalink' => get_the_permalink($id),
                'date' => get_the_date('d-m-y', $id),
                'image' => wp_get_attachment_image(get_post_thumbnail_id($id), 'full', false, ['class' => 'item-card__image']),
            ];
        }
    }

    $data['log'] = $found_logs;
    return $data;
});

function getACFLayout()
{
    return [
        'name' => 'BlockLog',
        'label' => __('Block: Log', 'flynt'),
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
