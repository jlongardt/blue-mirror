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

if (screen.width <= 700) {
     document.location = "mobile.html";
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

$( ".continue" ).click(function() {
  setTimeout(
  function()
  {
    $(".initwrapper").animate({opacity: 0});
  }, 300);
  setTimeout(
  function()
  {
    $(".circle-container").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 1500);
  }, 800);
});


//flag button functionality
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
$( ".flag_cz" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_cz").css("display", "initial");
});
$( ".flag_dk" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_dk").css("display", "initial");
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
$( ".flag_ee" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_ee").css("display", "initial");
});
$( ".flag_ie" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_ie").css("display", "initial");
});
$( ".flag_el" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_el").css("display", "initial");
});
$( ".flag_es" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_es").css("display", "initial");
});
$( ".flag_fr" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_fr").css("display", "initial");
});
$( ".flag_hr" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_hr").css("display", "initial");
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
$( ".flag_cy" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_cy").css("display", "initial");
});
$( ".flag_lv" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_lv").css("display", "initial");
});
$( ".flag_lt" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_lt").css("display", "initial");
});
$( ".flag_lu" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_lu").css("display", "initial");
});
$( ".flag_hu" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_hu").css("display", "initial");
});
$( ".flag_mt" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_mt").css("display", "initial");
});
$( ".flag_nl" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_nl").css("display", "initial");
});
$( ".flag_at" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_at").css("display", "initial");
});
$( ".flag_pl" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_pl").css("display", "initial");
});
$( ".flag_pt" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_pt").css("display", "initial");
});
$( ".flag_ro" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_ro").css("display", "initial");
});
$( ".flag_si" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_si").css("display", "initial");
});
$( ".flag_sk" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_sk").css("display", "initial");
});
$( ".flag_fi" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_fi").css("display", "initial");
});
$( ".flag_se" ).click(function() {
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10")
  $(".flag").removeClass("active");
  $(this).addClass("active");
  $(".dataContainer").css("display", "none");
  $(".content_se").css("display", "initial");
});

//selector button functionality
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

$( ".selectorCz1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resCz1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowCz1").css("visibility", "visible");
});
$( ".selectorCz2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resCz2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowCz2").css("visibility", "visible");
});
$( ".selectorCz3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resCz3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowCz3").css("visibility", "visible");
});
$( ".selectorCz4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz4").css("display", "flex");
  $(".arrowCz4").css("visibility", "visible");
});
$( ".selectorCz5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz5").css("display", "flex");
  $(".arrowCz5").css("visibility", "visible");
});
$( ".selectorCz6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz6").css("display", "flex");
  $(".arrowCz6").css("visibility", "visible");
});
$( ".selectorCz7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz7").css("display", "flex");
  $(".arrowCz7").css("visibility", "visible");
});
$( ".selectorCz8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz8").css("display", "flex");
  $(".arrowCz8").css("visibility", "visible");
});
$( ".selectorCz9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz9").css("display", "flex");
  $(".arrowCz9").css("visibility", "visible");
});
$( ".selectorCz10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz10").css("display", "flex");
  $(".arrowCz10").css("visibility", "visible");
});
$( ".selectorCz11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz11").css("display", "flex");
  $(".arrowCz11").css("visibility", "visible");
});
$( ".selectorCz12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz12").css("display", "flex");
  $(".arrowCz12").css("visibility", "visible");
});
$( ".selectorCz13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz13").css("display", "flex");
  $(".arrowCz13").css("visibility", "visible");
});
$( ".selectorCz14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz14").css("display", "flex");
  $(".arrowCz14").css("visibility", "visible");
});
$( ".selectorCz15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz15").css("display", "flex");
  $(".arrowCz15").css("visibility", "visible");
});
$( ".selectorCz16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz16").css("display", "flex");
  $(".arrowCz16").css("visibility", "visible");
});
$( ".selectorCz17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz17").css("display", "flex");
  $(".arrowCz17").css("visibility", "visible");
});
$( ".selectorCz18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz18").css("display", "flex");
  $(".arrowCz18").css("visibility", "visible");
});
$( ".selectorCz19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz19").css("display", "flex");
  $(".arrowCz19").css("visibility", "visible");
});
$( ".selectorCz20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz20").css("display", "flex");
  $(".arrowCz20").css("visibility", "visible");
});
$( ".selectorCz21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCz21").css("display", "flex");
  $(".arrowCz21").css("visibility", "visible");
});

$( ".selectorDk1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resDk1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowDk1").css("visibility", "visible");
});
$( ".selectorDk2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resDk2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowDk2").css("visibility", "visible");
});
$( ".selectorDk3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resDk3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowDk3").css("visibility", "visible");
});
$( ".selectorDk4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk4").css("display", "flex");
  $(".arrowDk4").css("visibility", "visible");
});
$( ".selectorDk5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk5").css("display", "flex");
  $(".arrowDk5").css("visibility", "visible");
});
$( ".selectorDk6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk6").css("display", "flex");
  $(".arrowDk6").css("visibility", "visible");
});
$( ".selectorDk7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk7").css("display", "flex");
  $(".arrowDk7").css("visibility", "visible");
});
$( ".selectorDk8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk8").css("display", "flex");
  $(".arrowDk8").css("visibility", "visible");
});
$( ".selectorDk9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk9").css("display", "flex");
  $(".arrowDk9").css("visibility", "visible");
});
$( ".selectorDk10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk10").css("display", "flex");
  $(".arrowDk10").css("visibility", "visible");
});
$( ".selectorDk11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk11").css("display", "flex");
  $(".arrowDk11").css("visibility", "visible");
});
$( ".selectorDk12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk12").css("display", "flex");
  $(".arrowDk12").css("visibility", "visible");
});
$( ".selectorDk13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk13").css("display", "flex");
  $(".arrowDk13").css("visibility", "visible");
});
$( ".selectorDk14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk14").css("display", "flex");
  $(".arrowDk14").css("visibility", "visible");
});
$( ".selectorDk15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk15").css("display", "flex");
  $(".arrowDk15").css("visibility", "visible");
});
$( ".selectorDk16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk16").css("display", "flex");
  $(".arrowDk16").css("visibility", "visible");
});
$( ".selectorDk17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk17").css("display", "flex");
  $(".arrowDk17").css("visibility", "visible");
});
$( ".selectorDk18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk18").css("display", "flex");
  $(".arrowDk18").css("visibility", "visible");
});
$( ".selectorDk19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk19").css("display", "flex");
  $(".arrowDk19").css("visibility", "visible");
});
$( ".selectorDk20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk20").css("display", "flex");
  $(".arrowDk20").css("visibility", "visible");
});
$( ".selectorDk21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDk21").css("display", "flex");
  $(".arrowDk21").css("visibility", "visible");
});

