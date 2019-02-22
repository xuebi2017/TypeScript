#!/usr/bin/env ts-node

class Person {
    public children: Person[] = []
    constructor(public name: string) {

    }
    addChild(child: Person): void {
        this.children.push(child);
    }
    introduceFamily(n?: number): void {
        // if(!n) n = 0;
        n = n || 0;
        let preFix = createPrefix(n)
        console.log(preFix + this.name)
        this.children.forEach(child => {
            child.introduceFamily(n+1);
        })
    }
    // sayHi() {
    //     console.log(`大家好，我是${this.name}`)
    // }
}

function createPrefix(n: number): string{
    return '----'.repeat(n)
}

let grandPa = new Person('王天霸')
let child1 = new Person('王子1')
let child2 = new Person('王子2')
let person11 = new Person('王茂')
let person12 = new Person('王水')
child1.addChild(person11)
child1.addChild(person12)

grandPa.addChild(child1)
grandPa.addChild(child2)
grandPa.introduceFamily()
// a.sayHi()

