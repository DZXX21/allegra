$(document).ready(function () {
    $('.mobile-menu-icon-wrapper').on('click', function () {
        $('.mobile-menu-links-wrapper').slideToggle();
        $('body').toggleClass('fixed-body');
    })

    $('#link-otomotiv').on('click', function () {
        if ($(this).parent().hasClass('open')) {
            return
        } else {
            $('#accordion-img').fadeOut(500, function () {
                $('#accordion-img').attr("src", "/_assets/images/car-image.png");
            })
            $('#accordion-img').fadeIn(500);
        }


    })
    $('#link-gida').on('click', function () {
        if ($(this).parent().hasClass('open')) {
            return
        } else {
            $('#accordion-img').fadeOut(500, function () {
                $('#accordion-img').attr("src", "/_assets/images/gida.png");
            })
            $('#accordion-img').fadeIn(500);
        }


    })
    $('#link-is-gelistirme').on('click', function () {
        if ($(this).parent().hasClass('open')) {
            return
        } else {
            $('#accordion-img').fadeOut(500, function () {
                $('#accordion-img').attr("src", "/_assets/images/is-gelistirme.png");
            })
            $('#accordion-img').fadeIn(500);
        }


    })
    $('#link-finansal').on('click', function () {
        if ($(this).parent().hasClass('open')) {
            return
        } else {
            $('#accordion-img').fadeOut(500, function () {
                $('#accordion-img').attr("src", "/_assets/images/genel-ticaret.png");
            })
            $('#accordion-img').fadeIn(500);
        }


    })



    $('.link').on('click', function () {
        if ($(this).parent().hasClass('open')) {
            return;
        } else {
            $('.accordion-content-area').slideUp();
            $('.accordion__list').removeClass('open');
        }

    })

    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || true;

            // Variables
            var link = this.el.find('.link');
            // Eventos
            link.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
        }

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            // Desencadena evento de apertura en los elementos siguientes a la clase link = ul.submenu
            $next.slideToggle();
            // Agregar clase open a elemento padre del elemento con clase link = li
            $this.parent().toggleClass('open');

            //Parametro inicial que permite ver 1 solo submenu abierto 
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            }

        }
        // Elegir submenus multiples (true) submenus uno a la vez (false)
        var accordion = new Accordion($('#accordion'), false);
    });

    if ($("#map").length > 0) {

        mapboxgl.accessToken = 'pk.eyJ1IjoiZnVya2FuYWdjYSIsImEiOiJjazlsNjQ0M3cwMXB1M21vMnZhdTVmMndpIn0.HvlGWBT_M1nqIVX8SQXY_Q';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [29.041846084511786, 41.02315074641499], // starting position [lng, lat]
            zoom: 13 // starting zoom
        });
        var marker = new mapboxgl.Marker()
            .setLngLat([29.041846084511786, 41.02315074641499])
            .addTo(map);

    }

    $(".modal .close, .modal .modal-close").click(function () { $(".modal").hide(); $(".modal iframe").attr("src", "about:blank"); })
    $(".modal").click(function (e) { if ($(e.target).hasClass("modal")) { $(".modal").hide(); $(".modal iframe").attr("src", "about:blank"); } });

});

function _error(message) {
    $(".modal").hide();
    $(".error-modal p").html(message);
    $(".error-modal").show();
}

function _success(message) {
    $(".modal").hide();
    $(".success-modal p").html(message);
    $(".success-modal").show();
}

function _openUrl(url) {
    $(".modal").hide();
    $(".video-modal iframe").attr("src", url);
    $(".video-modal").show();
}

jQuery(function ($) {

    checkCookie();

    function checkCookie() {
        var consent = getCookie("cookies_consent");
        if (consent == null || consent == "" || consent == undefined) {
            $('.cookie-container').show();
        }
    }

    function setCookie(c_name, value, exdays) {

        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value + "; path=/";

        $('.cookie-container').slideUp();
    }


    function getCookie(c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
    }

    $(".cookie-container .close-button, .cookie-container .ok-button").click(function () {
        setCookie("cookies_consent", 1, 30);
    });

});

