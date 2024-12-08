// Data Resep
const recipes = [
    {
        name: "Ayam Goreng Kremes",
        image: "images/ayam-kremes.jpg",
        ingredients: [
            "1 ekor ayam, potong sesuai selera",
            "5 siung bawang putih",
            "3 butir kemiri",
            "1 sdt ketumbar",
            "1 sdt garam",
            "500 ml santan",
            "100 gram tepung beras",
            "Minyak untuk menggoreng"
        ],
        instructions: [
            "Haluskan bawang putih, kemiri, ketumbar, dan garam.",
            "Lumuri ayam dengan bumbu halus dan rebus dengan santan hingga matang.",
            "Campur tepung beras dengan sisa kaldu ayam untuk membuat kremesan.",
            "Goreng ayam hingga kecokelatan, angkat dan tiriskan.",
            "Goreng adonan kremesan hingga garing, taburkan di atas ayam goreng."
        ],
        history: "Ayam Goreng Kremes adalah sajian ayam goreng dengan taburan kremesan yang gurih dan renyah, khas dari Jawa Tengah.",
        video: "https://youtu.be/fPXOjA5UlzQ?si=0-NDMctK0tDrolPS"
    },
    {
        name: "Bakmi",
        image: "images/bakmi.jpg",
        ingredients: [
            "200 gram mie basah",
            "50 gram ayam cincang",
            "2 siung bawang putih, cincang",
            "1 sendok makan kecap manis",
            "1/2 sendok teh merica",
            "2 batang daun bawang, iris",
            "100 ml kaldu ayam"
        ],
        instructions: [
            "Rebus mie basah sebentar, tiriskan.",
            "Tumis bawang putih hingga harum, masukkan ayam cincang.",
            "Tambahkan kecap manis, merica, dan kaldu ayam, masak hingga matang.",
            "Tuang campuran ayam di atas mie, taburi daun bawang. Sajikan dengan sambal."
        ],
        history: "Bakmi adalah adaptasi masakan Tionghoa yang menjadi favorit banyak orang di Indonesia.",
        video: "https://www.youtube.com/watch?v=KFMUI9F56rA"
    },    
    {
        name: "Bakwan Sayur",
        image: "images/bakwan-sayur.jpeg",
        ingredients: [
            "200 gram tepung terigu",
            "100 gram wortel, iris tipis",
            "100 gram kol, iris halus",
            "50 gram daun bawang, iris kecil",
            "1 butir telur",
            "200 ml air",
            "1 sdt garam",
            "1/2 sdt merica"
        ],
        instructions: [
            "Campur tepung terigu, garam, dan merica dalam wadah.",
            "Tambahkan telur dan air, aduk hingga menjadi adonan.",
            "Masukkan wortel, kol, dan daun bawang, aduk hingga rata.",
            "Goreng adonan di minyak panas hingga kuning keemasan.",
            "Bakwan sayur siap disajikan selagi hangat."
        ],
        history: "Bakwan Sayur adalah gorengan khas Indonesia yang sering dijumpai sebagai makanan jalanan atau teman makan nasi.",
        video: "https://www.youtube.com/watch?v=ScgIvyUMuDo"
    },
    {
        name: "Capcay",
        image: "images/capcay.jpg",
        ingredients: [
            "100 gram wortel, iris",
            "100 gram kembang kol",
            "100 gram sawi hijau",
            "50 gram udang",
            "2 siung bawang putih",
            "1 sendok makan saus tiram",
            "1 sendok teh garam",
            "100 ml air"
        ],
        instructions: [
            "Panaskan minyak, tumis bawang putih hingga harum.",
            "Masukkan udang, aduk hingga berubah warna.",
            "Tambahkan wortel, kembang kol, dan sawi hijau, masak hingga layu.",
            "Tambahkan saus tiram, garam, dan air, masak hingga matang. Sajikan."
        ],
        history: "Capcay adalah hidangan sayur tumis yang berasal dari tradisi kuliner Tionghoa-Indonesia.",
        video: "https://www.youtube.com/watch?v=YxMqHgQxsW0"
    },    
    {
        name: "Es Campur",
        image: "images/es-campur.jpg",
        ingredients: [
            "200 gram cincau, potong kecil",
            "200 gram kolang-kaling, rebus",
            "100 gram kelapa muda, serut",
            "150 gram nangka, potong dadu",
            "200 ml sirup coco pandan",
            "500 ml air kelapa",
            "Es serut secukupnya"
        ],
        instructions: [
            "Siapkan mangkuk, masukkan cincau, kolang-kaling, kelapa muda, dan nangka.",
            "Tambahkan sirup coco pandan dan air kelapa.",
            "Aduk rata, tambahkan es serut di atasnya.",
            "Es campur siap disajikan untuk menyegarkan hari Anda!"
        ],
        history: "Es Campur adalah minuman khas Indonesia yang sering dinikmati saat cuaca panas atau di bulan Ramadan.",
        video: "https://www.youtube.com/watch?v=Zz-ckrIg0jY"
        },
        {
            name: "Mie Goreng",
            image: "images/mie-goreng.jpeg",
            ingredients: [
                "200 gram mie telur",
                "2 sendok makan kecap manis",
                "1 sendok makan saus tiram",
                "1/2 sendok teh merica bubuk",
                "1 butir telur",
                "2 siung bawang putih, cincang",
                "50 gram ayam, potong kecil",
                "100 gram sayuran (kol, wortel, sawi)"
            ],
            instructions: [
                "Rebus mie hingga matang, tiriskan dan beri sedikit minyak agar tidak lengket.",
                "Panaskan minyak, tumis bawang putih hingga harum.",
                "Masukkan ayam, aduk hingga matang, lalu sisihkan di pinggir wajan.",
                "Tambahkan telur, orak-arik, lalu masukkan mie.",
                "Beri kecap manis, saus tiram, merica, dan aduk rata.",
                "Masukkan sayuran, masak hingga layu. Angkat dan sajikan."
            ],
            history: "Mie goreng adalah hidangan praktis yang populer di seluruh Indonesia, sering dijadikan menu sarapan atau makan malam sederhana.",
            video: "https://www.youtube.com/watch?v=E3VflxR5_hI"
        },
        {
            name: "Nasi Goreng",
            image: "images/nasi-goreng.jpg",
            ingredients: [
                "2 piring nasi putih",
                "2 butir telur",
                "3 siung bawang putih, cincang halus",
                "2 sdm kecap manis",
                "1 sdm saus tiram",
                "1/2 sdt garam",
                "1/2 sdt merica",
                "2 sdm minyak untuk menggoreng"
            ],
            instructions: [
                "Panaskan minyak, tumis bawang putih hingga harum.",
                "Masukkan telur, orak-arik hingga matang.",
                "Tambahkan nasi putih, aduk hingga tercampur rata.",
                "Tuangkan kecap manis, saus tiram, garam, dan merica, aduk kembali.",
                "Masak hingga nasi goreng matang dan bumbu meresap.",
                "Sajikan nasi goreng dengan pelengkap seperti kerupuk dan acar."
            ],
            history: "Nasi goreng adalah hidangan sederhana yang populer di Indonesia sebagai sarapan.",
            video: "https://youtube.com/shorts/Gq8HQtOlZcY?si=YxGcuowc0av_y0UA"
        },
        {
            name: "Onde-Onde",
            image: "images/onde-onde.jpg",
            ingredients: [
                "250 gram tepung ketan",
                "100 ml air daun pandan suji",
                "1/4 sendok teh air abu jawa",
                "100 gram wijen",
                "100 gram kacang hijau, kupas kulitnya",
                "100 gram gula pasir"
            ],
            instructions: [
                "Rebus kacang hijau hingga empuk, tiriskan, dan haluskan.",
                "Campurkan tepung ketan dengan air daun pandan dan air abu jawa, aduk rata hingga kalis.",
                "Ambil sejumput adonan ketan, pipihkan, beri kacang hijau halus di tengahnya, bulatkan dan rapatkan.",
                "Rebus bola ketan dalam air mendidih hingga bola onde-onde mengapung.",
                "Gulingkan bola onde-onde yang telah matang dalam wijen.",
                "Onde-onde siap disajikan."
            ],
            history: "Onde-Onde adalah kue tradisional Indonesia yang terbuat dari tepung ketan dengan isi kacang hijau dan dilapisi wijen. Kue ini biasanya disajikan sebagai camilan saat acara tertentu.",
            video: "https://www.youtube.com/watch?v=ohy9IKPe9Eo"
        },
        {
            name: "Pempek Palembang",
            image: "images/pempek.jpg",
            ingredients: [
                "500 gram ikan tenggiri, haluskan",
                "300 gram tepung sagu",
                "2 butir telur",
                "200 ml air",
                "1 sdt garam",
                "2 sdt gula",
                "2 siung bawang putih, haluskan"
            ],
            instructions: [
                "Campur ikan tenggiri, bawang putih, garam, gula, dan air.",
                "Tambahkan tepung sagu, aduk hingga kalis.",
                "Bentuk adonan sesuai selera (lenjer, kapal selam, dll).",
                "Rebus pempek dalam air mendidih hingga mengapung.",
                "Goreng pempek sebelum disajikan.",
                "Nikmati dengan kuah cuko khas Palembang."
            ],
            history: "Pempek adalah makanan khas Palembang yang terbuat dari ikan dan sagu. Makanan ini selalu disajikan dengan saus cuko yang asam pedas.",
            video: "https://www.youtube.com/watch?v=kkzFu0AikBE"
        },
        {
            name: "Pisang Goreng Keju",
            image: "images/pisang-goreng.jpeg",
            ingredients: [
                "5 buah pisang raja matang",
                "100 gram tepung terigu",
                "2 sdm gula pasir",
                "1/4 sdt garam",
                "100 ml air",
                "Minyak untuk menggoreng",
                "Keju parut untuk topping"
            ],
            instructions: [
                "Campur tepung terigu, gula, garam, dan air hingga menjadi adonan.",
                "Celupkan pisang ke dalam adonan tepung.",
                "Goreng pisang dalam minyak panas hingga kuning keemasan.",
                "Angkat, tiriskan, dan tambahkan keju parut di atasnya sebelum disajikan."
            ],
            history: "Pisang Goreng Keju adalah inovasi modern dari pisang goreng tradisional, sering menjadi camilan favorit keluarga.",
            video: "https://www.youtube.com/watch?v=EnqOO7QuW48"
        },
        {
            name: "Rendang Daging",
            image: "images/rendang.jpeg",
            ingredients: [
                "1 kg daging sapi, potong-potong",
                "1 liter santan",
                "6 siung bawang putih",
                "10 butir bawang merah",
                "5 buah cabai merah besar",
                "2 batang serai, memarkan",
                "2 lembar daun kunyit",
                "2 lembar daun jeruk",
                "1 sdt garam"
            ],
            instructions: [
                "Haluskan bawang putih, bawang merah, dan cabai merah.",
                "Tumis bumbu halus hingga harum, tambahkan serai, daun kunyit, dan daun jeruk.",
                "Masukkan daging sapi, aduk hingga berubah warna.",
                "Tuangkan santan, masak dengan api kecil sambil sesekali diaduk.",
                "Masak hingga santan mengental dan bumbu meresap ke dalam daging.",
                "Rendang siap disajikan."
            ],
            history: "Rendang adalah makanan khas Minangkabau yang diakui sebagai salah satu makanan terenak di dunia. Rendang dimasak dengan waktu lama sehingga menghasilkan rasa yang kaya dan mendalam.",
            video: "https://www.youtube.com/watch?v=qdtflnUxCDs"
        },
        {
            name: "Sate Ayam",
            image: "images/sate-ayam.jpg",
            ingredients: [
                "500 gram daging ayam, potong dadu",
                "200 ml santan",
                "5 siung bawang putih",
                "5 butir bawang merah",
                "2 cm jahe",
                "1 sdm ketumbar",
                "100 gram kacang tanah, goreng dan haluskan",
                "3 sdm kecap manis"
            ],
            instructions: [
                "Haluskan bawang putih, bawang merah, jahe, dan ketumbar.",
                "Campurkan bumbu halus dengan santan, marinasi ayam selama 1 jam.",
                "Tusukkan potongan ayam ke tusuk sate.",
                "Panggang sate di atas bara api sambil sesekali dioles dengan sisa bumbu.",
                "Campurkan kacang tanah halus dengan kecap manis untuk saus.",
                "Sajikan sate ayam dengan lontong dan saus kacang."
            ],
            history: "Sate Ayam adalah salah satu kuliner khas Indonesia yang terkenal di seluruh dunia. Sate ini biasanya disajikan dengan saus kacang yang gurih dan nikmat.",
            video: "https://www.youtube.com/watch?v=sjbts1yRabA"
        },
        {
            name: "Sayur Asam",
            image: "images/sayur-asam.jpg",
            ingredients: [
                "100 gram kacang panjang",
                "100 gram labu siam",
                "1 buah jagung manis",
                "2 lembar daun salam",
                "1 liter air",
                "1 sendok makan asam jawa"
            ],
            instructions: [
                "Rebus air dengan daun salam.",
                "Tambahkan asam jawa, kacang panjang, labu siam, dan jagung.",
                "Masak hingga semua bahan empuk. Sajikan."
            ],
            history: "Sayur asam adalah masakan khas nusantara dengan rasa asam yang segar.",
            video: "https://www.youtube.com/watch?v=It1J25H5790"
        },
        {
            name: "Sayur Bayam",
            image: "images/sayur-bayam.jpg",
            ingredients: [
                "1 ikat bayam",
                "1 buah jagung manis, potong",
                "2 siung bawang merah",
                "2 siung bawang putih",
                "1 liter air",
                "1 sendok teh garam"
            ],
            instructions: [
                "Rebus air, masukkan bawang merah dan bawang putih.",
                "Tambahkan jagung, masak hingga empuk.",
                "Masukkan bayam dan garam, masak sebentar. Sajikan."
            ],
            history: "Sayur bayam adalah masakan tradisional Indonesia yang sehat dan segar.",
            video: "https://www.youtube.com/watch?v=r0kJ_rWrPps"
        },
        {
            name: "Sayur Sop",
            image: "images/sayur-sop.jpg",
            ingredients: [
                "100 gram wortel",
                "100 gram kentang",
                "50 gram kol",
                "1 batang seledri",
                "2 siung bawang putih",
                "1 liter air",
                "1 sendok teh garam"
            ],
            instructions: [
                "Rebus air, masukkan bawang putih hingga harum.",
                "Tambahkan wortel, kentang, dan kol.",
                "Masak hingga empuk, tambahkan garam dan seledri. Sajikan."
            ],
            history: "Sayur sop adalah hidangan berkuah yang ringan dan cocok untuk segala suasana.",
            video: "https://www.youtube.com/watch?v=CZdeklbB7Us"
        },                        
        {
            name: "Seblak",
            image: "images/seblak.jpg",
            ingredients: [
                "100 gram kerupuk mentah",
                "2 butir telur",
                "2 siung bawang putih",
                "3 cabai merah (sesuai selera)",
                "1 ruas kencur",
                "1 sendok makan saus sambal",
                "1 sendok teh garam",
                "50 gram bakso, potong",
                "100 ml air"
            ],
            instructions: [
                "Rendam kerupuk dengan air panas hingga lunak, tiriskan.",
                "Haluskan bawang putih, cabai, dan kencur.",
                "Panaskan minyak, tumis bumbu hingga harum.",
                "Masukkan bakso, aduk rata, lalu tambahkan telur dan orak-arik.",
                "Tambahkan kerupuk, saus sambal, garam, dan air. Aduk hingga bumbu meresap.",
                "Seblak siap disajikan dengan taburan bawang goreng."
            ],
            history: "Seblak berasal dari Jawa Barat, dikenal dengan cita rasa pedas dan gurih dari kencur serta bumbu khasnya.",
            video: "https://www.youtube.com/watch?v=jNaij7X2c2g"
        },        
        {
            name: "Soto Ayam",
            image: "images/soto-ayam.jpg",
            ingredients: [
                "500 gram ayam, potong-potong",
                "2 liter air",
                "3 siung bawang putih",
                "5 butir bawang merah",
                "2 cm kunyit, bakar",
                "1 batang serai, memarkan",
                "2 lembar daun jeruk",
                "100 gram soun, rendam air panas",
                "Kol, irisan secukupnya",
                "Telur rebus, secukupnya"
            ],
            instructions: [
                "Rebus ayam hingga matang, angkat, dan suwir-suwir dagingnya.",
                "Haluskan bawang putih, bawang merah, dan kunyit.",
                "Tumis bumbu halus hingga harum, masukkan serai dan daun jeruk.",
                "Tuang bumbu tumis ke dalam kaldu ayam, masak hingga mendidih.",
                "Sajikan soto dengan soun, kol, telur, dan ayam suwir, lalu siram kuah panas."
            ],
            history: "Soto Ayam adalah salah satu kuliner khas Indonesia yang terkenal dengan kuahnya yang kaya rempah.",
            video: "https://www.youtube.com/watch?v=LzrN5HReVvI"
        },
        {
            name: "Tumis Kangkung",
            image: "images/tumis-kangkung.jpeg",
            ingredients: [
                "2 ikat kangkung",
                "2 siung bawang putih",
                "2 buah cabai merah",
                "1 sendok makan saus tiram",
                "1/2 sendok teh garam"
            ],
            instructions: [
                "Panaskan minyak, tumis bawang putih dan cabai hingga harum.",
                "Masukkan kangkung, aduk hingga layu.",
                "Tambahkan saus tiram dan garam, masak sebentar. Sajikan."
            ],
            history: "Tumis kangkung adalah masakan sehari-hari yang mudah dibuat dengan bahan sederhana.",
            video: "https://www.youtube.com/watch?v=hevXi1zbKgI"
        }
        
      
];
// Elemen DOM
const recipeList = document.getElementById("recipes");
const searchInput = document.getElementById("search");
const detailContent = document.getElementById("detail-content");
const ingredientList = document.getElementById("ingredient-list");
const instructionList = document.getElementById("instruction-list");
const recipeImg = document.getElementById("recipe-img");
const recipeHistoryText = document.getElementById("recipe-history");

