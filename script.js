/**
 * Setup landing page targets and resize/update function 
 */

let image;

let ecoPosition;
let safetyPosition;
let techPosition;
let stylePosition;

let ecoTarget = $("#eco-target");
let safetyTarget = $("#safety-target");
let techTarget = $("#tech-target");
let styleTarget= $("#style-target");

$(document).ready(updatePointer);


$(window).resize(updatePointer);

function updatePointer() {
  image = { width: $(window).width(), height: $(window).height() };
  ecoPosition = { x: ($(window).width() * 0.21), y: ($(window).height() * 0.56) };
  safetyPosition = { x: $(window).width() * 0.3, y: $(window).height() * 0.3 };
  techPosition = { x: $(window).width() * 0.7, y: $(window).height() * 0.35 };
  stylePosition = { x: $(window).width() * 0.6, y: $(window).height() * 0.7 };

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  // Get largest dimension increase
  var xScale = windowWidth / image.width;
  var yScale = windowHeight / image.height;
  var scale;
  var yOffset = 0;
  var xOffset = 0;

  if (xScale > yScale) {
    // The image fits perfectly in x axis, stretched in y
    scale = xScale;
    yOffset = (windowHeight - image.height * scale) / 2;
  } else {
    // The image fits perfectly in y axis, stretched in x
    scale = yScale;
    xOffset = (windowWidth - image.width * scale) / 2;
  }

  ecoTarget.css("top", ecoPosition.y * scale + yOffset);
  ecoTarget.css("left", ecoPosition.x * scale + xOffset);
  safetyTarget.css("top", safetyPosition.y * scale + yOffset);
  safetyTarget.css("left", safetyPosition.x * scale + xOffset);
  techTarget.css("top", techPosition.y * scale + yOffset);
  techTarget.css("left", techPosition.x * scale + xOffset);
  styleTarget.css("top", stylePosition.y * scale + yOffset);
  styleTarget.css("left", stylePosition.x * scale + xOffset);

}


/**
 * Setup landing page target listeners
 */
$(".target-outer").hover(function() {
  $(this).prev().toggleClass("target-hover");
});

// document.querySelectorAll(".target-outer").forEach(element => {
//    element.addEventListener("mouseover", function(event) {
//     element.style.borderBottomColor = 'transparent';
//     element.classList.add("outer-spinner");
//    });
// });


$(".target-outer").hover(function() {
  // $(this).next().css("border-bottom-color", "transparent");
  // $(this).css('border-bottom-color', 'transparent');
  // $(this).next().css('border-bottom-color', 'transparent');
  // $(this).children(0).toggleClass("inner-spinner");
  $(this).toggleClass("outer-spinner");
});

// Add smooth scrolling to all links
$(".target-outer").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = $(this).attr('data-hash');

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 66
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      // window.location.hash = hash;

    });
});