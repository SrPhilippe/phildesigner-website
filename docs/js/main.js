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
})