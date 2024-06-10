const Moves = {
    "H": "Hit",
    "S": "Stand",
    "P": "Split",
    "D": "Double/Hit",
    "DS": "Double/Stand"
}

const Strategy = new Map()
Strategy.set("5-8",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(9,          ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(10,         ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(11,         ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(12,         ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(13,         ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(14,         ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(15,         ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(16,         ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("17-21",    ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,2",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,3",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,4",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,5",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,6",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,7",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,8",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,9",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,10",     ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("2,2",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("3,3",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("4,4",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("5,5",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("6,6",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("7,7",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("8,8",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("9,9",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("10,10",    ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,A",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])