
function stopWatch() {
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();result
console.log(clock1()); 1
console.log(clock1()); 2
console.log(clock1()); 3
console.log(clock1()); 4

const clock2 = stopWatch();
console.log(clock2()); 1
console.log(clock2()); 2
console.log(clock2()); 3
console.log(clock1()); 5
console.log(clock1()); 6



/*closer: hocce akta function er bitor teke jodi aro ekta function ke call kora hoy
tahole tara nijeder bitore ekta close environment create kore and jokon function ta
kuno kisu return or call kora hobe tokon tader nijosso ekekta value take and oi value 
ta return kore.
*/