$(function () {
  $('#worked .add-row').click(function () {
    var template = '<tr><td><input class="form-control" type="text"></td><td><input class="form-control" type="text"></td><td><input class="form-control" type="text"></td><td><input class="form-control" type="text"></td><td><button type="button" class="btn btn-danger delete-row">-</button></td></tr>';
    $('#worked tbody').append(template);
  });

  $('#worked').on('click', '.delete-row', function () {
    $(this).parent().parent().remove();
  });
})

$(document).ready(function() {
  $(".carousel").carousel({
    interval: 2000
  });
  $(".carousel").on("slid", function() {
    var to_slide;
    to_slide = $(".carousel-item.active").attr("data-slide-no");
    $(".myCarousel-target.active").removeClass("active");
    $(".carousel-indicators [data-slide-to=" + to_slide + "]").addClass("active");
  });
  $(".myCarousel-target").on("click", function() {
    $(this).preventDefault();
    $(".carousel").carousel(parseInt($(this).attr("data-slide-to")));
    $(".myCarousel-target.active").removeClass("active");
    $(this).addClass("active");
  });
});

