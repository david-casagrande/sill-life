<!DOCTYPE html>
<html>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php bloginfo('name'); ?><?php wp_title(' - '); ?></title>
  <?php wp_head(); ?>
</head>

<body>
  <?php
    $sill_life_classes = array('sill-life', 'large-8', 'medium-10', 'small-12', 'columns',
    'large-centered', 'medium-centered', 'small-centered');
    if(!is_home()) { $sill_life_classes[] = 'with-background'; }
  ?>
  <div class="<?php echo join(' ', $sill_life_classes); ?>">
    <div class="header">
      <?php include('templates/logo.php'); ?>
      <?php include('templates/main-nav.php'); ?>
    </div>
