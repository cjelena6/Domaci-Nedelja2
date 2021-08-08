// Nacrtati dijamant kao na primeru:

//      *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *

let N = 9
let polovinaN = Math.ceil(N / 2)
let red = ''
for (let i = 1; i <= polovinaN; i++) {
    for (let j = polovinaN; j > i; j--) {
        red += ' '
    }

    for (let a = 0; a < i * 2 - 1; a++) {
        red += '*'
    }
    red += '\n'
}
for (let i = 1; i <= polovinaN - 1; i++) {
    for (let j = 0; j < i; j++) {
        red += ' '
    }
    for (let a = (polovinaN - i) * 2 - 1; a > 0; a--) {
        red += '*'
    }
    red += '\n'
}
console.log(red);
