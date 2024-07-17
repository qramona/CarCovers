$(document).ready(function () {
    $('.burger-menu').click(function () {

        $('.header__menu-items').css('display', 'flex');
        $('.burger-menu').css('display', 'none');
        $('.close-logo').css('display', 'flex');
    })
    $('#close-logo').click(function () {
        $('#menu-items').css('display', 'none');
        $('#close-logo').css('display', 'none');
        $('#burger-menu').css('display', 'flex');
    })
});

let swiper = new Swiper(".mySwiper", {
breakpoints:{
    0:{
        slidesPerView: 1,
    },
    576:{
        slidesPerView: 2,
    },
    992:{
        slidesPerView: 3,
    }
},
    spaceBetween: 30,
    loop: true,
    drag:true,
    pagination: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//

const carSelections = document.querySelectorAll('.car-selection');
let selectedElement = null; // Track the currently selected element

carSelections.forEach(carSelection => {
    carSelection.addEventListener('click', function() {
        // Deselect any previously selected element
        const selectedElement = document.querySelector('.car-selection.selected');
        if (selectedElement) {
            selectedElement.classList.remove('selected');
            // WrapperSelected.classList.remove('selected');
        }
        // Toggle the 'selected' class for the clicked element
        this.classList.toggle('selected');
    });
});
//
// let FAQBtn = document.querySelector(".FAQ__btn");
// let AnswerWrapper = document.querySelector(".answer__wrapper");
// $('.FAQ__btn').click(function () {
//     this.style.transform = this.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
// });


const FAQButtons = document.querySelectorAll('.FAQ__btn');

FAQButtons.forEach(button => {

    button.addEventListener('click', function () {
        // Find the nearest parent with the class "question-answer__wrapper"
            this.style.transform = this.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
        const questionAnswerWrapper = this.closest('.question-answer__wrapper');

        // Find the answer__wrapper within the question-answer__wrapper
        const answerWrapper = questionAnswerWrapper.querySelector('.answer__wrapper');

        if (answerWrapper) {
            if (answerWrapper.style.display === 'none' || answerWrapper.style.display === '') {
                answerWrapper.style.display = 'flex';
            } else {
                answerWrapper.style.display = 'none';
            }
        }
    });
});



//
