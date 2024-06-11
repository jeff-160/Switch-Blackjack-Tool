const Player = [[], []], 
    Dealer = [[]]

// cindy liu
function Switch(){

}

function GetMove(hand){
    let up = Dealer[0][0]
    if (up=="A")
        up = 11

    return Moves[
        Strategy.get(
            hand.includes("A") ? hand.sort().reverse().join(',') : hand[0]==hand[1] ? hand.join(",") : hand[0]+hand[1]
        )[up-2]
    ]
}