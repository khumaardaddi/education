(function ($) {
    "use strict";

    $(document).ready(function () {

        /*==== header Section Start here =====*/
        $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
        // drop down menu width overflow problem fix
        $('ul').parent('li').on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });
        
        $('.menu li a').on('click', function (e) {
            if ($(window).width() < 992) {
                var element = $(this).parent('li');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp(300, "swing");
                } else {
                    element.addClass('open');
                    element.children('ul').slideDown(300, "swing");
                    element.siblings('li').children('ul').slideUp(300, "swing");
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp(300, "swing");
                }
            }
        });

        $('.header-bar').on('click', function () {
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
        })
        $('.ellepsis-bar').on('click', function (e) {
            var element = $('.header-top');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.slideUp(300, "swing");
                $('.overlayTwo').removeClass('active');
            } else {
                element.addClass('open');
                element.slideDown(300, "swing");
                $('.overlayTwo').addClass('active');
            }
        });
        

        //Header
        var fixed_top = $("header");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                fixed_top.addClass("header-fixed fadeInUp");
            } else {
                fixed_top.removeClass("header-fixed fadeInUp");
            }
        });

        //dropdown icon
        $("ul li ul").parent("li").addClass("menu-item-has-children");
        $(".shop-menu>li .shop-submenu").parent("li").children("a").addClass("dd-icon-down");

        /*==== header Section End here =====*/


        //Service section slider
        var swiper = new Swiper('.services-slider', {
            slidesPerView: 1,
            pagination: {
                el: '.services-pagination',
                clickable: true,
            },
            speed: 1200,
            autoplay: {
                delay: 3200,
                disableOnInteraction: false,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                }
            },
            loop: true
        });
        //case section slider
        var swiper = new Swiper('.case-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.case-pagination',
                clickable: true,
            },
            speed: 1000,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true
        });

        // advisor slider 
        var swiper = new Swiper('.advisor-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.advisor-pagination',
                clickable: true,
            },
            speed: 2000,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                }
            },
            loop: true
        });
        //advisor slider -2
        var swiper = new Swiper('.advisor-slider_2', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.advisor-next',
                prevEl: '.advisor-prev',
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                }
            },
            loop: true,
        });
        // achive-slider 
        var swiper = new Swiper('.achive-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.achive-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 1000,
            loop: true,
        })

        //Blog slider 
        var swiper = new Swiper('.blog-slider', {
            slidesPerView: 1,
            pagination: {
                el: '.blog-pagination',
                clickable: true,
            },
            speed: 2000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                }
            },
            loop: true
        });


        // cart product slider
        var productThumbs = new Swiper('.product-thumbs', {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            navigation: {
                nextEl: '.product-next',
                prevEl: '.product-prev',
            },
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var productTop = new Swiper('.product-top', {
            spaceBetween: 0,
            thumbs: {
                swiper: productThumbs
            }
        });

        //case study section filter
        jQuery(window).on('load', function () {
            var $gridTwo = $('.case-study-section.style-3 .section-wrapper').isotope({
                itemSelector: '.post-item',
                masonry: {
                    columnWidth: 0
                }
            });

            // filter functions
            var filterFns = {};

            // bind filter button click
            $('ul.post-nav').on('click', 'li', function () {
                var filterValueGallery = $(this).attr('data-filter');
                // use filterFn if matches value
                filterValueGallery = filterFns[filterValueGallery] || filterValueGallery;
                $gridTwo.isotope({
                    filter: filterValueGallery
                });
            });

            // change is-checked class on buttons
            $('ul.post-nav').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'li', function () {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });
        });



        // service single section + product review tab start here
        $(function () {
            var tabWrapper = $('.service-single .section-wrapper, .product-review .section-wrapper'),
                tabMnu = tabWrapper.find('.tab-menu  li'),
                tabContent = tabWrapper.find('.tab-cont > .tab-pane');
            tabContent.not(':first-child').hide();
            tabMnu.each(function (i) {
                $(this).attr('data-tab', 'tab' + i);
            });
            tabContent.each(function (i) {
                $(this).attr('data-tab', 'tab' + i);
            });

            tabMnu.on('click', function () {
                var tabData = $(this).data('tab');
                tabWrapper.find(tabContent).hide();
                tabWrapper.find(tabContent).filter('[data-tab=' + tabData + ']').show();
            });

            $('.tab-menu > li').on('click', function () {
                var before = $('.tab-menu li.active');
                before.removeClass('active');
                $(this).addClass('active');
            });
        });

        // faq section start here
        $(function () {
            $('ul.tabs li').on('click', function () {
                var tab_id = $(this).attr('data-tab');
                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');
                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
            })
        });

        // accordion start here
        $('.post-item .active').slideDown();
        $('.accordion-question').on('click', function (e) {
            if ($(this).next('.accordion-answer').css('display') != 'block') {
                $('.post-item .active').slideUp(500).removeClass('active');
                $('.accordion-question').removeClass('in');
                $(this).next('.accordion-answer').addClass('active').slideDown(500);
                $(this).addClass('in');
            } else {
                $('.post-item .active').slideUp(500).removeClass('active');
                $(this).removeClass('in');
            }
        });


        // lightcase 
        $('a[data-rel^=lightcase]').lightcase();

        // counter up start
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });

        //Countdown js initialization
        document.addEventListener('readystatechange', event => {
            if (event.target.readyState === "complete") {
                var clockdiv = document.getElementsByClassName("countdown");
                var countDownDate = new Array();
                for (var i = 0; i < clockdiv.length; i++) {
                    countDownDate[i] = new Array();
                    countDownDate[i]['el'] = clockdiv[i];
                    countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
                    countDownDate[i]['days'] = 0;
                    countDownDate[i]['hours'] = 0;
                    countDownDate[i]['seconds'] = 0;
                    countDownDate[i]['minutes'] = 0;
                }

                var countdownfunction = setInterval(function () {
                    for (var i = 0; i < countDownDate.length; i++) {
                        var now = new Date().getTime();
                        var distance = countDownDate[i]['time'] - now;
                        countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                        countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

                        if (distance < 0) {
                            countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
                            countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
                            countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
                            countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
                        } else {
                            countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
                            countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
                            countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
                            countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
                        }
                    }
                }, 1000);
            }
        });


        // scroll up start here
        $(function () {
            //Check to see if the window is top if not then display button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.scrollToTop').css({
                        'bottom': '2%',
                        'opacity': '1',
                        'transition': 'all .5s ease'
                    });
                } else {
                    $('.scrollToTop').css({
                        'bottom': '-30%',
                        'opacity': '0',
                        'transition': 'all .5s ease'
                    })
                }
            });
            //Click event to scroll to top
            $('.scrollToTop').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });

        //search field open on click
        $(document).on('click', '.search-cart .search-icon, .search-close', function () {
            $(".search-area").toggleClass("open");
        });
    })
}(jQuery));