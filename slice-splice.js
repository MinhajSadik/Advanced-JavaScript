

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(2, 4);
const removed = nums.splice(3, 4);
console.log(removed);
console.log(part);

const together = nums.join(' ');
console.log(together);