<?php get_header(); ?>

<div class="content">
  <div class="row content-padding-side content-padding-top narrative">
    <?php
      if ( have_posts() ) {
        while ( have_posts() ) { the_post(); ?>
          <?php
            $image = get_field('image');
            $columns = 'large-12 medium-12';
            echo "<div class=\"{$columns} columns\">";
            the_content();
            echo "</div>";
          ?>
        <?php
        }
      }
    ?>
  </div>
  <?php include('templates/all_classes.php'); ?>
</div>

<?php get_footer(); ?>
