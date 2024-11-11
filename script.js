//========================duplicates======================================
function removeDuplicates(arr) {
    arr.sort((a, b) => a - b); 
    const uniqueArray = []; 
    for (let i = 0; i < arr.length; i++) {
        
        if (i === 0 || arr[i] !== arr[i - 1]) {
            uniqueArray.push(arr[i]); 
        }
    }
    return uniqueArray;
}
const arrayWithDuplicates = [3, 1, 2, 2, 4, 4, 5, 1];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


//====================================occurances==========================================

function count_occur(a){
    let c={};
    for(i of arr){
        if(c[i]){
            c[i]++
        }else{
            c[i]=1
        }
    }
    return c
}
let arr=[1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
console.log(count_occur(arr))