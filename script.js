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
  techPosition = { x: $(window).width() * 0.6, y: $(window).height() * 0.2 };
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