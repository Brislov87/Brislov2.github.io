//*Nedräkning till examen

const timeLeft = document.getElementById('examen')

const examen = new Date('06/09/2024')
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24 //
let timerId



function countDown(){
    const today = new Date()
    const timeSpan = examen - today



const days = Math.floor(timeSpan / day)
const hours = Math.floor((timeSpan % day) / hour)
const minutes = Math.floor((timeSpan % hour) / minute)
const seconds = Math.floor((timeSpan % minute) / second)

timeLeft.innerHTML = days + 'days ' +  hours + 'hours ' + minutes + 'min ' + seconds + 'seconds '
}

timerId = setInterval(countDown, second)
console.log(examen)



//*Välkommen till min hemsida

const text = document.querySelector('.hemsida');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++){
    text.innerHTML +="<span>"+splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
    }
    function complete(){
        clearInterval(timer);
        timer = null;

    }


console.log(splitText);