/*Write a program to find the product of 2 merged Array  ✅
A[] = {0,1,2,3,4,5}
B[] = {5,4,3,2,1,0}*/
let A = [0,1,2,3,4,5];
let B = [5,4,3,2,1,0];
product=1
for(let i=0; i<A.length; i++){
    product=product*A[i]*B[i];
}
console.log("Product of Merge Array is :",product)