
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);

}
console.log(output);


function square(element) {
    return element * element;
}

const square = element => element * element; 
//arrow function
const multiply = numbers.map(x => x * x);
//arrow function
const square1 = x => x * x;


numbers.map(function(element, index, array){// map also return an array
    console.log(element, index, array);
})

const result = numbers.map(function(element){  
    return element * element;
})
console.log(result);

const bigger = numbers.filter(x => x < 5); // filter also return an array 
//and when didn't find any array result filter also return empty array
console.log(bigger);

const isThere = numbers.find(x => x > 5); // find also return an upper one element 
console.log(isThere);