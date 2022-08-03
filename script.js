const sections = document.querySelectorAll('section');
const itemMenu = document.querySelectorAll('.nav-link');


// SCRIPT MENU
window.addEventListener('scroll', () => {

    let teste;
    sections.forEach( section => {
       let sectionTop = section.offsetTop;
       const sectionHeight = section.clientHeight;
       if(window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
        teste = section.getAttribute('id');
       }
    })

    itemMenu.forEach( item => {
        item.classList.remove('active');
        if(item.classList.contains(teste)) {
            item.classList.add('active');
        }
    })
})

const slide = document.querySelector('.container-projects');
const cards = document.querySelectorAll('.project-card');
let idx = 0;

console.log(cards)
function carosel() {

    idx++;

    if(idx > cards.length - 1) {
        idx = 0;
    }

    slide.style.transform = `translateX(${-idx * 270}px)`;
}

// setInterval(carosel, 1800)