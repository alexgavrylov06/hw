const timerForm = document.getElementById('timerForm');
const timerRestS = document.getElementById('timerRestS');
const timerRestM = document.getElementById('timerRestM');
const timerRestH = document.getElementById('timerRestH');

const stopBtn = document.getElementById('stop');
const continueBtn = document.getElementById('continue');
const resetBtn = document.getElementById('reset');



let isPaused = false



timerForm.addEventListener('submit', formHandler);

stopBtn.addEventListener('click', () => {
    isPaused = true
});

resetBtn.addEventListener('click', () => {
   
})

continueBtn.addEventListener('click', () => {
    isPaused = false
});

let intervalid;

function formHandler(e) {
    
    e.preventDefault()

    
    const intervalValue  = +document.getElementById('interval').value;
    let newInterval = intervalValue

    timerRestM.textContent = ''
    timerRestH.textContent = ''
    
    buildTimer(intervalValue)

    
    let hours = parseInt(timerRestH.textContent.replace(/\D+/g,""))
    let minutes = parseInt(timerRestM.textContent.replace(/\D+/g,""))
    let seconds =  parseInt(timerRestS.textContent.replace(/\D+/g,""))


    if (typeof intervalValue === 'number' && intervalValue > 0 && !isPaused) {

    intervalid = setInterval(() => {

        
        let hour = Math.floor(newInterval / 60 / 60)
        let min = Math.floor(newInterval / 60) - (hour * 60)
        let sec = newInterval % 60


        timerRestM.textContent = min + 'm|'
        timerRestS.textContent = sec + 's|'
        timerRestH.textContent = hour + 'h|'
        newInterval--


        if (newInterval < 0) clearInterval(intervalid)
    }, 1000)
    }   

    else if (typeof intervalValue === 'number' && intervalValue > 0 && isPaused) clearInterval(intervalid)
}


function buildTimer(intervalValue) {

   

    let s = Math.floor(intervalValue % 60);  
    let h = Math.floor(intervalValue / 60 / 60)
    let m = Math.floor(intervalValue / 60) - (h * 60);



    if (intervalValue > 0) {
        timerRestS.textContent = s + 's|'
    }

    if (m !== 0) {
        timerRestS.textContent = s + 's|'
        timerRestM.textContent = m + 'm|'

        timerRestM.style.display = 'block'
    }

    if (h !== 0) {

        timerRestS.textContent = s + 's|'
        timerRestM.textContent = m + 'm|'
        timerRestH.textContent = h + 'h|'

        timerRestM.style.display = 'block'
        timerRestH.style.display = 'block'

    }


}




