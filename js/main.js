$(".carousel__inner")
    .slick({
        // mobileFirst: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        speed: 500,
        cssEase: "linear",
        swipe: true,
        responsive: [
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    })

    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        if (nextSlide === 0) {
            slick.slickGoTo(slick.slideCount - 1);
        } else if (nextSlide === slick.slideCount - 1) {
            slick.slickGoTo(0);
        }
    })

    .on("afterChange", function (event, slick, currentSlide) {
        let elt = slick.$slides.get(currentSlide);
        $(".carousel__item").removeClass("active");
        $(elt).addClass("active");
    });