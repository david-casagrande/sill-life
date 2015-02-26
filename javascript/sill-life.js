(function() {

  var Modal = {

    create: function(child) {
      var modal = this._createModal();
      modal.appendChild(child);

      return document.body.appendChild(modal);
    },

    _createModal: function() {
      var modal = document.createElement('div'),
          closeButton = this._createCloseButton(),
          destroyModal = this._destroyModal;

      modal.className = 'modal';
      modal.setAttribute('role', 'dialog');
      modal.onclick = function(e) {
        if(e.target === this) { destroyModal(this); }
      }
      closeButton.onclick = function(e) {
        e.preventDefault();
        destroyModal(modal);
      }
      modal.appendChild(closeButton);
      //setTimeout(function() {
        modal.className = modal.className + ' open';
      //});

      document.body.style.overflow = 'hidden';
      return modal;
    },

    _createCloseButton: function() {
      var closeButton = document.createElement('a');
      closeButton.href = '#';
      closeButton.title = 'Close Modal';
      closeButton.className = 'close-modal';
      closeButton.appendChild(document.createTextNode('×'));
      return closeButton;
    },

    _destroyModal: function(modal) {
      if(!modal) { return; }
      document.body.removeChild(modal);
      document.body.style.overflow = null;
    }

  };

  function galleryClick(e) {
    e.preventDefault();
    var imgSrc = e.target.parentNode.getAttribute('href'), galleryMainImage;
    galleryMainImage = e.target.offsetParent.getElementsByClassName('gallery-main-image')[0];
    if(galleryMainImage.getAttribute('src') === imgSrc) { return; }
    galleryMainImage.setAttribute('src', imgSrc);
  }

  function imageGalleryClick(e) {
    e.preventDefault();
    var imgSrc = e.target.parentNode.getAttribute('href');
    var img = new Image();
    img.src = imgSrc;
    Modal.create(img);
  }

  function galleryNavigate(idx) {

    var gallery = document.getElementsByClassName('image-gallery')[0],
        galleryWidth = gallery.clientWidth;

    if(idx) {
      galleryWidth = -galleryWidth;
    }

    gallery.leftScroll = gallery.scrollLeft += galleryWidth;
    //scrollTo(gallery, galleryWidth, 400);
  }

  function scrollTo(element, difference, duration, end) {
    var nextPosition = element.scrollLeft + difference,
        perTick = (difference / duration) * 10;

    end = end || nextPosition;
    setTimeout(function() {
      element.scrollLeft = element.scrollLeft + perTick;
      if (element.scrollLeft === end) return;
      //scrollTo(element, to, duration - 10);
    }, 10);

    // var to = element.scrollLeft + next,
    //     difference = element.scrollLeft +
    //     perTick = difference / 300 * duration,
    //     to = element.scrollLeft += difference;

    // setTimeout(function() {
    //   element.scrollLeft = element.scrollLeft + perTick;
    //   if (element.scrollLeft === to) return;
    //   scrollTo(element, to, duration - 10);
    // }, 10);

    // if (duration < 0) return;
    // var difference = to - element.scrollLeft;
    // var perTick = difference / duration * 10;
    //
    // setTimeout(function() {
    //     element.scrollLeft = element.scrollLeft + perTick;
    //     if (element.scrollLeft === to) return;
    //     scrollTo(element, to, duration - 10);
    // }, 10);
  }

  window.SILL_LIFE = {
    galleryClick: galleryClick,
    imageGalleryClick: imageGalleryClick,
    galleryNavigate: galleryNavigate
  };

})();
