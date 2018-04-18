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
   if(html_page == 'index') {
       if($('.main').css("display") != "none") {
           $('body').addClass('expertise');
       }
   } else if(html_page == 'how-we-work') {
       $('body').addClass('how-work');
   } else if(html_page == 'projects') {
       $('body').addClass('expertise');
   } else if(html_page == 'contact') {
       $('body').addClass('contact');
   } else {
       $('body').addClass('transparent');
   }
}function getHtmlFileName() {
   var filenameWithExtension = document.location.href.match(/[^\/]+$/)[0];
   var filename = filenameWithExtension.split(".")[0];
   return filename;
}function scaleVideoContainer() {
   var height = $(window).height() + 5;
   var unitHeight = parseInt(height) + 'px';
   $('.homepage-hero-module').css('height',unitHeight);
}function initBannerVideoSize(element){    $(element).each(function(){
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
