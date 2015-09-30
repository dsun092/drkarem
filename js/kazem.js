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
      zoom: 13,
      scaleControl: false,
      draggable: false,
      navigationControl: false,
    });

    map2 = new google.maps.Map(document.getElementById('map2'), {
      center: {lat: 33.665279, lng: -117.763177},
      scrollwheel: false,
      zoom: 13,
      scaleControl: false,
      draggable: false,
      navigationControl: false,
    });

    marker1 = new google.maps.Marker({
      position: {lat: 34.014440, lng: -118.407727},
      map: map,
    });

    marker2 = new google.maps.Marker({
      position: {lat: 33.665279, lng: -117.763177},
      map: map2,
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