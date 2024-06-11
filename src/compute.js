const Player = [[], []], 
    Dealer = [[]]

function Switch(){

}

function GetMove(hand){
    if (hand.length<2)
        return hand.length ? "Insufficient player cards" : "Player cards not selected"
    if (!Dealer[0].length)
        return "Dealer card not selected"

    let up = Dealer[0][0]
    if (up=="A")
        up = 11

    return Moves[
        Strategy.get(
            hand.includes("A") ? hand.sort().reverse().join(',') : hand[0]==hand[1] ? hand.join(",") : hand[0]+hand[1]
        )[up-2]
    ]
}