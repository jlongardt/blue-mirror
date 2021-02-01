var video = document.querySelector(".videoElement");


if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = '13vw', //distance from center
    start = -90, //shift start from 0
    $elements = $('li:not(:first-child)'),
    numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
    slice = 360 * type / numberOfElements;

$elements.each(function(i) {
    var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;

    $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
    });
});

$( ".flag_it" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_it").css("display", "initial");
});

$( ".flag_de" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_de").css("display", "initial");
});


$( ".selectorIt1" ).click(function() {
  $(".glass").removeClass("glass2 glass3 glass4 glass5").addClass("glass1");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resIt1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowIt1").css("visibility", "visible");
});

$( ".selectorIt2" ).click(function() {
  $(".glass").removeClass("glass2 glass3 glass4 glass1").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resIt2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowIt2").css("visibility", "visible");
});
