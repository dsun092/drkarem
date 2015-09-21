console.log("hello world");

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.main_menu').addClass('fixed');
    } else {
        $('.main_menu').removeClass('fixed');
    }
});

var map = new google.maps.Map(document.getElementById('map1'), {
    center: {lat: 34.014440, lng: -118.407727},
    scrollwheel: false,
    zoom: 11,
    scaleControl: false,
    draggable: false,
    navigationControl: false,
    scrollwheel: false,
  });

  var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {lat: 33.665279, lng: -117.763177},
    scrollwheel: false,
    zoom: 11,
    scaleControl: false,
    draggable: false,
    navigationControl: false,
     scrollwheel: false,
  });

google.maps.event.trigger(map, "resize");
google.maps.event.trigger(map2, "resize");
 console.log("test");

var marker1 = new google.maps.Marker({
    position: {lat: 34.014440, lng: -118.407727},
    map: map,
  });

var marker2 = new google.maps.Marker({
    position: {lat: 33.665279, lng: -117.763177},
    map: map2,
  });