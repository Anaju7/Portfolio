const sections = document.querySelectorAll('section');
const itemMenu = document.querySelectorAll('.nav-link');

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