let arr = [0,1,2,3,4,5];
let arr2 = [];
let occurence = [];
for (var i = 0; i < arr.length; i++){
    if(!(arr[i] in arr2)){
        arr2.push(arr[i]);

    }
    else{
        occurence.push(arr[i]);
    }
}
if(occurence.length>0){
    console.log("Occurence found "+ occurence)
}
else{
    console.log("Occurence not found ");
}
