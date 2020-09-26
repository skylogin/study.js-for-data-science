const creature = {
    'order': 'Primates',
    'family': 'Callitrichidae',
    'genus': 'Callithrix',
    'species': 'Jacchus'
}

console.log(`creature is ${creature}`)
console.log(`creature.genus is ${creature.genus}`)
for(let key in creature){
    console.log(`creature[${key}] is ${creature[key]}`)
}

const creature2 = {
    order: 'Primates',
    family: 'Callitrichidae',
    genus: 'Callithrix',
    species: 'Jacchus'
}

console.log(JSON.stringify(creature2))