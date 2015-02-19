(function() {

  var galleryMainImage;

  function galleryClick(e) {
    e.preventDefault();
    var imgSrc = e.target.parentNode.getAttribute('href');

    galleryMainImage = e.target.offsetParent.getElementsByClassName('gallery-main-image')[0];

    if(galleryMainImage.getAttribute('src') === imgSrc) { return; }
    //getFile(imgSrc);
    galleryMainImage.setAttribute('src', imgSrc);
  }

  function getFile(file) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
      console.log(this.response);
      readFile(this.response);
    };
    oReq.onprogress = function(e) {
      console.log(e)
    };
    oReq.open('get', file, true);
    oReq.responseType = 'blob';
    oReq.send();
  }

  function readFile(blob) {
    var reader  = new FileReader();
    reader.onloadend = function () {
      console.log(reader.result);
      galleryMainImage.setAttribute('src', reader.result);
    }
    reader.readAsDataURL(blob);
  }


  window.SILL_LIFE = {
    galleryClick: galleryClick
  };

})();
