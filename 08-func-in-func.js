const func =(a) => (b) => {
    return a*b
}
const times = func(4)

console.log(times(3))