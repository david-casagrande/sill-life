<?php
  $title = get_the_title();
  $price = get_field('price');
  $description = get_field('description');
  $care_instructions = get_field('care_instructions');
  $terrarium_title = $price ? "{$title} - <span class=\"font-weight-400\">${price}</span>" :  "{$title}";
?>

<div class="<?php echo $columns; ?> columns">
  <?php
    echo "<h2 class=\"terrarium-title\">{$terrarium_title}</h2>";
    if($description) {
      echo "<div class=\"description\">{$description}</div>";
    }
    if($care_instructions) {
      echo "<div class=\"care-instructions\">";
        echo "<h3 class=\"header-color-2\">Care Instructions</h3>";
        echo "<div class=\"description\">{$care_instructions}</div>";
      echo "</div>";
    }
  ?>
</div>
