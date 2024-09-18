
// CARROSSEL DE IMAGENS 

let currentIndex = 0;
const intervalTime = 10000;
const slides = document.querySelectorAll(".carrossel-inner img");
const totalSlides = slides.length;
const indicatorsContainer = document.querySelector(".carrossel-indicators");

function moveSlide(step) {
    const slides = document.querySelectorAll(".carrossel-inner img");
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector(".carrossel-inner").style.transform = `translateX(${offset}%)`;
    updateIndicators();
}

function createIndicators() {
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement("div");
        indicator.classList.add("carrossel-indicator");
        indicator.addEventListener("click", () => {
            moveSlide(i - currentIndex);
        });
        indicatorsContainer.appendChild(indicator);
    }
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll(".carrossel-indicator");
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
    });
}

function startAutoSlide() {
    setInterval(() => {
        moveSlide(1);
    }, intervalTime);
}

// Start 
createIndicators();
startAutoSlide();


//  /. CARROSSEL DE IMAGENS