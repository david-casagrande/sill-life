(function() {

  function galleryClick(e) {
    e.preventDefault();
    var imgSrc = e.target.parentNode.getAttribute('href'),
        galleryMainImage = e.target.offsetParent.getElementsByClassName('gallery-main-image')[0];

    if(galleryMainImage.getAttribute('src') === imgSrc) { return; }

    // console.log('change')
    // var img = new Image(imgSrc);
    // img.src = imgSrc;
    // img.onload = function() {
    //   console.log(this)
    // }

    galleryMainImage.setAttribute('src', imgSrc);
  }

  window.SILL_LIFE = {
    galleryClick: galleryClick
  };

})();
