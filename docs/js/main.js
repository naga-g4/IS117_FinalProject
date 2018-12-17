$(function () {
  $('#worked .add-row').click(function () {
    var template = '<tr><td><input class="form-control" type="text"></td><td><input class="form-control" type="text"></td><td><input class="form-control" type="text"></td><td><input class="form-control" type="text"></td><td><button type="button" class="btn btn-danger delete-row">-</button></td></tr>';
    $('#worked tbody').append(template);
  });

  $('#worked').on('click', '.delete-row', function () {
    $(this).parent().parent().remove();
  });
})

$('.carousel').carousel();

$(document).ready(function(){
  $(".linkfeat").hover(
    function () {
      $(".textfeat").show(500);
    },
    function () {
      $(".textfeat").hide(500);
    }
  );
});

$(document).ready(function(){

  var clickEvent = false;
  $('#myCarousel').carousel({
    interval:   4000
  }).on('click', '.list-group li', function() {
    clickEvent = true;
    $('.list-group li').removeClass('active');
    $(this).addClass('active');
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.list-group').children().length -1;
      var current = $('.list-group li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.list-group li').first().addClass('active');
      }
    }
    clickEvent = false;
  });
})

$(window).load(function() {
  var boxheight = $('#myCarousel .carousel-inner').innerHeight();
  var itemlength = $('#myCarousel .item').length;
  var triggerheight = Math.round(boxheight/itemlength+1);
  $('#myCarousel .list-group-item').outerHeight(triggerheight);
});
