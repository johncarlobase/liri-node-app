var action = process.argv[2];


var value = process.argv.splice(3,process.argv.length).join(' ');
console.log(action);
console.log(value);