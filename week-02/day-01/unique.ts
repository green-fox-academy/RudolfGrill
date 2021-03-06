export { }

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
//  Example
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`



let list: any = [1, 11, 34, 11, 52, 61, 1, , 34, 34];

function unique(array): any {
    let newArray: number[] = [];
    array.forEach(function (arrayElem) {
        if (!newArray.some(function (newArrayElem) {
            return arrayElem == newArrayElem;
        })) {
            newArray.push(arrayElem);
        }
    })
    return newArray;
};
console.log(unique(list));
