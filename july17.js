//Write a JavaScript function that accepts a string as a parameter and returns an object with count of repeated characters. Ex: i/p string =”aabcbdd”, O/P: { a:2, b:2, c:1, d:2 }
stringPara("aabcbddd");

function stringPara(str) {
    var obj1 = {};

    var sum = 1;
    var sum1 = 1;
    for (var i = 0; i < str.length; i++) {

        if (obj1[str[i]]) {


            obj1[str[i]] = obj1[str[i]] + 1;

        }
        else {
            obj1[str[i]] = 1;
        }

    }
    console.log(obj1);
}

//Write a JavaScript function that accepts a number as a parameter and check the number is Armstrong or not? And the function should be return true or false? Armstrong: the sum of cubes of each digit is equal to the number itself. Example: 153 is an Armstrong number because 153 = 1*1*1 + 5*5*5 + 3*3*3; i/p:153, o/p: true, and i/p: 185, o/p: false
var num = 371;
var sum = 0;

var st = num.toString();


for (var i = 0; i < st.length; i++) {
    var sum = sum + (parseInt(st[i]) * parseInt(st[i]) * parseInt(st[i]));

}
console.log(sum);
if (sum == num) {
    console.log(num, "is an Armstrong number");
}
else {
    console.log(num, "is not an Armstrong number");
}
//Write a JavaScript function that accepts a string as a parameter and function should returns a reversed string as output (without using predefined methods) Example: i/p- abcd, o/p- dcba
var inp = 'abcd';
var oup = '';
for (var i = inp.length - 1; i >= 0; i--) {

    oup = oup + inp[i];
}

console.log(oup);
//Write a JavaScript function that accepts a number as a parameter and check the number is palindrome or not?And the function should be return true or false? Palindrome: If the reverse of given number is equal to the original number. Example: i/p:1001, o/p: true and i/p: 1002, o/p:false
console.log(palindrom(1002));
function palindrom(num) {
    var st = num.toString();
    var oup = '';

    for (var i = st.length - 1; i >= 0; i--) {
        oup = oup + st[i];
    }
    console.log(oup);
    if (oup == num) {
        return true;
    }
    else {

        return false;
    }
}
//Write a JavaScript function that accepts array as a parameter and returns an Array with sum of all positive values and sum of all negative values. Example: i/p Array: [1, 2,-3, 7,-5,-4, 8], o/p: [18, -12]
var num = [1, 2, -3, 7, -5, -4, 8]
console.log(arypara(num));

function arypara(num1) {
    var result = new Array();
    var oup = 0;
    var oup1 = 0;


    for (var i = 0; i < num1.length; i++) {

        if (num1[i] > 0) {

            oup = oup + num1[i];
        }
        else {
            oup1 = oup1 + num1[i];
        }

    }
    result = [oup, oup1];

    return result;
}