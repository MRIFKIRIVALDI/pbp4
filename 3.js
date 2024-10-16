const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Meminta input nilai coding
readline.question("Masukkan nilai coding (0-100): ", (codingInput) => {
    const nilaiCoding = parseInt(codingInput); // Konversi nilai coding jadi angka
    let hasilCoding = "";

    // Evaluasi hasil tes coding
    if (nilaiCoding > 80) {
        hasilCoding = "LOLOS";
    } else if (nilaiCoding >= 60 && nilaiCoding <= 80) {
        hasilCoding = "DIPERTIMBANGKAN";
    } else {
        hasilCoding = "GAGAL";
    }

    // Meminta input nilai interview
    readline.question("Masukkan nilai interview (A/B/C/D): ", (nilaiInterview) => {
        let hasilInterview = "";

        // Evaluasi hasil interview
        if (nilaiInterview === "A" || nilaiInterview === "B") {
            hasilInterview = "LOLOS";
        } else {
            hasilInterview = "GAGAL";
        }

        // Evaluasi akhir berdasarkan hasil coding dan interview
        if ((hasilCoding === "LOLOS" || hasilCoding === "DIPERTIMBANGKAN") && hasilInterview === "LOLOS") {
            console.log("Selamat Kamu Berhasil Menjadi Calon Programmer");
        } else {
            console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer");
        }

        // Tutup readline setelah selesai
        readline.close();
    });
});
