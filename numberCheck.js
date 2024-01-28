/**************Positive, Negative, or Zero:**************/

let num = prompt("Enter a Positive Or Negative Number:");

if (!isNaN(num)){
    if (num > 0) {
        document.write(`${num} is a positive number.`);
    }
    else if (num < 0){
        document.write(`${num} is a negative number.`);
    }
    else{
        document.write(`${num} is zero.`);
    }
}
else{
    document.write("Invalid input. Please enter a valid number.");
}