$( ".selectorDe1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resDe1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowDe1").css("visibility", "visible");
});
$( ".selectorDe2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resDe2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowDe2").css("visibility", "visible");
});
$( ".selectorDe3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resDe3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowDe3").css("visibility", "visible");
});
$( ".selectorDe4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe4").css("display", "flex");
  $(".arrowDe4").css("visibility", "visible");
});
$( ".selectorDe5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe5").css("display", "flex");
  $(".arrowDe5").css("visibility", "visible");
});
$( ".selectorDe6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe6").css("display", "flex");
  $(".arrowDe6").css("visibility", "visible");
});
$( ".selectorDe7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe7").css("display", "flex");
  $(".arrowDe7").css("visibility", "visible");
});
$( ".selectorDe8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe8").css("display", "flex");
  $(".arrowDe8").css("visibility", "visible");
});
$( ".selectorDe9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe9").css("display", "flex");
  $(".arrowDe9").css("visibility", "visible");
});
$( ".selectorDe10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe10").css("display", "flex");
  $(".arrowDe10").css("visibility", "visible");
});
$( ".selectorDe11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe11").css("display", "flex");
  $(".arrowDe11").css("visibility", "visible");
});
$( ".selectorDe12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe12").css("display", "flex");
  $(".arrowDe12").css("visibility", "visible");
});
$( ".selectorDe13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe13").css("display", "flex");
  $(".arrowDe13").css("visibility", "visible");
});
$( ".selectorDe14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe14").css("display", "flex");
  $(".arrowDe14").css("visibility", "visible");
});
$( ".selectorDe15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe15").css("display", "flex");
  $(".arrowDe15").css("visibility", "visible");
});
$( ".selectorDe16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe16").css("display", "flex");
  $(".arrowDe16").css("visibility", "visible");
});
$( ".selectorDe17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe17").css("display", "flex");
  $(".arrowDe17").css("visibility", "visible");
});
$( ".selectorDe18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe18").css("display", "flex");
  $(".arrowDe18").css("visibility", "visible");
});
$( ".selectorDe19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe19").css("display", "flex");
  $(".arrowDe19").css("visibility", "visible");
});
$( ".selectorDe20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe20").css("display", "flex");
  $(".arrowDe20").css("visibility", "visible");
});
$( ".selectorDe21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resDe21").css("display", "flex");
  $(".arrowDe21").css("visibility", "visible");
});

$( ".selectorEe1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resEe1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowEe1").css("visibility", "visible");
});
$( ".selectorEe2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resEe2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowEe2").css("visibility", "visible");
});
$( ".selectorEe3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resEe3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowEe3").css("visibility", "visible");
});
$( ".selectorEe4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe4").css("display", "flex");
  $(".arrowEe4").css("visibility", "visible");
});
$( ".selectorEe5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe5").css("display", "flex");
  $(".arrowEe5").css("visibility", "visible");
});
$( ".selectorEe6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe6").css("display", "flex");
  $(".arrowEe6").css("visibility", "visible");
});
$( ".selectorEe7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe7").css("display", "flex");
  $(".arrowEe7").css("visibility", "visible");
});
$( ".selectorEe8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe8").css("display", "flex");
  $(".arrowEe8").css("visibility", "visible");
});
$( ".selectorEe9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe9").css("display", "flex");
  $(".arrowEe9").css("visibility", "visible");
});
$( ".selectorEe10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe10").css("display", "flex");
  $(".arrowEe10").css("visibility", "visible");
});
$( ".selectorEe11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe11").css("display", "flex");
  $(".arrowEe11").css("visibility", "visible");
});
$( ".selectorEe12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe12").css("display", "flex");
  $(".arrowEe12").css("visibility", "visible");
});
$( ".selectorEe13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe13").css("display", "flex");
  $(".arrowEe13").css("visibility", "visible");
});
$( ".selectorEe14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe14").css("display", "flex");
  $(".arrowEe14").css("visibility", "visible");
});
$( ".selectorEe15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe15").css("display", "flex");
  $(".arrowEe15").css("visibility", "visible");
});
$( ".selectorEe16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe16").css("display", "flex");
  $(".arrowEe16").css("visibility", "visible");
});
$( ".selectorEe17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe17").css("display", "flex");
  $(".arrowEe17").css("visibility", "visible");
});
$( ".selectorEe18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe18").css("display", "flex");
  $(".arrowEe18").css("visibility", "visible");
});
$( ".selectorEe19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe19").css("display", "flex");
  $(".arrowEe19").css("visibility", "visible");
});
$( ".selectorEe20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe20").css("display", "flex");
  $(".arrowEe20").css("visibility", "visible");
});
$( ".selectorEe21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEe21").css("display", "flex");
  $(".arrowEe21").css("visibility", "visible");
});

$( ".selectorIe1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resIe1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowIe1").css("visibility", "visible");
});
$( ".selectorIe2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resIe2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowIe2").css("visibility", "visible");
});
$( ".selectorIe3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resIe3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowIe3").css("visibility", "visible");
});
$( ".selectorIe4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe4").css("display", "flex");
  $(".arrowIe4").css("visibility", "visible");
});
$( ".selectorIe5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe5").css("display", "flex");
  $(".arrowIe5").css("visibility", "visible");
});
$( ".selectorIe6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe6").css("display", "flex");
  $(".arrowIe6").css("visibility", "visible");
});
$( ".selectorIe7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe7").css("display", "flex");
  $(".arrowIe7").css("visibility", "visible");
});
$( ".selectorIe8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe8").css("display", "flex");
  $(".arrowIe8").css("visibility", "visible");
});
$( ".selectorIe9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe9").css("display", "flex");
  $(".arrowIe9").css("visibility", "visible");
});
$( ".selectorIe10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe10").css("display", "flex");
  $(".arrowIe10").css("visibility", "visible");
});
$( ".selectorIe11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe11").css("display", "flex");
  $(".arrowIe11").css("visibility", "visible");
});
$( ".selectorIe12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe12").css("display", "flex");
  $(".arrowIe12").css("visibility", "visible");
});
$( ".selectorIe13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe13").css("display", "flex");
  $(".arrowIe13").css("visibility", "visible");
});
$( ".selectorIe14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe14").css("display", "flex");
  $(".arrowIe14").css("visibility", "visible");
});
$( ".selectorIe15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe15").css("display", "flex");
  $(".arrowIe15").css("visibility", "visible");
});
$( ".selectorIe16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe16").css("display", "flex");
  $(".arrowIe16").css("visibility", "visible");
});
$( ".selectorIe17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass10");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe17").css("display", "flex");
  $(".arrowIe17").css("visibility", "visible");
});
$( ".selectorIe18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass10");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe18").css("display", "flex");
  $(".arrowIe18").css("visibility", "visible");
});
$( ".selectorIe19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass10");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe19").css("display", "flex");
  $(".arrowIe19").css("visibility", "visible");
});
$( ".selectorIe20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass10");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe20").css("display", "flex");
  $(".arrowIe20").css("visibility", "visible");
});
$( ".selectorIe21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass10");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resIe21").css("display", "flex");
  $(".arrowIe21").css("visibility", "visible");
});

