/*Find the element that appears once in sorted array ✅
Testcase 1 : 
A[] = {1,1,3,3,3,0}
Testcase 2:
A[] = {1,2,2,2,2,2,2}*/
function search(arr, n)
{
    let ans = -1;
    for (let i = 0; i < n; i += 2) {
        if (arr[i] != arr[i + 1]) {
            ans = arr[i];
            break;
        }
    }
 
    if (arr[n - 2] != arr[n - 1])
            ans = arr[n-1];
    return ans
}
let arr = [1,2,2,3,3,3,3];
let len = arr.length;
console.log(search(arr, len));


