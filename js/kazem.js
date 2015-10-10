var slider_text_one = "We’re committed to providing comprehensive dental care with state-of-the-art technology. We are a full service general, cosmetic, and orthodontic dental clinic. Please check out our full range of services here. Now with offices in Culver City and Irvine.";
var slider_text_one_ar = "خبرة اكثر من عشرون عاما في غرب مدينة لوس انجلس ، التزم فريق العمل بتقديم أفضل الخدمات في طب الاسنان ضمن اجواء عمل مريحة و دافئة . مع اخر التقنيات والتكنولوجية الحديثة في طب الاسنان";

var slider_text_two ="With twenty years of experience serving the West Los Angeles area, our staff is committed to providing the best oral care all while creating a warm and inviting environment for our patients.";
var slider_text_two_ar = "بخبرة لا تقل عن عشرون عاما في منطقة غرب لوس انجلوس، التزم فريق العمل بتقديم افضل الخدمات في طب الاسنان ضمن اجواء عمل تبعث على الدفء والترحيب للمرضى.";

var slider_text_three = "We’re committed to providing comprehensive dental care with state-of-the-art technology to Southern California.";
var slider_text_three_ar = "متواجدون في غرب لوس انجلوس منذ عام ١٩٩٦. ملتزمون بتقديم خدمة طبية شاملة باستخدام تكنولوجيا متطورة لجنوب كاليفورنيا. بامكانك الاطلاع على كامل خدماتنا هنا!";

var slider_text_four ="Our office combines state-of-the-art technology with modern architecture in order to offer the best dental care in a friendly environment.";
var slider_text_four_ar="يجمع مركزنا بين فن التصميم وفن العمارة الحديثة وذلك لتقديم افضل عناية لطب الاسنان في اجواء راقية.";

var slider_text_five = "With twenty years of experience serving the West Los Angeles area, our staff is committed to providing the best oral care all while creating a warm and inviting environment for our patients.";
var slider_text_five_ar="بخبرة لا تقل عن عشرون عاما في منطقة غرب لوس انجلوس، التزم فريق العمل بتقديم افضل الخدمات في طب الاسنان ضمن اجواء عمل تبعث على الدفء والترحيب للمرضى.";

var slider_text_array = [slider_text_one, slider_text_two, slider_text_three, slider_text_four, slider_text_five];
var slider_text_array_ar =[slider_text_one_ar, slider_text_two_ar, slider_text_three_ar, slider_text_four_ar, slider_text_five_ar];

$(document).bind('scroll', function () {
  if($(document).scrollTop() <= 50) {
        $('.main_menu').removeClass('fixed');
        return;
    }
    if($('.main_menu').hasClass('fixed')){
        return;
      }
    else{
        $('.main_menu').addClass('fixed');
     }
});
// $(document).bind('scrollstop', function () {
//     if($(document).scrollTop() <= 50) {
//         $('.main_menu').removeClass('fixed');
//     }
// });

var map;
var map2;
var marker;
var marker2;
var english = true;

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

var cw = $('.our_office_row').first().width();
cw = cw * .332;
console.log(cw);
height = cw * .72;
console.log(height);
$('.office_pic').css({'height': height});

$('#english').click(function(){
  english = true;
  var en = $('.en');
  console.log(en);
  $.each(en, function(item, value){
    console.log(value);
    $(value).css({'display': 'inline'});
  })
  var ar = $('.ar');
  $.each(ar, function(item, value){
    $(value).css({'display': 'none'});
  })
  $('.doc_text').css({'text-align': 'left'});
})

$('#arabic').click(function(){
  english = false;
  var ar = $('.ar');
  $.each(ar, function(item, value){
    $(value).css({'display': 'inline'});
  })
  var en = $('.en');
  console.log(en);
  $.each(en, function(item, value){
    console.log(value);
    $(value).css({'display': 'none'});
  })
  $('.doc_text').css({'text-align': 'right'});
})

$.ajax({
  url: "text.json",
  success: function(resp){
    console.log(resp);
  },
  error: function(fun, status, error){
    console.log(error);
  }
});

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-60 }, 1000);
      return false;
  });
