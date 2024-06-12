window.onload = ()=> localStorage.getItem(MEM) && Init()

function Init(){
    document.getElementById("Notice").style.display = "none"

    ;(i => [Player, Dealer, document.getElementById("SwitchToggle").checked] = [i.Player, i.Dealer, i.Switch])(JSON.parse(localStorage.getItem(MEM)))
    
    Display()
    
    for (const player of [Player, Dealer]){
        for (const hand of player){
            const divs = [...Container.getElementsByClassName("Card")].filter(i => i.Hand==hand)
            for (const face of new Set(hand))
                (div =>{
                    div.querySelector("#Count").innerHTML = hand.filter(i => i==face).length
                    DisplayHand(div)
                })(divs.find(i => i.querySelector("#Face").innerHTML==face))
        }
    }
}

document.getElementById("Notice").querySelector("input[type=checkbox]").addEventListener("change", ()=> Save() || setTimeout(Init, 500))
