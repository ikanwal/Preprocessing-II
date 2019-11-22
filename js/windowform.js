$(function() {
  var b = $(".btn");
  var w = $("#wrapper");
  var l = $("form");

  // w.height(l.outerHeight(true)); REMOVE THIS 

  b.click(function() {

    if (w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      w.addClass('open');
      w.height(l.outerHeight(true));
    }

  });
});