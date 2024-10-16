const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Meminta input umur anak
readline.question("Masukkan umur anak (dalam tahun): ", (umurInput) => {
    // Meminta input tinggi anak
    readline.question("Masukkan tinggi anak (dalam cm): ", (tinggiInput) => {
        const umur = parseInt(umurInput);    // Konversi input umur ke angka
        const tinggi = parseInt(tinggiInput); // Konversi input tinggi ke angka

        let tarif = 0; // Variabel untuk menyimpan tarif

        // Logika penentuan tarif
        if (umur < 1) {
            console.log("Dilarang masuk");
        } else if (umur < 3) {
            tarif = 30000;
            if (umur >= 2 && tinggi > 70) {
                tarif += 10000;
            }
            console.log(`Tarif masuk: Rp ${tarif.toLocaleString('id-ID')}`);
        } else if (umur < 7) {
            tarif = 40000;
            if (tinggi > 120) {
                tarif += 15000;
            }
            console.log(`Tarif masuk: Rp ${tarif.toLocaleString('id-ID')}`);
        } else if (umur < 10) {
            tarif = 50000;
            if (tinggi > 150) {
                tarif += 20000;
            }
            console.log(`Tarif masuk: Rp ${tarif.toLocaleString('id-ID')}`);
        } else {
            tarif = 80000;
            console.log(`Tarif masuk: Rp ${tarif.toLocaleString('id-ID')}`);
        }

        // Menutup readline setelah selesai
        readline.close();
    });
});
