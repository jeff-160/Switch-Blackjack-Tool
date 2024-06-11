const MEM = "GAMBLINGSHITLIMPEH"

window.onload = ()=> {
    localStorage.getItem(MEM) && Init()
}

function Init(){
    document.getElementById("Notice").style.display = "none"
    Display()
}

document.getElementById("Notice").querySelector("input[type=checkbox]").addEventListener("change", ()=> {
    localStorage.setItem(MEM, true)
    setTimeout(Init, 500)
})

document.addEventListener("keyup", e => {
    if (e.key==" ")
        localStorage.clear() || window.location.reload()
})