$(document).ready(() => {

    $('#menu .mobile > ul li').each((index, el) => {
        $(el).has('ul').children('a').append('<i class="fas fa-caret-right"></i>')
        $(el).children('ul').addClass('disabled')
    })

    if ($(window).width() > 768) {
        $('#menu .mobile > ul > li').has('ul').hover((event) => {
            let el = $(event.currentTarget).children('ul')
            el.toggleClass('active')
            el.toggleClass('disabled')
        }, (event) => {
            let el = $(event.currentTarget).children('ul')
            el.toggleClass('active')
            el.toggleClass('disabled')
        })
    } else {
        $('#menu .mobile > ul > li').has('ul').click((event) => {
            $(event.currentTarget).children('ul').toggleClass('active')
        })
    }

    $('.navigation').click((event) => {
        $(event.currentTarget).next().is((index, el) => {
            $(el).toggleClass('active')
        })
    })

    $('#menu .mobile > ul li > ul').click((event) => {
        $(event.currentTarget).toggleClass('active')
    })

    $('#slider .item').each((index, el) => {
        $(el).css('background-image', `url(../img/slider/${index + 1}.jpg)`)
    })

    $('#slider').slick({
        infinite: true,
        dots: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    })

    $(window).scroll((event) => {
        let top = $(window).scrollTop()
        if (top > $('#slider').height()) {
            $('#menu').addClass('active')
        } else {
            $('#menu').removeClass('active')
        }
    })


})