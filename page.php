<?php get_header(); ?>

<div class="content">
  <div class="row">
    <?php
      if ( have_posts() ) {
        while ( have_posts() ) { the_post(); ?>
          <?php
            $image = get_field('image');
            $columns = $image ? 'large-7 medium-7' : 'large-12 medium-12';
            $content_columns = $image ? 'large-5 medium-5' : 'large-12 medium-12';

            if($image) {
              echo "<div class=\"{$columns} columns\"><img src=\"{$image['url']}\" /></div>";
            }

          ?>

          <div class="<?php echo $content_columns; ?> columns">
            <?php the_content(); ?>
          </div>
        <?php
        }
      }
    ?>
  </div>
</div>

<?php get_footer(); ?>
