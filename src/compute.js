const Player = [[], []], 
    Dealer = [[]]

function Switch(){

}

function GetMove(hand){
    if (hand.length<2)
        return hand.length ? "Insufficient player cards" : "Player cards not selected"
    if (!Dealer[0].length)
        return "Dealer card not selected"

    return Moves[
        Strategy.get(
            hand.includes("A") ? hand.sort().reverse().join(',') : hand[0]==hand[1] ? hand.join(",") : hand[0]+hand[1]
        )[(i => i=="A" ? 11 : i)(Dealer[0][0])-2]
    ]
}