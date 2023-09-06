/*Find first occurrence of key and return it's index ✅
key = 1
A[] = {0,1,2,3,4,5}
B[] = {5,4,3,2,1,0}*/

let A = [0,1,2,3,4,5]
key=1
for(let i=0; i<A.length; i++){
    if(A[i]==key){
        console.log(i);
        break;
    }
}
