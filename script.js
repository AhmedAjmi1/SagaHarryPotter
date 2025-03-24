/*Inizio Carousel*/
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (!carousel || !prevButton || !nextButton) {
        console.error("Errore: Elementi del carousel non trovati!");
        return;
    }

    function updateButtons() {
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === 1 ? 'none' : 'block';
    }

    function nextSlide() {
        if (currentIndex < 1) {
            currentIndex++;
            carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
            updateButtons();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
            updateButtons();
        }
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    updateButtons();
     
});
/*Fine Carousel*/

/*Inizio Marcatura nel mmenu pagina corrente*/
    document.addEventListener("DOMContentLoaded", function() {
        const currentPage = window.location.pathname.split("/").pop();
        const menuLinks = document.querySelectorAll(".menu a");
        
        menuLinks.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            }
        });
    });
/*Fine Marcatura nel mmenu pagina corrente*/

/*Inizio Mappa location*/
    document.addEventListener("DOMContentLoaded", function() {
        // Inizializza la mappa
        var map = L.map('map').setView([51.5074, -0.1278], 5);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
    
        var locations = [
            { name: "Hogwarts", lat: 55.4157, lon: -1.7064, img: "castle.jpg", realName: "Alnwick Castle", curiosita: "Il castello di Alnwick è stato utilizzato per rappresentare Hogwarts nei primi due film.", frase: "Non c'è un posto come Hogwarts!" },
            { name: "Binario 9 ¾", lat: 51.5322, lon: -0.1236, img: "9.webp", realName: "King's Cross Station", curiosita: "Situato nella stazione di King's Cross, è il punto di partenza per Hogwarts.", frase: "Tutti a bordo dell'Hogwarts Express!" },
            { name: "Diagon Alley", lat: 51.5123, lon: -0.0831, img: "diagon.webp", realName: "Leadenhall Market", curiosita: "Il Leadenhall Market ha ispirato l'ambientazione di Diagon Alley.", frase: "Benvenuti a Diagon Alley!" },
            { name: "Foresta Proibita", lat: 51.5486, lon: -0.5765, img: "foresta.jpg", realName: "Black Park", curiosita: "Questa foresta ha dato vita alla Foresta Proibita.", frase: "Attenzione ai ragni giganti!" }
        ];
    
        var locationDetails = document.getElementById("location-details");
    
        locations.forEach(loc => {
            var marker = L.marker([loc.lat, loc.lon]).addTo(map);
            marker.on('click', function() {
                locationDetails.style.display = 'block';
                locationDetails.innerHTML = `
                    <h2>${loc.name}</h2>
                    <img src="immagini/${loc.img}" alt="${loc.name}">
                    <p><strong>Nome reale:</strong> ${loc.realName}</p>
                    <p><strong>Curiosità:</strong> ${loc.curiosita}</p>
                    <p><strong>Frase iconica:</strong> "${loc.frase}"</p>
                `;
            });
        });
    })
    /*Fine Mappa location*/

    /*Inizio button torna su*/
    document.addEventListener("DOMContentLoaded", function() {
        // Mostra il pulsante quando l'utente scorre verso il basso
    window.onscroll = function() {
        let btn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };
// Funzione per tornare in cima con animazione
    document.getElementById("scrollTopBtn").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
 /*Fine button torna su*/

 /*Inizio js pagination*/
 // Seleziona tutti i bottoni dentro la paginazione
 document.addEventListener("DOMContentLoaded", function() {
 const buttons = document.querySelectorAll(".pagination button");

 buttons.forEach(button => {
     button.addEventListener("click", function() {
         // Rimuove la classe "active" da tutti i bottoni
         buttons.forEach(btn => btn.classList.remove("active"));

         // Aggiunge la classe "active" al bottone cliccato
         this.classList.add("active");
     });
 });
})
/*Fine js pagination*/