$( ".selectorEl1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resEl1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowEl1").css("visibility", "visible");
});
$( ".selectorEl2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resEl2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowEl2").css("visibility", "visible");
});
$( ".selectorEl3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resEl3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowEl3").css("visibility", "visible");
});
$( ".selectorEl4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl4").css("display", "flex");
  $(".arrowEl4").css("visibility", "visible");
});
$( ".selectorEl5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl5").css("display", "flex");
  $(".arrowEl5").css("visibility", "visible");
});
$( ".selectorEl6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass1");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl6").css("display", "flex");
  $(".arrowEl6").css("visibility", "visible");
});
$( ".selectorEl7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass1");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl7").css("display", "flex");
  $(".arrowEl7").css("visibility", "visible");
});
$( ".selectorEl8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass1");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl8").css("display", "flex");
  $(".arrowEl8").css("visibility", "visible");
});
$( ".selectorEl9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl9").css("display", "flex");
  $(".arrowEl9").css("visibility", "visible");
});
$( ".selectorEl10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl10").css("display", "flex");
  $(".arrowEl10").css("visibility", "visible");
});
$( ".selectorEl11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl11").css("display", "flex");
  $(".arrowEl11").css("visibility", "visible");
});
$( ".selectorEl12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl12").css("display", "flex");
  $(".arrowEl12").css("visibility", "visible");
});
$( ".selectorEl13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass1");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl13").css("display", "flex");
  $(".arrowEl13").css("visibility", "visible");
});
$( ".selectorEl14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass1");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl14").css("display", "flex");
  $(".arrowEl14").css("visibility", "visible");
});
$( ".selectorEl15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass1");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl15").css("display", "flex");
  $(".arrowEl15").css("visibility", "visible");
});
$( ".selectorEl16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl16").css("display", "flex");
  $(".arrowEl16").css("visibility", "visible");
});
$( ".selectorEl17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl17").css("display", "flex");
  $(".arrowEl17").css("visibility", "visible");
});
$( ".selectorEl18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl18").css("display", "flex");
  $(".arrowEl18").css("visibility", "visible");
});
$( ".selectorEl19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl19").css("display", "flex");
  $(".arrowEl19").css("visibility", "visible");
});
$( ".selectorEl20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl20").css("display", "flex");
  $(".arrowEl20").css("visibility", "visible");
});
$( ".selectorEl21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEl21").css("display", "flex");
  $(".arrowEl21").css("visibility", "visible");
});

$( ".selectorEs1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resEs1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowEs1").css("visibility", "visible");
});
$( ".selectorEs2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resEs2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowEs2").css("visibility", "visible");
});
$( ".selectorEs3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resEs3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowEs3").css("visibility", "visible");
});
$( ".selectorEs4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs4").css("display", "flex");
  $(".arrowEs4").css("visibility", "visible");
});
$( ".selectorEs5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs5").css("display", "flex");
  $(".arrowEs5").css("visibility", "visible");
});
$( ".selectorEs6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs6").css("display", "flex");
  $(".arrowEs6").css("visibility", "visible");
});
$( ".selectorEs7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs7").css("display", "flex");
  $(".arrowEs7").css("visibility", "visible");
});
$( ".selectorEs8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs8").css("display", "flex");
  $(".arrowEs8").css("visibility", "visible");
});
$( ".selectorEs9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs9").css("display", "flex");
  $(".arrowEs9").css("visibility", "visible");
});
$( ".selectorEs10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs10").css("display", "flex");
  $(".arrowEs10").css("visibility", "visible");
});
$( ".selectorEs11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs11").css("display", "flex");
  $(".arrowEs11").css("visibility", "visible");
});
$( ".selectorEs12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs12").css("display", "flex");
  $(".arrowEs12").css("visibility", "visible");
});
$( ".selectorEs13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs13").css("display", "flex");
  $(".arrowEs13").css("visibility", "visible");
});
$( ".selectorEs14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs14").css("display", "flex");
  $(".arrowEs14").css("visibility", "visible");
});
$( ".selectorEs15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs15").css("display", "flex");
  $(".arrowEs15").css("visibility", "visible");
});
$( ".selectorEs16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs16").css("display", "flex");
  $(".arrowEs16").css("visibility", "visible");
});
$( ".selectorEs17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs17").css("display", "flex");
  $(".arrowEs17").css("visibility", "visible");
});
$( ".selectorEs18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs18").css("display", "flex");
  $(".arrowEs18").css("visibility", "visible");
});
$( ".selectorEs19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs19").css("display", "flex");
  $(".arrowEs19").css("visibility", "visible");
});
$( ".selectorEs20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs20").css("display", "flex");
  $(".arrowEs20").css("visibility", "visible");
});
$( ".selectorEs21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resEs21").css("display", "flex");
  $(".arrowEs21").css("visibility", "visible");
});

$( ".selectorFr1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resFr1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowFr1").css("visibility", "visible");
});
$( ".selectorFr2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resFr2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowFr2").css("visibility", "visible");
});
$( ".selectorFr3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resFr3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowFr3").css("visibility", "visible");
});
$( ".selectorFr4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr4").css("display", "flex");
  $(".arrowFr4").css("visibility", "visible");
});
$( ".selectorFr5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr5").css("display", "flex");
  $(".arrowFr5").css("visibility", "visible");
});
$( ".selectorFr6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr6").css("display", "flex");
  $(".arrowFr6").css("visibility", "visible");
});
$( ".selectorFr7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr7").css("display", "flex");
  $(".arrowFr7").css("visibility", "visible");
});
$( ".selectorFr8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr8").css("display", "flex");
  $(".arrowFr8").css("visibility", "visible");
});
$( ".selectorFr9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr9").css("display", "flex");
  $(".arrowFr9").css("visibility", "visible");
});
$( ".selectorFr10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr10").css("display", "flex");
  $(".arrowFr10").css("visibility", "visible");
});
$( ".selectorFr11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr11").css("display", "flex");
  $(".arrowFr11").css("visibility", "visible");
});
$( ".selectorFr12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr12").css("display", "flex");
  $(".arrowFr12").css("visibility", "visible");
});
$( ".selectorFr13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr13").css("display", "flex");
  $(".arrowFr13").css("visibility", "visible");
});
$( ".selectorFr14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr14").css("display", "flex");
  $(".arrowFr14").css("visibility", "visible");
});
$( ".selectorFr15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr15").css("display", "flex");
  $(".arrowFr15").css("visibility", "visible");
});
$( ".selectorFr16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr16").css("display", "flex");
  $(".arrowFr16").css("visibility", "visible");
});
$( ".selectorFr17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr17").css("display", "flex");
  $(".arrowFr17").css("visibility", "visible");
});
$( ".selectorFr18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr18").css("display", "flex");
  $(".arrowFr18").css("visibility", "visible");
});
$( ".selectorFr19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr19").css("display", "flex");
  $(".arrowFr19").css("visibility", "visible");
});
$( ".selectorFr20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr20").css("display", "flex");
  $(".arrowFr20").css("visibility", "visible");
});
$( ".selectorFr21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFr21").css("display", "flex");
  $(".arrowFr21").css("visibility", "visible");
});

$( ".selectorHr1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resHr1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowHr1").css("visibility", "visible");
});
$( ".selectorHr2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resHr2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowHr2").css("visibility", "visible");
});
$( ".selectorHr3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resHr3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowHr3").css("visibility", "visible");
});
$( ".selectorHr4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr4").css("display", "flex");
  $(".arrowHr4").css("visibility", "visible");
});
$( ".selectorHr5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr5").css("display", "flex");
  $(".arrowHr5").css("visibility", "visible");
});
$( ".selectorHr6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr6").css("display", "flex");
  $(".arrowHr6").css("visibility", "visible");
});
$( ".selectorHr7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr7").css("display", "flex");
  $(".arrowHr7").css("visibility", "visible");
});
$( ".selectorHr8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr8").css("display", "flex");
  $(".arrowHr8").css("visibility", "visible");
});
$( ".selectorHr9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr9").css("display", "flex");
  $(".arrowHr9").css("visibility", "visible");
});
$( ".selectorHr10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr10").css("display", "flex");
  $(".arrowHr10").css("visibility", "visible");
});
$( ".selectorHr11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr11").css("display", "flex");
  $(".arrowHr11").css("visibility", "visible");
});
$( ".selectorHr12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr12").css("display", "flex");
  $(".arrowHr12").css("visibility", "visible");
});
$( ".selectorHr13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr13").css("display", "flex");
  $(".arrowHr13").css("visibility", "visible");
});
$( ".selectorHr14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr14").css("display", "flex");
  $(".arrowHr14").css("visibility", "visible");
});
$( ".selectorHr15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr15").css("display", "flex");
  $(".arrowHr15").css("visibility", "visible");
});
$( ".selectorHr16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr16").css("display", "flex");
  $(".arrowHr16").css("visibility", "visible");
});
$( ".selectorHr17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr17").css("display", "flex");
  $(".arrowHr17").css("visibility", "visible");
});
$( ".selectorHr18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr18").css("display", "flex");
  $(".arrowHr18").css("visibility", "visible");
});
$( ".selectorHr19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr19").css("display", "flex");
  $(".arrowHr19").css("visibility", "visible");
});
$( ".selectorHr20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr20").css("display", "flex");
  $(".arrowHr20").css("visibility", "visible");
});
$( ".selectorHr21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHr21").css("display", "flex");
  $(".arrowHr21").css("visibility", "visible");
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

