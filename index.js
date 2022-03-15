import { tulisPertanyaan, simpanPertanyaan } from './contacts.js';

const main = async () => {
    const nama = await tulisPertanyaan('nama');
    const email = await tulisPertanyaan('email');

   simpanPertanyaan(nama, email)
}

main();
