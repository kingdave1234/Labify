let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

let speed = 200;
counters.forEach((counter, index)=>{
    function UpdateCounter() {
        const targetNumber = counter.dataset.target;
        const initialNumber = counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
            counter.innerText = Math.ceil(initialNumber + incPerCount);
            setTimeout(UpdateCounter,40);
        }
    }
    UpdateCounter();
});