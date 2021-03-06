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

    /*window.scrollBy({ 
        top: 500, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });*/


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
        changeRootLink("/seo")
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

        var owl = $('#home-slideshow');
        owl.owlCarousel({
            autoplay: true,
            autoPlayTimeout: 6000,
            smartSpeed: 400,
            autoplayHoverPause: true,
            items: 1,
            loop: false,
            rewind: true,

        });


        /*var slides = [{
                title: 'Best Deals',
                intro: 'Find best offers, deals, discount vouchers and stores near you'
            },
            {
                title: 'Welcome Gift',
                intro: 'Register and get Rs 5,000 Unconditional Cash Voucher Instantly'
            },
            {
                title: 'Earn Money',
                intro: 'Like, comment & share on social media and EARN UNLIMITED MONEY'
            },
            {
                title: 'Play with new Technology',
                intro: 'Have Fun with Augmented Reality (AR), unlock special vouchers & offers with AR'
            },
            {
                title: 'Win Spot Deals',
                intro: 'Stand a chance to win Mega Spot Deals with only Rs.10'
            },
        ]*/

        let i = 1

        var text1 = `<div class="slide-down">
        <h2 class="title" style="font-weight: bold;">Best Deals</h2>
        <p class="intro" style="text-align: center"> Find best offers, deals, discount <br> vouchers and stores near you
        </p> 
     </div>`

        var text2 = `<div class="slide-down">
     <h2 class="title" style="font-weight: bold;">Welcome Gift</h2>
     <p class="intro" style="text-align: center"> Register and get Rs 5,000  <br>  Unconditional Cash Voucher Instantly
     </p> 
  </div>`

        var text3 = `<div class="slide-down">
        <h2 class="title" style="font-weight: bold;">Earn Money</h2>
        <p class="intro" style="text-align: center"> Like, comment & share on social <br> media and EARN UNLIMITED MONEY
        </p> 
     </div>`

        var text4 = `<div class="slide-down">
        <h2 class="title" style="font-weight: bold;">Play with new Technology</h2>
        <p class="intro" style="text-align: center"> Have Fun with Augmented Reality (AR) <br> unlock special vouchers & offers with AR
        </p> 
     </div>`

        var text5 = `<div class="slide-down">
        <h2 class="title" style="font-weight: bold;">Win Spot Deals</h2>
        <p class="intro" style="text-align: center"> Stand a chance to win <br> Mega Spot Deals with only Rs.10
        </p> 
     </div>`

        var texts = [ text1, text2, text3, text4, text5] 

        owl.on('changed.owl.carousel', function (event) {
            if (i == 5) i = 0;


            $('#side-slideshow').empty();
            $('#side-slideshow').append(texts[i]);
            i++;
        })


        var owl2 = $('#option-slideshow');
        owl2.owlCarousel({
            autoplay: true,
            autoPlayTimeout: 6000,
            smartSpeed: 400,
            autoplayHoverPause: true,
            items: 1,
            loop: false,
            rewind: true,

        });
        //========================================== End Copy from assets/js/owl-custom.js file============================



        //========================================== Start Copy from js/spot.js file============================
        setSpotOwl();
        setIndustryOwl();
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

        /*var jobs = [];
        $.ajax({
            url: "http://127.0.0.1:5500/payloads/jobs.json",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                jobs = res.data;
                // console.log(blogs)
               setJobs(jobs);
               
            

            }
        });*/
        var jobs = [];
        $.ajax({
            url: "http://blog.chamaralabs.com/users/careers/index_data",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                jobs = res.data;
                // console.log(blogs)
                setJobs(jobs);
                setJobOwl();

            }
        });

        var blogs = [];
        $.ajax({
            url: "http://blog.chamaralabs.com/article/posts/index_data_user",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                blogs = res.data;
                // console.log(blogs)
                setBlogs(blogs);
                setBlogOwl();

            }
        });
        //========================================== End Copy from js/client.js file============================


    });




    //========================================== Start Copy from js/main.js file============================

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
    // new WOW().init();
    //========================================== End Copy from js/main.js file============================

    /* Mobile menu dropdown */

    $("li.nav-item a").on("click", function () {
        $(this).parent("li").find(".dropdown-menu").slideToggle();
        // $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
    });

});