$(document).ready(() => {

    let desc = "Melhore a cara da sua empresa/negócio com a gente! Tudo o que você precisava era encontrar a pessoa certa para isso.",
        image = "img/og-logo.png",
        title = "PhilDesign website",
        url = window.location.origin

    let ceo = {
        types: {
            info: {
                "description": desc
            },
            openGraph: {
                "og:type": "website",
                "og:image": image,
                "og:description": desc,
                "og:title": title,
                "og:url": url,
            },
            twitter: {
                "twitter:site": "@SrPhilipppe",
                "twitter:image": image,
                "twitter:description": desc,
                "twitter:title": title,
                "twitter:card": "summary"
            }
        },
        keywords: [
            "web",
            "design",
            "designer",
            "developer",
            "banner",
            "flyer",
            "cartão",
            "visitas",
            "cartão de visitas",
            "phil",
            "trabalho",
            "publicidade"
        ]
    }

    for (let prop in ceo.types.openGraph) {
        $('head').prepend(`<meta name="${prop}" content="${ceo.types.openGraph[prop]}">`)
    }

    for (let prop in ceo.types.info) {
        $('head').prepend(`<meta name="${prop}" content="${ceo.types.info[prop]}">`)
    }

    for (let prop in ceo.types.twitter) {
        $('head').prepend(`<meta name="${prop}" content="${ceo.types.twitter[prop]}">`)
    }



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
            $(event.currentTarget).children('ul').toggleClass('active disabled')
        })

        $('.navigation').click((event) => {
            $(event.currentTarget).next().is((index, el) => {
                $(el).toggleClass('active')
            })
        })
    }

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