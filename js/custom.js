 // JavaScript Document
//jQuery is required to run this code
$( document ).ready(function() {
   setClassAccordingToPage();
   scaleVideoContainer();
   initBannerVideoSize('.video-container .poster img');
   initBannerVideoSize('.video-container .filter');
   initBannerVideoSize('.video-container video');
   $(window).on('resize', function() {
       scaleVideoContainer();
       scaleBannerVideoSize('.video-container .poster img');
       scaleBannerVideoSize('.video-container .filter');
       scaleBannerVideoSize('.video-container video');
   });

});




function setClassAccordingToPage() {
   var html_page = getHtmlFileName();
}

function getHtmlFileName() {
  if((window.location.href.match( /(index|contact|how-we-work|projects|contact)/) != '')) {
    var filenameWithExtension = document.location.href.match(/[^\/]+$/)[0];
    var filename = filenameWithExtension.split(".")[0];
  } else {
    var filename = 'expertise-test';
  }
   return filename;
}




function scaleVideoContainer() {
   var height = $(window).height() + 5;
   var unitHeight = parseInt(height) + 'px';
   $('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element){    $(element).each(function(){
       $(this).data('height', $(this).height());
       $(this).data('width', $(this).width());
   });    scaleBannerVideoSize(element);}function scaleBannerVideoSize(element){
   var windowWidth = $(window).width(),
   windowHeight = $(window).height() + 5,
   videoWidth,
   videoHeight;
   // console.log(windowHeight);
   $(element).each(function(){
       var videoAspectRatio = $(this).data('height')/$(this).data('width');
       $(this).width(windowWidth);
       if(windowWidth < 1000){
           videoHeight = windowHeight;
           videoWidth = videoHeight / videoAspectRatio;
           $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
           $(this).width(videoWidth).height(videoHeight);
       }
       $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
   });
}

/*---------------------
show Landing apge and inner pages
--------------------- */
$('#carousel').carousel();



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if($(window).width() > 990){
      if (scroll >= 750) {
          $('.navbar').addClass('navbar-fixed-top');
          // $('.header_logo').removeClass('is-hidden');
          // //$(".top_header").hide();
          // $(".navbar-brand img").show(50);
      } else {
          $('.navbar').removeClass('navbar-fixed-top');
          // $('.header_logo').addClass('is-hidden');
          // //$(".top_header").show();
          // $(".navbar-brand img").hide(50);
      }
    }

});