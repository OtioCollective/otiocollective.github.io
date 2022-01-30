jQuery(document).ready(function($){

  // Active page highlight
  var bodyid = $("body").attr('id');
  $("#nav-" + bodyid).addClass('active');

  // Add target="_blank" to all external links
  $("a[href^='http://']").attr("target","_blank");
  $("a[href^='https://']").attr("target","_blank");

  // Unless it's because of Github pages
  $("a[href^='http://otio.work/']").attr("target","_self");
  $("a[href^='https://otio.work/']").attr("target","_self");

  // Open the menu
  var $hamburger = $('.hamburger');
  $hamburger.on("click", function(){
    $hamburger.toggleClass("is-active");
    $('.nav-container').toggleClass("menu-open");
  });

});
