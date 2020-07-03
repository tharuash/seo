function svgdrawing() {
    var path = document.getElementById('ewrcpck2x369');
    var length = path.getTotalLength();

    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
        'none';

    // path.style.stroke='white';
    path.style.stroke = '#c30c15';

    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    // Trigger a layout so styles are calculated & the browser 
    // picks up the starting position before animating
    path.getBoundingClientRect();

    // Define our transition
    path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 3s ease-in-out';

    // Go!
    path.style.strokeDashoffset = '0';
}

// ====================================================


//start copy from spot.js 
function setSpotOwl() {
    var owl = $('#spot-list');
    owl.owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        loop: true,
        responsiveRefreshRate: 0,
        autoplay: true,
        autoPlay: 3000,
        smartSpeed: 1000,
        nav: true,
        stopOnHover: false,
        /*navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],*/
        responsive: {
            0: {
                items: 1,
            },
            582: {
                items: 2,
            },
            768: {
                items: 3,
            },
            998: {
                items: 4,
            }
        }
    });
}

function setIndustryOwl() {
    var owl = $('#indus-list');
    owl.owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        loop: true,
        responsiveRefreshRate: 0,
        autoplay: true,
        autoPlay: 3000,
        smartSpeed: 1000,
        nav: true,
        stopOnHover: false,
        /*navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],*/
        responsive: {
            0: {
                items: 1,
            },
            582: {
                items: 2,
            },
            768: {
                items: 3,
            },
            998: {
                items: 4,
            }
        }
    });
}
//end copy from spot.js 

// ====================================================

//Start copy from js/client.js

var merchants = [];
var blogs = [];
destroySlick();
setSlick();


function setSlick() {


    $("#client-list").empty();
    var html = '';
    for (let i = 0; i < merchants.length; i++) {

        /*html = `<a href="${merchants[i].web_url}" class="slide"><img src="http://blog.chamaralabs.com/${merchants[i].image_url}"></a>`;*/
        html = `<div class="slide cont" style="padding: 5px 10px; vertical-align:top"><a target="_blank" rel="noopener noreferrer" href="${merchants[i].web_url}" > <div class="port wow fadeIn">
                 <img src="http://blog.chamaralabs.com/${merchants[i].image_url}" class="img-fluid c_img" style="width:100%;"/>
                <div class="work-text-content">
                  <h3 style="color:#fff">${merchants[i].title}</h3>
                </div>

              </div> </a></div>`;
        $("#client-list").append(html);
    }

    $('.customer-logos').slick({
        rows: 3,
        slidesPerRow: 5,
        /*slidesToShow: 5,
        slidesToScroll: 5,*/
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<button class="slick-prev"><span><</span></button>',
        prevArrow: '<button class="slick-next"><span>></span></button>',
        arrows: true,
        dots: true,
        cssEase: "ease",
        pauseOnHover: false,
        pauseOnClick: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                rows: 3,
                slidesPerRow: 3,
            }
        }, {
            breakpoint: 520,
            settings: {
                rows: 3,
                slidesPerRow: 1,
            }
        }]
    });




}

function destroySlick() {
    if ($('.customer-logos').hasClass('slick-initialized')) {
        $('.customer-logos').slick('destroy');
    }
}

function setBlogs(blogs) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    $("#blog-list").empty();
    var html = '';

    for (let j = 0; j < blogs.length; j++) {

        /*var name = blogs[j].name.split(' ')
        console.log(name)
        html = `<div class="col-lg-4 col-md-12">
    <div class="tw-latest-post" style="text-align:left">
        <div class="latest-post-media text-center">
            <img src="http://blog.chamaralabs.com/${blogs[j].featured_image}" alt="blog_image_one" class="img-fluid" style="height: 200px">
        </div>
        <!-- End Latest Post Media -->
        <div class="post-body" style="height: 500px; overflow-y : scroll">
            <div class="post-item-date">
                <div class="post-date">
                    <span class="date">${blogs[j].published_at.substring(8,10)}</span>
                    <span class="month">${monthNames[blogs[j].published_at.substring(5,7) - 1]}</span>

                
                </div>
            </div>
            <!-- End Post Item Date -->
            <div class="post-info">
                <div class="post-meta">
                    <span class="post-author">
                        Posted by <a href="#">${blogs[j].created_by_name.split(' ')[0]+ blogs[j].created_by_name.split(' ')[1] }</a>
                    </span>
                </div>
                <!-- End Post Meta -->
                <h3 class="post-title"><a href="#">${blogs[j].name}</a></h3>
                <div class="entry-content">
                    <p>
                    ${blogs[j].intro}
                    </p>
                </div>
                <!-- End Entry Content -->
                <a href="#" class="tw-readmore">Read More
                    <!--i class="fa fa-angle-right"></i-->
                </a>
            </div>
            <!-- End Post info -->
        </div>
        <!-- End Post Body -->
    </div>
    <!-- End Tw Latest Post -->
</div>
<!-- End Col -->`;*/


        html = `<div class="post item">
        <div class="post-img"> <img class="img-responsive" src="http://blog.chamaralabs.com/${blogs[j].featured_image}" alt=""/> </div>
        <div class="post-info" style="margin-left:0">
          <h3><a href="#">${blogs[j].name}</a></h3>
          <h6>${monthNames[blogs[j].published_at.substring(5, 7) - 1]} ${blogs[j].published_at.substring(8, 10)}, ${blogs[j].published_at.substring(0, 4)}</h6>
          <p>${blogs[j].intro}</p>
          <a class="readmore" href="http://blog.chamaralabs.com/article/posts/${blogs[j].encode_id}/${blogs[j].slug}"><span>Read More</span></a> </div>
      </div>`;
        /*$("#blog-list").append(html);*/
        $("#blog-list").append(html);
    }



}

function setOwl() {
    var owl = $('#blog-list');
    owl.owlCarousel({
        items: 3,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        loop: true,
        responsiveRefreshRate: 0,
        autoplay: true,
        autoPlay: 3000,
        smartSpeed: 400,
        nav: true,
        stopOnHover: false,
        /*navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],*/
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            998: {
                items: 3,
            }
        }
    });
}

function setBottomOwl() {
    var owl = $('#bottom-list');
    owl.owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        loop: true,
        responsiveRefreshRate: 0,
        autoplay: true,
        autoPlay: 3000,
        smartSpeed: 1000,
        nav: true,
        stopOnHover: false,
        /*navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],*/
        responsive: {
            0: {
                items: 1,
            },
            582: {
                items: 2,
            },
            768: {
                items: 3,
            },
            998: {
                items: 4,
            }
        }
    });
}
//End copy from js/client.js