const MEM = "GAMBLINGSHITLIMPEH"

const Save = ()=> 
    localStorage.setItem(
        MEM, 
        JSON.stringify({
            "Player": Player, 
            "Dealer": Dealer, 
            "Switch": document.getElementById("SwitchToggle").checked
        })
    )   