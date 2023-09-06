/*Find common elements in an array ✅*/
let A = [0,1,2,3,4,5]
let B = [5,4,3,1,0]
let C=[]
for(let i = 0; i < A.length; i++){
    for(let j = 0; j < B.length; j++){
        if(A[i]===B[j]){
            C.push(B[j])
        }
    }
}
console.log(C)
