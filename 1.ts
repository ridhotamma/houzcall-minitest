import { stdout } from "process";

// Tolong print angka dari 1 sampai 100. Tetapi, Ada peraturan khusus:

// 1. Untuk setiap angka yang bisa dibagi dengan 3, jangan print angka nya, tapi print "Apa".
// 2. Kalau bisa dibagi dengan 5, print "Bole",
// 3. Kalau bisa dibagi oleh 3 dan 5, print "ApaBole".

const ApaBole = (num: number): void => {
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            stdout.write("ApaBole, ");
        } else if(i % 3 === 0) {
            stdout.write("Apa, ");
        } else if(i % 5 === 0) {
            stdout.write("Bole, ");
        } else {
            stdout.write(`${i}, `);
        }
    }
}
console.log("SOAL PERTAMA \n ===============================");
ApaBole(100);
