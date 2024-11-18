window.onload = function() {
    var preloader = document.getElementById('preloader');
    var mainContent = document.getElementById('main-content');
    if (preloader && mainContent) {
        setTimeout(function() {
            preloader.style.display = 'none'; // Hide preloader
            mainContent.style.display = 'block'; // Show main content
        }, 2000); // 8-second delay
    } else {
        console.error('Preloader or main content not found in the DOM');
    }
};

