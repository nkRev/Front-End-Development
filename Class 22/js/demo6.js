function print(data){
    document.getElementById('result').innerHTML = data
}

function addNumbers(a, b){
    let sum = a+b;
    return sum;
}
let result = addNumbers(20, 30);
let result2 = addNumbers(200, 300); //overwrites result 1

print(result)
print(result2)