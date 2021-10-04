//event
$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 45
    }, 900, 'easeInOutExpo');

    e.preventDefault();
});


//paralax
//about
$(window).on('load', function () {
    $('.img-header img').addClass('pmuncul');
    $('.jumbotron h1').addClass('pmuncul');
    $('.jumbotron p').addClass('pmuncul');
    $('.jumbotron a').addClass('pmuncul');
    $('.jumbotron div').addClass('pmuncul');
    $('.trans1').addClass('pmuncul');
    $('.trans2').addClass('pmuncul');
    $('.trans3').addClass('pmuncul');
    $('.trans4').addClass('pmuncul');
});

$(window).scroll(function () {
    var winscll = $(this).scrollTop();

    $('.img-header img').css({
        'transform': 'translate(0px, ' + winscll / 6.8 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + winscll / 4.2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + winscll / 3.2 + '%)'
    });

    $('.jumbotron a').css({
        'transform': 'translate(0px, ' + winscll / 2.8 + '%)'
    });


    //about
    if (winscll > $('.about').offset().top - 250) {
        $('.about .kiri').each(function (i) {
            setTimeout(function () {
                $('.about .kiri').eq(i).addClass('show');
            }, 400 * i);
        });

    }
    //portfolio
    if (winscll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumb').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumb').eq(i).addClass('show');
            }, 400 * i);
        });

    }
    //comment
    if (winscll > $('.contact').offset().top - 250) {
        $('.contact .komen').each(function (i) {
            setTimeout(function () {
                $('.contact .komen').eq(i).addClass('show');
            }, 400 * i);
        });

    }
    //garis header
    // if (winscll > $('.header').offset().top - 250) {
    //     $('.header .line-bawah').each(function (i) {
    //         setTimeout(function () {
    //             $('.header .line-bawah').eq(i).addClass('show');
    //         }, 400 * i);
    //     });
    // }
    // if (winscll > $('.header').offset().top - 250) {
    //     $('.header .line-atas').each(function (i) {
    //         setTimeout(function () {
    //             $('.header .line-atas').eq(i).addClass('show');
    //         }, 400 * i);
    //     });
    // }
});