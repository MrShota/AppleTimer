const btnStart = document.getElementById('btnStart')
const btnLap = document.getElementById('btnLap')
btnStart.innerText = 'Start'
btnLap.innerHTML = 'Lap'
let outerStart = document.getElementById('outerStart')
let outerLap = document.getElementById('outerLap')


btnStart.addEventListener('click', start)
btnLap.addEventListener('click', lap)

const mSec = document.getElementById('mSec')
mSec.innerText = '00'
const sec = document.getElementById('sec')
sec.innerText = '00'
const minute = document.getElementById('minute')
minute.innerText = '00'

let ms = 1;
let s = 1;
let m = 1;
let mSecondsTimer = '';
let counter = 1;



function start() {
    btnLap.removeAttribute('disabled', 'false')
    btnLap.style.color = 'white'
    btnLap.style.backgroundColor='rgb(111, 110, 110)'
    if (mSec.innerText === '00') {
        mSecondsTimer = setInterval(seconds, 10)
        function seconds() {
            mSec.innerText = ms++
            if (ms === 90) {
                ms = 0
                mSec.innerText = ms++
                sec.innerText = s++
            }
            else if (s == 60) {
                s = 0
                sec.innerText = s++
                minute.innerText = m++
            }
        }
    }
    btnStart.removeAttribute('id')
    btnStart.innerText = 'Stop'
    btnStart.classList.add('btnStop')
    outerStart.removeAttribute('id')
    outerStart.classList.add('outerStop')
    outerLap.removeAttribute('id')
    outerLap.classList.add('outerLap')

    const btnStop = document.getElementsByClassName('btnStop')[0]
    // btnStop.addEventListener('click', stops)
    btnStop.addEventListener('click', () => {
        clearInterval(mSecondsTimer)
        btnStart.innerText = 'Start'
        btnStart.setAttribute('id', 'btnStart')
        setInterval(mSecondsTimer)
        outerStart.setAttribute('id', 'outerStart')



        outerLap.removeAttribute('id')
        outerLap.classList.add('outerLap')
        btnLap.innerText = 'Reset'
        btnLap.classList.add('resetBtn')
        const resetBtn = document.getElementsByClassName('resetBtn')[0]
        resetBtn.addEventListener('click', resetDisplay)
    })


}
// function stops() {
//     clearInterval(mSecondsTimer)
//     btnStart.innerText = 'Start'
//     btnStart.setAttribute('id', 'btnStart')

//     btnLap.innerText = 'Reset'
//     btnLap.classList.add('resetBtn')
//     const resetBtn = document.getElementsByClassName('resetBtn')[0]
//     resetBtn.addEventListener('click', resetDisplay)
//     mSecondsTimer
// }
function lap() {
    const info = document.getElementById('info')
    const mSecondsInfo = document.createElement('div')
    mSecondsInfo.innerText = mSec.innerText
    const secondsInfo = document.createElement('div')
    secondsInfo.innerText = sec.innerText
    const minutesInfo = document.createElement('div')
    minutesInfo.innerText = minute.innerText

    const lapText = document.createElement('div')
    lapText.innerText = 'lap ' + counter++
    lapText.classList.add('lapText')

    const lapInfo = document.createElement('div')
    lapInfo.classList.add('lapInfo')
    lapInfo.append(minutesInfo, secondsInfo, mSecondsInfo)

    const lap = document.createElement('div')
    lap.classList.add('lap')
    lap.append(lapText, lapInfo)
    info.prepend(lap)

    console.log(minutesInfo.textContent + ':' + secondsInfo.textContent + ',' + mSecondsInfo.textContent)
}
function resetDisplay() {
    mSec.innerText = '00'
    sec.innerText = '00'
    minute.innerText = '00'
    info.innerText = ''
    btnStart.innerText === 'start'
}
