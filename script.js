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
$( ".flag_bg" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_bg").css("display", "initial");
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


$( ".selectorBe1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resBe1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowBe1").css("visibility", "visible");
});
$( ".selectorBe2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resBe2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowBe2").css("visibility", "visible");
});
$( ".selectorBe3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resBe3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowBe3").css("visibility", "visible");
});
$( ".selectorBe4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe4").css("display", "flex");
  $(".arrowBe4").css("visibility", "visible");
});
$( ".selectorBe5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe5").css("display", "flex");
  $(".arrowBe5").css("visibility", "visible");
});
$( ".selectorBe6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe6").css("display", "flex");
  $(".arrowBe6").css("visibility", "visible");
});
$( ".selectorBe7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe7").css("display", "flex");
  $(".arrowBe7").css("visibility", "visible");
});
$( ".selectorBe8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe8").css("display", "flex");
  $(".arrowBe8").css("visibility", "visible");
});
$( ".selectorBe9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe9").css("display", "flex");
  $(".arrowBe9").css("visibility", "visible");
});
$( ".selectorBe10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe10").css("display", "flex");
  $(".arrowBe10").css("visibility", "visible");
});
$( ".selectorBe11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe11").css("display", "flex");
  $(".arrowBe11").css("visibility", "visible");
});
$( ".selectorBe12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe12").css("display", "flex");
  $(".arrowBe12").css("visibility", "visible");
});
$( ".selectorBe13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe13").css("display", "flex");
  $(".arrowBe13").css("visibility", "visible");
});
$( ".selectorBe14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe14").css("display", "flex");
  $(".arrowBe14").css("visibility", "visible");
});
$( ".selectorBe15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe15").css("display", "flex");
  $(".arrowBe15").css("visibility", "visible");
});
$( ".selectorBe16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe16").css("display", "flex");
  $(".arrowBe16").css("visibility", "visible");
});
$( ".selectorBe17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe17").css("display", "flex");
  $(".arrowBe17").css("visibility", "visible");
});
$( ".selectorBe18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe18").css("display", "flex");
  $(".arrowBe18").css("visibility", "visible");
});
$( ".selectorBe19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe19").css("display", "flex");
  $(".arrowBe19").css("visibility", "visible");
});
$( ".selectorBe20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe20").css("display", "flex");
  $(".arrowBe20").css("visibility", "visible");
});
$( ".selectorBe21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBe21").css("display", "flex");
  $(".arrowBe21").css("visibility", "visible");
});

$( ".selectorBg1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resBg1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowBg1").css("visibility", "visible");
});
$( ".selectorBg2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resBg2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowBg2").css("visibility", "visible");
});
$( ".selectorBg3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resBg3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowBg3").css("visibility", "visible");
});
$( ".selectorBg4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg4").css("display", "flex");
  $(".arrowBg4").css("visibility", "visible");
});
$( ".selectorBg5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg5").css("display", "flex");
  $(".arrowBg5").css("visibility", "visible");
});
$( ".selectorBg6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg6").css("display", "flex");
  $(".arrowBg6").css("visibility", "visible");
});
$( ".selectorBg7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg7").css("display", "flex");
  $(".arrowBg7").css("visibility", "visible");
});
$( ".selectorBg8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg8").css("display", "flex");
  $(".arrowBg8").css("visibility", "visible");
});
$( ".selectorBg9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg9").css("display", "flex");
  $(".arrowBg9").css("visibility", "visible");
});
$( ".selectorBg10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg10").css("display", "flex");
  $(".arrowBg10").css("visibility", "visible");
});
$( ".selectorBg11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg11").css("display", "flex");
  $(".arrowBg11").css("visibility", "visible");
});
$( ".selectorBg12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg12").css("display", "flex");
  $(".arrowBg12").css("visibility", "visible");
});
$( ".selectorBg13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg13").css("display", "flex");
  $(".arrowBg13").css("visibility", "visible");
});
$( ".selectorBg14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg14").css("display", "flex");
  $(".arrowBg14").css("visibility", "visible");
});
$( ".selectorBg15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg15").css("display", "flex");
  $(".arrowBg15").css("visibility", "visible");
});
$( ".selectorBg16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg16").css("display", "flex");
  $(".arrowBg16").css("visibility", "visible");
});
$( ".selectorBg17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg17").css("display", "flex");
  $(".arrowBg17").css("visibility", "visible");
});
$( ".selectorBg18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg18").css("display", "flex");
  $(".arrowBg18").css("visibility", "visible");
});
$( ".selectorBg19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg19").css("display", "flex");
  $(".arrowBg19").css("visibility", "visible");
});
$( ".selectorBg20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg20").css("display", "flex");
  $(".arrowBg20").css("visibility", "visible");
});
$( ".selectorBg21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resBg21").css("display", "flex");
  $(".arrowBg21").css("visibility", "visible");
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
