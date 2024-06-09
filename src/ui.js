const Cards = [..."A23456789", "10", ..."JQK"]
let Container
const Scale = 0.2

function CreateDiv(width, height, text="", background="none"){
    const div = document.createElement("div")
    div.style.position = "absolute"
    div.style.overflow = "hidden"
    div.style.top = div.style.left = 0
    ;[div.style.width, div.style.height] = [width, height].map(i => `${~~i}px`)
    div.style.background = background
    div.innerHTML = text
    
    return div
}

function CreateUI(){
    Container = document.getElementById("Container")

    const margin = 10
    const width = ~~(Container.clientWidth/Cards.length)-margin

    for (let i=0;i<Cards.length;i++){
        const height = Container.clientHeight/9
    
        const body = CreateDiv(width, height, "0", "white"),
            header = CreateDiv(width, height, Cards[i], "grey")
        body.style.top = `${height}px`
    
        const wrapper = CreateDiv(width, height*2)
        ;[wrapper.style.top, wrapper.style.left] = [0, `${i*(width+margin)}px`]
        wrapper.style.border = "2px solid white"
        wrapper.classList.add("Card")
        wrapper.appendChild(header)
        wrapper.appendChild(body)

        Container.appendChild(wrapper)
    }
}