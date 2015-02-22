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
      modal.onload = function() {
        console.log(this);
      }
      closeButton.onclick = function(e) {
        e.preventDefault();
        destroyModal(modal);
      }
      modal.appendChild(closeButton);
      //setTimeout(function() {
        modal.className = modal.className + ' open';
      //});
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

  window.SILL_LIFE = {
    galleryClick: galleryClick,
    imageGalleryClick: imageGalleryClick
  };

})();
