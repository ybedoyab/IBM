let prompt = require('prompt-sync')();
let fs = require('fs');
const { resolve } = require('path');

const methCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        let filename = prompt('Enter the filename: ');
        try {
            const data = fs.readFileSync(filename, {encoding: 'utf8', flag: 'r'});
            resolve(data);
        } catch (error) {
            reject(error);
        }
    }, 3000);
});

console.log(methCall);

methCall.then(
    (data) => console.log(data),
    (error) => console.log(`Error reading file`)
);