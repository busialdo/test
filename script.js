let animacja = gsap.timeline()
let animacja2 = gsap.timeline()
let animacja3 = gsap.timeline()
let animacja4 = gsap.timeline()


animacja.from(".container",{
    x:-200,
    opacity:0,
    duration:1.5,
    delay:0.5,
})
animacja2.from("#animacja2, #cennik",{
    x:-200,
    opacity:0,
    duration:1.5,
    delay:0.5,
})
animacja3.from("#kontakty",{
    x:-200,
    opacity:0,
    duration:1.5,
    delay:0.5,
})
animacja4.from("header",{
    y:-150,
    opacity:0,
    duration:1.5,
    delay:0.5,
})