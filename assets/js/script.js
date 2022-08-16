const tenis1 = document.getElementById('tenis-1');
const tenis2 = document.getElementById('tenis-2');

const arrowRight = document.getElementById('right');
const arrowLeft = document.getElementById('left');

arrowLeft.addEventListener('click', () => {
    tenis1.style.left = '650px';
    tenis2.style.left = '4px';
});

arrowRight.addEventListener('click', () => {
    tenis1.style.left = '4px';
    tenis2.style.left = '-650px';
});



let size = document.querySelector(".size-name");

size.addEventListener("click", (event) => {
    let target = event.target
    if(target.classList.contains("size")){
        size.querySelector(".active").classList.remove("active");
        target.classList.add("active");
    };
});
