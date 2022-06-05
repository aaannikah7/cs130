const body = document.querySelector("body");
const menu = document.querySelector(".main-nav .fas");
const navUl = document.querySelector(".main-nav ul");
const faqLi = document.querySelectorAll(".faq-ul li");

body.addEventListener("click", function (e){
    if (e.target === menu && navUl.classList.contains("hide")) {
        navUl.classList.remove("hide");
    } else if (e.target !== navUl){
        navUl.classList.add("hide");
    }
});

// faq interaction
faqLi.forEach((li) => {
	li.addEventListener("click", function (e) {
		if (e.target.firstElementChild.classList.contains("hide")) {
			e.target.firstElementChild.classList.remove("hide");
		} else {
			e.target.firstElementChild.classList.add("hide");
		}
	});
});



