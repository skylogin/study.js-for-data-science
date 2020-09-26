class Delay{
    constructor(value){
        this.value = value
    }
    call(v){
        if(v !== null){
            let temp = this.value
            this.value = v
            return temp
        } else{
            return v
        }
    }
}

const example = new Delay('a')
for(let value of ['b', 'c', 'd']){
    console.log(value, '->', example.call(value))
}


console.log("########################")

class Filter{
    constructor(v1, v2, v3, v4, v5){
        this.arr = []
        this.arr.push(v1)
        this.arr.push(v2)
        this.arr.push(v3)
        this.arr.push(v4)
        this.arr.push(v5)
    }
    call(value){
        return (this.arr.some((x) => { return x===value }))? null: value
    }
}

const example2 = new Filter('a', 'e', 'i', 'o', 'u')
for(let value of ['a', 'b', 'c', 'd', 'e']){
    console.log(value, '->', example2.call(value))
}


console.log("########################")


class Pipeline{
    constructor(v1, v2){
        this.arr = []
        this.arr.push(v1)
        this.arr.push(v2)
    }

    call(value){
        return this.arr[1].call(this.arr[0].call(value))
    }
}

const example3 = new Pipeline(new Filter('a', 'e', 'i', 'o', 'u'), new Delay('a'))
for (let value of ['a' ,'b', 'c', 'd', 'e']) {
  console.log(value, '->', example3.call(value))
}