var count = 0;
var hero_images = ['url(images/doctors/hero1.jpg)', 'url(images/doctors/hero2.jpg)', 'url(images/doctors/hero3.jpg)', 'url(images/doctors/hero4.jpg)', 'url(images/doctors/hero5.jpg)']
  $('#button1').on('click', function() {
    skip = true;
    clearInterval(interval);
    window.clearTimeout(timeout);
    $('.main_slider').animate({ opacity: 0 }, { duration: 1000 });
    setTimeout(function(){
      $('.slider_text').text(slider_text_array[0]);
      $('.slider_text_ar').text(slider_text_array_ar[0]);
      $('.main_slider').css('background-image', hero_images[0]);
      $('.main_slider_header').removeClass('slider_text_right');
      $('.main_slider_desc').removeClass('slider_text_right');
      $('.main_slider_btn').removeClass('slider_text_right');
      $('.main_slider').animate({ opacity: 1 }, { duration: 1000 })
      interval = setInterval(transition, 6000);
      count = 0;
    }, 1000);
  })
  $('#button2').on('click', function() {
    skip = true;
      clearInterval(interval);
      window.clearTimeout(timeout);
      $('.main_slider').animate({ opacity: 0 }, { duration: 1000 });
      setTimeout(function(){
        $('.slider_text').text(slider_text_array[1]);
        $('.slider_text_ar').text(slider_text_array_ar[1]);
        $('.main_slider').css('background-image', hero_images[1]);
        $('.main_slider_header').removeClass('slider_text_right');
        $('.main_slider_desc').removeClass('slider_text_right');
        $('.main_slider_btn').removeClass('slider_text_right');
        $('.main_slider').animate({ opacity: 1 }, { duration: 1000 });
        interval = setInterval(transition, 6000);
        count = 1;
      }, 1000);
  })
  $('#button3').on('click', function() {
    skip = true;
      clearInterval(interval);
      window.clearTimeout(timeout);
      $('.main_slider').animate({ opacity: 0 }, { duration: 1000 });
      setTimeout(function(){
        $('.slider_text').text(slider_text_array[2]);
        $('.slider_text_ar').text(slider_text_array_ar[2]);
        $('.main_slider').css('background-image', hero_images[2]);
        $('.main_slider_header').removeClass('slider_text_right');
        $('.main_slider_desc').removeClass('slider_text_right');
        $('.main_slider_btn').removeClass('slider_text_right');
        $('.main_slider').animate({ opacity: 1 }, { duration: 1000 });
        interval = setInterval(transition, 6000);
        count = 2;
      }, 1000);
  })
  $('#button4').on('click', function() {
      skip = true;
      clearInterval(interval);
      window.clearTimeout(timeout);
      $('.main_slider').animate({ opacity: 0 }, { duration: 1000 });  
      setTimeout(function(){
        $('.slider_text').text(slider_text_array[3]);
        $('.slider_text_ar').text(slider_text_array_ar[3]);
        $('.main_slider').css('background-image', hero_images[3]);
        $('.main_slider_header').addClass('slider_text_right');
        $('.main_slider_desc').addClass('slider_text_right');
        $('.main_slider_btn').addClass('slider_text_right');
        $('.main_slider').animate({ opacity: 1 }, { duration: 1000 });
        interval = setInterval(transition, 6000);
        count = 3;
      }, 1000);
  })
  $('#button5').on('click', function() {
      skip = true;
      clearInterval(interval);
      window.clearTimeout(timeout);
      $('.main_slider').animate({ opacity: 0 }, { duration: 1000 });
      setTimeout(function(){
        $('.slider_text').text(slider_text_array[4]);
        $('.slider_text_ar').text(slider_text_array_ar[4]);
        $('.main_slider').css('background-image', hero_images[4]);
        $('.main_slider_header').addClass('slider_text_right');
        $('.main_slider_desc').addClass('slider_text_right');
        $('.main_slider_btn').addClass('slider_text_right');
        $('.main_slider').animate({ opacity: 1 }, { duration: 1000 });
        interval = setInterval(transition, 6000);
        count = 4;
      }, 1000);
  });
