const cetakNama = (nama) => {
    return `Hello, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'Bambang',
    umur: 14,
    cetakMhs () {
        return `Halo, nama saya ${this.nama} dan umur ${this.umur} tahun`;
    }
}

class Orang {
    constructor() {
        console.log('Objek telah dibuat')
    }
}

module.exports = {
    cetakNama,
    PI,
    mahasiswa,
    Orang
}