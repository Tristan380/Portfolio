/*============== SHOW & HIDE MENU =============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*======== SHOW MENU=========*/
// Validate if constants exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}


/*======== HIDE MENU=========*/
// Validate if constants exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}



/*============== REMOVE MENU IN MOBILE =============*/
const navLink = document.querySelectorAll('.nav__link');

function removeMenu() {
    // When we click each link, the show menu class gets removed.
    navMenu.classList.remove('show-menu');
}

navLink.forEach(link => {
    link.addEventListener('click', removeMenu)
});



/*============== TYPED JS =============*/

let type = new Typed('.type', {
    strings: ['software developer.'],
    loop: true,
    typeSpeed: 60,
})


/*============== ACCORDION SKILLS =============*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentElement.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemClass == 'skills__content skills__close') {
        this.parentElement.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach(element => {
    element.addEventListener('click', toggleSkills)
})


/*============== QUALIFICATION TABS =============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})



/*================ SERVICES MODAL ===============*/
const modalBtns = document.querySelectorAll('.services__button'),
    modalViews = document.querySelectorAll('.services__modal'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {

    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalclose, i) => {
    modalclose.addEventListener('click', () => {
        modalViews[i].classList.remove('active-modal');
    })
})



/*================ PORTFOLIO SWIPER ===============*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*================ TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        568: {
            slidesPerView: 2,
        }


    }
});


/*================ SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
console.log(sections)

function scrollActive() {
    const scrollY = window.pageYOffset;
    // console.log(scrollY)

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive)



/*================ CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const nav = document.getElementById('header');

    // When the scroll is greater than 200 viewport, add the scroll-header class
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)


/*================ SHOW SCROLL TOP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*================ DARK / LIGHT THEME  ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a theme

if (selectedTheme) {
    // If validation successful, we ask what the issue was, to know if we activated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / Deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user chose

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-theme', getCurrentIcon())
})