$( ".selectorCy1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resCy1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowCy1").css("visibility", "visible");
});
$( ".selectorCy2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resCy2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowCy2").css("visibility", "visible");
});
$( ".selectorCy3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resCy3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowCy3").css("visibility", "visible");
});
$( ".selectorCy4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy4").css("display", "flex");
  $(".arrowCy4").css("visibility", "visible");
});
$( ".selectorCy5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy5").css("display", "flex");
  $(".arrowCy5").css("visibility", "visible");
});
$( ".selectorCy6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy6").css("display", "flex");
  $(".arrowCy6").css("visibility", "visible");
});
$( ".selectorCy7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass1");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy7").css("display", "flex");
  $(".arrowCy7").css("visibility", "visible");
});
$( ".selectorCy8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass1");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy8").css("display", "flex");
  $(".arrowCy8").css("visibility", "visible");
});
$( ".selectorCy9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy9").css("display", "flex");
  $(".arrowCy9").css("visibility", "visible");
});
$( ".selectorCy10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy10").css("display", "flex");
  $(".arrowCy10").css("visibility", "visible");
});
$( ".selectorCy11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy11").css("display", "flex");
  $(".arrowCy11").css("visibility", "visible");
});
$( ".selectorCy12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy12").css("display", "flex");
  $(".arrowCy12").css("visibility", "visible");
});
$( ".selectorCy13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy13").css("display", "flex");
  $(".arrowCy13").css("visibility", "visible");
});
$( ".selectorCy14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy14").css("display", "flex");
  $(".arrowCy14").css("visibility", "visible");
});
$( ".selectorCy15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy15").css("display", "flex");
  $(".arrowCy15").css("visibility", "visible");
});
$( ".selectorCy16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy16").css("display", "flex");
  $(".arrowCy16").css("visibility", "visible");
});
$( ".selectorCy17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy17").css("display", "flex");
  $(".arrowCy17").css("visibility", "visible");
});
$( ".selectorCy18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy18").css("display", "flex");
  $(".arrowCy18").css("visibility", "visible");
});
$( ".selectorCy19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy19").css("display", "flex");
  $(".arrowCy19").css("visibility", "visible");
});
$( ".selectorCy20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy20").css("display", "flex");
  $(".arrowCy20").css("visibility", "visible");
});
$( ".selectorCy21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resCy21").css("display", "flex");
  $(".arrowCy21").css("visibility", "visible");
});

$( ".selectorLv1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resLv1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowLv1").css("visibility", "visible");
});
$( ".selectorLv2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resLv2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowLv2").css("visibility", "visible");
});
$( ".selectorLv3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resLv3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowLv3").css("visibility", "visible");
});
$( ".selectorLv4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv4").css("display", "flex");
  $(".arrowLv4").css("visibility", "visible");
});
$( ".selectorLv5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv5").css("display", "flex");
  $(".arrowLv5").css("visibility", "visible");
});
$( ".selectorLv6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv6").css("display", "flex");
  $(".arrowLv6").css("visibility", "visible");
});
$( ".selectorLv7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv7").css("display", "flex");
  $(".arrowLv7").css("visibility", "visible");
});
$( ".selectorLv8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv8").css("display", "flex");
  $(".arrowLv8").css("visibility", "visible");
});
$( ".selectorLv9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv9").css("display", "flex");
  $(".arrowLv9").css("visibility", "visible");
});
$( ".selectorLv10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv10").css("display", "flex");
  $(".arrowLv10").css("visibility", "visible");
});
$( ".selectorLv11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv11").css("display", "flex");
  $(".arrowLv11").css("visibility", "visible");
});
$( ".selectorLv12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv12").css("display", "flex");
  $(".arrowLv12").css("visibility", "visible");
});
$( ".selectorLv13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv13").css("display", "flex");
  $(".arrowLv13").css("visibility", "visible");
});
$( ".selectorLv14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv14").css("display", "flex");
  $(".arrowLv14").css("visibility", "visible");
});
$( ".selectorLv15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv15").css("display", "flex");
  $(".arrowLv15").css("visibility", "visible");
});
$( ".selectorLv16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv16").css("display", "flex");
  $(".arrowLv16").css("visibility", "visible");
});
$( ".selectorLv17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv17").css("display", "flex");
  $(".arrowLv17").css("visibility", "visible");
});
$( ".selectorLv18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv18").css("display", "flex");
  $(".arrowLv18").css("visibility", "visible");
});
$( ".selectorLv19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv19").css("display", "flex");
  $(".arrowLv19").css("visibility", "visible");
});
$( ".selectorLv20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv20").css("display", "flex");
  $(".arrowLv20").css("visibility", "visible");
});
$( ".selectorLv21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLv21").css("display", "flex");
  $(".arrowLv21").css("visibility", "visible");
});

$( ".selectorLt1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resLt1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowLt1").css("visibility", "visible");
});
$( ".selectorLt2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resLt2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowLt2").css("visibility", "visible");
});
$( ".selectorLt3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resLt3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowLt3").css("visibility", "visible");
});
$( ".selectorLt4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt4").css("display", "flex");
  $(".arrowLt4").css("visibility", "visible");
});
$( ".selectorLt5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt5").css("display", "flex");
  $(".arrowLt5").css("visibility", "visible");
});
$( ".selectorLt6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt6").css("display", "flex");
  $(".arrowLt6").css("visibility", "visible");
});
$( ".selectorLt7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt7").css("display", "flex");
  $(".arrowLt7").css("visibility", "visible");
});
$( ".selectorLt8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt8").css("display", "flex");
  $(".arrowLt8").css("visibility", "visible");
});
$( ".selectorLt9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt9").css("display", "flex");
  $(".arrowLt9").css("visibility", "visible");
});
$( ".selectorLt10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt10").css("display", "flex");
  $(".arrowLt10").css("visibility", "visible");
});
$( ".selectorLt11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt11").css("display", "flex");
  $(".arrowLt11").css("visibility", "visible");
});
$( ".selectorLt12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt12").css("display", "flex");
  $(".arrowLt12").css("visibility", "visible");
});
$( ".selectorLt13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt13").css("display", "flex");
  $(".arrowLt13").css("visibility", "visible");
});
$( ".selectorLt14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt14").css("display", "flex");
  $(".arrowLt14").css("visibility", "visible");
});
$( ".selectorLt15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt15").css("display", "flex");
  $(".arrowLt15").css("visibility", "visible");
});
$( ".selectorLt16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt16").css("display", "flex");
  $(".arrowLt16").css("visibility", "visible");
});
$( ".selectorLt17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt17").css("display", "flex");
  $(".arrowLt17").css("visibility", "visible");
});
$( ".selectorLt18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt18").css("display", "flex");
  $(".arrowLt18").css("visibility", "visible");
});
$( ".selectorLt19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt19").css("display", "flex");
  $(".arrowLt19").css("visibility", "visible");
});
$( ".selectorLt20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt20").css("display", "flex");
  $(".arrowLt20").css("visibility", "visible");
});
$( ".selectorLt21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLt21").css("display", "flex");
  $(".arrowLt21").css("visibility", "visible");
});

