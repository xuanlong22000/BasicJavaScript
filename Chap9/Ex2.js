//PREFER
var text = "'I'm the cook,' he said, 'it's my job.'";
var text = "'Long' he said, 'let's cooking'";
console.log(text.replace(/(^)'|(\W)'|'(\W)|'($)/g, "$1$2\"$3"));