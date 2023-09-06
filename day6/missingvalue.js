//Find missing no in array  ✅
let A = [0,1,2,6,4,5]
let B = [5,4,3,2,9,0]
let missing = []
for(let i =0; i <A.length; i++) {
    flag=0
    for(let j =0; j <B.length; j++) {
        if(A[i]===B[j]) {
            flag=1
        }

    }
    if(flag==0){
        missing.push(A[i])
    }
}
console.log(missing)