$( ".selectorLu1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resLu1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowLu1").css("visibility", "visible");
});
$( ".selectorLu2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resLu2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowLu2").css("visibility", "visible");
});
$( ".selectorLu3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resLu3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowLu3").css("visibility", "visible");
});
$( ".selectorLu4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu4").css("display", "flex");
  $(".arrowLu4").css("visibility", "visible");
});
$( ".selectorLu5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu5").css("display", "flex");
  $(".arrowLu5").css("visibility", "visible");
});
$( ".selectorLu6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu6").css("display", "flex");
  $(".arrowLu6").css("visibility", "visible");
});
$( ".selectorLu7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu7").css("display", "flex");
  $(".arrowLu7").css("visibility", "visible");
});
$( ".selectorLu8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu8").css("display", "flex");
  $(".arrowLu8").css("visibility", "visible");
});
$( ".selectorLu9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu9").css("display", "flex");
  $(".arrowLu9").css("visibility", "visible");
});
$( ".selectorLu10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu10").css("display", "flex");
  $(".arrowLu10").css("visibility", "visible");
});
$( ".selectorLu11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu11").css("display", "flex");
  $(".arrowLu11").css("visibility", "visible");
});
$( ".selectorLu12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu12").css("display", "flex");
  $(".arrowLu12").css("visibility", "visible");
});
$( ".selectorLu13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu13").css("display", "flex");
  $(".arrowLu13").css("visibility", "visible");
});
$( ".selectorLu14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu14").css("display", "flex");
  $(".arrowLu14").css("visibility", "visible");
});
$( ".selectorLu15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu15").css("display", "flex");
  $(".arrowLu15").css("visibility", "visible");
});
$( ".selectorLu16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu16").css("display", "flex");
  $(".arrowLu16").css("visibility", "visible");
});
$( ".selectorLu17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu17").css("display", "flex");
  $(".arrowLu17").css("visibility", "visible");
});
$( ".selectorLu18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu18").css("display", "flex");
  $(".arrowLu18").css("visibility", "visible");
});
$( ".selectorLu19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu19").css("display", "flex");
  $(".arrowLu19").css("visibility", "visible");
});
$( ".selectorLu20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu20").css("display", "flex");
  $(".arrowLu20").css("visibility", "visible");
});
$( ".selectorLu21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resLu21").css("display", "flex");
  $(".arrowLu21").css("visibility", "visible");
});

$( ".selectorHu1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resHu1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowHu1").css("visibility", "visible");
});
$( ".selectorHu2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resHu2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowHu2").css("visibility", "visible");
});
$( ".selectorHu3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resHu3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowHu3").css("visibility", "visible");
});
$( ".selectorHu4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu4").css("display", "flex");
  $(".arrowHu4").css("visibility", "visible");
});
$( ".selectorHu5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu5").css("display", "flex");
  $(".arrowHu5").css("visibility", "visible");
});
$( ".selectorHu6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu6").css("display", "flex");
  $(".arrowHu6").css("visibility", "visible");
});
$( ".selectorHu7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu7").css("display", "flex");
  $(".arrowHu7").css("visibility", "visible");
});
$( ".selectorHu8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu8").css("display", "flex");
  $(".arrowHu8").css("visibility", "visible");
});
$( ".selectorHu9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu9").css("display", "flex");
  $(".arrowHu9").css("visibility", "visible");
});
$( ".selectorHu10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu10").css("display", "flex");
  $(".arrowHu10").css("visibility", "visible");
});
$( ".selectorHu11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu11").css("display", "flex");
  $(".arrowHu11").css("visibility", "visible");
});
$( ".selectorHu12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu12").css("display", "flex");
  $(".arrowHu12").css("visibility", "visible");
});
$( ".selectorHu13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu13").css("display", "flex");
  $(".arrowHu13").css("visibility", "visible");
});
$( ".selectorHu14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu14").css("display", "flex");
  $(".arrowHu14").css("visibility", "visible");
});
$( ".selectorHu15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu15").css("display", "flex");
  $(".arrowHu15").css("visibility", "visible");
});
$( ".selectorHu16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu16").css("display", "flex");
  $(".arrowHu16").css("visibility", "visible");
});
$( ".selectorHu17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu17").css("display", "flex");
  $(".arrowHu17").css("visibility", "visible");
});
$( ".selectorHu18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu18").css("display", "flex");
  $(".arrowHu18").css("visibility", "visible");
});
$( ".selectorHu19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu19").css("display", "flex");
  $(".arrowHu19").css("visibility", "visible");
});
$( ".selectorHu20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu20").css("display", "flex");
  $(".arrowHu20").css("visibility", "visible");
});
$( ".selectorHu21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resHu21").css("display", "flex");
  $(".arrowHu21").css("visibility", "visible");
});

$( ".selectorMt1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resMt1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowMt1").css("visibility", "visible");
});
$( ".selectorMt2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resMt2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowMt2").css("visibility", "visible");
});
$( ".selectorMt3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resMt3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowMt3").css("visibility", "visible");
});
$( ".selectorMt4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt4").css("display", "flex");
  $(".arrowMt4").css("visibility", "visible");
});
$( ".selectorMt5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt5").css("display", "flex");
  $(".arrowMt5").css("visibility", "visible");
});
$( ".selectorMt6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt6").css("display", "flex");
  $(".arrowMt6").css("visibility", "visible");
});
$( ".selectorMt7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt7").css("display", "flex");
  $(".arrowMt7").css("visibility", "visible");
});
$( ".selectorMt8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt8").css("display", "flex");
  $(".arrowMt8").css("visibility", "visible");
});
$( ".selectorMt9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt9").css("display", "flex");
  $(".arrowMt9").css("visibility", "visible");
});
$( ".selectorMt10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt10").css("display", "flex");
  $(".arrowMt10").css("visibility", "visible");
});
$( ".selectorMt11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt11").css("display", "flex");
  $(".arrowMt11").css("visibility", "visible");
});
$( ".selectorMt12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt12").css("display", "flex");
  $(".arrowMt12").css("visibility", "visible");
});
$( ".selectorMt13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt13").css("display", "flex");
  $(".arrowMt13").css("visibility", "visible");
});
$( ".selectorMt14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt14").css("display", "flex");
  $(".arrowMt14").css("visibility", "visible");
});
$( ".selectorMt15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt15").css("display", "flex");
  $(".arrowMt15").css("visibility", "visible");
});
$( ".selectorMt16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt16").css("display", "flex");
  $(".arrowMt16").css("visibility", "visible");
});
$( ".selectorMt17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt17").css("display", "flex");
  $(".arrowMt17").css("visibility", "visible");
});
$( ".selectorMt18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt18").css("display", "flex");
  $(".arrowMt18").css("visibility", "visible");
});
$( ".selectorMt19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt19").css("display", "flex");
  $(".arrowMt19").css("visibility", "visible");
});
$( ".selectorMt20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt20").css("display", "flex");
  $(".arrowMt20").css("visibility", "visible");
});
$( ".selectorMt21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resMt21").css("display", "flex");
  $(".arrowMt21").css("visibility", "visible");
});

