/*Sum of an array  ✅
A[] = {0,1,2,3,4,5}
B[] = {5,4,3,2,1,0}*/ 
let A = [0,1,2,3,4,5];
let B = [5,4,3,2,1,0];
let Sum=[]
for(let i =0; i < A.length; i++){
    Sum.push(A[i]+B[i])
}
console.log(Sum)