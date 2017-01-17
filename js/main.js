

var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (viewportWidth > 480) {
    $('body').mousewheel(function(e) {
        $(this).scrollLeft($(this).scrollLeft() - e.deltaY);
        e.preventDefault();
    });
} else {
    $("body").on("mousewheel", function() { return false; });
}


// lazyloads photos on scroll
$(document).ready(function() {
  $("img").unveil();
});

// Keeps images from being draggable
$('img').on('dragstart', function(event) { event.preventDefault(); });

// Smooth scroll to clicked photo
$('a').click(function(){
    $('html, body').animate({
        scrollLeft: $( $.attr(this, 'href') ).offset().left
    }, 800);
    return false;
});
