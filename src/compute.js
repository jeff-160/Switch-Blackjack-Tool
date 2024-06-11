const Player = [[], []], 
    Dealer = [[]]

function GetMove(hand){
    if (hand.length<2)
        return hand.length ? "Insufficient player cards" : "Player cards not selected"
    if (Player.some(i => GetSum(i)>22))
        return "Player hand busted"
    if (!Dealer[0].length)
        return "Dealer card not selected"

    const up = (i => i=="A" ? 11 : i)(Dealer[0][0])

    return document.getElementById("Switch").querySelector("input[type=checkbox]").checked && Switch(up) ? "Switch" : Misc(hand, up)
}

function Misc(hand, up){
    let key

    if (hand.length==2 && hand.includes("A"))
        key = hand.sort().reverse().join(',')
    else if (hand.length==2 && hand[0]==hand[1])
        key = hand.join(",")
    else
        key = GetSum(hand)

    return Moves[MiscMoves.get(key)[up-2]]
}

function Switch(up){
    if (Player[0][1]==Player[1][1] || Player[0][0]==Player[1][0] || Player.some(i => CheckStrong(i)))
        return false
    
    let stronger = [...GetHigher()],
        weaker = [...Player.find(i => i.toString()!=stronger.toString())]
    ;[stronger[1], weaker[1]] = [weaker[1], stronger[1]]

    if ([7, 8].includes(up) && CheckStrong(weaker))
        return true
    if (![7, 8].includes(up) && CheckStrong(stronger))
        return true
    
    for (const hand of BackupHands){
        if (hand?.length){
            for (const j of MiscMoves.keys()){
                if (MiscMoves.get(j)[up-2]=="P" && [weaker, stronger].some(i => i.join(",")==j))
                    return true
            }
        }
        else {
            if ([weaker, stronger].some(i => GetSum(i)==hand))
                return true
        }
    }
    return false
}

function GetSum(hand){
    let aces = hand.filter(i => i=="A").length
    let sum = hand.map(i => i=="A" ? 11 : i).reduce((a, b) => a+b, 0)

    while (sum>21 && !(hand.length==2 && sum==22) && aces){
        sum-=10
        aces--
    }

    return sum
}

function CheckStrong(hand, up){
    for (const i of StrongHands){
        if (i[1]!=undefined && !i[1].includes(up))
            continue

        if ((i[0]?.length ? hand.join(",") : GetSum(hand))==i[0])
            return true
    }
    return false
}

function GetHigher() {
    const sums = Player.map(i => GetSum(i))
    if (sums.some(i => i==22))
        return Player[sums.indexOf(22)]

    if (sums[0]!=sums[1])
        return Player[sums.indexOf(Math.max(...sums))]

    const softs = Player.map(i => GetSum(i)<=21)
    return softs[0]==softs[1] ? Player[0] : Player[softs.indexOf(true)]
}