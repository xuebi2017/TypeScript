function selectSort(a: number[]): number[] {
    for(let i=0; i<a.length-1; i++) {
        let minIndex = i;
        for(let j=i+1; j<a.length; j++) {
            if(a[j]<a[i]) {
                minIndex = j
            }
        }
        let temp = a[i];
        a[i] = a[minIndex];
        a[minIndex] = temp;
    }
    return a
}

let b = selectSort([5,4,3,2,1])
console.log(b)