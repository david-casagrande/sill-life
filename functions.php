<?php
  $template_directory = get_template_directory();

  include($template_directory.'/functions/clean_wp_header.php');

  function register_styles() {
    wp_register_style('still_life', get_template_directory_uri().'/css/still-life.css');
    wp_enqueue_style('still_life');
  }

  add_action('wp_enqueue_scripts', 'register_styles');
?>
