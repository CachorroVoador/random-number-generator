const fs = require('fs');
const filePath = 'numbers.json';
const maxNumber = 200;

const writeFile = (data) => {
    data = JSON.stringify(data);
    fs.writeFile(filePath, data, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

if(!fs.existsSync(filePath)){
    writeFile([]);
}
fs.readFile(filePath, 'utf8', function readFileCallback(err, data){
    if (err){
        throw err;
    }
    let alreadyNumbers = JSON.parse(data); //now it an object
    if(alreadyNumbers.length == maxNumber) return;
    let randomValue = generateRandomNumber();
    while(alreadyNumbers.includes(randomValue)){
        randomValue = generateRandomNumber();
    }
    alreadyNumbers.push(randomValue);
    writeFile(alreadyNumbers);
    console.log(randomValue);
});

const generateRandomNumber = () => Math.floor(Math.random() * 200);

