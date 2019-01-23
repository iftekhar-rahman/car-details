jQuery(document).ready(function($) {




if($(window).width() < 975)  {
    $("#navbar-example2 .nav-link").on("click", function() {
        if($(this).is(".partexchange-link")) {
            $("#ahq-tab-content-wrap .container").addClass("container-fluid").removeClass("container");
        } else {
            $("#ahq-tab-content-wrap .container-fluid").addClass("container").removeClass("container-fluid");
        }
    })
   
}

if($(window).width() < 751) {

    $(".scroling-menu-area").remove();
    $("#ahq-tab-content-wrap .container").addClass("container-fluid").removeClass("container");

    $("#myTabContent h4").addClass("collapsed");
    $("#myTabContent .tab-pane").addClass("collapse").removeClass("tab-pane fade").removeAttr("aria-labelledby role").attr("data-parent", "#accordion");

    $("#ahq-tab-content-wrap .tab-content-parent").removeClass("tab-content").attr("id", "accordion");
    $(".tab-content-parent > div").addClass("card");
    $("#ahq_partexchange").parent().removeClass("text-center");
    $("#ahq_why_choose").empty().html("<p> We’ve changed the way used cars are bought and sold. Our comprehensive car buying process allows us to guarantee your vehicle has undergone extensive checks, offering peace of mind as standard. For us, it’s more than four wheels and an engine. Find out why our dealership is trusted by so many, and why our customers rate us so highly.</p>").css("padding", "20")


    $("#ahq_specification .card-deck").addClass("owl-carousel specification-mobile-carousel").removeClass("card-deck");
    var $specificationMobileMarousel = $(".specification-mobile-carousel");
    $($specificationMobileMarousel).owlCarousel({
        items: 1
    })

    // Listen to owl events:
        $specificationMobileMarousel.on('translated.owl.carousel', function(event) {
            var $singleTableHeight = $('.specification-mobile-carousel .owl-item.active .single-table').outerHeight();
            $('.specification-mobile-carousel.owl-carousel .owl-stage-outer').height($singleTableHeight);
            console.log($singleTableHeight)
        })

        $("#ahq_autotrader-wrapper .container").addClass("container-fluid").removeClass("container");

} else {
    $(".tab-content-parent > .sss > div").removeClass("tab-pane fade active").removeAttr("class id")
                                
    $(".tab-content-parent > .sss").addClass("tab-pane fade").attr("id");
    $(".tab-content-parent > .sss").first().addClass("show active")
}


 $(".review-slider").owlCarousel({
        items: 1
    })
$(".card-deck .single-table:nth-child(2)").css("height", 250);
$(".card-deck .single-table:nth-child(3)").css("height", 220);




$(".input-reg").keyup(function(){
        $(".submit-reg-btn").removeAttr('disabled');
});


$(".submit-reg-btn").on("click", function() {
    var $inputRegval = $(".input-reg").val();
    $("#reg-number-conf").val($inputRegval);

})




    if ($(window).width() < 991) {
        var $blueBarHtml = '<div class="blue-bar">' +
            '<div class="row">' +
            '<div class="col-md-8">' +
            '<h1>BMW 1 Series 118d M Sport 5dr</h1>' +
            '</div>' +
            '<div class="col-md-4">' +
            '<span class="crossline">Was £6,595</span>' +
            '<span class="curret-amount">£15,975</span>' +
            '</div>' +
            '</div>' +
            '</div>';
        $('.cardetails-area .card-deck').prepend($blueBarHtml);
        $('body').find('.blue-bar').last().remove();
    }

    // $('body').scrollspy({ target: '#navbar-example2', offset: 160 })

    $(".view-bmw-car").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });



    // Car Details Page

    // Car Details Page
    if ($(window).width() > 975) {

        if ($.fn.slick) {
            /*--------------------------------
            bmw car slider
    -----------------------------------*/


            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                draggable: true,
                fade: false,
                // dots: true,
                asNavFor: '.slider-nav'
            });
            /*------------------------------------
                bmw car slider Nav
            --------------------------------------*/
            $('.slider-nav').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: false,
                arrows: true,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: '0px',
                responsive: [{
                        breakpoint: 450,
                        settings: {
                            dots: false,
                            slidesToShow: 3,
                            centerPadding: '0px',
                        }
                    },
                    {
                        breakpoint: 420,
                        settings: {
                            autoplay: true,
                            dots: false,
                            slidesToShow: 1,
                            centerMode: false,
                        }
                    }
                ]
            });

        }
    } else {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: true,
            fade: false,
            dots: true
        });

        $('.slider-nav').empty();
        $('.slider-for .slick-dots button').remove();
    }



    $(window).on("scroll", function(){
        if($(this).scrollTop() > 400){
            $(".scroll-top-btn").addClass("show-scroll-btn");
        } else{
            $(".scroll-top-btn").removeClass("show-scroll-btn");
        }
    });

    $(".scroll-up").on("click", function(){
        $("html, body").animate({
            scrollTop: 0
        },1000);
    });

    $(window).on("scroll", function(){
        if($(this).scrollTop() > 300) {
            $(".chat-box ").addClass("sticky-chatbox");
        } else{
            $(".chat-box ").removeClass("sticky-chatbox");
        }
    });

    // if ($(window).width() > 992) {
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 40) {
                $(".header-area").addClass("stick-menu");
            } 
            else {
                $(".header-area").removeClass("stick-menu");
            }
        });
    // }

    // $(window).on("scroll", function() {
    //     if ($(this).scrollTop() > 620) {
    //         $(".scroling-menu-area").addClass("stick-scroll");
    //     } else {
    //         $(".scroling-menu-area").removeClass("stick-scroll");
    //     }
    // });


    //jQuery smooth scroll
    $('li.smooth-menu a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '150';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // $("li.smooth-menu").on("click", function() {
    //     $("li.smooth-menu").removeClass("active");
    //     $(this).addClass("active");
    // });




    // Accordion js
    // $('.finance-accordion-heading-wrap').hide();
    // if ($(window).width() < 559) { 
    //     $("#headingOne a").removeClass("exchange-acc-heading-desk");
    //     $("#headingOne a").addClass("exchange-acc-heading-mobile");

    //     $("#headingTwo a").removeClass("cust-review-acc-heading-desk");
    //     $("#headingTwo a").addClass("cust-review-acc-heading-mobile");
    //     $("#headingTwo a").text("Why Choose Us");

    //     $(".customer-review-area, .exchange-area").removeClass("section-padding-2");
    //     $(".customer-review-area").css({
    //         'backgroundColor': 'inherit',
    //         'backgroundImage': 'none',
    //         'min-height': '0',
    //         'margin-bottom': 0 + 'px',
    //         'border-bottom': '1px solid #fff'
    //     });
    //     $(".exchange-area").css({ 'border-bottom': '1px solid #fff'})

    //     $("#ahq_partexchange .card-body").removeClass("exchange-acc-body-desk");
    //     $("#ahq_partexchange .card-body").addClass("exchange-acc-body-mobile");

    //     $("#ahq_customerreview .card-body").removeClass("cust-review-acc-body-desk");
    //     $("#ahq_customerreview .collapse").removeClass("show");
    //     $("#ahq_customerreview .card-body").addClass("cust-review-acc-body-mobile owl-carousel");

    //     $("#ahq_partexchange #accordion .collapse").attr('id', 'collapseOne');
    //     $("#ahq_customerreview #accordion2 .collapse").attr('id', 'collapseTwo');

    //     $('.exchange-acc-heading-mobile, .cust-review-acc-heading-mobile').closest('.container').removeClass('container').addClass('container-fluid');
        


    //     $(".cust-review-acc-body-mobile").owlCarousel({
    //         items: 1,
    //         autoplay: false,
    //         loop: true,
    //         autoplayDuration: 4000
    //     })
    // }
    // if ($(window).width() < 975) {
    //     var $cardClumns = $('.card-columns');
    //     $($cardClumns).addClass('owl-carousel');

    //     $cardClumns.owlCarousel({
    //         items: 1,
    //         autoplay: false,
    //         autoplayDuration: 4000,
    //         loop: true
    //     })

    //     // Listen to owl events:
    //     $cardClumns.on('translated.owl.carousel', function(event) {
    //         var $singleTableHeight = $('.card-columns .owl-item.active .single-table').height();
    //         $('.card-columns.owl-carousel .owl-stage-outer').height($singleTableHeight);
    //         console.log($singleTableHeight);
    //     })


    // }


    $(".menu-trigger").on("click", function(){
        $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
        return false;
    });
    $(".menu-close, .off-canvas-overlay").on("click", function(){
        $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
    });


    $(".tab-content.why-choose-tab-content").css({
        "backgroundColor" : "#F1F1F1"
    })

    $("#navbar-example2 .nav-link").on("click", function() {
        if($(this).is(".why-choose-link")) {
            $('.tab-content-parent').css("padding", '0');
            $('#ahq-tab-content-wrap').css("padding-top", '0');
        } else{
            $('#ahq-tab-content-wrap').css("padding", '50px 0px');
        }

        if($(this).is(".partexchange-link")) {

        }
    })

});