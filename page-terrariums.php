<?php get_header(); ?>

<div class="content">
  <?php $page_class_names = 'no-padding-bottom'; ?>
  <div class="terrariums-overview bg-white">
    <?php include('templates/page.php'); ?>
  </div>
  <?php include('templates/all_terrariums.php'); ?>
</div>

<?php get_footer(); ?>
