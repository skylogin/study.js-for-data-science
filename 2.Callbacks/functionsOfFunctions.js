const doTwice = (action) => {
    action()
    action()
}

const hello = () => {
    console.log('hello')
}

doTwice(hello)




const pipeline = (initial, first, second) => {
    return second(first(initial))
}

const trim = (text) => { return text.trim() }
const dot = (text) => { return text.replace(/ /g, '.') }

const original = '  this example uses text  '

const trimThenDot = pipeline(original, trim, dot)
console.log(`trim then dot: |${trimThenDot}|`)

const dotThenTrim = pipeline(original, dot, trim)
console.log(`dot then trim: |${dotThenTrim}|`)



const pipeline2 = (initial, operations) => {
    let current = initial
    for(let op of operations){
        current = op(current)
    }
    return current
}

const pipeline3 = (current, operations) => {
    for(let op of operations){
        current = op(current)
    }
    return current
}

const double = (text) => { return text + text }

const original2 = ' some text '
const final = pipeline3(original2, [double, trim, dot])
console.log(`|${original2}| -> |${final}|`)