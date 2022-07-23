import './style.css'

import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';



const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.13,
    smartphone: {smooth: true},
    tablet: {smooth: true}
});


const tl = gsap.timeline();

tl.from(".col-item__inner",{
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power3.out",
    stagger: 0.5

})

// tl.from(".animated-content-title__inner",{
//     translateY: 400,
//     duration: 1,
// })

const animateMainContent = () => {
    const tl = gsap.timeline();
    tl.from(".animated-content-title__inner",{
        translateY: 0,
        duration: 1,
    }).to(".col-item__inner",{
        y: -100,
        skewY: 10,
        skewX: 5,
        duration: 1,
        delay: 0.5,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.5,
        onComplete: () => {
            document.querySelector(".grid").style.display = "none";
        }
    })
    .to(".center-text__inner", {
        y: -300,
        skewY: 10,
        duration: 1,
        stagger: 0.5,
    })
    .to(".animated-content", {
        display: "block",
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.5,
    })
   
}

const reverseMainContent = () => {
    const tl = gsap.timeline();
    tl.to(".animated-content",{
        opacity: 0,
        duration: 1,
    })
    .to(".center-text__inner", {
        y: 0,
        skewY: 0,
        duration: 1,
        stagger: 0.5,
        delay: 0.5,
        onComplete: () => {
            document.querySelector(".grid").style.display = "grid";
        }
    })
    .to(".col-item__inner",{
        y: 0,
        skewY: 0,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        opacity: 1,
        stagger: 0.5,
    })
}

const centerText = document.querySelector(".center-text");
const backButton = document.querySelector(".back-button");
centerText.addEventListener("click", animateMainContent);
backButton.addEventListener("click", reverseMainContent);

