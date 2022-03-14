import { fs, existsSync } from 'fs'; // core
import coba from './coba.js'; // local


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//membuat direktori jika kosong
const dirPath = './data';
if(!existsSync(dirPath)) {
   fs.mkdirSync(dirPath);
}

//buat file json jika kosong
const dataPath = dirPath+'/contacts.json';
if(!existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]' ,'utf-8');
}

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('No. hp : ', (noHp) => {
        const contact = {nama, noHp};
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('Terimakasih')
        rl.close();
    });
});