var timeout;
var skip = false;
function transition() {
  if(!skip){
    $('.slider_text').text(slider_text_array[count]);
      $('.slider_text_ar').text(slider_text_array_ar[count]);
    $('.main_slider').css('background-image', hero_images[count]);
    $('.main_slider').animate({ opacity: 1 }, { duration: 1000 });
    if(count > 2){
      $('.main_slider_header').addClass('slider_text_right');
      $('.main_slider_desc').addClass('slider_text_right');
      $('.main_slider_btn').addClass('slider_text_right');
    }
    else{
      $('.main_slider_header').removeClass('slider_text_right');
      $('.main_slider_desc').removeClass('slider_text_right');
      $('.main_slider_btn').removeClass('slider_text_right');
    }
  }
  count++;
  if(count >= 5){
    count = 0;
  }
  timeout = setTimeout(function(){
    $('.main_slider').animate({ opacity: 0 }, { duration: 1000 });
    skip = false;
  }, 5000)
}
//var interval = setInterval(transition, 6000);



  var test1 = "The office is very clean and pleasant. The dentists are great and Dr. Kazem is the BEST. I trust him 180%! The staff are great and I always feel welcome. They always have a nice smile in their beautiful faces!";
  var test1ar = ":أنجلينا ل.: المكان نظيف ويبعث بالسرور ، الأطباء رائعون والدكتور كاظم هو الأفضل . أنا اثق به بنسبة ١٨٠٪ !!! فريق العمل رائع واشعر دائماً بالترحيب! وهم دائماً مبتسمون";
  var test1author="- Angelita L.";

  var test2 = "They give my family their full attention and quality services. Their new office building is the best in this community and now with ample parking. The receptionists exhibit a very high level of professionalism and sound customer service in dealing with clients."
  var test2ar =" لقد أعطوا عائلتي كامل تركيزهم وأفضل خدماتهم. مركزهم الجديد هو الأفضل في هذه الوحدة السكنية و أيضاً مو مواقف واسعة للسيارات.لقد أبدى موظفوا الاستقبال اعلى مستوى من المهنية في خدمة الزبائن"
  var test2author="- Okwuoma V.";

  var test3 = "This is no joke THE dentist you want for yourself and your family!  Skillful dentist, great staff, and super relaxed environment."
  var test3ar="دي ه: بدون مجاملة هو طبيب الاسنان الذي تريده لنفسك و لعائلتك !  أطباء ماهرون ، وفريق عمل رائع ، وإجراء مريحة جداً الميزة الاساسية أيادي بارعة، وأفضل جزء عندما 'تسمع لقد انتهيت' في حين انك لم تعتقد بأنك بدأت . عيادة عصرية جداً و حديثة أيضاً!!";
  var test3author="- Fadi H.";

  var test4="Great place. One of the better Dental facilities in town. It has the homely feel, that a lot of other places lack. Switched from another dental office years ago and haven't regretted it one bit. Dr. Baker is a very genuine dentist, and tells you how things are.";
  var test4ar="مكان رائع . واحدة من أفضل مراكز طب الاسنان في المدينة.  تشعر فيها بأنك في منزلك و هذا ما تفتقده في مراكز اخرى.  اتجهت لهذا المركز منذ عدة سنوات ولم اندم يوما.  الدكتور صريح جدا و يطلعك على كيفية سير الأمور .  تشعر معه بالراحة على عكس أطباء اخرين.. و الأفضل من ذلك ان مهارة الدكتور مذهلة.. لن يجرح لثتك عن طريق الخط";
  var test4author="- Ali S";

  var test_button = $('.test_button');
  var test_text_ar = [test1ar, test2ar, test3ar, test4ar];
  var test_author = [test1author, test2author, test3author, test4author];
  var test_text = [test1, test2, test3, test4];
  console.log(test_button);

  $.each(test_button, function(item, value){
    $(value).on('click', function(){
      console.log(item);
      // $('.testimonial_text').html(test_text[item]);
      // $('.testimonial_text_ar').html(test_text_ar[item]);
      // $('.testimonial_author').html(test_author[item]);
      $('.testimonial_text').fadeOut('slow', function() {
          $('.testimonial_text').text(test_text[item]).fadeIn('slow');
      });
      $('.testimonial_text_ar').fadeOut('slow', function() {
          $('.testimonial_text_ar').text(test_text_ar[item]).fadeIn('slow');
      });
      $('.testimonial_author').fadeOut('slow', function() {
          $('.testimonial_author').text(test_author[item]).fadeIn('slow');
      });
      if(english){
        $('.testimonial_text').css('display', 'inline');
        $('.testimonial_text_ar').css('display', 'none');
        $('.testimonial_text').parent().css('text-align', 'left');
      }
      else{
        $('.testimonial_text').css('display', 'none');
        $('.testimonial_text_ar').css('display', 'inline');
        $('.testimonial_text_ar').parent().css('text-align', 'right');
      }
    })
  })
  if( $('.test_buttons_container').first().css('display')=='none') {
        var current_test = 0;
        console.log("is mobile");
        $('.testimonials').first().on('click', function(event){
          console.log("hello");
        })
          $('.testimonials').first().on('swiperight', function(event){
            console.log(event);
            if(current_test !== 3){
              current_test++;
            }
            else{
              current_test = 0;
            }
              $('.testimonial_text').fadeOut('slow', function() {
                $('.testimonial_text').text(test_text[current_test]).fadeIn('slow');
              });
              $('.testimonial_text_ar').fadeOut('slow', function() {
                  $('.testimonial_text_ar').text(test_text_ar[current_test]).fadeIn('slow');
              });
              $('.testimonial_author').fadeOut('slow', function() {
                  $('.testimonial_author').text(test_author[current_test]).fadeIn('slow');
              });
              if(english){
                $('.testimonial_text').css('display', 'inline');
                $('.testimonial_text_ar').css('display', 'none');
              }
              else{
                $('.testimonial_text').css('display', 'none');
                $('.testimonial_text_ar').css('display', 'inline');
              }
          })
          $('.testimonials').first().on('swipeleft', function(event){
            console.log(event);
            if(current_test !== 0){
              current_test--;
            }
            else{
              current_test = 3;
            }
              $('.testimonial_text').fadeOut('slow', function() {
                $('.testimonial_text').text(test_text[current_test]).fadeIn('slow');
              });
              $('.testimonial_text_ar').fadeOut('slow', function() {
                  $('.testimonial_text_ar').text(test_text_ar[current_test]).fadeIn('slow');
              });
              $('.testimonial_author').fadeOut('slow', function() {
                  $('.testimonial_author').text(test_author[current_test]).fadeIn('slow');
              });
              if(english){
                $('.testimonial_text').css('display', 'inline');
                $('.testimonial_text_ar').css('display', 'none');
              }
              else{
                $('.testimonial_text').css('display', 'none');
                $('.testimonial_text_ar').css('display', 'inline');
              }
          })
    }

});