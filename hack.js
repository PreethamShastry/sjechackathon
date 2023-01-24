const slides = document.querySelector(".slide")
var counter = 0;
// slides.forEach(
//     (slide,index) => {
//         slide.style.left = `${index * 100}%`
//     }
// )
slides.forEach(slide  => {
    slide.style.left = `${index * 100}%`
});

function slideImage() {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
}
