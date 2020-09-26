const test = [1,2,3]

const impure = (values) => {
    for(let i in values) {
        values[i] += 1
    }
}

impure(test)

console.log(`test: ${test}`)



const test2 = [1,2,3]

const pure = (values) => {
    result = []
    for(let v of values){
        result.push(v + 1)
    }
    return result
}

const newArray = pure(test2)
console.log(`newArray: ${newArray}`)
console.log(`test2: ${test2}`)



const data = ['this', 'is', 'a', 'test']
console.log('some longer than 3:', data.some((x) => { return x.length > 3}))
console.log('all longer than 3:', data.every((x) => { return x.length > 3}))
console.log('those longer than 3: ', data.filter((x) => { return x.length > 3}))

const result2 = data
                .filter((x) => { return x.length > 3 })
                .every((x) => { return x[0] === 't' })
console.log(`all longer than 3 start with t: ${result2}`)

console.log('shortened', data.map((x) => { return x.slice(0, 2) }))


let acronym = ''
for(let value of data){
    acronym = acronym + value[0]
}
console.log(`acronym of ${data} is ${acronym}`)


const concatFirst = (accumulator, nextValue) => {
    return accumulator + nextValue[0]
}
let acronym2 = data.reduce(concatFirst, '')
console.log(`acronym of ${data} is ${acronym2}`)

acronymy2 = data.reduce((accum, next) => {
    return accum + next[0]
}, '')
console.log('all in one step:', acronym2)