
let quotes = [
    "Habis gelap terbitlah terang",
    "Barang siapa ingin mutiara, harus berani terjun di lautan yang dalam",
    "Saya rela pergi ke penjara, selama ada buku. Karena dengan buku saya bebas",
    "Keberhasilan bukanlah milik orang yang pintar. Keberhasilan adalah kepunyaan mereka yang senantiasa berusaha",
    "Setiap orang menjadi guru, setiap rumah menjadi sekolah",
    "Kebenaran suatu hal tidaklah ditentukan oleh berapa banyaknya orang yang mempercayainya",
    "Kadang kita terlalu sibuk memikirkan kesulitan-kesulitan sehingga kita tidak punya waktu untuk mensyukuri rahmat Tuhan ",
    "Agama dilahirkan untuk kedamaian, bukan untuk kekerasan",
    "Ketamakan akan membuat orang kaya menjadi miskin",
];


let writer = [
    "- R. A. Kartini",
    "- Ir. Soekarno",
    "- Mohammad Hatta",
    "- B.J. Habibie",
    "- Ki Hajar Dewantara",
    "- K.H. Ahmad Dahlan",
    "- Jenderal Sudirman",
    "- Abdurrahman Wahid",
    "- Sri Sultan Hamengku Buwono VIII"
];

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    console.log(randomNumber)
    // let randomNumberQ = Math.floor(Math.random() *(writer.length));
    document.getElementById('newQuotes').innerHTML = quotes[randomNumber];
    document.getElementById('byQuotes').innerHTML = writer[randomNumber];
}

