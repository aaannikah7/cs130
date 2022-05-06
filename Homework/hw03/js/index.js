/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();

// grab the feature_image element in the DOM
const feature = document.querySelector(".featured_image");

// grab each element with a class of image
const imageElements = document.querySelectorAll('.image');
let currentIndex = 0;
const arrayLength = imageElements.length;


// create event handler:
const showImage = (e) => {
    const elem = e.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
// update the feature element to the current element clicked
        feature.style.backgroundImage = elem.style.backgroundImage;
};

// then loop through each one and attach an event handler
// to each element's click event:
for (const elem of imageElements) {
    elem.onclick = showImage;
}

const showNext = (ev) => {
    currentIndex += 1;
// reset currentIndex to 0 once it reaches an out of bounds number
    if (currentIndex >= arrayLength){
        currentIndex = 0;
    }
    // update .featured_image
    const image = imageElements[currentIndex].style.backgroundImage;
    feature.style.backgroundImage = image;
};

const showPrev = (ev) => {
    currentIndex -= 1;
    // reset currentIndex to 7 once it reaches an out of bounds number
    if (currentIndex <0){
        currentIndex = 7;
    }
    // update .featured_image
    const image = imageElements[currentIndex].style.backgroundImage;
    feature.style.backgroundImage = image;
};

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;


