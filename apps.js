const btn = document.getElementsByClassName("workouts-btn");
const selectOne = document.querySelector("#hero-selection-item-one")
const prgmOne = document.querySelector(".summer-shred-program");
const wrkItemHeader = document.getElementsByClassName('workout-item-header');
const wrkContainer = document.getElementsByClassName('workouts-container');
const wrkoutItem = document.getElementsByClassName('workout-item');

let i;

// const btnClick = () => {
//     this.classList.toggle("btn-active");
// }

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        this.classList.toggle('active');
    } );
}

// display summer shred day plan, althought we're not using this anymore. 

function displaySummer() {
    prgmOne.classList.toggle("active");
}

selectOne.onclick = displaySummer;

// display individual Day workout plan

for (i = 0; i < wrkItemHeader.length; i++) {
    wrkItemHeader[i].addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('active');
        // you're inside this element, maybe thats why you can't reference elements outside of this element by name. You can reference outside elements using built in functions like nextElementSibling.
    } );
}
// for (i = 0; i < wrkoutItem.length; i++) {
//     wrkoutItem[i].addEventListener('click', function() {
//         this.classList.add('active');
//     } );
// }



// function displayDay() {
//     for (i = 0; i < wrkContainer; i++) {
//         wrkContainer[i].classList.toggle('active');
//     }
// }

// for (i = 0; i < wrkItemHeader.length; i++) {
//     wrkItemHeader[i].addEventListener('mousedown', displayDay);
// }

// wrkItemHeader.onclick = displayDay;

// selectOne.addEventListener("click", function() {
//     prgrmOne.classList.toggle('active');
// })



console.log(wrkItemHeader.length);
console.log(wrkContainer.length);
// console.log(btn[i].addEventListener('click', btnClick));
// console.log(btn.classList.contains("btn-active"))