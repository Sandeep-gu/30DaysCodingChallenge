/*Sum of an array  merged array ✅
A[] = {0,1,2,3,4,5}
B[] = {5,4,3,2,1,0}*/
let A = [0,1,2,3,4,5];
let B = [5,4,3,2,1,0];
sum=0
for(let i=0; i<A.length; i++){
    sum+=A[i]+B[i];
}
console.log("Sum of Merge Array is :",sum)