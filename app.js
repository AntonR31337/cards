const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
 slide.addEventListener('mouseover', () => {
clearActiveClasses()
     slide.classList.add('active')
 })
}
function clearActiveClasses() {
    slides.forEach((slide) => {
slide.classList.remove('active')
    })
};
// sdsdgsadfsdf sd fhs f

let found = document.getElementsByClassName('#MyID')
console.log(typeof found)