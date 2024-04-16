function showImage() {
    var overlay = document.getElementById('imageOverlay');
    var overlayImage = document.getElementById('overlayImage');

    // Show the image overlay
    overlay.style.display = 'block';

    // Set the image source to "o.drawio (1).png"
    overlayImage.src = 'o.drawio (1).png';
    
}

function hideImage() {
    var overlay = document.getElementById('imageOverlay');

    // Hide the image overlay
    overlay.style.display = 'none';
}


function hideImage1() {
    var overlay = document.getElementById('imageOverlay1');

    // Hide the image overlay
    overlay.style.display = 'none';
}

function showLunchImage() {
    var lunchOverlay = document.getElementById('lunchImageOverlay');
    var lunchOverlayImage = document.getElementById('lunchOverlayImage');

    // Show the lunch image overlay
    lunchOverlay.style.display = 'block';

    // Set the image source to "lu.drawio.png"
    lunchOverlayImage.src = 'lu.drawio.png';
}

function hideLunchImage() {
    var lunchOverlay = document.getElementById('lunchImageOverlay');

    // Hide the lunch image overlay
    lunchOverlay.style.display = 'none';
}

function showDinnerImage() {
    var DinnerOverlay = document.getElementById('DinnerImageOverlay');
    var DinnerOverlayImage = document.getElementById('DinnerOverlayImage');

    // Show the lunch image overlay
    DinnerOverlay.style.display = 'block';

    // Set the image source to "lu.drawio.png"
    DinnerOverlayImage.src = 'd.drawio.png';
}

function hideDinnerImage() {
    var DinnerOverlay = document.getElementById('DinnerImageOverlay');

    // Hide the lunch image overlay
    DinnerOverlay.style.display = 'none';
}
