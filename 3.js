
function greet() {
    console.log("Hello");
}

greet();
//parameterized function

function greet(name){
    console.log("hello" + name);

}
greet("avisha");

//addition of two numbers

function add(a,b){
    return a+b;

}
console.log(add(1999,20292));

//even or odd

function checkEvenOdd(num){

    if(num%2==0){
        return "even";
    }
    else {
        return "odd";
    }
    }
    console.log(checkEvenOdd(19));

    //calculate age

    function calculateAge(yearofBirth){
        return 2026 - yearofBirth;

    }
console.log(calculateAge(2007));

