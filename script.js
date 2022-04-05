const upSlide = document.querySelector(".up");
const downSlide = document.querySelector(".down");
const wrapper = document.querySelectorAll(".wrapper");
const slidesLength = upSlide.querySelectorAll("div").length;
let currentSlide = 0;
let nameCostaa = document.querySelector(".name");
let dept = document.querySelector(".dept");
let topRight = document.querySelector(".topRight");
let gear = document.querySelector(".gear");

window.addEventListener('keydown', e => {
    if (e.key == "ArrowDown") {
        currentSlide++;

        if (currentSlide > slidesLength - 1) {
            currentSlide = 0;
        }
        downSlide.style.transform = `rotate(-64deg) translate(1470px,-${(slidesLength - 1 - currentSlide) * 3800}px)`;
        upSlide.style.transform = `rotate(-64deg) translate(1470px, -${currentSlide * 3800}px)`;
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
        downSlide.style.transform = `rotate(-64deg) translate(1470px,-${(slidesLength - 1 - currentSlide) * 3800}px)`;
        upSlide.style.transform = `rotate(-64deg) translate(1470px,-${currentSlide * 3800}px)`;
    }
})
window.addEventListener('keydown', e => {
    if (e.key == '1') {
        currentSlide = 0;
    }
    else if (e.key == '2') {
        currentSlide = 1;
    }
    else if (e.key == '3') {
        currentSlide = 2;
    }
    else if (e.key == '4') {
        currentSlide = 3;
    }
    else if (e.key == '5') {
        currentSlide = 4;
    }
    else if (e.key == '6') {
        currentSlide = 5;
    }
    else if (e.key == '7') {
        currentSlide = 6;
    }
    else if (e.key == '8') {
        currentSlide = 7;
    }
    else if (e.key == '9') {
        currentSlide = 8;
    }
    downSlide.style.transform = `rotate(-64deg) translate(1470px,-${(slidesLength - 1 - currentSlide) * 3800}px)`;
    upSlide.style.transform = `rotate(-64deg) translate(1470px,-${currentSlide * 3800}px)`;
    update();
})

function update(){
    if(currentSlide==0){
    nameCostaa.textContent = "Priyanshu Shukla";
    dept.textContent = "DEPARTMENT OF VISUAL MEDIA"
    topRight.style.filter = "hue-rotate(0deg)"
    gear.style.filter = "hue-rotate(0deg)"
}
else if(currentSlide==1){
    nameCostaa.textContent = "Vidushi Sahay";
    dept.textContent = "REGISTRATIONS & CORRESPONDENCE"
    topRight.style.filter = "hue-rotate(90deg)"
    gear.style.filter = "hue-rotate(90deg)"
} 
else if(currentSlide==2){
    nameCostaa.textContent = "Shashwath M S";
    dept.textContent = "RECEPTION AND ACCOMODATION"
    topRight.style.filter = "hue-rotate(200deg)"
    gear.style.filter = "hue-rotate(190deg)"
} 
else if(currentSlide==3){
    nameCostaa.textContent = "Shreya Gupta";
    dept.textContent = "SPONSORSHIP AND MARKETING"
    topRight.style.filter = "hue-rotate(230deg)"
    gear.style.filter = "hue-rotate(190deg)"
} 
else if(currentSlide==4){
    nameCostaa.textContent = "Rhythm Saxena";
    dept.textContent = "PUBLICITY AND ONLINE PARTNERSHIPS"
    topRight.style.filter = "hue-rotate(235deg)"
    gear.style.filter = "hue-rotate(240deg)"
} 
else if(currentSlide==5){
    nameCostaa.textContent = "Navya Bhatnagar";
    dept.textContent = "EVENTS, PROJECTS AND LOGISTICS "
    topRight.style.filter = "hue-rotate(190deg)"
    gear.style.filter = "hue-rotate(195deg)"
} 
else if(currentSlide==6){
    nameCostaa.textContent = "Harsh Shukla";
    dept.textContent = "PRESIDENT, STUDENT UNION"
    topRight.style.filter = "hue-rotate(240deg)"
    gear.style.filter = "hue-rotate(250deg)"
} 
else if(currentSlide==7){
    nameCostaa.textContent = "Harsh Lamba ";
    dept.textContent = "GENERAL SECRETARY, STUDENT UNION"
    topRight.style.filter = "hue-rotate(200deg)"
    gear.style.filter = "hue-rotate(200deg)"
} 
else if(currentSlide==8){
    nameCostaa.textContent = "Divyam Chauhan";
    dept.textContent = "GUEST LECTURES AND PAPER PRESENTATIONS"
    topRight.style.filter = "hue-rotate(160deg)"
    gear.style.filter = "hue-rotate(170deg)"
} 
}