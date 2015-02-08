<?php
if(!isset($columns)) {
  $columns = "large-12";
}
if($gallery) {
  echo "<div class=\"{$columns} columns\">";
    $first_gallery_img = wp_get_attachment_image_src($gallery[0], 'full');
    echo "<img src=\"{$first_gallery_img[0]}\" />";
    echo "<ul class=\"small-block-grid-4\">";
    foreach ($gallery as $gallery_item) {
      $gallery_thumbnail = wp_get_attachment_image_src($gallery_item, 'thumbnail');
      $gallery_full = wp_get_attachment_image_src($gallery_item, 'full');

      echo "<li>";
        echo "<a href=\"{$gallery_full[0]}\" target=\"_blank\">";
          echo "<img src=\"{$gallery_thumbnail[0]}\" class=\"no-padding-bottom\"/>";
        echo "</a>";
      echo "</li>";
    }
    echo "</ul>";
  echo "</div>";
}
?>
