// variabel
nama = "dadang"
umur = 50
tempat_tinggal = "new york"
tabungan =15000000

// pengecekan
if ((umur > 40) && (tempat_tinggal == "nevada" || tempat_tinggal == "new york"|| tempat_tinggal == "havana" ) && (tabungan >= 10000000) ) {
    console.log(nama + "kemungkinan adalah seorang anggota mafia dengan pangkat DON");
    
}else if ((umur >= 25 && umur <=40) && (tempat_tinggal == "new jersey" || tempat_tinggal == "manhattan" || tempat_tinggal == "nevada" ) && (tabungan >= 1000000 && tabungan <= 2000000) ){
    console.log(nama + "kemungkinan adalah seorang anggota mafia dengan pangkat UNDERBOSS");
    
}else if ((umur >= 18 && umur <=24) && (tempat_tinggal == "california" || tempat_tinggal == "detroit" || tempat_tinggal == "boston") && (tabungan < 1000000)){
    console.log(nama + "kemungkinan adalah seorang anggota mafia dengan pangkat CAPO");
}else {
    console.log(nama + "tidak mencurigakan");
}
