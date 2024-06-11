const Moves = {
    "H": "Hit",
    "S": "Stand",
    "P": "Split",
    "D": "Double if possible, else Hit",
    "DS": "Double if possible, else Stand"
}

const MiscMoves = new Map()
MiscMoves.set(5,          ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(6,          ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(7,          ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(8,          ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(9,          ['H', 'H', 'H', 'H', 'D', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(10,         ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H', 'H'])
MiscMoves.set(11,         ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H'])
MiscMoves.set(12,         ['H', 'H', 'H', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(13,         ['H', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(14,         ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(15,         ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(16,         ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set(17,         ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
MiscMoves.set(18,         ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
MiscMoves.set(19,         ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
MiscMoves.set(20,         ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
MiscMoves.set(21,         ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
MiscMoves.set("A,2",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set("A,3",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set("A,4",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set("A,5",      ['H', 'H', 'H', 'H', 'D', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set("A,6",      ['H', 'H', 'H', 'D', 'D', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set("A,7",      ['S', 'S', 'S','DS','DS', 'S', 'S', 'H', 'H', 'H'])
MiscMoves.set("A,8",      ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
MiscMoves.set("A,9",      ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
MiscMoves.set("A,10",     ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
MiscMoves.set("2,2",      ['H', 'H', 'H', 'P', 'P', 'P', 'H', 'H', 'H', 'H'])
MiscMoves.set("3,3",      ['H', 'H', 'H', 'P', 'P', 'P', 'H', 'H', 'H', 'H'])
MiscMoves.set("4,4",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set("5,5",      ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H', 'H'])
MiscMoves.set("6,6",      ['H', 'H', 'P', 'P', 'P', 'H', 'H', 'H', 'H', 'H'])
MiscMoves.set("7,7",      ['S', 'P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H'])
MiscMoves.set("8,8",      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'H', 'H'])
MiscMoves.set("9,9",      ['S', 'S', 'P', 'P', 'P', 'S', 'P', 'P', 'S', 'S'])
MiscMoves.set("10,10",    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
MiscMoves.set("A,A",      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'])

const StrongHands = [
    [21],
    [20],
    [19],
    ["A,A"],
    [11],
    [10],
    [9],
    [18],
    [8],
    ["8,8", [2, 3, 4, 5, 6, 7, 8]]
]

const BackupHands = [
    7, 17,
    "SPLIT",
    12,
    13,
]