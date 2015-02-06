<div class="row content-padding-side narrative">
  <?php
    $args = array(
      'post_type' => array('classes'),
      'posts_per_page'=> -1,
      'post_status' => ('publish')
    );
    $query = new WP_Query( $args );

    while ( $query->have_posts() ) : $query->the_post();
      include('classes.php');
    endwhile;
  ?>
</div>