$( ".selectorNl1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resNl1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowNl1").css("visibility", "visible");
});
$( ".selectorNl2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resNl2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowNl2").css("visibility", "visible");
});
$( ".selectorNl3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resNl3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowNl3").css("visibility", "visible");
});
$( ".selectorNl4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl4").css("display", "flex");
  $(".arrowNl4").css("visibility", "visible");
});
$( ".selectorNl5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl5").css("display", "flex");
  $(".arrowNl5").css("visibility", "visible");
});
$( ".selectorNl6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl6").css("display", "flex");
  $(".arrowNl6").css("visibility", "visible");
});
$( ".selectorNl7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl7").css("display", "flex");
  $(".arrowNl7").css("visibility", "visible");
});
$( ".selectorNl8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl8").css("display", "flex");
  $(".arrowNl8").css("visibility", "visible");
});
$( ".selectorNl9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl9").css("display", "flex");
  $(".arrowNl9").css("visibility", "visible");
});
$( ".selectorNl10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl10").css("display", "flex");
  $(".arrowNl10").css("visibility", "visible");
});
$( ".selectorNl11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl11").css("display", "flex");
  $(".arrowNl11").css("visibility", "visible");
});
$( ".selectorNl12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl12").css("display", "flex");
  $(".arrowNl12").css("visibility", "visible");
});
$( ".selectorNl13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl13").css("display", "flex");
  $(".arrowNl13").css("visibility", "visible");
});
$( ".selectorNl14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl14").css("display", "flex");
  $(".arrowNl14").css("visibility", "visible");
});
$( ".selectorNl15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl15").css("display", "flex");
  $(".arrowNl15").css("visibility", "visible");
});
$( ".selectorNl16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl16").css("display", "flex");
  $(".arrowNl16").css("visibility", "visible");
});
$( ".selectorNl17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl17").css("display", "flex");
  $(".arrowNl17").css("visibility", "visible");
});
$( ".selectorNl18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl18").css("display", "flex");
  $(".arrowNl18").css("visibility", "visible");
});
$( ".selectorNl19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl19").css("display", "flex");
  $(".arrowNl19").css("visibility", "visible");
});
$( ".selectorNl20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl20").css("display", "flex");
  $(".arrowNl20").css("visibility", "visible");
});
$( ".selectorNl21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resNl21").css("display", "flex");
  $(".arrowNl21").css("visibility", "visible");
});

$( ".selectorAt1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resAt1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowAt1").css("visibility", "visible");
});
$( ".selectorAt2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resAt2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowAt2").css("visibility", "visible");
});
$( ".selectorAt3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resAt3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowAt3").css("visibility", "visible");
});
$( ".selectorAt4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt4").css("display", "flex");
  $(".arrowAt4").css("visibility", "visible");
});
$( ".selectorAt5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt5").css("display", "flex");
  $(".arrowAt5").css("visibility", "visible");
});
$( ".selectorAt6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt6").css("display", "flex");
  $(".arrowAt6").css("visibility", "visible");
});
$( ".selectorAt7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt7").css("display", "flex");
  $(".arrowAt7").css("visibility", "visible");
});
$( ".selectorAt8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt8").css("display", "flex");
  $(".arrowAt8").css("visibility", "visible");
});
$( ".selectorAt9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt9").css("display", "flex");
  $(".arrowAt9").css("visibility", "visible");
});
$( ".selectorAt10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt10").css("display", "flex");
  $(".arrowAt10").css("visibility", "visible");
});
$( ".selectorAt11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt11").css("display", "flex");
  $(".arrowAt11").css("visibility", "visible");
});
$( ".selectorAt12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt12").css("display", "flex");
  $(".arrowAt12").css("visibility", "visible");
});
$( ".selectorAt13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt13").css("display", "flex");
  $(".arrowAt13").css("visibility", "visible");
});
$( ".selectorAt14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt14").css("display", "flex");
  $(".arrowAt14").css("visibility", "visible");
});
$( ".selectorAt15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt15").css("display", "flex");
  $(".arrowAt15").css("visibility", "visible");
});
$( ".selectorAt16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt16").css("display", "flex");
  $(".arrowAt16").css("visibility", "visible");
});
$( ".selectorAt17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt17").css("display", "flex");
  $(".arrowAt17").css("visibility", "visible");
});
$( ".selectorAt18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt18").css("display", "flex");
  $(".arrowAt18").css("visibility", "visible");
});
$( ".selectorAt19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt19").css("display", "flex");
  $(".arrowAt19").css("visibility", "visible");
});
$( ".selectorAt20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt20").css("display", "flex");
  $(".arrowAt20").css("visibility", "visible");
});
$( ".selectorAt21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resAt21").css("display", "flex");
  $(".arrowAt21").css("visibility", "visible");
});

$( ".selectorPl1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resPl1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowPl1").css("visibility", "visible");
});
$( ".selectorPl2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resPl2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowPl2").css("visibility", "visible");
});
$( ".selectorPl3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resPl3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowPl3").css("visibility", "visible");
});
$( ".selectorPl4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl4").css("display", "flex");
  $(".arrowPl4").css("visibility", "visible");
});
$( ".selectorPl5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl5").css("display", "flex");
  $(".arrowPl5").css("visibility", "visible");
});
$( ".selectorPl6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl6").css("display", "flex");
  $(".arrowPl6").css("visibility", "visible");
});
$( ".selectorPl7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl7").css("display", "flex");
  $(".arrowPl7").css("visibility", "visible");
});
$( ".selectorPl8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl8").css("display", "flex");
  $(".arrowPl8").css("visibility", "visible");
});
$( ".selectorPl9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl9").css("display", "flex");
  $(".arrowPl9").css("visibility", "visible");
});
$( ".selectorPl10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass10");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl10").css("display", "flex");
  $(".arrowPl10").css("visibility", "visible");
});
$( ".selectorPl11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl11").css("display", "flex");
  $(".arrowPl11").css("visibility", "visible");
});
$( ".selectorPl12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl12").css("display", "flex");
  $(".arrowPl12").css("visibility", "visible");
});
$( ".selectorPl13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl13").css("display", "flex");
  $(".arrowPl13").css("visibility", "visible");
});
$( ".selectorPl14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl14").css("display", "flex");
  $(".arrowPl14").css("visibility", "visible");
});
$( ".selectorPl15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl15").css("display", "flex");
  $(".arrowPl15").css("visibility", "visible");
});
$( ".selectorPl16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl16").css("display", "flex");
  $(".arrowPl16").css("visibility", "visible");
});
$( ".selectorPl17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl17").css("display", "flex");
  $(".arrowPl17").css("visibility", "visible");
});
$( ".selectorPl18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl18").css("display", "flex");
  $(".arrowPl18").css("visibility", "visible");
});
$( ".selectorPl19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl19").css("display", "flex");
  $(".arrowPl19").css("visibility", "visible");
});
$( ".selectorPl20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl20").css("display", "flex");
  $(".arrowPl20").css("visibility", "visible");
});
$( ".selectorPl21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPl21").css("display", "flex");
  $(".arrowPl21").css("visibility", "visible");
});

