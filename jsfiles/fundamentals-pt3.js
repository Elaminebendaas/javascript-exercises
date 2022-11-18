function add7(number){
    return number + 7
}
function multiply(no1, no2){
    return no1 * no2
}
function capitalize(string){
    string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function lastletter(string){
    return string.charAt(string.length - 1)
}
console.log(capitalize("hello"))
console.log(lastletter("abcd"))