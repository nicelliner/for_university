const string_array = ['Hello,', 'my', 'name','is','Denis!'];

let full_string = '';
for (let word in string_array) {
    full_string += string_array[word] + ' ';
}

console.log(full_string);