$( ".selectorPt1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resPt1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowPt1").css("visibility", "visible");
});
$( ".selectorPt2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resPt2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowPt2").css("visibility", "visible");
});
$( ".selectorPt3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resPt3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowPt3").css("visibility", "visible");
});
$( ".selectorPt4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt4").css("display", "flex");
  $(".arrowPt4").css("visibility", "visible");
});
$( ".selectorPt5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt5").css("display", "flex");
  $(".arrowPt5").css("visibility", "visible");
});
$( ".selectorPt6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt6").css("display", "flex");
  $(".arrowPt6").css("visibility", "visible");
});
$( ".selectorPt7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass2");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt7").css("display", "flex");
  $(".arrowPt7").css("visibility", "visible");
});
$( ".selectorPt8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt8").css("display", "flex");
  $(".arrowPt8").css("visibility", "visible");
});
$( ".selectorPt9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt9").css("display", "flex");
  $(".arrowPt9").css("visibility", "visible");
});
$( ".selectorPt10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt10").css("display", "flex");
  $(".arrowPt10").css("visibility", "visible");
});
$( ".selectorPt11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt11").css("display", "flex");
  $(".arrowPt11").css("visibility", "visible");
});
$( ".selectorPt12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt12").css("display", "flex");
  $(".arrowPt12").css("visibility", "visible");
});
$( ".selectorPt13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt13").css("display", "flex");
  $(".arrowPt13").css("visibility", "visible");
});
$( ".selectorPt14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt14").css("display", "flex");
  $(".arrowPt14").css("visibility", "visible");
});
$( ".selectorPt15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt15").css("display", "flex");
  $(".arrowPt15").css("visibility", "visible");
});
$( ".selectorPt16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt16").css("display", "flex");
  $(".arrowPt16").css("visibility", "visible");
});
$( ".selectorPt17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt17").css("display", "flex");
  $(".arrowPt17").css("visibility", "visible");
});
$( ".selectorPt18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt18").css("display", "flex");
  $(".arrowPt18").css("visibility", "visible");
});
$( ".selectorPt19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass10");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt19").css("display", "flex");
  $(".arrowPt19").css("visibility", "visible");
});
$( ".selectorPt20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt20").css("display", "flex");
  $(".arrowPt20").css("visibility", "visible");
});
$( ".selectorPt21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resPt21").css("display", "flex");
  $(".arrowPt21").css("visibility", "visible");
});

$( ".selectorRo1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resRo1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowRo1").css("visibility", "visible");
});
$( ".selectorRo2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resRo2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowRo2").css("visibility", "visible");
});
$( ".selectorRo3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resRo3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowRo3").css("visibility", "visible");
});
$( ".selectorRo4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo4").css("display", "flex");
  $(".arrowRo4").css("visibility", "visible");
});
$( ".selectorRo5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo5").css("display", "flex");
  $(".arrowRo5").css("visibility", "visible");
});
$( ".selectorRo6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo6").css("display", "flex");
  $(".arrowRo6").css("visibility", "visible");
});
$( ".selectorRo7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo7").css("display", "flex");
  $(".arrowRo7").css("visibility", "visible");
});
$( ".selectorRo8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo8").css("display", "flex");
  $(".arrowRo8").css("visibility", "visible");
});
$( ".selectorRo9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo9").css("display", "flex");
  $(".arrowRo9").css("visibility", "visible");
});
$( ".selectorRo10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo10").css("display", "flex");
  $(".arrowRo10").css("visibility", "visible");
});
$( ".selectorRo11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo11").css("display", "flex");
  $(".arrowRo11").css("visibility", "visible");
});
$( ".selectorRo12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo12").css("display", "flex");
  $(".arrowRo12").css("visibility", "visible");
});
$( ".selectorRo13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo13").css("display", "flex");
  $(".arrowRo13").css("visibility", "visible");
});
$( ".selectorRo14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo14").css("display", "flex");
  $(".arrowRo14").css("visibility", "visible");
});
$( ".selectorRo15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo15").css("display", "flex");
  $(".arrowRo15").css("visibility", "visible");
});
$( ".selectorRo16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo16").css("display", "flex");
  $(".arrowRo16").css("visibility", "visible");
});
$( ".selectorRo17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo17").css("display", "flex");
  $(".arrowRo17").css("visibility", "visible");
});
$( ".selectorRo18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo18").css("display", "flex");
  $(".arrowRo18").css("visibility", "visible");
});
$( ".selectorRo19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass9");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo19").css("display", "flex");
  $(".arrowRo19").css("visibility", "visible");
});
$( ".selectorRo20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo20").css("display", "flex");
  $(".arrowRo20").css("visibility", "visible");
});
$( ".selectorRo21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resRo21").css("display", "flex");
  $(".arrowRo21").css("visibility", "visible");
});

$( ".selectorSi1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resSi1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowSi1").css("visibility", "visible");
});
$( ".selectorSi2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resSi2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowSi2").css("visibility", "visible");
});
$( ".selectorSi3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resSi3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowSi3").css("visibility", "visible");
});
$( ".selectorSi4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi4").css("display", "flex");
  $(".arrowSi4").css("visibility", "visible");
});
$( ".selectorSi5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi5").css("display", "flex");
  $(".arrowSi5").css("visibility", "visible");
});
$( ".selectorSi6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi6").css("display", "flex");
  $(".arrowSi6").css("visibility", "visible");
});
$( ".selectorSi7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi7").css("display", "flex");
  $(".arrowSi7").css("visibility", "visible");
});
$( ".selectorSi8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi8").css("display", "flex");
  $(".arrowSi8").css("visibility", "visible");
});
$( ".selectorSi9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi9").css("display", "flex");
  $(".arrowSi9").css("visibility", "visible");
});
$( ".selectorSi10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi10").css("display", "flex");
  $(".arrowSi10").css("visibility", "visible");
});
$( ".selectorSi11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi11").css("display", "flex");
  $(".arrowSi11").css("visibility", "visible");
});
$( ".selectorSi12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi12").css("display", "flex");
  $(".arrowSi12").css("visibility", "visible");
});
$( ".selectorSi13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi13").css("display", "flex");
  $(".arrowSi13").css("visibility", "visible");
});
$( ".selectorSi14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi14").css("display", "flex");
  $(".arrowSi14").css("visibility", "visible");
});
$( ".selectorSi15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi15").css("display", "flex");
  $(".arrowSi15").css("visibility", "visible");
});
$( ".selectorSi16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi16").css("display", "flex");
  $(".arrowSi16").css("visibility", "visible");
});
$( ".selectorSi17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi17").css("display", "flex");
  $(".arrowSi17").css("visibility", "visible");
});
$( ".selectorSi18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi18").css("display", "flex");
  $(".arrowSi18").css("visibility", "visible");
});
$( ".selectorSi19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi19").css("display", "flex");
  $(".arrowSi19").css("visibility", "visible");
});
$( ".selectorSi20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi20").css("display", "flex");
  $(".arrowSi20").css("visibility", "visible");
});
$( ".selectorSi21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSi21").css("display", "flex");
  $(".arrowSi21").css("visibility", "visible");
});

