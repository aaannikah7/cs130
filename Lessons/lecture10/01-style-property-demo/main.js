const resetbuttonbackgrounds = () => {
    document.querySelector("#btn1").style.backgroundColor = 'white';
    document.querySelector("#btn2").style.backgroundColor = 'white';
    document.querySelector("#btn3").style.backgroundColor = 'white';
    document.querySelector("#btn4").style.backgroundColor = 'white';
}



const makeRed = () => {
    // your code here...
    resetbuttonbackgrounds();
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor = 'red';
    document.querySelector("#btn1").style.backgroundColor = 'pink';
};

const makeBlue = () => {
    // your code here...
    resetbuttonbackgrounds();
    console.log('Change background to blue');
    document.querySelector("body").style.backgroundColor = 'blue';
    document.querySelector("#btn2").style.backgroundColor = 'red';
};

const makePink = () => {
    // your code here...
    resetbuttonbackgrounds();
    console.log('Change background to pink');
    document.querySelector("body").style.backgroundColor = 'pink';
    document.querySelector("#btn3").style.backgroundColor = 'orange';
};

const makeOrange = () => {
    // your code here...
    resetbuttonbackgrounds();
    console.log('Change background to orange');
    document.querySelector("body").style.backgroundColor = 'orange';
    document.querySelector("#btn4").style.backgroundColor = 'blue';
};

