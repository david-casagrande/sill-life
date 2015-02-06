<div class="all-classes row content-padding-side narrative">
  <?php
    $columns = $image ? 'large-6 medium-6' : 'large-12 medium-12';
    if($image) {
      echo "<div class=\"{$columns} columns\"><img src=\"{$image['url']}\" /></div>";
    }
    echo "<div class=\"{$columns} columns\">";
      $args = array(
        'post_type' => array('classes'),
        'posts_per_page'=> -1,
        'post_status' => ('publish')
      );
      $query = new WP_Query( $args );

      while ( $query->have_posts() ) : $query->the_post();
        include('classes.php');
      endwhile;
    echo "</div>";
  ?>
</div>
