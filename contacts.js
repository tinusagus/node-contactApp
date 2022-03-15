import fs, { existsSync } from 'fs'; // core
import readline from 'readline';

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
const dataPath = './data/contacts.json';
if(!existsSync(dataPath)){
    console.log('ERRx')
    fs.writeFileSync(dataPath, '[]' ,'utf-8');
}

export const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(`Masukkan ${pertanyaan} anda : `, (pertanyaan) => {
            resolve(pertanyaan)
        })
    })
}

export const simpanPertanyaan = (nama, email) => {
    const contact = {nama, email};
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terimakasih')
    rl.close();
} 