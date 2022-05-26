const body = document.querySelector("body");
const menu = document.querySelector(".main-nav .fas");
const navUl = document.querySelector(".main-nav ul");

body.addEventListener("click", function (e){
    if (e.target === menu && navUl.classList.contains("hide")) {
        navUl.classList.remove("hide");
    } else if (e.target !== navUl){
        navUl.classList.add("hide");
    }
});

// Carousel

let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active-dots", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active-dots";
            setTimeout(showSlides, 3000); // Change image every 2 seconds
        }
