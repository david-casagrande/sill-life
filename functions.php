<?php
  $template_directory = get_template_directory();

  include($template_directory.'/functions/clean_wp_header.php');
  include($template_directory.'/functions/enque_styles.php');

  function register_menus() {
    $menus = array(
      'main-nav' => __('Main Nav')
    );
    register_nav_menus($menus);
  }
  add_action( 'init', 'register_menus' );
?>
