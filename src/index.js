console.log("Start Here 😉");

const box = document.getElementById ("boxjs")
const boxdark = document.getElementById ("boxjs")
const light = document.getElementById ("light")
const dark = document.getElementById ("dark")
const crazy = document.getElementById ("crazy")

light.onclick = () => {
    box.classList.add("box")
    box.classList.remove("boxdark")
    box.classList.remove("crazy")
}

dark.onclick = () => {
    box.classList.add("boxdark")
    box.classList.remove("box")
    box.classList.remove("crazy")
}

crazy.onclick = () => {
    box.classList.add("crazy")
    box.classList.remove("boxdark")
    box.classList.remove("box")
}





