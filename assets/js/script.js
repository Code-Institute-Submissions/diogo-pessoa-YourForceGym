$(function() {
    $('.image-thumb-expand').on('click', function() {
        console.log($(this).attr('src'))
        $('.imagepreview').attr('src', $(this).attr('src'));
        $('#image-gallery-modal').modal('show');
    });
});


// Event Listener for onscroll Event
window.onscroll = function() {myFunction()};

/**
 *  Function to get page and NavBar offset and sticky it to top of Screen on scroll down event.
 *  On Scroll up remove class;
 */
var navbar = document.getElementById("fixed-div");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
