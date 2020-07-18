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

var inp = 'abcd';
var oup = '';
for (var i = inp.length - 1; i >= 0; i--) {

    oup = oup + inp[i];
}

console.log(oup);

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