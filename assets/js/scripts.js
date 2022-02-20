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

  $(".footnote-ref").each(function(i){
    var $footnotetext= $(this).attr("data-footnote-text");
    var $footnotelinktext = $(this).attr("data-footnote-link-text");
    var $footnotelink = $(this).attr("data-footnote-link");
    var $footnoteref = i+1;
    $(this).html('<a id="f' + $footnoteref + '" href="#footnote' + $footnoteref + '">' + $footnoteref + '</a>' );
    // Create list of footnotes
    $("#footnote-list").append(
      '<li id="footnote' + $footnoteref + '">'+ $footnotetext +': <a target="_blank" href="'+ $footnotelink +'">'+ $footnotelinktext +'</a> <a class="footnote-return-link" href="#f'+ $footnoteref +'">&#8629;</a></li>'
    );
  });

});
