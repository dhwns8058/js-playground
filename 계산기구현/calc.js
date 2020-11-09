var input = {'array' : []};

input.getInput = function() {
    return this.array.join("");
}

var output = {};
output.text = document.getElementById("output");

var clickNumbers = function(event){
    var str = event.target.innerHTML;

    // 공백 문자열 넣기 (if)
    if( str === "D"){
        input.array.pop();
    } else if (str === "+" || str === "-" || str === "*" || str === "/" ){
        input.array.push(' ' + str + ' ')
    } else (
        input.array.push(str)
    )
    /* 공백 문자열 넣기(switch)
    switch(str){
        case 'D':
        input.array.pop();
        break;
        case '+':
        case '-':
        case '*':
        case '/':
        input.array.push(' ' + str + ' ')
        break;
        default :
        input.array.push(str);
    }*/

    // input.array 비어있을 때 
    if (input.array.length == 0){
    output.text.innerHTML = "Empty";
    } else{
    output.text.innerHTML = input.getInput();
    }
}

var showResult = function() {

}