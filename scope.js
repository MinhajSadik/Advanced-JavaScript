// scope, block scope, access outer scope variable//

// hoistiog hocce => uporer lavel a niye jawake hoistiog bole
// var = when declear var this variable value is hoist of upper
//and available of anywher fuction or anything are same

// var = hole scope er bitore and baire sob jaygay use and call kora jabe
// const and let = hole scope er bitore use and call kora jabe scope er baire jabe na 

let bonus = 20; // if any variable is out of function this variable is global

function sum(first, second) {
    let result = first + second + bonus;
    console.log(result); // when variable inside function and also access to inside function
    if(result > 9){ // if block and let const isn't find out of if block
        const mood = "happy";
        let moood = 'sad';
        var mod = 'sadnees';
        mod = 'sad';
        console.log(mood);
    }
    console.log(mod);
    console.log(mod);
    return result;
}

const output = sum(3,7);
console.log(output);
console.log(bonus);