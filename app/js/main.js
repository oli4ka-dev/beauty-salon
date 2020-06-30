$(function () {
    $('.slider__inner').slick({
        arrows: true,
        dots: true,
        fade: true,
        speed: 1500,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoints: 1024,
              settings: {
                arrows: false
              }
            }
          ]
    });

$('.header__burger').on('click', function(){
    $('.header__burger, .menu').toggleClass('active');
    $('.menu').slideToggle();
});


    // скрол к якорю  
    $("a.scrollto").click(function () { // тут пишите условия, для всех ссылок или для конкретных
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 25 // .top+margin - ставьте минус, если хотите увеличить отступ
        }, {
            duration: 1000, // тут можно контролировать скорость
            easing: "swing",
        });
        return false;
    });


    // счётчик

    var Animation = function () {
        var hFrom = $(window).scrollTop();
        var hTo = $(window).scrollTop() + ($(window).height() / 2);

        if ($(".eyelashes__item").offset().top > hFrom && $(".eyelashes__item").offset().top < hTo) {
            $('.client__content_num').delay(200).spincrement({
                thousandSeparator: " ",
                duration: 2000
            });
        }
        if ($(".manicure__item-img").offset().top > hFrom && $(".manicure__item-img").offset().top < hTo) {
            $('.client__content_num').delay(200).spincrement({
                thousandSeparator: " ",
                duration: 2000
            });
        }
        if ($(".pedicure__item-img").offset().top > hFrom && $(".pedicure__item-img").offset().top < hTo) {
            $('.client__content_num').delay(200).spincrement({
                thousandSeparator: " ",
                duration: 2000
            });
        }
        if ($(".ortonix__item-img").offset().top > hFrom && $(".ortonix__item-img").offset().top < hTo) {
            $('.client__content_num').delay(200).spincrement({
                thousandSeparator: " ",
                duration: 2000
            });
        }
        if ($(".depilation__item-img").offset().top > hFrom && $(".depilation__item-img").offset().top < hTo) {
            $('.client__content_num').delay(200).spincrement({
                thousandSeparator: " ",
                duration: 2000
            });
        }


    };
    $(window).on("wheel load resize", function () {
        Animation();
    });
    Animation();


    // кнопка на верх
    function backToTop() {
        var button = $('.back-to-top');

        // $(window).on('scroll', () => {
        //     if($(this).scrollTop() = 700) {
        //         button.fadeOut();
        //         button.fadeIn();
        //     } else{
        //         button.fadeOut();
        //     }
        // });

        button.on('click', (e) => {
            e.preventDefault();
            $('body').animate({
                scrollTop: 0
            }, 1500);
            $('html').animate({
                scrollTop: 0
            }, 1500);
        })

    };
    backToTop();

});


// кнопка
var animateButton = function (e) {
    e.preventDefault;
    // reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 1200);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}


// видео
document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed_down').onclick = speedDown;
document.querySelector('#speed_up').onclick = speedUp;
document.querySelector('#speed_nornal').onclick = speedNormal;
document.querySelector('#volume').oninput = videoVolume;
document.querySelector('#volume_cross').onclick = videoCross;
document.querySelector('#volume_up').onclick = videoUp;

let video;
let display;
let progress;

video = document.querySelector('#video_player');
progress = document.querySelector('#progress');
// !!!
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;


function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function speedDown() {
    video.play();
    video.playbackRate = 0.5;
}

function speedUp() {
    video.play();
    video.playbackRate = 3;
}

function speedNormal() {
    video.play();
    video.playbackRate = 1;
}

function videoVolume() {
    let v = this.value;
    // console.log(v);
    video.volume = v / 100;
}

function videoCross() {
    let v = this.value;
    // console.log(v);
    video.volume = 0;
}

function videoUp() {
    let v = this.value;
    // console.log(v);
    video.volume = 1;
}

function progressUpdate() {
    // console.log(video.duration);
    // console.log(video.currentTime);

    let d = video.duration;
    let c = video.currentTime;
    progress.value = (100 * c) / d;
    // document.querySelector('#time').innerHTML = video.currentTime;  // вывод времени видео в секундах
}

function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;

    // console.log(w);
    // console.log(o);
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
}


//  валидация формы телефона
var element = document.getElementById('phone');
var maskOptions = {
    mask: '+{38}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

var element = document.getElementById('ph');
var maskOptions = {
    mask: '+{38}(000)000-00-00'
};
var mask = IMask(element, maskOptions);


var element = document.getElementById('tel');
var maskOptions = {
    mask: '+{38}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

var element = document.getElementById('tel2');
var maskOptions = {
    mask: '+{38}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

var element = document.getElementById('tel3');
var maskOptions = {
    mask: '+{38}(000)000-00-00'
};
var mask = IMask(element, maskOptions);

// валидация формы email
function validate(form_id, email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }
}

function validate(form_i, mail) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_i].elements[mail].value;
    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }
}

function validate(form_2, mail_2) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_2].elements[mail_2].value;
    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }
}

function validate(form_3, mail_3) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_3].elements[mail_3].value;
    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }
}



//=========================

// Initialize and add the map
var map, popup, Popup;
function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 50.097382,
        lng: 14.406653
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,

           // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Beauty Line - салон красоты',

      // Укажем свою иконку для маркера
      icon: '../images/logo_small.png'
    });

}




