const doubleInPlace = (val) => {
    return val.map((x) => { return x * 2 })
}

const vals = [1, 2, 3]
console.log(`vals after change: ${doubleInPlace(vals)}`)





data = [
    {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'NL'},
    {'date': '1977-7-16', 'sex': 'F', 'species': 'DM'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'PF'},
    {'date': '1977-7-16', 'sex': 'F', 'species': 'PE'},
    {'date': '1977-7-16', 'sex': 'M', 'species': 'DM'}
]


// newData = [
//     {'seq': 3, 'year': '1977', 'sex': 'F', 'species': 'DM'},
//     {'seq': 7, 'year': '1977', 'sex': 'F', 'species': 'PE'}
// ]
newData = data.filter((x) => { return x.sex == 'F' })
console.log(newData)