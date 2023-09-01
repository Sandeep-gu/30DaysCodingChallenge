let str = 'String';
let len = str.length;
let str_reverse = '';
for (let i = len-1; i >= 0; i--) {
    str_reverse = str_reverse+str[i];
}
console.log(str_reverse);