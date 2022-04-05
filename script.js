const upSlide = document.querySelector(".up");
const downSlide = document.querySelector(".down");
const photo = document.querySelector(".photoContainer");
const wrapper = document.querySelectorAll(".wrapper");
const slidesLength = upSlide.querySelectorAll("div").length;
let currentSlide = 0;
let nameCostaa = document.querySelector(".name");
let dept = document.querySelector(".dept");
let topRight = document.querySelector(".topRight");
let gear = document.querySelector(".gear");
var ht = window.innerHeight;
var width = window.innerWidth;

let theta = width / ht;
let inverse = Math.atan(theta);
let divHt = (ht*ht + width*width)^1/2;
console.log(divHt);
// window.addEventListener('load', () => {
//     downSlide.style.transform = `rotate(-${inverse}rad) translate(1170px,-${(slidesLength - 1 - currentSlide) * 3800}px)`;
//     upSlide.style.transform = `rotate(-${inverse}rad) translate(1170px, -${currentSlide * 3800}px)`;
// })
window.addEventListener('keydown', e => {
    if (e.key == "ArrowDown") {
        currentSlide++;

        if (currentSlide > slidesLength - 1) {
            currentSlide = 0;
        }
        downSlide.style.transform = `rotate(-${inverse}rad) translate(1170px,-${(slidesLength - 1 - currentSlide) * 3800}px)`;
        upSlide.style.transform = `rotate(-${inverse}rad) translate(1170px, -${currentSlide * 3800}px)`;
        update();
    }
})
window.addEventListener('keydown', e => {
    if (e.key == 'ArrowUp') {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slidesLength - 1;
        }
        update();
        downSlide.style.transform = `rotate(-${inverse}rad) translate(1170px,-${(slidesLength - 1 - currentSlide) * 3800}px)`;
        upSlide.style.transform = `rotate(-${inverse}rad) translate(1170px,-${currentSlide * 3800}px)`;
    }
})
window.addEventListener('keydown', (e) => {

    keyPressed = parseInt(e.key);
    if (keyPressed >= 1 && keyPressed <= 9) {
        currentSlide = keyPressed - 1;
    }

    downSlide.style.transform = `rotate(-${inverse}rad) translate(1170px,-${(slidesLength - 1 - currentSlide) * 3800}px)`;
    upSlide.style.transform = `rotate(-${inverse}rad) translate(1170px,-${currentSlide * 3800}px)`;
    update();
})

data = [
    {
        "nameCostaa": "Priyanshu Shukla",
        "dept": "DEPARTMENT OF VISUAL MEDIA",
        "topRight": "hue-rotate(0deg)",
        "gear": "hue-rotate(0deg)",
        "photo": "Asset/Priyanshu.png"
    },
    {
        "nameCostaa": "Vidushi Sahay",
        "dept": "DEPARTMENT OF PUBLICATIONS AND CORRESPONDENCE",
        "topRight": "hue-rotate(90deg)",
        "gear": "hue-rotate(90deg)",
        "photo": "Asset/Vidushi.png",
    },
    {
        "nameCostaa": "Shashwath M S",
        "dept": "DEPARTMENT OF RECEPTION AND ACCOMODATION",
        "topRight": "hue-rotate(200deg)",
        "gear": "hue-rotate(190deg)",
        "photo": "Asset/Shashwath.png",
    },
    {
        "nameCostaa": "Shreya Gupta",
        "dept": "DEPARTMENT OF SPONSORSHIP AND MARKETING",
        "topRight": "hue-rotate(230deg)",
        "gear": "hue-rotate(190deg)",
        "photo": "Asset/Shreya Gupta 1.png",
    },
    {
        "nameCostaa": "Rhythm Saxena",
        "dept": "DEPARTMENT OF ART, DESIGN, AND PUBLICITY",
        "topRight": "hue-rotate(235deg)",
        "gear": "hue-rotate(240deg)",
        "photo": "Asset/Rhythm.png",
    },
    {
        "nameCostaa": "Navya Bhatnagar",
        "dept": "DEPARTMENT OF CONTROLS ",
        "topRight": "hue-rotate(140deg)",
        "gear": "hue-rotate(135deg)",
        "photo": "Asset/Navya.png",
    },
    {
        "nameCostaa": "Harsh Shukla",
        "dept": "PRESIDENT, STUDENT UNION",
        "topRight": "hue-rotate(240deg)",
        "gear": "hue-rotate(250deg)",
        "photo": "Asset/HarshShukla.png",
    },
    {
        "nameCostaa": "Harsh Lamba ",
        "dept": "GENERAL SECRETARY, STUDENT UNION",
        "topRight": "hue-rotate(200deg)",
        "gear": "hue-rotate(200deg)",
        "photo": "Asset/HarshLamba.png",
    },
    {
        "nameCostaa": "Divyam Chauhan",
        "dept": "DEPARTMENT OF PAPER EVALUATIONS AND PRESENTATIONS",
        "topRight": "hue-rotate(160deg)",
        "gear": "hue-rotate(170deg)",
        "photo": "Asset/Divyam.png",
    }

]

function update() {
    let d = data[currentSlide];
    nameCostaa.textContent = d.nameCostaa;
    dept.textContent = d.dept;
    topRight.style.filter = d.topRight;
    gear.style.filter = d.gear;
    photo.src = d.photo;
}