$( ".selectorSk1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resSk1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowSk1").css("visibility", "visible");
});
$( ".selectorSk2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resSk2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowSk2").css("visibility", "visible");
});
$( ".selectorSk3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resSk3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowSk3").css("visibility", "visible");
});
$( ".selectorSk4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk4").css("display", "flex");
  $(".arrowSk4").css("visibility", "visible");
});
$( ".selectorSk5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk5").css("display", "flex");
  $(".arrowSk5").css("visibility", "visible");
});
$( ".selectorSk6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk6").css("display", "flex");
  $(".arrowSk6").css("visibility", "visible");
});
$( ".selectorSk7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk7").css("display", "flex");
  $(".arrowSk7").css("visibility", "visible");
});
$( ".selectorSk8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk8").css("display", "flex");
  $(".arrowSk8").css("visibility", "visible");
});
$( ".selectorSk9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk9").css("display", "flex");
  $(".arrowSk9").css("visibility", "visible");
});
$( ".selectorSk10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk10").css("display", "flex");
  $(".arrowSk10").css("visibility", "visible");
});
$( ".selectorSk11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk11").css("display", "flex");
  $(".arrowSk11").css("visibility", "visible");
});
$( ".selectorSk12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk12").css("display", "flex");
  $(".arrowSk12").css("visibility", "visible");
});
$( ".selectorSk13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk13").css("display", "flex");
  $(".arrowSk13").css("visibility", "visible");
});
$( ".selectorSk14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk14").css("display", "flex");
  $(".arrowSk14").css("visibility", "visible");
});
$( ".selectorSk15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk15").css("display", "flex");
  $(".arrowSk15").css("visibility", "visible");
});
$( ".selectorSk16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk16").css("display", "flex");
  $(".arrowSk16").css("visibility", "visible");
});
$( ".selectorSk17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk17").css("display", "flex");
  $(".arrowSk17").css("visibility", "visible");
});
$( ".selectorSk18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk18").css("display", "flex");
  $(".arrowSk18").css("visibility", "visible");
});
$( ".selectorSk19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk19").css("display", "flex");
  $(".arrowSk19").css("visibility", "visible");
});
$( ".selectorSk20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk20").css("display", "flex");
  $(".arrowSk20").css("visibility", "visible");
});
$( ".selectorSk21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSk21").css("display", "flex");
  $(".arrowSk21").css("visibility", "visible");
});

$( ".selectorFi1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resFi1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowFi1").css("visibility", "visible");
});
$( ".selectorFi2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resFi2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowFi2").css("visibility", "visible");
});
$( ".selectorFi3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resFi3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowFi3").css("visibility", "visible");
});
$( ".selectorFi4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi4").css("display", "flex");
  $(".arrowFi4").css("visibility", "visible");
});
$( ".selectorFi5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi5").css("display", "flex");
  $(".arrowFi5").css("visibility", "visible");
});
$( ".selectorFi6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi6").css("display", "flex");
  $(".arrowFi6").css("visibility", "visible");
});
$( ".selectorFi7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass3");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi7").css("display", "flex");
  $(".arrowFi7").css("visibility", "visible");
});
$( ".selectorFi8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi8").css("display", "flex");
  $(".arrowFi8").css("visibility", "visible");
});
$( ".selectorFi9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi9").css("display", "flex");
  $(".arrowFi9").css("visibility", "visible");
});
$( ".selectorFi10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi10").css("display", "flex");
  $(".arrowFi10").css("visibility", "visible");
});
$( ".selectorFi11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi11").css("display", "flex");
  $(".arrowFi11").css("visibility", "visible");
});
$( ".selectorFi12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi12").css("display", "flex");
  $(".arrowFi12").css("visibility", "visible");
});
$( ".selectorFi13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi13").css("display", "flex");
  $(".arrowFi13").css("visibility", "visible");
});
$( ".selectorFi14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi14").css("display", "flex");
  $(".arrowFi14").css("visibility", "visible");
});
$( ".selectorFi15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi15").css("display", "flex");
  $(".arrowFi15").css("visibility", "visible");
});
$( ".selectorFi16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi16").css("display", "flex");
  $(".arrowFi16").css("visibility", "visible");
});
$( ".selectorFi17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi17").css("display", "flex");
  $(".arrowFi17").css("visibility", "visible");
});
$( ".selectorFi18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi18").css("display", "flex");
  $(".arrowFi18").css("visibility", "visible");
});
$( ".selectorFi19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi19").css("display", "flex");
  $(".arrowFi19").css("visibility", "visible");
});
$( ".selectorFi20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi20").css("display", "flex");
  $(".arrowFi20").css("visibility", "visible");
});
$( ".selectorFi21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resFi21").css("display", "flex");
  $(".arrowFi21").css("visibility", "visible");
});

$( ".selectorSe1" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986");
  $(".dataSelector").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resSe1").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowSe1").css("visibility", "visible");
});
$( ".selectorSe2" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resSe2").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowSe2").css("visibility", "visible");
});
$( ".selectorSe3" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".resSe3").css("display", "flex");
  $(".arrow-down").css("visibility", "hidden");
  $(".arrowSe3").css("visibility", "visible");
});
$( ".selectorSe4" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe4").css("display", "flex");
  $(".arrowSe4").css("visibility", "visible");
});
$( ".selectorSe5" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe5").css("display", "flex");
  $(".arrowSe5").css("visibility", "visible");
});
$( ".selectorSe6" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe6").css("display", "flex");
  $(".arrowSe6").css("visibility", "visible");
});
$( ".selectorSe7" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass4");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe7").css("display", "flex");
  $(".arrowSe7").css("visibility", "visible");
});
$( ".selectorSe8" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe8").css("display", "flex");
  $(".arrowSe8").css("visibility", "visible");
});
$( ".selectorSe9" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe9").css("display", "flex");
  $(".arrowSe9").css("visibility", "visible");
});
$( ".selectorSe10" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe10").css("display", "flex");
  $(".arrowSe10").css("visibility", "visible");
});
$( ".selectorSe11" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe11").css("display", "flex");
  $(".arrowSe11").css("visibility", "visible");
});
$( ".selectorSe12" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe12").css("display", "flex");
  $(".arrowSe12").css("visibility", "visible");
});
$( ".selectorSe13" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe13").css("display", "flex");
  $(".arrowSe13").css("visibility", "visible");
});
$( ".selectorSe14" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass5");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe14").css("display", "flex");
  $(".arrowSe14").css("visibility", "visible");
});
$( ".selectorSe15" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe15").css("display", "flex");
  $(".arrowSe15").css("visibility", "visible");
});
$( ".selectorSe16" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe16").css("display", "flex");
  $(".arrowSe16").css("visibility", "visible");
});
$( ".selectorSe17" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe17").css("display", "flex");
  $(".arrowSe17").css("visibility", "visible");
});
$( ".selectorSe18" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe18").css("display", "flex");
  $(".arrowSe18").css("visibility", "visible");
});
$( ".selectorSe19" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass8");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe19").css("display", "flex");
  $(".arrowSe19").css("visibility", "visible");
});
$( ".selectorSe20" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass7");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe20").css("display", "flex");
  $(".arrowSe20").css("visibility", "visible");
});
$( ".selectorSe21" ).click(function() {
  $(".glass").removeClass("glass1 glass2 glass3 glass4 glass5 glass6 glass7 glass8 glass9 glass10").addClass("glass6");
  $(".dataSelector").css("background-color", "#2e3986").css("color", "white");
  $(this).css("color", "black").css("background-color", "white");
  $(".resWrapper").css("display", "none");
  $(".arrow-down").css("visibility", "hidden");
  $(".resSe21").css("display", "flex");
  $(".arrowSe21").css("visibility", "visible");
});
