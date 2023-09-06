'use strict';
const modalEl = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const showBtn = document.querySelectorAll('.show-modal')
const hideBtn = document.querySelector('.close-modal')

// Adding an event handler in modal classes

// since it is nodeList we can loop through
for (let i = 0; i < showBtn.length; i++) {
        const element = showBtn[i];
        element.addEventListener('click', openModal)
}

function openModal(){
    modalEl.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
// Function for showing modal
function removeModal(){
    // add hidden modal class
    modalEl.classList.add('hidden')
    overlay.classList.add('hidden')
}
    // Event handlers
    hideBtn.addEventListener('click', removeModal)


    // Keyboard Events 

    document.addEventListener('keydown', escapeKeyEvent)

    // function for keydown handling

    function escapeKeyEvent(e){
            if (e.keyCode === 27){
                if (!modalEl.classList.contains('hidden')){
                    removeModal()
                }
            }
    }