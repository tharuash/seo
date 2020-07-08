$(function ($) {
    $(window).on('load', function () {
        /*$('#logo-div').load('images/welcome-logo.svg');

        setTimeout(() => {
            svgdrawing();
        }, 300);

        setTimeout(() => {
            $("#logo-div").addClass("playanime");
            $("svg").addClass("playanime");
            $("#landingDiv").addClass("playanime");

        }, 1000);

        setTimeout(() => {
            $("#logo_img_div_desk").fadeIn(1000);
            $("#logo_img_div_mobi").fadeIn(1000);
        }, 6000);

        setTimeout(() => {

            $("#landingDiv").delay(1000).fadeOut(2000);
            $("#landingDiv").css("display", "none");

        }, 7000);*/


    });


    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        $('.section').each(function () {
            var topDistance = $(this).offset().top;
            if ((topDistance - 100) < scrollTop) {
                var sec = $(this).attr('menu-sec')
                // var active_1 = $('li[id='+sec+']');
                $('#newheader2 a').css('color', $(this).attr('data-color'));
                $('.menu-item').removeClass('active');
                $('li[id=' + sec + ']').addClass('active');
            }
        });
    });


    $(document).ready(function () {
        changeRootLink("http://chamaralabs.com/seo-server-testing-6/seo/")
        /*ttp://chamaralabs.com/seo-server-testing-6/seo/*/
        /*$("#main_div_id").sectionsnap({
            'delay': 100,// time dilay (ms)
            'selector': ".section",// selector
            'reference': .9,// % of window height from which we start
            'animationTime': 400,// animation time (snap scrolling)
            'offsetTop': 0,// offset top (no snap before scroll reaches this position)
            'offsetBottom': 0// offset bottom (no snap after bottom - offsetBottom)
        });*/

        //========================================== Start Copy from assets/js/owl-custom.js file============================
        /* ======= Owl Carousel ======= */
        /* Ref: http://owlgraphic.com/owlcarousel/index.html */

        /* $("#home-slideshow").owlCarousel({
             autoplay: true,
             autoPlayTimeout: 6000,
             smartSpeed: 400,
             autoplayHoverPause: true,
             items: 1,
             loop: true
    
         });*/

        /*var owl = $('#home-slideshow');
        owl.owlCarousel({
            autoplay: true,
            autoPlayTimeout: 6000,
            smartSpeed: 400,
            autoplayHoverPause: true,
            items: 1,
            loop: true,

        });


        var slides = [
            { title: 'Best Deals', intro: 'Find best offers, deals, discount vouchers and stores near you' },
            { title: 'Welcome Gift', intro: 'Register and get Rs 5,000 Unconditional Cash Voucher Instantly' },
            { title: 'Earn Money', intro: 'Like, comment & share on social media and EARN UNLIMITED MONEY' },
            { title: 'Play with new Technology', intro: 'Have Fun with Augmented Reality (AR), unlock special vouchers & offers with AR' },
            { title: 'Win Spot Deals', intro: 'Stand a chance to win Mega Spot Deals with only Rs.10' },
        ]

        let i = 1
        owl.on('changed.owl.carousel', function (event) {
            if (i == 5) i = 0;

            var html = $('<div> \n\
            <h2 class="title" style="font-weight: bold; font-size: 50px">'+ slides[i].title + '</h2> \n\
            <p class="intro">'+ slides[i].intro + ' \n\
            </p> \n\
         </div>');




            
            $('#side-slideshow').empty();
            $('#side-slideshow').append(html);
            i++;
            // html.slideDown();
        })


        var owl2 = $('#option-slideshow');
        owl2.owlCarousel({
            autoplay: true,
            autoPlayTimeout: 6000,
            smartSpeed: 400,
            autoplayHoverPause: true,
            items: 1,
            loop: true,

        });*/
        //========================================== End Copy from assets/js/owl-custom.js file============================



        //========================================== Start Copy from js/spot.js file============================
        setSpotOwl();
        setIndustryOwl();
        setBottomOwl();
        //========================================== End Copy from js/spot.js file============================



        //========================================== Start Copy from js/client.js file============================
        $.ajax({
            url: "http://blog.chamaralabs.com/imagecarousel",
            // url: "http://127.0.0.1:5500/payloads/clients.json",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                merchants = res;

                destroySlick();
                setSlick();
            }
        });

        var blogs = [];
        $.ajax({
            url: "http://blog.chamaralabs.com/article/posts/index_data_merchent",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                blogs = res.data;
                // console.log(blogs)
                setBlogs(blogs);
                setOwl();

            }
        });
        //========================================== End Copy from js/client.js file============================


    });


    //========================================== Start Copy from js/main.js file============================
    /*Main Slideshow*/
    $(".tw-slider-area").owlCarousel({
        items: 1,
        loop: false,
        rewind: true,
        autoplay: false,
        nav: true,
        dots: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: true,
        smartSpeed: 1100,
        navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],
        responsive: {
            1024: {
                mouseDrag: true,
            }
        }
    });

    /*Testimonial Slider*/
    $(".tw-testimonial-carousel").owlCarousel({
        items: 1,
        loop: false,
        rewind: true,
        autoplay: false,
        nav: false,
        dots: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        mouseDrag: false,
    });

    /* Testimonial Slider */
    if ($(".testimonial-slider").length > 0) {
        $(".testimonial-slider").owlCarousel({
            items: 1,
            loop: false,
            rewind: true,
            autoplay: false,
            nav: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
            smartSpeed: 900,
            navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
        });
    };

    /* Testimonial Slider */
    if ($(".testimonial-carousel-gray").length > 0) {
        $(".testimonial-carousel-gray").owlCarousel({
            items: 2,
            margin: 20,
            loop:false,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
        });
    };
    /* Testimonial Box Carousel */
    if ($(".testimonial-box-carousel").length > 0) {
        $(".testimonial-box-carousel").owlCarousel({
            items: 2,
            margin: 20,
            loop: false,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
            responsiveClass: true,
            smartSpeed: 900,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 2,
                }
            }
        });
    };

    /* Contact Form */
    $('#contact-form').submit(function () {

        var $form = $(this),
            $error = $form.find('.error-container'),
            action = $form.attr('action');

        $error.slideUp(750, function () {
            $error.hide();

            var $name = $form.find('.form-name'),
                $phone = $form.find('.form-phone'),
                $email = $form.find('.form-email'),
                $subject = $form.find('.form-subject'),
                $message = $form.find('.form-message');

            $.post(action, {
                name: $name.val(),
                phone: $phone.val(),
                email: $email.val(),
                subject: $subject.val(),
                message: $message.val()
            },
                function (data) {
                    $error.html(data);
                    $error.slideDown('slow');

                    if (data.match('success') != null) {
                        $name.val('');
                        $phone.val('');
                        $email.val('');
                        $subject.val('');
                        $message.val('');
                    }
                }
            );

        });

        return false;

    });

    /* Wow Initialize */
    new WOW().init();
    //========================================== End Copy from js/main.js file============================



});