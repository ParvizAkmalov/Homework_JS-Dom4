const a = document.querySelector(".SoatBtnPlus")
const b = document.querySelector(".soatH1")
const d = document.querySelector(".SoatBtnMinus")
const e = document.querySelector(".MinutBtnPlus")
const f = document.querySelector(".MinutH1")
const g = document.querySelector(".MinutBtnMinus")
const h = document.querySelector(".SekundBtnPlus")
const i = document.querySelector(".SekundH1")
const j = document.querySelector(".SekundBtnMinus")

const btnStart = document.querySelector(".Start")
const btnStop = document.querySelector(".Stop")
const btnClear = document.querySelector(".Clear")



let interval;
btnStart.onclick = () => {
    interval = setInterval(() => {
        
        
        if (i.innerHTML == 0) {
            f.innerHTML--
            i.innerHTML = 59
        }else{
            i.innerHTML--
        }
        
        
    }, 100)
}


btnClear.onclick = () => {
    b.innerHTML = "00"
    f.innerHTML = "00"
    i.innerHTML = "00"
}
btnStop.onclick = () => {
    clearInterval(interval)
}

// soat
a.onclick = () => {
    b.innerHTML++
}
d.onclick = () => {
    if (b.innerHTML == 0) {
        b.innerHTML = 0
    }else{
        b.innerHTML--
    }
}
// soat oxiri


// minut
e.onclick = () => {
    f.innerHTML++
}
g.onclick = () => {
    if (f.innerHTML == 0) {
        f.innerHTML = 0
    }else{
        f.innerHTML--
    }
}
// minut oxiri


// Sekund
h.onclick = () => {
    i.innerHTML++
}
j.onclick = () => {
    if (i.innerHTML == 0) {
        i.innerHTML = 0
    }else{
        i.innerHTML--
    }
}
// Sekund oxiri

