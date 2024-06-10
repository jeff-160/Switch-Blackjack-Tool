const Cards = [..."A23456789", "10"]
let Container = null

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

function Display(){
    Container = document.getElementById("Container")

    const margin = 10,
        width = ~~(Container.clientWidth/Cards.length)-margin
    let height = ~~(Container.clientHeight/15)

    let bottom = 0

    for (let j=0;j<2;j++){
        const Name = CreateDiv(Container.clientWidth, 50, j ? "Dealer" : "You")
        Name.style.top = bottom+"px"
        Container.appendChild(Name)

        for (let k=0;k<2-(j!=0);k++){
            for (let i=0;i<Cards.length;i++){
                const body = CreateDiv(width, height, "0", "white"),
                    header = CreateDiv(width, height, Cards[i], "grey")
                body.style.top = `${height}px`
                body.id = "Count"
            
                const wrapper = CreateDiv(width, height*2)
                ;[wrapper.style.top, wrapper.style.left] = [`${(Name.clientTop+Name.clientHeight)*!k+bottom}px`, `${i*(width+margin)}px`]
                wrapper.style.border = "2px solid white"
                wrapper.classList.add("Card")
                wrapper.onmousedown = e => UpdateCard(e)
    
                wrapper.appendChild(header)
                wrapper.appendChild(body)
                Container.appendChild(wrapper)
            }
    
            const last = [...Container.childNodes].at(-1)
            bottom = parseInt(last.style.top, 0)+last.clientHeight+20
        }
    }
    
    height = ~~(Container.clientHeight-bottom)*2/3
    const box = CreateDiv(height*2, height, "-", "white")
    Container.appendChild(box)
    box.classList.add("Centered")
    box.id = "Move"
    box.style.top = `${Container.clientHeight-box.clientHeight}px`
}

function UpdateCard(event){
    if (![0, 2].includes(event.button))
        return

    const div = event.target.closest(".Card").querySelector("#Count"),
        count = parseInt(div.innerHTML, 0)+!(~~event.button)*2-1
    div.innerHTML = count*(count>=0)
}