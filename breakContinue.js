// break continue in a for loop 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < nums.length; i++) {
    if(nums[i] > 3){
        break;
    }
    console.log(nums[i]);
}

const nums1 = [1, -2, 3, 4, -5, 6, 7, -8, 9];
for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] <0) {
        continue;
    }
    console.log(nums1[i]);
}

if ('false'){

    console.log("I am not false")

}

else{

    console.log("I am false")

}