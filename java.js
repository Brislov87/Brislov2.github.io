//*Nedräkning till examen

    const timeLeft = document.getElementById('examen')
    const examen = new Date('06/09/2024')

//* Förklaring för hur tiden ska räknas ut i millisekunder
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24 //
    let timerId


//* Här blir det nedräkning av mellanskillnaden i tid mellan today och examensdatumet som är satt
function countDown(){
    const today = new Date()
    const timeSpan = examen - today

//* Här kommer de som syns som nedräkning, mathfloor ser till att de inte blir massa decimaler, timespan hämtas från const tiemspan som är examen-idag
    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

timeLeft.innerHTML = days + 'days ' +  hours + 'hours ' + minutes + 'min ' + seconds + 'seconds '
}

timerId = setInterval(countDown, second)
    console.log(examen)



//*Välkommen till min portfolio

//* Här hämtas texten upp från html samt att bokstäverna delas upp som "egna"
    const text = document.querySelector('.portfolio');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

for(let i=0; i < splitText.length; i++){
    text.innerHTML +="<span>"+splitText[i] + "</span>";
}

//* Intervall
    let char = 0;
    let timer = setInterval(onTick, 50);

//* Kopplar ihop med spankoden och gör att den går från bokstav till bokstav
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
    }
    //* Stoppar intervallen
function complete(){
    clearInterval(timer);
    timer = null;
    }

console.log(splitText);
