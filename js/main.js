



// Translates downwards scroll to rightwards scroll
// $(document).ready(function() {
//     $('html, body, *').mousewheel(function(e, delta) {
//         this.scrollLeft -= (delta * -0.5);
//         e.preventDefault();
//     });
// });


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


// $(document).ready(function(){
//   $("#portraitFilter").click(function(){
//     $("#wrapper").load('../module/_portraits.php');
//   });
// });

// $( document ).ready(function() {
//     $("")
// });

// $( "#portraitFilter" ).click(function() {
//   $('.content > img').show().filter(':not(#life)').hide();
// });

// $( "#lifeFilter" ).click(function() {
//   $("div").not("#life").hide();
//   $("#life").show();
// });

// $( "#lifeFilter" ).click(function() {
//   $("div").not("#life").hide();
//   $("#life").show();
// });