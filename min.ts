
function min(a: number, b: number): number {
    var sub = a - b;
    if(sub>0) {
        return b;
    }else {
        return a;
    }
}

let a = 1, b = 2;
console.log(min(a, b))