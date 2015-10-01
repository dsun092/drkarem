console.log("hello world");

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.main_menu').addClass('fixed');
    } else {
        $('.main_menu').removeClass('fixed');
    }
});
var map;
var map2;
var marker;
var marker2;

$(window).load(function(){
  setTimeout(function(){
    map = new google.maps.Map(document.getElementById('map1'), {
      center: {lat: 34.014440, lng: -118.407727},
      scrollwheel: false,
      zoom: 15,
      scaleControl: false,
      navigationControl: false,
    });

    map2 = new google.maps.Map(document.getElementById('map2'), {
      center: {lat: 33.665279, lng: -117.763177},
      scrollwheel: false,
      zoom: 15,
      scaleControl: false,
      navigationControl: false,
    });

    marker1 = new google.maps.Marker({
      position: {lat: 34.014440, lng: -118.407727},
      map: map,
      icon: 'images/Marker.png'
    });

    marker2 = new google.maps.Marker({
      position: {lat: 33.665279, lng: -117.763177},
      map: map2,
      icon: 'images/Marker.png'
    });
    google.maps.event.trigger(map, 'resize');
    google.maps.event.trigger(map2, 'resize');
  }, 1000)
})

$('#english').click(function(){
  var en = $('.en');
  console.log(en);
  $.each(en, function(item, value){
    console.log(value);
    $(value).css('display', 'inline');
  })
  var ar = $('.ar');
  $.each(ar, function(item, value){
    $(value).css('display', 'none');
  })
})

$('#arabic').click(function(){
  var ar = $('.ar');
  $.each(ar, function(item, value){
    $(value).css('display', 'inline');
  })
  var en = $('.en');
  console.log(en);
  $.each(en, function(item, value){
    console.log(value);
    $(value).css('display', 'none');
  })
})

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-60 }, 1000);
      return false;
  });
});