import "./css/sass/main.scss";
import $ from 'jquery'
import { Collapse } from 'bootstrap';

$(document).ready(function() {
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 100) {
            $('header').addClass('scrolling');
        } else {
            $('header').removeClass('scrolling');
        }
    });

    $('.js-menu-opener').on('click', function (e) {
        e.preventDefault();
        $('.main-nav').slideToggle('fast');
    });

    $('.js-scroll-to').on('click', function (e) {
        e.preventDefault();
        let id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - 72
        }, 'fast');

        if ($(window).width() < 768) {
            $('.js-menu-opener').trigger('click');
        }
    });
});