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


function zero(a) {
    if (n <= 9) {
        return (i.innerHTML = `0${n}`)
    }else{
        return(i.innerHTML = n)
    }
}



let interval;
btnStart.onclick = () => {
    interval = setInterval(() => {
        
        
        if (i.innerHTML > 0) {
            i.innerHTML--
        }else if (f.innerHTML > 0) {
            f.innerHTML--
            i.innerHTML = 59
        }else if (b.innerHTML > 0) {
            b.innerHTML--
            f.innerHTML = 59
            i.innerHTML = 59
        }
        if (i.innerHTML <= 9) {
            i.innerHTML =  `0${i.innerHTML++}`
        }
        if (f.innerHTML <= 9) {
            f.innerHTML =  `0${f.innerHTML++}`
        }
        if (b.innerHTML <= 9) {
            b.innerHTML =  `0${b.innerHTML++}`
        }

        btnStart.disabled = true
        btnStop.disabled = false

        a.disabled = true
        d.disabled = true
        e.disabled = true
        g.disabled = true
        h.disabled = true
        j.disabled = true
        
    }, 1000)
}

btnClear.onclick = () => {
    b.innerHTML = "00"
    f.innerHTML = "00"
    i.innerHTML = "00"
}
btnStop.onclick = () => {
    clearInterval(interval)
    btnStop.disabled = true
    btnStart.disabled = false

    a.disabled = false
        d.disabled = false
        e.disabled = false
        g.disabled = false
        h.disabled = false
        j.disabled = false
}

// soat
a.onclick = () => {
    b.innerHTML++

    if (b.innerHTML <= 9) {
        b.innerHTML =  `0${b.innerHTML++}`
    }
}
d.onclick = () => {
    if (b.innerHTML == 0) {
        b.innerHTML = 0
    }else{
        b.innerHTML--
    }

    if (b.innerHTML <= 0) {
        b.innerHTML = `0${b.innerHTML--}`
    }
}
// soat oxiri


// minut
e.onclick = () => {
    f.innerHTML++
    if (f.innerHTML > 59) {
        f.innerHTML = 0
        b.innerHTML++
    }

    if (f.innerHTML <= 9) {
        f.innerHTML =  `0${f.innerHTML++}`
    }
}
g.onclick = () => {
    if (f.innerHTML == 0) {
        f.innerHTML = 0
    }else{
        f.innerHTML--
    }

    if (f.innerHTML <= 0) {
        f.innerHTML = `0${f.innerHTML--}`
    }
}
// minut oxiri


// Sekund
h.onclick = () => {
    i.innerHTML++
    if (i.innerHTML > 59) {
        i.innerHTML = 0
        f.innerHTML++
    }

    if (i.innerHTML <= 9) {
        i.innerHTML =  `0${i.innerHTML++}`
    }

}
j.onclick = () => {
    if (i.innerHTML == 0) {
        i.innerHTML = 0
    }else{
        i.innerHTML--
    }

    if (i.innerHTML <= 0) {
        i.innerHTML = `0${i.innerHTML--}`
    }
}
// Sekund oxiri

