//let arr = [0,1,2,3,4,5]
let arr = [5,4,3,2,1,0];
max=0
for (let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(max)