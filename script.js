let lightmode = false;

function ChangeThemeButton() {
    let butao = document.querySelector("#theme-toggle");
    
    if (!lightmode) {
        lightmode = true;
        butao.innerHTML = "MODO ESCURO";
    } else {
        lightmode = false;
        butao.innerHTML = "MODO CLARO";
    }
    
    changeTheme(lightmode);
    console.log(lightmode);
}

function changeTheme(LIGHTMODE) {
    let element = document.body;
    if (LIGHTMODE) {
        element.className = 'ModoClaro';
    } else {
        element.className = 'ModoEscuro';
    }
}



function onScrool(){
    
}

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.opacidade');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const maxScroll = document.body.scrollHeight - windowHeight;

    sections.forEach(section => {
       
        const opacity = Math.min(scrollY / (maxScroll / 1.5), 1); 
        section.style.opacity = opacity; 
    });
});




let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    items[currentIndex].classList.add('active');

   
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}


setInterval(() => moveSlide(1), 5000); 