// Placeholder untuk gambar resep
recipeImg.src = "images/placeholder.jpg";

// Fungsi untuk menampilkan daftar resep
function displayRecipes(recipesToShow) {
    recipeList.innerHTML = ""; // Reset daftar
    if (recipesToShow.length === 0) {
        // Jika tidak ada resep yang ditemukan
        const noResults = document.createElement("li");
        noResults.classList.add("list-group-item", "text-muted", "text-center");
        noResults.textContent = "Resep yang Anda cari tidak tersedia.";
        recipeList.appendChild(noResults);
        return;
    }
    recipesToShow.forEach(recipe => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.style.cursor = "pointer";
        li.textContent = recipe.name;

        // Event listener untuk menampilkan detail resep saat diklik
        li.addEventListener("click", () => showDetail(recipe));
        recipeList.appendChild(li);
    });
}

// Fungsi untuk menampilkan detail resep
function showDetail(recipe) {
    detailContent.textContent = recipe.name;

    // Menampilkan bahan-bahan
    ingredientList.innerHTML = "";
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        li.classList.add("list-group-item");
        ingredientList.appendChild(li);
    });

    // Menampilkan tata cara pembuatan
    instructionList.innerHTML = "";
    recipe.instructions.forEach(instruction => {
        const li = document.createElement("li");
        li.textContent = instruction;
        li.classList.add("list-group-item");
        instructionList.appendChild(li);
    });

    // Menampilkan gambar resep dan sejarah
    recipeImg.src = recipe.image;
    recipeHistoryText.textContent = recipe.history;

     // Perbarui link video tutorial
     const videoLink = document.getElementById("video-link");
     if (recipe.video) {
         videoLink.href = recipe.video; // Set URL video
         videoLink.style.display = "inline-block"; // Tampilkan elemen
     } else {
         videoLink.style.display = "none"; // Sembunyikan elemen jika tidak ada video
     }
}

// Fungsi untuk menangani pencarian resep
function searchRecipes() {
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query)
    );
    displayRecipes(filteredRecipes);
}

// Event listener untuk pencarian
searchInput.addEventListener("input", searchRecipes);

// Menampilkan semua resep ketika halaman dimuat
displayRecipes(recipes);
