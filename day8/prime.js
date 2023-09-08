/*Write a program to find Prime in an array ✅
Testcase 1 : 
A[] = {1,2,5,4,0}
Testcase 2:
A[] = {1,2,3,4,5}*/
let A = [1,2,3,4,5];
let isprime=true;
let prime=[];
for (let i = 0; i < A.length; i++){
    if (A[i] > 1) {
    for (let j = 2; j < A[i]; j++) {
        if (A[i] % j == 0) {
            isprime=false;
            break;
        }
    }
    if(isprime) {
        prime.push(A[i]);
        continue;
    }
    else{
        
        isprime = true
    }
}
}
console.log("Prime no are : ",prime)