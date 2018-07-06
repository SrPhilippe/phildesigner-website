$(document).ready(() => {

    $('#menu ul > li').each((index, el) => {
        $(el).has('ul').children('a').append('<i class="fas fa-caret-right"></i>')
        $(el).children('ul').addClass('disabled')
    })


    $('#menu ul > li').has('ul').hover((event) => {
        let el = $(event.currentTarget).children('ul')
        el.toggleClass('active')
        el.toggleClass('disabled')
    }, (event) => {
        let el = $(event.currentTarget).children('ul')
        el.toggleClass('active')
        el.toggleClass('disabled')
    })
})