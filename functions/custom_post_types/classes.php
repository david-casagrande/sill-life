<?php
  $args = array(
    'post_type' => 'classes',
    'post_label' => 'Classes',
    'post_new_item_label' => 'Add a New Class',
    'post_slug' => '_classes',
    //'post_menu_icon' => 'palette.png',
    //'taxonomy_type' => 'artwork-category',
    //'taxonomy_label' => 'Artwork',
    //'taxonomy_slug' => 'artwork'
  );

  $p = new Custom_Post_Type($args);
?>
