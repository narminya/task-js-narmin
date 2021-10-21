//let n = 5;

function pyramid(n) {
    let s = "";
    for (let i = 0; i < n; i++)  // i=0,n=5
    {
        for (let k = 0; k < n - i; k++) {
            s += ' ';
        }
        for (let j = 0; j < i; j++) {
            s += `*`;
        }
        for (let j = 1; j < i; j++) {
            s += `*`;
        }
        s += `
`
    }

    for (let i = 0; i < n; i++) {
        for (let p = 0; p < i; p++) {
            s += ' ';
        }
        for (let o = 0; o < n - i; o++) {
            s += '*';
        }
        for (let o = 1; o < n - i; o++) {
            s += '*';
        }
        s += `
`
    }
    console.log(s)

}

//1

function arrBetween(f, l) {
    let array = [];
    for (let h = 9; h < 23; h++) {
        array[h] = h;

    } console.log(array.flat())

}

let sum = (a, b) => { return (a == b) ? (6 * a) : a + b }

2
// let a = parseInt(prompt("enter first number"));
// let b = parseInt(prompt("enter second number"))



let arr = [22, 55, 9, 14, 85, 1, 17, 63];

arr.push(15);

arr.shift();

arr.sort((a, b) => { return a - b });



arr.splice(3, 0, 43);

arr.forEach(e => { console.log(e) });

for (let i = 3; i < arr.length; i++) {
    console.log(arr[i])
}

arr.filter(x => x > 40).forEach(e => { console.log(e) });





