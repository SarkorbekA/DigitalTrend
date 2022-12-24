const a = document.querySelector('.my-button')
const b = document.querySelector('.button__box')
const c = document.querySelector('nav .nav__ul')
const body = document.querySelector('body')
b.addEventListener('click', () => {
    a.classList.toggle('active')
    c.classList.toggle('active')
    body.classList.toggle('active')
})



let swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
        
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            markers: false,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});























console.log("Ася жонм 💖");












































// let symbol = Symbol('Bekzod')
// let symbol1 = Symbol('Bekzod')

// // console.log(typeof symbol1.description);

// let obj = {
//     name: "Sarkor",
//     age: 15,
//     [symbol]: "Symbol"
// }

// // console.log(obj.symbol);

// for (const i in obj) {
//     console.log(i);
// }

// let s1 = Symbol.for(1)
// let s2 = Symbol.for(1)

// console.log(Symbol.keyFor(s1));