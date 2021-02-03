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

$( ".flag_be" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_be").css("display", "initial");
});
$( ".flag_it" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_it").css("display", "initial");
});
$( ".flag_de" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_de").css("display", "initial");
});


$( ".selectorIt1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resIt1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowIt1").css("visibility", "visible");
});
$( ".selectorIt2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resIt2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowIt2").css("visibility", "visible");
});
$( ".selectorIt3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resIt3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowIt3").css("visibility", "visible");
});
$( ".selectorIt4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt4").css("display", "flex");
  $(".arrowIt4").css("visibility", "visible");
});
$( ".selectorIt5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt5").css("display", "flex");
  $(".arrowIt5").css("visibility", "visible");
});
$( ".selectorIt6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt6").css("display", "flex");
  $(".arrowIt6").css("visibility", "visible");
});
$( ".selectorIt7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt7").css("display", "flex");
  $(".arrowIt7").css("visibility", "visible");
});
$( ".selectorIt8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt8").css("display", "flex");
  $(".arrowIt8").css("visibility", "visible");
});
$( ".selectorIt9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt9").css("display", "flex");
  $(".arrowIt9").css("visibility", "visible");
});
$( ".selectorIt10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt10").css("display", "flex");
  $(".arrowIt10").css("visibility", "visible");
});
$( ".selectorIt11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt11").css("display", "flex");
  $(".arrowIt11").css("visibility", "visible");
});
$( ".selectorIt12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt12").css("display", "flex");
  $(".arrowIt12").css("visibility", "visible");
});
$( ".selectorIt13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt13").css("display", "flex");
  $(".arrowIt13").css("visibility", "visible");
});
$( ".selectorIt14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt14").css("display", "flex");
  $(".arrowIt14").css("visibility", "visible");
});
$( ".selectorIt15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt15").css("display", "flex");
  $(".arrowIt15").css("visibility", "visible");
});
$( ".selectorIt16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt16").css("display", "flex");
  $(".arrowIt16").css("visibility", "visible");
});
$( ".selectorIt17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt17").css("display", "flex");
  $(".arrowIt17").css("visibility", "visible");
});
$( ".selectorIt18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt18").css("display", "flex");
  $(".arrowIt18").css("visibility", "visible");
});
$( ".selectorIt19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt19").css("display", "flex");
  $(".arrowIt19").css("visibility", "visible");
});
$( ".selectorIt20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt20").css("display", "flex");
  $(".arrowIt20").css("visibility", "visible");
});
$( ".selectorIt21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIt21").css("display", "flex");
  $(".arrowIt21").css("visibility", "visible");
});
