function print(data){
    document.getElementById('result').innerHTML = data
}
function addNumbers(a, b, missingPiece){
    let sum = a+b
    missingPiece(sum)
}

addNumbers(20, 30, print)
