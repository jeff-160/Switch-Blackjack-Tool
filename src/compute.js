let Player = [[], []], 
    Dealer = [[]]

function GetMove(hand){
    if (hand.length<2)
        return hand.length ? "Insufficient player cards" : "Player cards not selected"
    if (Player.some(i => GetSum(i)>21))
        return "Player hand busted"
    if (!Dealer[0].length)
        return "Dealer card not selected"

    const up = (i => i=="A" ? 11 : i)(Dealer[0][0])

    return document.getElementById("SwitchToggle").checked && Player.every(i => i.length==2) && Switch(up) ? "Switch" : Misc(hand, up)
}

const Misc = (hand, up) => Moves[GetEntry(MiscMoves, hand, up)]

function Switch(up){
    const original = structuredClone(Player),
        switched = structuredClone(original)
    ;[switched[0][1], switched[1][1]] = [switched[1][1], switched[0][1]]

    return (i => i[0]<i[1])([original, switched].map(i => i.map(j => GetEntry(SwitchValues, j, up, i==switched)).reduce((a, b) => a+b, 0)))
}

function GetEntry(map, hand, col, switched=false){
    if (map==SwitchValues && hand.sort().toString()==[10, 'A'].toString())
        hand = [10, 11]
    
    let key
    if (hand.length==2 && hand.includes("A"))
        key = hand.sort().reverse().join(',')
    else if (hand.length==2 && hand[0]==hand[1])
        key = hand.join(",")
    else
        key = (i => i+"s".repeat(switched && i==21))(GetSum(hand))

    return map.get(+key || key)[col-2]
}

function GetSum(hand){
    let aces = hand.filter(i => i=="A").length,
        sum = hand.map(i => i=="A" ? 11 : i).reduce((a, b) => a+b, 0)

    while (sum>21 && aces){
        sum-=10
        aces--
    }

    return sum
}