let boxLinks = document.querySelectorAll(".boxlink .box_page")

// Current steps
let currentSteps = 0

boxLinks.forEach((li , numIndex) => {
    li.addEventListener("click", (e) => {
        currentSteps = numIndex
        console.log(numIndex)
        boxLinks.forEach((li) => {
            li.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})

let FirstPagination = document.getElementById("FirstPagination")
let LastPagination = document.getElementById("LastPagination")
let prevButt = document.getElementById("prevButt")
let nextButt = document.getElementById("nextButt")
let startBtn = document.getElementById("startBtn")
let endBtn = document.getElementById("endBtn")
let prevNext = document.querySelectorAll(".prevNext")

prevNext.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id == "prevButt") {
            if (currentSteps > 0) {
                currentSteps--
                boxLinks.forEach((li) => {
                    li.classList.remove("active")
                })
                boxLinks[currentSteps].classList.add("active")
            }
        } else if (btn.id == "NextButt") {
            if (currentSteps < 3) {
                currentSteps++
                boxLinks.forEach((li) => {
                    li.classList.remove("active")
                })
                boxLinks[currentSteps].classList.add("active")
            }
        }
    })
    boxLinks.forEach((li) => {
        boxLinks[currentSteps].classList.add("active")
    })

})
endBtn.addEventListener("click", () => {
    if (currentSteps < 3) {
        currentSteps = 3
    }
    boxLinks.forEach((li) => {
        li.classList.remove("active")
    })
    boxLinks[currentSteps].classList.add("active")
})
startBtn.addEventListener("click", () => {
    if (currentSteps > 0) {
        currentSteps = 0
    }
    boxLinks.forEach((li) => {
        li.classList.remove("active")
    })
    boxLinks[currentSteps].classList.add("active")
})

// // activeButt 
// if (currentSteps = 0) {
//     startBtn.classList.add("activeButt")
//     prevButt.classList.add("activeButt")
// } else if (currentSteps = 3) {
//     endBtn.classList.add("activeButt")
//     nextButt.classList.add("activeButt")
// }
