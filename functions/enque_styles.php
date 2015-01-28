<?php
  function register_styles() {
    $template_dir = get_template_directory_uri();
    $css_file = (defined('PRODUCTION') && constant('PRODUCTION')) ? '/css/sill-life.min.css' : '/css/sill-life.css';

    wp_register_style('google_font', 'http://fonts.googleapis.com/css?family=Roboto+Slab:300,700,100,400');
    wp_enqueue_style('google_font');
    wp_register_style('sill_life', $template_dir.$css_file);
    wp_enqueue_style('sill_life');
  }

  add_action('wp_enqueue_scripts', 'register_styles');
?>
