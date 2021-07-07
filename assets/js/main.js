/**
 * Template Name: Medicio - v4.1.0
 * Template URL: https://bootstrapmade.com/medicio-free-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function() {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.add('topbar-scrolled')
                }
            } else {
                selectHeader.classList.remove('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.remove('topbar-scrolled')
                }
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }

    /**
     * Hero carousel indicators
     */
    let heroCarouselIndicators = select("#hero-carousel-indicators")
    let heroCarouselItems = select('#heroCarousel .carousel-item', true)

    heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
            heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
    });

    /**
     * Testimonials slider
     */
    new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    /**
     * Clients Slider
     */
    new Swiper('.gallery-slider', {
        speed: 400,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });

    /**
     * Initiate gallery lightbox 
     */
    const galleryLightbox = GLightbox({
        selector: '.gallery-lightbox'
    });

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()


games();
playWindows();
hideGameSections();

// hideGamesAndPlayWindows
function games() {
    document.getElementById("game01").style.display = 'none';
}

function playWindows() {
    document.getElementById("PlayGame01").style.display = 'none';
}

function hideGameSections() {
    document.getElementById("GameSection02").style.display = 'none';
}


function HideNavItems() {
    document.getElementById("games").style.display = 'none';
    document.getElementById("contacts").style.display = 'none';
    document.getElementById("Store").style.display = 'none';
}

function ResetNavItems() {
    document.getElementById("games").style.display = 'block';
    document.getElementById("contacts").style.display = 'block';
    document.getElementById("Store").style.display = 'block';
}

var home = document.getElementById('homes');
home.addEventListener('click', function() {
    games();
    playWindows();
    ResetNavItems();
    document.getElementById("main").style.display = 'block';
    window.location.href = "#about";
});

// <<<<<Games List >>>>>>
///////////////////////
var game01 = document.getElementById('gameOne');
game01.addEventListener('click', function() {
    HideNavItems();
    document.getElementById("main").style.display = 'none';
    document.getElementById("game01").style.display = 'inline-block';
    window.location.href = "#game01";
});

// <<<<<End Games List >>>>>>
///////////////////////

// <<<<<backFromGame>>>>>
var BackFromgame01 = document.getElementById('backFromGame01');
BackFromgame01.addEventListener('click', function() {
    HideNavItems();
    document.getElementById("main").style.display = 'none';
    document.getElementById("game01").style.display = 'inline-block';
    document.getElementById("header").style.display = 'inline-block';
    window.location.href = "#game01";
});

// <<<<<Play Window List >>>>>>
///////////////////////
var play01 = document.getElementById('play01');
play01.addEventListener('click', function() {
    HideNavItems();
    document.getElementById("main").style.display = 'none';
    document.getElementById("game01").style.display = 'none';
    document.getElementById("header").style.display = 'none';
    document.getElementById("PlayGame01").style.display = 'block';
    window.location.href = "#PlayGame01";
});

// <<<<<End Play Window List >>>>>>
///////////////////////


// <<<<< home Pagination >>>>>>
var GameSection01Page02 = document.getElementById('GameSection01Page02');
GameSection01Page02.addEventListener('click', function() {
    document.getElementById("GameSection01").style.display = 'none';
    document.getElementById("GameSection02").style.display = 'block';
    window.location.href = "#GameSection02";
});


var GameSection02Page01 = document.getElementById('GameSection02Page01');
GameSection02Page01.addEventListener('click', function() {
    document.getElementById("GameSection01").style.display = 'block';
    document.getElementById("GameSection02").style.display = 'none';
    window.location.href = "#GameSection01";
});
// <<<<< End home Pagination >>>>>>