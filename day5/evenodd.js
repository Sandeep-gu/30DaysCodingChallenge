/*Write a program to find even and odd no in a array ✅
Testcase 1 : 
A[] = {1,2,5,4,0}
B[] = {1,2,5,4,0}
Testcase 2:
A[] = {1,2,3,4,5}
B[] = {11, 22, 33 ,44}*/

let A = [1,2,3,4,5,0]
let even = []
let odd = []
for (let i = 0; i < A.length; i++) {
    if(A[i]%2==0){
        even.push(A[i]);
    }else{
        odd.push(A[i]);
    }
}
console.log("even data is "+ even);
console.log("odd data is "+ odd);