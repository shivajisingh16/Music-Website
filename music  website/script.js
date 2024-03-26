let tl=gsap.timeline();

tl.from(".content",{
    opacity:0,
    scale:0,
    duration:1,
    delay:1,
})
tl.from(".ipad-iphone-img",{
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:".ipad-iphone-img",
        scroller:"body",
        markers:false,
        scrub:3
    }
})